package org.iacopobaroncini.FsTamTam;

import org.iacopobaroncini.FsTamTam.SimConnect.SimConnectVariable;

import java.net.InetSocketAddress;
import java.net.StandardSocketOptions;
import java.nio.ByteBuffer;
import java.nio.channels.SocketChannel;

public class FsTamTam {

    public static final int GLOBAL_VARIABLE_1 = -1;
    public static final int GLOBAL_VARIABLE_2 = -2;
    public static final int GLOBAL_VARIABLE_3 = -3;
    public static final int GLOBAL_VARIABLE_4 = -4;
    public static final int GLOBAL_VARIABLE_5 = -5;
    public static final int GLOBAL_VARIABLE_6 = -6;
    public static final int GLOBAL_VARIABLE_7 = -7;
    public static final int GLOBAL_VARIABLE_8 = -8;

    private static class Timeout {

        private static long t = 0;

        public static void now() {
            t = System.currentTimeMillis();
        }

        public static boolean elapsed(long ms) {
            return ((System.currentTimeMillis() - t) > ms);
        }

    }

    private static final int PMDG_NGX_ID_OFFSET = 0x00011000;

    private enum State {
        NOT_INITIALIZED,
        INITIALIZED,
        CONNECTED,
        WAIT_FOR_NUMBER_OF_ENGINES,
        SIMULATION,
        STANDARD_SIMULATION,
        PMDG_NGX_SIMULATION
    }

    private static class Simulation {
        public static String modelName = "";
        public static int numberOfEngines = -1;
        public static boolean isPmdgNgxModel = false;
        public static boolean accepted = false;

        public static void reset() {
            modelName = "";
            numberOfEngines = -1;
            isPmdgNgxModel = accepted = false;
        }
    }

    private static final String MAGIC_NUMBER_MSG = "\n!AB3F8F86718BD092";
    private static String device = "";
    private static State state = State.NOT_INITIALIZED;
    private static final int IN_BUFFER_SIZE = 256;
    private static final long TIMEOUT_PERIOD_SHORT = 2500;
    private static final long TIMEOUT_PERIOD_LONG = 4000;
    private static final ByteBuffer iBuf = ByteBuffer.allocateDirect(IN_BUFFER_SIZE);
    private static String packet = "";
    private static SocketChannel socket = null;
    private static long msLoop = 0;
    private static long tLoop = 0;
    private static String serverAddr = "";
    private static int serverPort = 0;

    //
    // Simulation data
    //

    public static DataObject simulationData = new DataObject();

    //
    // Callbacks
    //

    public static Runnable onConnect = null;
    public static Runnable onSimulationStart = null;
    public static Runnable onSimulationLoop = null;
    public static Runnable onSimulationData = null;
    public static Runnable onSimulationStop = null;
    public static Runnable onDisconnect = null;

    //
    // Methods
    //

    synchronized public static void begin(String deviceName, String ip4Address, int port, long msSimulationLoopPeriod) throws Exception {
        if (state.ordinal() > State.NOT_INITIALIZED.ordinal()) throw new Exception("FsTamTam state is " + state);
        if (deviceName == null || deviceName.isEmpty()) throw new Exception("Invalid device name");
        if (ip4Address == null  || !validateIP4Address(ip4Address)) throw new Exception("Invalid ip4 address");
        if (port <= 0) throw new Exception("Invalid port number");
        if (msSimulationLoopPeriod <= 0) throw new Exception("Invalid simulation loop period (must be >= 1 ms)");
        msLoop = msSimulationLoopPeriod;
        device = "";
        packet = "";
        int len = deviceName.length();
        char ch;
        for (int i = 0; i < len; i++) {
            ch = deviceName.charAt(i);
            device += ((ch >= '0' && ch <= '9') || (ch >= 'A' && ch <= 'Z') || (ch == ' ')) ? ch : '_';
        }
        serverAddr = ip4Address;
        serverPort = port;
        state = State.INITIALIZED;
        Simulation.reset();
    }

    synchronized public static String modelName() {
        if (state.ordinal() < State.SIMULATION.ordinal()) return "";
        return Simulation.modelName;
    }

    synchronized public static boolean isPmdgNgxModel() {
        if (state.ordinal() < State.SIMULATION.ordinal()) return false;
        return Simulation.isPmdgNgxModel;
    }

    synchronized public static int numberOfEngines() {
        if (state.ordinal() < State.SIMULATION.ordinal()) return 0;
        return Simulation.numberOfEngines;
    }

    synchronized public static boolean joinSimulation() {
        return Simulation.accepted = true;
    }

    synchronized public static void subscribeData(int id, int index, DataDelivery delivery) {
        if (id < 2000 || id > 2999) return;
        manageSubscription(true, id, index, delivery);
    }

    synchronized public static void subscribeData(int id, DataDelivery delivery) {
        if (id < 0 || (id >= 2000 && id <= 2999)) return;
        manageSubscription(true, id, -1, delivery);
    }

    synchronized public static void subscribeData(int id) {
        if (id >= 0) return;
        manageSubscription(true, id, -1, DataDelivery.DELIVER_ON_CHANGE);
    }

    synchronized public static void unsubscribeData(int id, int index) {
        manageSubscription(false, id, index, DataDelivery.DELIVER_ON_CHANGE);
    }

    synchronized public static void unsubscribeData(int id) {
        manageSubscription(false, id, -1, DataDelivery.DELIVER_ON_CHANGE);
    }

    synchronized public static void sendData(int id, int param) {
        if (state.ordinal() < State.SIMULATION.ordinal() || !Simulation.accepted) return;
        if (id >= PMDG_NGX_ID_OFFSET) {
            if (state != State.PMDG_NGX_SIMULATION) return;
            send(String.format("P%d:%d", id - PMDG_NGX_ID_OFFSET, param));
        } else
        if (id < 0)
            send(String.format("G%d:%d", -id, param));
        else
            send(String.format("S%d:%d", id, param));
    }

    synchronized public static void requestAiWaypointList() {
        if (state.ordinal() < State.SIMULATION.ordinal() || !Simulation.accepted) return;
        send("LI");
    }

    synchronized public static void requestFacilityAirportList() {
        if (state.ordinal() < State.SIMULATION.ordinal() || !Simulation.accepted) return;
        send("LA");
    }

    synchronized public static void requestFacilityWaypointList() {
        if (state.ordinal() < State.SIMULATION.ordinal() || !Simulation.accepted) return;
        send("LW");
    }

    synchronized public static void requestFacilityNdbList() {
        if (state.ordinal() < State.SIMULATION.ordinal() || !Simulation.accepted) return;
        send("LN");
    }

    synchronized public static void requestFacilityVorList() {
        if (state.ordinal() < State.SIMULATION.ordinal() || !Simulation.accepted) return;
        send("LV");
    }

    synchronized public static void requestFacilityTacanList() {
        if (state.ordinal() < State.SIMULATION.ordinal() || !Simulation.accepted) return;
        send("LT");
    }

    synchronized public static void trace(String text) {
        if (state.ordinal() < State.CONNECTED.ordinal()) return;
        send(String.format("T%s", text));
    }

    synchronized public static void error(String errorMessage) {
        if (state.ordinal() < State.CONNECTED.ordinal()) return;
        send(String.format("E%s", errorMessage));
    }

    synchronized public static void loop() throws Exception {
        switch (state) {
            case NOT_INITIALIZED:
                Thread.sleep(1000);
                return;
            case INITIALIZED: // not connected
                if (socket != null && socket.isConnected()) break;
                try {
                    socket = SocketChannel.open();
                    socket.socket().connect(new InetSocketAddress(serverAddr, serverPort), 250);
                    socket.setOption(StandardSocketOptions.TCP_NODELAY, false);
                    socket.configureBlocking(true);
                    send(MAGIC_NUMBER_MSG);
                } catch (Exception e) {
                    //e.printStackTrace();
                    if (socket != null) {
                        try {
                            socket.close();
                        } catch (Exception e2) {}
                        socket = null;
                    }
                    Thread.sleep(1000);
                }
                Timeout.now();
                break;
            default:
                break;
        }
        if (state == State.INITIALIZED && Timeout.elapsed(TIMEOUT_PERIOD_SHORT)) {
            send(MAGIC_NUMBER_MSG);
            Timeout.now();
        } else
        if (state.ordinal() >= State.CONNECTED.ordinal() && Timeout.elapsed(TIMEOUT_PERIOD_LONG)) {
            if (state.ordinal() > State.SIMULATION.ordinal() && Simulation.accepted && onSimulationStop != null)
                onSimulationStop.run();
            if (onDisconnect != null) onDisconnect.run();
            state = State.INITIALIZED;
            Simulation.reset();
            try {
                if (socket != null) {
                    socket.close();
                }
            } catch (Exception e) {}
            socket = null;
            Timeout.now();
            return;
        }

        int n;
        char ch;
        if (socket != null)
            while ((n = socket.read(iBuf)) > 0) {
                for (int i = 0; i < n; i++) {
                    ch = (char) iBuf.get(i);
                    switch (ch) {
                        case 10:
                        case ';':
                            processReceivedPacket();
                            packet = "";
                            break;
                        case 13:
                            break;
                        default:
                            packet += ch;
                            break;
                    }
                }
                Timeout.now();
                iBuf.clear();
            }

        if (state.ordinal() > State.SIMULATION.ordinal() && Simulation.accepted && (System.currentTimeMillis() - tLoop) >= msLoop) {
            tLoop = System.currentTimeMillis();
            if (onSimulationLoop != null) onSimulationLoop.run();
        } else
            Thread.sleep(5);
    }

    //
    // Internals
    //

    private static void send(String msg) {
        if (socket == null || msg == null || msg.isEmpty()) return;
        try {
            msg += '\n';
            socket.write(ByteBuffer.wrap(msg.getBytes()));
        } catch (Exception e) {
            state = State.INITIALIZED;
        }
    }

    static private void manageSubscription(boolean subscribe, int id, int index, DataDelivery delivery) {
        if (state.ordinal() < State.SIMULATION.ordinal() || !Simulation.accepted) return;
        char op = subscribe ? 'R' : 'D';
        char del = (delivery == DataDelivery.DELIVER_ON_CHANGE) ? 'C' : 'T';
        String s;
        if (index >= 0) {
            if (id < 2000 || id >= PMDG_NGX_ID_OFFSET) return;
            if (op == 'R')
                s = String.format("%cS%c%d:%d", op, del, id, index);
            else
                s = String.format("%cS%d:%d", op, id, index);
            send(s);
            return;
        }
        if (id >= PMDG_NGX_ID_OFFSET) {
            if (state != State.PMDG_NGX_SIMULATION) return;
            // PMDG variable
            if (op == 'R')
                s = String.format("%cP%c%d", op, del, id - PMDG_NGX_ID_OFFSET);
            else
                s = String.format("%cP%d", op, id - PMDG_NGX_ID_OFFSET);
        } else
        if (id < 0) {
            // Global variable variable
            s = String.format("%cG%d", op, -id);
        } else {
            // SimConnect variable
            if (id >= 2000) return;
            if (op == 'R')
                s = String.format("%cS%c%d", op, del, id);
            else
                s = String.format("%cS%d", op, id);
        }
        send(s);
    }

    static private void processReceivedPacket() {
        boolean             error = false;
        int                 n;
        int                 ti;
        char                ch;
        int                 pos = 0;
        int                 len = packet.length();
        if (len == 0) return;
        String[]            tokens;
        switch (packet.charAt(pos++)) {
            case 'P':
                if (len < 4) { error = true; break; }
                if (state != State.PMDG_NGX_SIMULATION) break;
                simulationData.reset();
                simulationData.type = DataType.values()[packet.charAt(pos) - '0'];
                tokens = packet.substring(2).split(":");
                if (tokens == null || tokens.length != 2) { error = true; break; }
                ti = 0;
                simulationData.id = Integer.parseInt(tokens[ti++]) + PMDG_NGX_ID_OFFSET;
                simulationData.index = 0;
                switch (simulationData.type) {
                    case DATA_TYPE_BOOLEAN:
                        simulationData.asBool = Integer.parseInt(tokens[ti]) != 0;
                        break;
                    case DATA_TYPE_INTEGER:
                        simulationData.asInt32 = Integer.parseInt(tokens[ti]);
                        break;
                    case DATA_TYPE_DOUBLE:
                        simulationData.asDouble = Double.parseDouble(tokens[ti]);
                        break;
                    case DATA_TYPE_TEXT:
                        simulationData.asText = tokens[ti];
                        break;
                    default:
                        error = true;
                        break;
                }
                if (error) break;
                if (Simulation.accepted && onSimulationData != null) onSimulationData.run();
                break;
            case 'S':
                if (len < 4) { error = true; break; }
                if (
                        state.ordinal() <= State.CONNECTED.ordinal() &&
                        state.ordinal() != State.WAIT_FOR_NUMBER_OF_ENGINES.ordinal()
                ) break;
                simulationData.reset();
                simulationData.type = DataType.values()[packet.charAt(pos) - '0'];
                tokens = packet.substring(2).split(":");
                n = tokens.length;
                if (tokens == null || tokens.length < 2) { error = true; break; }
                ti = 0;
                simulationData.id = Integer.parseInt(tokens[ti++]);
                simulationData.index = (simulationData.id < 2000) ? 0 : Integer.parseInt(tokens[ti++]);
                switch (simulationData.type) {
                    case DATA_TYPE_BOOLEAN:
                        if (n - ti != 1) { error = true; break; }
                        simulationData.asBool = Integer.parseInt(tokens[ti]) != 0;
                        break;
                    case DATA_TYPE_INTEGER:
                        if (n - ti != 1) { error = true; break; }
                        simulationData.asInt32 = Integer.parseInt(tokens[ti]);
                        break;
                    case DATA_TYPE_DOUBLE:
                        if (n - ti != 1) { error = true; break; }
                        simulationData.asDouble = Double.parseDouble(tokens[ti]);
                        break;
                    case DATA_TYPE_TEXT:
                        if (n - ti != 1) { error = true; break; }
                        simulationData.asText = tokens[ti];
                        break;
                    case DATA_TYPE_LLA:
                        if (n - ti != 3) { error = true; break; }
                        simulationData.asLLA.latitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asLLA.longitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asLLA.altitude = Double.parseDouble(tokens[ti]);
                        break;
                    case DATA_TYPE_PBH:
                        if (n - ti != 3) { error = true; break; }
                        simulationData.asPBH.pitch = Double.parseDouble(tokens[ti++]);
                        simulationData.asPBH.bank = Double.parseDouble(tokens[ti++]);
                        simulationData.asPBH.heading = Double.parseDouble(tokens[ti]);
                        break;
                    case DATA_TYPE_XYZ:
                        if (n - ti != 3) { error = true; break; }
                        simulationData.asXYZ.x = Double.parseDouble(tokens[ti++]);
                        simulationData.asXYZ.y = Double.parseDouble(tokens[ti++]);
                        simulationData.asXYZ.z = Double.parseDouble(tokens[ti]);
                        break;
                    default:
                        error = true;
                        break;
                }
                if (error) break;
                if (state == State.WAIT_FOR_NUMBER_OF_ENGINES) {
                    if (simulationData.id == SimConnectVariable.NUMBER_OF_ENGINES) {
                        state = (Simulation.isPmdgNgxModel) ? State.PMDG_NGX_SIMULATION : State.STANDARD_SIMULATION;
                        send("DS1001");
                        Simulation.numberOfEngines = simulationData.asInt32;
                        if (onSimulationStart != null) onSimulationStart.run();
                    }
                } else
                if (Simulation.accepted && state.ordinal() > State.SIMULATION.ordinal() && onSimulationData != null)
                    onSimulationData.run();
                break;
            case 'K': // K
                if (len != 1) { error = true; break; }
                break;
            case 'G':
                if (len < 4) { error = true; break; }
                tokens = packet.substring(1).split(":");
                n = tokens.length;
                if (n != 2) { error = true; break; }
                simulationData.reset();
                simulationData.id = -Integer.parseInt(tokens[0]);
                simulationData.type = DataType.DATA_TYPE_DOUBLE;
                simulationData.index = 0;
                simulationData.asInt32 = Integer.parseInt(tokens[1]);
                if (Simulation.accepted && state.ordinal() > State.SIMULATION.ordinal() && onSimulationData != null)
                    onSimulationData.run();
                break;
            case 'L':
                switch (packet.charAt(pos++)) {
                    case 'I':
                        if (packet.charAt(pos++) != ':') { error = true; break; }
                        tokens = packet.substring(3).split(":");
                        n = tokens.length;
                        if (n != 8) { error = true; break; }
                        ti = 0;
                        simulationData.id = SimConnectVariable.AI_WAYPOINT;
                        simulationData.type = DataType.DATA_TYPE_AI_WAYPOINT;
                        simulationData.asAIWaypoint.index = Integer.parseInt(tokens[ti++]);
                        simulationData.asAIWaypoint.outOf = Integer.parseInt(tokens[ti++]);
                        simulationData.asAIWaypoint.latitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asAIWaypoint.longitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asAIWaypoint.altitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asAIWaypoint.flags = Integer.parseInt(tokens[ti++]);
                        simulationData.asAIWaypoint.ktsSpeed = Double.parseDouble(tokens[ti++]);
                        simulationData.asAIWaypoint.percentThrottle = Double.parseDouble(tokens[ti]);
                        break;
                    case 'A':
                        if (packet.charAt(pos++) != ':') { error = true; break; }
                        tokens = packet.substring(3).split(":");
                        n = tokens.length;
                        if (n != 6) { error = true; break; }
                        ti = 0;
                        simulationData.id = SimConnectVariable.FACILITY_AIRPORT;
                        simulationData.type = DataType.DATA_TYPE_FACILITY_AIRPORT;
                        simulationData.asFacilityAirport.index = Integer.parseInt(tokens[ti++]);
                        simulationData.asFacilityAirport.outOf = Integer.parseInt(tokens[ti++]);
                        simulationData.asFacilityAirport.icao = tokens[ti++];
                        simulationData.asFacilityAirport.latitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityAirport.longitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityAirport.altitude = Double.parseDouble(tokens[ti]);
                        break;
                    case 'W':
                        if (packet.charAt(pos++) != ':') { error = true; break; }
                        tokens = packet.substring(3).split(":");
                        n = tokens.length;
                        if (n != 7) { error = true; break; }
                        ti = 0;
                        simulationData.id = SimConnectVariable.FACILITY_WAYPOINT;
                        simulationData.type = DataType.DATA_TYPE_FACILITY_WAYPOINT;
                        simulationData.asFacilityWaypoint.index = Integer.parseInt(tokens[ti++]);
                        simulationData.asFacilityWaypoint.outOf = Integer.parseInt(tokens[ti++]);
                        simulationData.asFacilityWaypoint.icao = tokens[ti++];
                        simulationData.asFacilityWaypoint.latitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityWaypoint.longitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityWaypoint.altitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityWaypoint.magVar = Double.parseDouble(tokens[ti]);
                        break;
                    case 'N':
                        if (packet.charAt(pos++) != ':') { error = true; break; }
                        tokens = packet.substring(3).split(":");
                        n = tokens.length;
                        if (n != 8) { error = true; break; }
                        ti = 0;
                        simulationData.id = SimConnectVariable.FACILITY_NDB;
                        simulationData.type = DataType.DATA_TYPE_FACILITY_NDB;
                        simulationData.asFacilityNDB.index = Integer.parseInt(tokens[ti++]);
                        simulationData.asFacilityNDB.outOf = Integer.parseInt(tokens[ti++]);
                        simulationData.asFacilityNDB.icao = tokens[ti++];
                        simulationData.asFacilityNDB.latitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityNDB.longitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityNDB.altitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityNDB.magVar = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityNDB.frequency = Integer.parseInt(tokens[ti]);
                        break;
                    case 'V':
                        if (packet.charAt(pos++) != ':') { error = true; break; }
                        tokens = packet.substring(3).split(":");
                        n = tokens.length;
                        if (n != 14) { error = true; break; }
                        ti = 0;
                        simulationData.id = SimConnectVariable.FACILITY_VOR;
                        simulationData.type = DataType.DATA_TYPE_FACILITY_VOR;
                        simulationData.asFacilityVOR.index = Integer.parseInt(tokens[ti++]);
                        simulationData.asFacilityVOR.outOf = Integer.parseInt(tokens[ti++]);
                        simulationData.asFacilityVOR.icao = tokens[ti++];
                        simulationData.asFacilityVOR.latitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityVOR.longitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityVOR.altitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityVOR.magVar = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityVOR.frequency = Integer.parseInt(tokens[ti++]);
                        simulationData.asFacilityVOR.flags = Integer.parseInt(tokens[ti++]);
                        simulationData.asFacilityVOR.localizer = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityVOR.glideLat = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityVOR.glideLon = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityVOR.glideAlt = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityVOR.glideSlopeAngle = Double.parseDouble(tokens[ti]);
                        break;
                    case 'T':
                        if (packet.charAt(pos++) != ':') { error = true; break; }
                        tokens = packet.substring(3).split(":");
                        n = tokens.length;
                        if (n != 9) { error = true; break; }
                        ti = 0;
                        simulationData.id = SimConnectVariable.FACILITY_TACAN;
                        simulationData.type = DataType.DATA_TYPE_FACILITY_TACAN;
                        simulationData.asFacilityTACAN.index = Integer.parseInt(tokens[ti++]);
                        simulationData.asFacilityTACAN.outOf = Integer.parseInt(tokens[ti++]);
                        simulationData.asFacilityTACAN.icao = tokens[ti++];
                        simulationData.asFacilityTACAN.latitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityTACAN.longitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityTACAN.altitude = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityTACAN.magVar = Double.parseDouble(tokens[ti++]);
                        simulationData.asFacilityTACAN.channel = Integer.parseInt(tokens[ti++]);
                        simulationData.asFacilityTACAN.xyBandIsY = Integer.parseInt(tokens[ti]) != 0;
                        break;
                    default:
                        error = true;
                        break;
                }
                if (!error && Simulation.accepted && state.ordinal() > State.SIMULATION.ordinal() && onSimulationData != null)
                    onSimulationData.run();
                break;
            case 'M': // MN:<model> of MP:<model>
                if (len < 4) { error = true; break; }
                Simulation.isPmdgNgxModel = false;
                switch (packet.charAt(pos++)) {
                    case 'P':
                        Simulation.isPmdgNgxModel = true;
                    case 'S':
                        if (packet.charAt(pos++) != ':') { error = true; break; }
                        if (state.ordinal() < State.CONNECTED.ordinal()) break;
                        if (state.ordinal() > State.CONNECTED.ordinal() && Simulation.accepted && onSimulationStop != null)
                            onSimulationStop.run();
                        Simulation.modelName = packet.substring(3);
                        state = State.WAIT_FOR_NUMBER_OF_ENGINES;
                        send("RSC1001"); // request NUMBER_OF_ENGINES, ON_CHANGE
                        break;
                    default:
                        error = true;
                        break;
                }
                break;
            case 'X': // X
                if (len != 1) { error = true; break; }
                if (state.ordinal() > State.SIMULATION.ordinal() && Simulation.accepted && onSimulationStop != null)
                    onSimulationStop.run();
                state = (state.ordinal() >= State.CONNECTED.ordinal()) ? State.CONNECTED : state;
                Simulation.reset();
                break;
            case 'W':
                if (len != 1) { error = true; break; }
                if (state.ordinal() > State.CONNECTED.ordinal()) {
                    state = State.CONNECTED;
                    if (Simulation.accepted && onSimulationStop != null)
                        onSimulationStop.run();
                }
                if (state == State.CONNECTED && onDisconnect != null)
                    onDisconnect.run();
                send(String.format("W%s", device));
                state = State.CONNECTED;
                Simulation.reset();
                if (onConnect != null) onConnect.run();
                break;
            default:
                error = true;
                break;
        }
        if (error)
            send("TERROR: Invalid packet");
        send("N");
    }

    private static boolean validateIP4Address(final String ip) {
        String PATTERN = "^((0|1\\d?\\d?|2[0-4]?\\d?|25[0-5]?|[3-9]\\d?)\\.){3}(0|1\\d?\\d?|2[0-4]?\\d?|25[0-5]?|[3-9]\\d?)$";
        return ip.matches(PATTERN);
    }

}
