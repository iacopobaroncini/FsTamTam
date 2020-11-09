package org.iacopobaroncini.FsTamTam;

public class DataObject {

    public class LLA {
        public double latitude;
        public double longitude;
        public double altitude;

        public void reset() {
            latitude = longitude = altitude = 0;
        }
    }

    public class PBH {
        public double pitch;
        public double bank;
        public double heading;

        public void reset() {
            pitch = bank = heading = 0;
        }
    }

    public class XYZ {
        public double x;
        public double y;
        public double z;

        public void reset() {
            x = y = z = 0;
        }
    }

    public class ListElement {
        public int index;
        public int outOf;
        public double latitude;
        public double longitude;
        public double altitude;

        public void reset() {
            index = outOf = 0;
            latitude = longitude = altitude = 0;
        }
    }

    public class AIWaypoint extends ListElement{
        public int flags;
        public double ktsSpeed;
        public double percentThrottle;

        public void reset() {
            super.reset();
            flags = 0;
            ktsSpeed = percentThrottle = 0;
        }
    }

    public class FacilityAirport extends ListElement{
        public String icao;

        public void reset() {
            super.reset();
            icao = "";
        }
    }

    public class FacilityWaypoint extends FacilityAirport {
        public double magVar;

        public void reset() {
            super.reset();
            magVar = 0;
        }
    }

    public class FacilityNDB extends FacilityWaypoint {
        public int frequency;

        public void reset() {
            super.reset();
            frequency = 0;
        }
    }

    public class FacilityVOR extends FacilityNDB {
        public int flags;
        public double localizer;
        public double glideLat;
        public double glideLon;
        public double glideAlt;
        public double glideSlopeAngle;

        public void reset() {
            super.reset();
            flags = 0;
            localizer = glideLat = glideLon = glideAlt = glideSlopeAngle = 0;
        }
    }

    public class FacilityTACAN extends FacilityWaypoint {
        public int channel;
        public boolean xyBandIsY;
    }

    public int id;
    public int index;
    public DataType type;
    public boolean asBool;
    public int asInt32;
    public double asDouble;
    public String asText;
    public LLA asLLA = new LLA();
    public PBH asPBH = new PBH();
    public XYZ asXYZ = new XYZ();
    public AIWaypoint asAIWaypoint = new AIWaypoint();
    public FacilityAirport asFacilityAirport = new FacilityAirport();
    public FacilityWaypoint asFacilityWaypoint = new FacilityWaypoint();
    public FacilityNDB asFacilityNDB = new FacilityNDB();
    public FacilityVOR asFacilityVOR = new FacilityVOR();
    public FacilityTACAN asFacilityTACAN = new FacilityTACAN();

    public void reset() {
        id = 0;
        index = 0;
        type = DataType.DATA_TYPE_BOOLEAN;
        asBool = false;
        asDouble = 0;
        asText = "";
        asLLA.reset();
        asPBH.reset();
        asXYZ.reset();
        asAIWaypoint.reset();
        asFacilityAirport.reset();
        asFacilityWaypoint.reset();
        asFacilityNDB.reset();
        asFacilityVOR.reset();
        asFacilityTACAN.reset();
    }
}
