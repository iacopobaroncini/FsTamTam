/*

------------------------------------------
FsTamTam

(c) Iacopo Baroncini. All rights reserved.
------------------------------------------

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

1)  Redistributions of source code must retain the above copyright notice, this list
of conditions and the following disclaimer.

2)  Redistributions in binary form must reproduce the above copyright notice, this
list of conditions and the following disclaimer in the documentation and/or other
materials provided with the distribution.

3)  Neither the name of Iacopo Baroncini nor the names of its contributors may be
used to endorse or promote products derived from this software without specific
prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
OF SUCH DAMAGE.

*/


//
// Data source: Microsoft SimConnect documentation
//

// Render date 2020-09-24 06:22:36


// Lists' elements
const AI_WAYPOINT                                           = 1635;
const FACILITY_AIRPORT                                      = 1990;
const FACILITY_WAYPOINT                                     = 1991;
const FACILITY_NDB                                          = 1992;
const FACILITY_VOR                                          = 1993;
const FACILITY_TACAN                                        = 1994;

const NUMBER_OF_ENGINES                                     = 1001;
	// INT32 (Number)
	// Number of engines (minimum 0, maximum 4)

const ENGINE_CONTROL_SELECT                                 = 1002;
	// INT32 (Mask)
	// Selected engines (combination of bit flags)
	// 1 = Engine 1
	// 2 = Engine 2
	// 4 = Engine 3
	// 8 = Engine 4

const THROTTLE_LOWER_LIMIT                                  = 1003;
	// FLOAT32 (Percent)
	// Percent throttle defining lower limit (negative for reverse thrust equipped airplanes)

const ENGINE_TYPE                                           = 1004;
	// INT32 (Enum)
	// Engine type:
	// 0 = Piston
	// 1 = Jet
	// 2 = None
	// 3 = Helo(Bell) turbine
	// 4 = Unsupported
	// 5 = Turboprop

const MASTER_IGNITION_SWITCH                                = 1005;
	// INT32 (Bool)
	// Aircraft master ignition switch (grounds all engines magnetos)

const GENERAL_ENG_COMBUSTION                                = 2001;
	// Array [1..4] of INT32 (Bool)
	// Combustion flag

const GENERAL_ENG_MASTER_ALTERNATOR                         = 2002;
	// Array [1..4] of INT32 (Bool)
	// Alternator (generator) switch

const GENERAL_ENG_FUEL_PUMP_SWITCH                          = 2003;
	// Array [1..4] of INT32 (Bool)
	// Fuel pump switch

const GENERAL_ENG_FUEL_PUMP_ON                              = 2004;
	// Array [1..4] of INT32 (Bool)
	// Fuel pump on/off

const GENERAL_ENG_RPM                                       = 2005;
	// Array [1..4] of FLOAT32 (Rpm)
	// Engine rpm

const GENERAL_ENG_PCT_MAX_RPM                               = 2006;
	// Array [1..4] of FLOAT32 (Percent)
	// Percent of max rated rpm

const GENERAL_ENG_MAX_REACHED_RPM                           = 2007;
	// Array [1..4] of FLOAT32 (Rpm)
	// Maximum attained rpm

const GENERAL_ENG_THROTTLE_LEVER_POSITION                   = 2008;
	// Array [1..4] of FLOAT32 (Percent over 100)
	// Percent of max throttle position

const GENERAL_ENG_MIXTURE_LEVER_POSITION                    = 2009;
	// Array [1..4] of FLOAT32 (Percent over 100)
	// Percent of max mixture lever position

const GENERAL_ENG_PROPELLER_LEVER_POSITION                  = 2010;
	// Array [1..4] of FLOAT32 (Percent over 100)
	// Percent of max prop lever position

const GENERAL_ENG_STARTER                                   = 2011;
	// Array [1..4] of INT32 (Bool)
	// Engine starter on/off

const GENERAL_ENG_EXHAUST_GAS_TEMPERATURE                   = 2012;
	// Array [1..4] of FLOAT32 (Rankine)
	// Engine exhaust gas temperature.

const GENERAL_ENG_OIL_PRESSURE                              = 2013;
	// Array [1..4] of FLOAT32 (Psf)
	// Engine oil pressure

const GENERAL_ENG_OIL_LEAKED_PERCENT                        = 2014;
	// Array [1..4] of FLOAT32 (Percent)
	// Percent of max oil capacity leaked

const GENERAL_ENG_COMBUSTION_SOUND_PERCENT                  = 2015;
	// Array [1..4] of FLOAT32 (Percent)
	// Percent of maximum engine sound

const GENERAL_ENG_DAMAGE_PERCENT                            = 2016;
	// Array [1..4] of FLOAT32 (Percent)
	// Percent of total engine damage

const GENERAL_ENG_OIL_TEMPERATURE                           = 2017;
	// Array [1..4] of FLOAT32 (Rankine)
	// Engine oil temperature

const GENERAL_ENG_FAILED                                    = 2018;
	// Array [1..4] of INT32 (Bool)
	// Fail flag

const GENERAL_ENG_GENERATOR_SWITCH                          = 2019;
	// Array [1..4] of INT32 (Bool)
	// Alternator (generator) switch

const GENERAL_ENG_GENERATOR_ACTIVE                          = 2020;
	// Array [1..4] of INT32 (Bool)
	// Alternator (generator) on/off

const GENERAL_ENG_ANTI_ICE_POSITION                         = 2021;
	// Array [1..4] of INT32 (Bool)
	// Engine anti-ice switch

const GENERAL_ENG_FUEL_VALVE                                = 2022;
	// Array [1..4] of INT32 (Bool)
	// Fuel valve state

const GENERAL_ENG_FUEL_PRESSURE                             = 2023;
	// Array [1..4] of FLOAT32 (Psi)
	// Engine fuel pressure

const GENERAL_ENG_ELAPSED_TIME                              = 2024;
	// Array [1..4] of FLOAT32 (Hours)
	// Total engine elapsed time

const RECIP_ENG_COWL_FLAP_POSITION                          = 2025;
	// Array [1..4] of FLOAT32 (Percent)
	// Percent cowl flap opened

const RECIP_ENG_PRIMER                                      = 2026;
	// Array [1..4] of INT32 (Bool)
	// Engine primer position

const RECIP_ENG_MANIFOLD_PRESSURE                           = 2027;
	// Array [1..4] of FLOAT32 (Psi)
	// Engine manifold pressure

const RECIP_ENG_ALTERNATE_AIR_POSITION                      = 2028;
	// Array [1..4] of INT32 (Position)
	// Alternate air control

const RECIP_ENG_COOLANT_RESERVOIR_PERCENT                   = 2029;
	// Array [1..4] of FLOAT32 (Percent)
	// Percent coolant available

const RECIP_ENG_LEFT_MAGNETO                                = 2030;
	// Array [1..4] of INT32 (Bool)
	// Left magneto state

const RECIP_ENG_RIGHT_MAGNETO                               = 2031;
	// Array [1..4] of INT32 (Bool)
	// Right magneto state

const RECIP_ENG_BRAKE_POWER                                 = 2032;
	// Array [1..4] of FLOAT32 (Foot pounds per second)
	// Brake power produced by engine

const RECIP_ENG_STARTER_TORQUE                              = 2033;
	// Array [1..4] of FLOAT32 (Foot pound)
	// Torque produced by engine

const RECIP_ENG_TURBOCHARGER_FAILED                         = 2034;
	// Array [1..4] of INT32 (Bool)
	// Turbo failed state

const RECIP_ENG_EMERGENCY_BOOST_ACTIVE                      = 2035;
	// Array [1..4] of INT32 (Bool)
	// War emergency power active

const RECIP_ENG_EMERGENCY_BOOST_ELAPSED_TIME                = 2036;
	// Array [1..4] of FLOAT32 (Hours)
	// Elapsed time war emergency power active

const RECIP_ENG_WASTEGATE_POSITION                          = 2037;
	// Array [1..4] of FLOAT32 (Percent)
	// Percent turbo wastegate closed

const RECIP_ENG_TURBINE_INLET_TEMPERATURE                   = 2038;
	// Array [1..4] of FLOAT32 (Celsius)
	// Engine turbine inlet temperature

const RECIP_ENG_CYLINDER_HEAD_TEMPERATURE                   = 2039;
	// Array [1..4] of FLOAT32 (Celsius)
	// Engine cylinder head temperature

const RECIP_ENG_RADIATOR_TEMPERATURE                        = 2040;
	// Array [1..4] of FLOAT32 (Celsius)
	// Engine radiator temperature

const RECIP_ENG_FUEL_AVAILABLE                              = 2041;
	// Array [1..4] of INT32 (Bool)
	// True if fuel is available

const RECIP_ENG_FUEL_FLOW                                   = 2042;
	// Array [1..4] of FLOAT32 (Pounds per hour)
	// Engine fuel flow

const RECIP_ENG_FUEL_TANK_SELECTOR                          = 2043;
	// Array [1..4] of INT32 (Enum)
	// Fuel tank selected for engine. See fuel tank list.

const RECIP_ENG_FUEL_TANKS_USED                             = 2044;
	// Array [1..4] of INT32 (Mask)
	// Fuel tanks used, one or more of the following bit flags:
	// Center 1 Bit 0
	// Center 2 Bit 1
	// Center 3 Bit 2
	// Left Main Bit 3
	// Left Aux Bit 4
	// Left Tip Bit 5
	// Right Main Bit 6
	// Right Aux Bit 7
	// Right Tip Bit 8
	// External 1 Bit 9
	// External 2 Bit 10

const RECIP_ENG_FUEL_NUMBER_TANKS_USED                      = 2045;
	// Array [1..4] of INT32 (Number)
	// Number of tanks currently being used

const RECIP_CARBURETOR_TEMPERATURE                          = 2046;
	// Array [1..4] of FLOAT32 (Celsius)
	// Carburetor temperature

const RECIP_MIXTURE_RATIO                                   = 2047;
	// Array [1..4] of FLOAT32 (Ratio)
	// Fuel / Air mixture ratio

const TURB_ENG_N1                                           = 2048;
	// Array [1..4] of FLOAT32 (Percent)
	// Turbine engine N1

const TURB_ENG_N2                                           = 2049;
	// Array [1..4] of FLOAT32 (Percent)
	// Turbine engine N2

const TURB_ENG_CORRECTED_N1                                 = 2050;
	// Array [1..4] of FLOAT32 (Percent)
	// Turbine engine corrected N1

const TURB_ENG_CORRECTED_N2                                 = 2051;
	// Array [1..4] of FLOAT32 (Percent)
	// Turbine engine corrected N2

const TURB_ENG_CORRECTED_FF                                 = 2052;
	// Array [1..4] of FLOAT32 (Pounds per hour)
	// Corrected fuel flow

const TURB_ENG_MAX_TORQUE_PERCENT                           = 2053;
	// Array [1..4] of FLOAT32 (Percent)
	// Percent of max rated torque

const TURB_ENG_PRESSURE_RATIO                               = 2054;
	// Array [1..4] of FLOAT32 (Ratio)
	// Engine pressure ratio

const TURB_ENG_ITT                                          = 2055;
	// Array [1..4] of FLOAT32 (Rankine)
	// Engine ITT

const TURB_ENG_AFTERBURNER                                  = 2056;
	// Array [1..4] of INT32 (Bool)
	// Afterburner state

const TURB_ENG_JET_THRUST                                   = 2057;
	// Array [1..4] of FLOAT32 (Pounds)
	// Engine jet thrust

const TURB_ENG_BLEED_AIR                                    = 2058;
	// Array [1..4] of FLOAT32 (Psi)
	// Bleed air pressure

const TURB_ENG_TANK_SELECTOR                                = 2059;
	// Array [1..4] of INT32 (Enum)
	// Fuel tank selected for engine. See fuel tank list.

const TURB_ENG_TANKS_USED                                   = 2060;
	// Array [1..4] of INT32 (Mask)
	// Fuel tanks used, one or more of the following bit flags:
	// Center 1 Bit 0
	// Center 2 Bit 1
	// Center 3 Bit 2
	// Left Main Bit 3
	// Left Aux Bit 4
	// Left Tip Bit 5
	// Right Main Bit 6
	// Right Aux Bit 7
	// Right Tip Bit 8
	// External 1 Bit 9
	// External 2 Bit 10

const TURB_ENG_NUM_TANKS_USED                               = 2061;
	// Array [1..4] of INT32 (Number)
	// Number of tanks currently being used

const TURB_ENG_FUEL_FLOW_PPH                                = 2062;
	// Array [1..4] of FLOAT32 (Pounds per hour)
	// Engine fuel flow

const TURB_ENG_FUEL_AVAILABLE                               = 2063;
	// Array [1..4] of INT32 (Bool)
	// True if fuel is available

const TURB_ENG_REVERSE_NOZZLE_PERCENT                       = 2064;
	// Array [1..4] of FLOAT32 (Percent)
	// Percent thrust reverser nozzles deployed

const TURB_ENG_VIBRATION                                    = 2065;
	// Array [1..4] of INT32 (Number)
	// Engine vibration value

const ENG_FAILED                                            = 2066;
	// Array [1..4] of INT32 (Number)
	// Failure flag

const ENG_RPM_ANIMATION_PERCENT                             = 2067;
	// Array [1..4] of FLOAT32 (Percent)
	// Percent max rated rpm used for visual animation

const ENG_ON_FIRE                                           = 2068;
	// Array [1..4] of INT32 (Bool)
	// On fire state

const ENG_ON_FIRE_INDICATED                                 = 2069;
	// Array [1..4] of INT32 (Bool)
	// 'On fire indicator state. This is normally the same as 'ENG ON FIRE' unless a false indication is
	// triggered.'

const ENG_FUEL_FLOW_BUG_POSITION                            = 2070;
	// Array [1..4] of FLOAT32 (Pounds per hour)
	// Fuel flow reference

const PROP_RPM                                              = 2071;
	// Array [1..4] of FLOAT32 (Rpm)
	// Propeller rpm

const PROP_MAX_RPM_PERCENT                                  = 2072;
	// Array [1..4] of FLOAT32 (Percent)
	// Percent of max rated rpm

const PROP_THRUST                                           = 2073;
	// Array [1..4] of FLOAT32 (Pounds)
	// Propeller thrust

const PROP_BETA                                             = 2074;
	// Array [1..4] of FLOAT32 (Radians)
	// Prop blade pitch angle

const PROP_FEATHERING_INHIBIT                               = 2075;
	// Array [1..4] of INT32 (Bool)
	// Feathering inhibit flag

const PROP_FEATHERED                                        = 2076;
	// Array [1..4] of INT32 (Bool)
	// Feathered state

const PROP_SYNC_DELTA_LEVER                                 = 2077;
	// Array [1..4] of INT32 (Position)
	// Corrected prop correction input on slaved engine

const PROP_AUTO_FEATHER_ARMED                               = 2078;
	// Array [1..4] of INT32 (Bool)
	// Auto-feather armed state

const PROP_FEATHER_SWITCH                                   = 2079;
	// Array [1..4] of INT32 (Bool)
	// Prop feather switch

const PANEL_AUTO_FEATHER_SWITCH                             = 2080;
	// Array [1..4] of INT32 (Bool)
	// Auto-feather arming switch

const PROP_SYNC_ACTIVE                                      = 2081;
	// Array [1..4] of INT32 (Bool)
	// True if prop sync is active

const PROP_DEICE_SWITCH                                     = 2082;
	// Array [1..4] of INT32 (Bool)
	// True if prop deice switch on

const ENG_COMBUSTION                                        = 1006;
	// INT32 (Bool)
	// True if the engine is running

const ENG_N1_RPM                                            = 2083;
	// Array [1..4] of FLOAT32 (Rpm)
	// Engine N1 rpm [0 to 16384 = 0 to 100%]

const ENG_N2_RPM                                            = 2084;
	// Array [1..4] of FLOAT32 (Rpm)
	// Engine N2 rpm [0 to 16384 = 0 to 100%]

const ENG_FUEL_FLOW_GPH                                     = 2085;
	// Array [1..4] of FLOAT32 (Gallons per hour)
	// Engine fuel flow

const ENG_FUEL_FLOW_PPH                                     = 2086;
	// Array [1..4] of FLOAT32 (Pounds per hour)
	// Engine fuel flow

const ENG_TORQUE                                            = 2087;
	// Array [1..4] of FLOAT32 (Foot pounds)
	// Torque

const ENG_ANTI_ICE                                          = 2088;
	// Array [1..4] of INT32 (Bool)
	// Anti-ice switch

const ENG_PRESSURE_RATIO                                    = 2089;
	// Array [1..4] of FLOAT32 (Ratio)
	// Engine pressure ratio

const ENG_EXHAUST_GAS_TEMPERATURE                           = 2090;
	// Array [1..4] of FLOAT32 (Rankine)
	// Exhaust gas temperature

const ENG_EXHAUST_GAS_TEMPERATURE_GES                       = 2091;
	// Array [1..4] of FLOAT32 (Percent over 100)
	// Governed engine setting

const ENG_CYLINDER_HEAD_TEMPERATURE                         = 2092;
	// Array [1..4] of FLOAT32 (Rankine)
	// Engine cylinder head temperature

const ENG_OIL_TEMPERATURE                                   = 2093;
	// Array [1..4] of FLOAT32 (Rankine)
	// Engine oil temperature

const ENG_OIL_PRESSURE                                      = 2094;
	// Array [1..4] of FLOAT32 (Pounds per square foot)
	// Engine oil pressure

const ENG_OIL_QUANTITY                                      = 2095;
	// Array [1..4] of FLOAT32 (Percent over 100)
	// Engine oil quantity as a percentage of full capacity

const ENG_HYDRAULIC_PRESSURE                                = 2096;
	// Array [1..4] of FLOAT32 (Pounds per square foot)
	// Engine hydraulic pressure

const ENG_HYDRAULIC_QUANTITY                                = 2097;
	// Array [1..4] of FLOAT32 (Percent over 100)
	// Engine hydraulic fluid quantity, as a percentage of total capacity

const ENG_MANIFOLD_PRESSURE                                 = 2098;
	// Array [1..4] of FLOAT32 (inHG)
	// Engine manifold pressure.

const ENG_VIBRATION                                         = 2099;
	// Array [1..4] of INT32 (Number)
	// Engine vibration

const ENG_RPM_SCALER                                        = 2100;
	// Array [1..4] of INT32 (Scalar)
	// Obsolete

const ENG_MAX_RPM                                           = 1007;
	// FLOAT32 (Rpm)
	// Maximum rpm

const GENERAL_ENG_STARTER_ACTIVE                            = 1008;
	// INT32 (Bool)
	// True if engine starter is active

const GENERAL_ENG_FUEL_USED_SINCE_START                     = 1009;
	// FLOAT32 (Pounds)
	// Fuel used since the engines were last started

const TURB_ENG_PRIMARY_NOZZLE_PERCENT                       = 2101;
	// Array [1..4] of FLOAT32 (Percent over 100)
	// Percent thrust of primary nozzle

const TURB_ENG_IGNITION_SWITCH                              = 1010;
	// INT32 (Enum)
	// Turbine engine ignition switch: 0 = OFF, 1 = AUTO, 2 = ON

const TURB_ENG_IGNITION_ON                                  = 1011;
	// INT32 (Bool)
	// True if engine ignition is active

const TURB_ENG_MASTER_STARTER_SWITCH                        = 1012;
	// INT32 (Bool)
	// True if the turbine engine master starter switch is on

const TURB_ENG_AFTERBURNER_STAGE_ACTIVE                     = 1013;
	// INT32 (Number)
	// The stage of the afterburner, or 0 if the afterburner is not active.

const TURB_ENG_AFTERBURNER_PCT_ACTIVE                       = 1014;
	// FLOAT32 (Percent over 100)
	// The percentage that the afterburner is running at.

const FUEL_TANK_CENTER_LEVEL                                = 1015;
	// FLOAT32 (Percent over 100)
	// Percent of maximum capacity

const FUEL_TANK_CENTER2_LEVEL                               = 1016;
	// FLOAT32 (Percent over 100)
	// Percent of maximum capacity

const FUEL_TANK_CENTER3_LEVEL                               = 1017;
	// FLOAT32 (Percent over 100)
	// Percent of maximum capacity

const FUEL_TANK_LEFT_MAIN_LEVEL                             = 1018;
	// FLOAT32 (Percent over 100)
	// Percent of maximum capacity

const FUEL_TANK_LEFT_AUX_LEVEL                              = 1019;
	// FLOAT32 (Percent over 100)
	// Percent of maximum capacity

const FUEL_TANK_LEFT_TIP_LEVEL                              = 1020;
	// FLOAT32 (Percent over 100)
	// Percent of maximum capacity

const FUEL_TANK_RIGHT_MAIN_LEVEL                            = 1021;
	// FLOAT32 (Percent over 100)
	// Percent of maximum capacity

const FUEL_TANK_RIGHT_AUX_LEVEL                             = 1022;
	// FLOAT32 (Percent over 100)
	// Percent of maximum capacity

const FUEL_TANK_RIGHT_TIP_LEVEL                             = 1023;
	// FLOAT32 (Percent over 100)
	// Percent of maximum capacity

const FUEL_TANK_EXTERNAL1_LEVEL                             = 1024;
	// FLOAT32 (Percent over 100)
	// Percent of maximum capacity

const FUEL_TANK_EXTERNAL2_LEVEL                             = 1025;
	// FLOAT32 (Percent over 100)
	// Percent of maximum capacity

const FUEL_TANK_CENTER_CAPACITY                             = 1026;
	// FLOAT32 (Gallons)
	// Maximum capacity in volume

const FUEL_TANK_CENTER2_CAPACITY                            = 1027;
	// FLOAT32 (Gallons)
	// Maximum capacity in volume

const FUEL_TANK_CENTER3_CAPACITY                            = 1028;
	// FLOAT32 (Gallons)
	// Maximum capacity in volume

const FUEL_TANK_LEFT_MAIN_CAPACITY                          = 1029;
	// FLOAT32 (Gallons)
	// Maximum capacity in volume

const FUEL_TANK_LEFT_AUX_CAPACITY                           = 1030;
	// FLOAT32 (Gallons)
	// Maximum capacity in volume

const FUEL_TANK_LEFT_TIP_CAPACITY                           = 1031;
	// FLOAT32 (Gallons)
	// Maximum capacity in volume

const FUEL_TANK_RIGHT_MAIN_CAPACITY                         = 1032;
	// FLOAT32 (Gallons)
	// Maximum capacity in volume

const FUEL_TANK_RIGHT_AUX_CAPACITY                          = 1033;
	// FLOAT32 (Gallons)
	// Maximum capacity in volume

const FUEL_TANK_RIGHT_TIP_CAPACITY                          = 1034;
	// FLOAT32 (Gallons)
	// Maximum capacity in volume

const FUEL_TANK_EXTERNAL1_CAPACITY                          = 1035;
	// FLOAT32 (Gallons)
	// Maximum capacity in volume

const FUEL_TANK_EXTERNAL2_CAPACITY                          = 1036;
	// FLOAT32 (Gallons)
	// Maximum capacity in volume

const FUEL_LEFT_CAPACITY                                    = 1037;
	// FLOAT32 (Gallons)
	// Maximum capacity in volume

const FUEL_RIGHT_CAPACITY                                   = 1038;
	// FLOAT32 (Gallons)
	// Maximum capacity in volume

const FUEL_TANK_CENTER_QUANTITY                             = 1039;
	// FLOAT32 (Gallons)
	// Current quantity in volume

const FUEL_TANK_CENTER2_QUANTITY                            = 1040;
	// FLOAT32 (Gallons)
	// Current quantity in volume

const FUEL_TANK_CENTER3_QUANTITY                            = 1041;
	// FLOAT32 (Gallons)
	// Current quantity in volume

const FUEL_TANK_LEFT_MAIN_QUANTITY                          = 1042;
	// FLOAT32 (Gallons)
	// Current quantity in volume

const FUEL_TANK_LEFT_AUX_QUANTITY                           = 1043;
	// FLOAT32 (Gallons)
	// Current quantity in volume

const FUEL_TANK_LEFT_TIP_QUANTITY                           = 1044;
	// FLOAT32 (Gallons)
	// Current quantity in volume

const FUEL_TANK_RIGHT_MAIN_QUANTITY                         = 1045;
	// FLOAT32 (Gallons)
	// Current quantity in volume

const FUEL_TANK_RIGHT_AUX_QUANTITY                          = 1046;
	// FLOAT32 (Gallons)
	// Current quantity in volume

const FUEL_TANK_RIGHT_TIP_QUANTITY                          = 1047;
	// FLOAT32 (Gallons)
	// Current quantity in volume

const FUEL_TANK_EXTERNAL1_QUANTITY                          = 1048;
	// FLOAT32 (Gallons)
	// Current quantity in volume

const FUEL_TANK_EXTERNAL2_QUANTITY                          = 1049;
	// FLOAT32 (Gallons)
	// Current quantity in volume

const FUEL_LEFT_QUANTITY                                    = 1050;
	// FLOAT32 (Gallons)
	// Current quantity in volume

const FUEL_RIGHT_QUANTITY                                   = 1051;
	// FLOAT32 (Gallons)
	// Current quantity in volume

const FUEL_TOTAL_QUANTITY                                   = 1052;
	// FLOAT32 (Gallons)
	// Current quantity in volume

const FUEL_WEIGHT_PER_GALLON                                = 1053;
	// FLOAT32 (Pounds)
	// Fuel weight per gallon

const FUEL_TANK_SELECTOR                                    = 2102;
	// Array [1..4] of INT32 (Enum)
	// Which tank is selected. See fuel tank list.

const FUEL_CROSS_FEED                                       = 1054;
	// INT32 (Enum)
	// Cross feed valve:
	// 0 = Closed
	// 1 = Open

const FUEL_TOTAL_CAPACITY                                   = 1055;
	// FLOAT32 (Gallons)
	// Total capacity of the aircraft

const FUEL_SELECTED_QUANTITY_PERCENT                        = 1056;
	// FLOAT32 (Percent over 100)
	// Percent or capacity for selected tank

const FUEL_SELECTED_QUANTITY                                = 1057;
	// FLOAT32 (Gallons)
	// Quantity of selected tank

const FUEL_TOTAL_QUANTITY_WEIGHT                            = 1058;
	// FLOAT32 (Pounds)
	// Current total fuel weight of the aircraft

const NUM_FUEL_SELECTORS                                    = 1059;
	// INT32 (Number)
	// Number of selectors on the aircraft

const UNLIMITED_FUEL                                        = 1060;
	// INT32 (Bool)
	// Unlimited fuel flag

const ESTIMATED_FUEL_FLOW                                   = 1061;
	// FLOAT32 (Pounds per hour)
	// Estimated fuel flow at cruise

const LIGHT_STROBE                                          = 1062;
	// INT32 (Bool)
	// Light switch state

const LIGHT_PANEL                                           = 1063;
	// INT32 (Bool)
	// Light switch state

const LIGHT_LANDING                                         = 1064;
	// INT32 (Bool)
	// Light switch state

const LIGHT_TAXI                                            = 1065;
	// INT32 (Bool)
	// Light switch state

const LIGHT_BEACON                                          = 1066;
	// INT32 (Bool)
	// Light switch state

const LIGHT_NAV                                             = 1067;
	// INT32 (Bool)
	// Light switch state

const LIGHT_LOGO                                            = 1068;
	// INT32 (Bool)
	// Light switch state

const LIGHT_WING                                            = 1069;
	// INT32 (Bool)
	// Light switch state

const LIGHT_RECOGNITION                                     = 1070;
	// INT32 (Bool)
	// Light switch state

const LIGHT_CABIN                                           = 1071;
	// INT32 (Bool)
	// Light switch state

const LIGHT_ON_STATES                                       = 1072;
	// INT32 (Mask)
	// Bit mask:
	// 0x0001: Nav
	// 0x0002: Beacon
	// 0x0004: Landing
	// 0x0008: Taxi
	// 0x0010: Strobe
	// 0x0020: Panel
	// 0x0040: Recognition
	// 0x0080: Wing
	// 0x0100: Logo
	// 0x0200: Cabin

const LIGHT_STATES                                          = 1073;
	// INT32 (Mask)
	// Same as LIGHT ON STATES

const LANDING_LIGHT_PBH                                     = 1074;
	// XYZ (SIMCONNECT_DATA_XYZ structure)
	// Landing light pitch bank and heading

const LIGHT_TAXI_ON                                         = 1075;
	// INT32 (Bool)
	// Return true if the light is on.

const LIGHT_STROBE_ON                                       = 1076;
	// INT32 (Bool)
	// Return true if the light is on.

const LIGHT_PANEL_ON                                        = 1077;
	// INT32 (Bool)
	// Return true if the light is on.

const LIGHT_RECOGNITION_ON                                  = 1078;
	// INT32 (Bool)
	// Return true if the light is on.

const LIGHT_WING_ON                                         = 1079;
	// INT32 (Bool)
	// Return true if the light is on.

const LIGHT_LOGO_ON                                         = 1080;
	// INT32 (Bool)
	// Return true if the light is on.

const LIGHT_CABIN_ON                                        = 1081;
	// INT32 (Bool)
	// Return true if the light is on.

const LIGHT_HEAD_ON                                         = 1082;
	// INT32 (Bool)
	// Return true if the light is on.

const LIGHT_BRAKE_ON                                        = 1083;
	// INT32 (Bool)
	// Return true if the light is on.

const LIGHT_NAV_ON                                          = 1084;
	// INT32 (Bool)
	// Return true if the light is on.

const LIGHT_BEACON_ON                                       = 1085;
	// INT32 (Bool)
	// Return true if the light is on.

const LIGHT_LANDING_ON                                      = 1086;
	// INT32 (Bool)
	// Return true if the light is on.

const GROUND_VELOCITY                                       = 1087;
	// FLOAT32 (Knots)
	// Speed relative to the earths surface

const TOTAL_WORLD_VELOCITY                                  = 1088;
	// FLOAT32 (Feet per second)
	// Speed relative to the earths center

const VELOCITY_BODY_Z                                       = 1089;
	// FLOAT32 (Feet per second)
	// True longitudinal speed, relative to aircraft axis

const VELOCITY_BODY_X                                       = 1090;
	// FLOAT32 (Feet per second)
	// True lateral speed, relative to aircraft axis

const VELOCITY_BODY_Y                                       = 1091;
	// FLOAT32 (Feet per second)
	// True vertical speed, relative to aircraft axis

const VELOCITY_WORLD_Z                                      = 1092;
	// FLOAT32 (Feet per second)
	// Speed relative to earth, in North/South direction

const VELOCITY_WORLD_X                                      = 1093;
	// FLOAT32 (Feet per second)
	// Speed relative to earth, in East/West direction

const VELOCITY_WORLD_Y                                      = 1094;
	// FLOAT32 (Feet per second)
	// Speed relative to earth, in vertical direction

const ACCELERATION_WORLD_X                                  = 1095;
	// FLOAT32 (Feet per second squared)
	// Acceleration relative to earth, in east/west direction

const ACCELERATION_WORLD_Y                                  = 1096;
	// FLOAT32 (Feet per second squared)
	// Acceleration relative to Earth, in vertical direction

const ACCELERATION_WORLD_Z                                  = 1097;
	// FLOAT32 (Feet per second squared)
	// Acceleration relative to earth, in north/south direction

const ACCELERATION_BODY_X                                   = 1098;
	// FLOAT32 (Feet per second squared)
	// Acceleration relative to aircraft axis, in east/west direction

const ACCELERATION_BODY_Y                                   = 1099;
	// FLOAT32 (Feet per second squared)
	// Acceleration relative to aircraft axis, in vertical direction

const ACCELERATION_BODY_Z                                   = 1100;
	// FLOAT32 (Feet per second squared)
	// Acceleration relative to aircraft axis, in north/south direction

const ROTATION_VELOCITY_BODY_X                              = 1101;
	// FLOAT32 (Feet per second)
	// Rotation relative to aircraft axis

const ROTATION_VELOCITY_BODY_Y                              = 1102;
	// FLOAT32 (Feet per second)
	// Rotation relative to aircraft axis

const ROTATION_VELOCITY_BODY_Z                              = 1103;
	// FLOAT32 (Feet per second)
	// Rotation relative to aircraft axis

const RELATIVE_WIND_VELOCITY_BODY_X                         = 1104;
	// FLOAT32 (Feet per second)
	// Lateral speed relative to wind

const RELATIVE_WIND_VELOCITY_BODY_Y                         = 1105;
	// FLOAT32 (Feet per second)
	// Vertical speed relative to wind

const RELATIVE_WIND_VELOCITY_BODY_Z                         = 1106;
	// FLOAT32 (Feet per second)
	// Longitudinal speed relative to wind

const PLANE_ALT_ABOVE_GROUND                                = 1107;
	// FLOAT32 (Feet)
	// Altitude above the surface

const PLANE_LATITUDE                                        = 1108;
	// FLOAT32 (Radians)
	// Latitude of aircraft, North is positive, South negative

const PLANE_LONGITUDE                                       = 1109;
	// FLOAT32 (Radians)
	// Longitude of aircraft, East is positive, West negative

const PLANE_ALTITUDE                                        = 1110;
	// FLOAT32 (Feet)
	// Altitude of aircraft

const PLANE_PITCH_DEGREES                                   = 1111;
	// FLOAT32 (Radians)
	// Pitch angle, although the name mentions degrees the units used are radians

const PLANE_BANK_DEGREES                                    = 1112;
	// FLOAT32 (Radians)
	// Bank angle, although the name mentions degrees the units used are radians

const PLANE_HEADING_DEGREES_TRUE                            = 1113;
	// FLOAT32 (Radians)
	// Heading relative to true north, although the name mentions degrees the units used are radians

const PLANE_HEADING_DEGREES_MAGNETIC                        = 1114;
	// FLOAT32 (Radians)
	// Heading relative to magnetic north, although the name mentions degrees the units used are radians

const MAGVAR                                                = 1115;
	// FLOAT32 (Degrees)
	// Magnetic variation

const GROUND_ALTITUDE                                       = 1116;
	// FLOAT32 (Meters)
	// Altitude of surface

const SURFACE_TYPE                                          = 1117;
	// INT32 (Enum)
	// Type of surface:
	// 0 = Concrete
	// 1 = Grass
	// 2 = Water
	// 3 = Grass_bumpy
	// 4 = Asphalt
	// 5 = Short_grass
	// 6 = Long_grass
	// 7 = Hard_turf
	// 8 = Snow
	// 9 = Ice
	// 10 = Urban
	// 11 = Forest
	// 12 = Dirt
	// 13 = Coral
	// 14 = Gravel
	// 15 = Oil_treated
	// 16 = Steel_mats
	// 17 = Bituminus
	// 18 = Brick
	// 19 = Macadam
	// 20 = Planks
	// 21 = Sand
	// 22 = Shale
	// 23 = Tarmac
	// 24 = Wright_flyer_track

const SIM_ON_GROUND                                         = 1118;
	// INT32 (Bool)
	// On ground flag (To set, passing a non-zero argument will set the object on the ground. Passing zero
	// has no effect.)

const INCIDENCE_ALPHA                                       = 1119;
	// FLOAT32 (Radians)
	// Angle of attack

const INCIDENCE_BETA                                        = 1120;
	// FLOAT32 (Radians)
	// Sideslip angle

const WING_FLEX_PCT                                         = 2103;
	// Array [1..2] of FLOAT32 (Percent over 100)
	// The current wing flex. Different values can be set for each wing (for example, during banking). Set
	// an index of 1 for the left wing, and 2 for the right wing.

const STRUCT_LATLONALT                                      = 1121;
	// LATLONALT (SIMCONNECT_DATA_LATLONALT structure)
	// Returns the latitude, longitude and altitude of the user aircraft.

const STRUCT_LATLONALTPBH                                   = 1122;
	// LATLONALT (SIMCONNECT_DATA_LATLONALT structure)
	// Returns the pitch, bank and heading of the user aircraft.

const STRUCT_SURFACE_RELATIVE_VELOCITY                      = 1123;
	// XYZ (SIMCONNECT_DATA_XYZ structure, feet per second)
	// The relative surface velocity.

const STRUCT_WORLDVELOCITY                                  = 1124;
	// XYZ (SIMCONNECT_DATA_XYZ structure, feet per second)
	// The world velocity.

const STRUCT_WORLD_ROTATION_VELOCITY                        = 1125;
	// XYZ (SIMCONNECT_DATA_XYZ structure, radians per second)
	// The world rotation velocity.

const STRUCT_BODY_VELOCITY                                  = 1126;
	// XYZ (SIMCONNECT_DATA_XYZ structure, feet per second)
	// The object body velocity.

const STRUCT_BODY_ROTATION_VELOCITY                         = 1127;
	// XYZ (SIMCONNECT_DATA_XYZ structure, radians per second)
	// The body rotation velocity. Individual body rotation values are in the Aircraft Position and Speed
	// section.

const STRUCT_WORLD_ACCELERATION                             = 1128;
	// XYZ (SIMCONNECT_DATA_XYZ structure, feet per second squared)
	// The world acceleration for each axis. Individual world acceleration values are in the Aircraft
	// Position and Speed section.

const STRUCT_ENGINE_POSITION                                = 2104;
	// Array [1..4] of XYZ (SIMCONNECT_DATA_XYZ structure, feet.)
	// The engine position relative to the reference datum position for the aircraft.

const STRUCT_EYEPOINT_DYNAMIC_ANGLE                         = 1129;
	// XYZ (SIMCONNECT_DATA_XYZ structure, radians)
	// The angle of the eyepoint view. Zero, zero, zero is straight ahead.

const STRUCT_EYEPOINT_DYNAMIC_OFFSET                        = 1130;
	// XYZ (SIMCONNECT_DATA_XYZ structure, feet)
	// A variable offset away from the EYEPOINT POSITION

const EYEPOINT_POSITION                                     = 1131;
	// XYZ (SIMCONNECT_DATA_XYZ structure, feet)
	// The eyepoint position relative to the reference datum position for the aircraft.

const AIRSPEED_TRUE                                         = 1132;
	// FLOAT32 (Knots)
	// True airspeed

const AIRSPEED_INDICATED                                    = 1133;
	// FLOAT32 (Knots)
	// Indicated airspeed

const AIRSPEED_TRUE_CALIBRATE                               = 1134;
	// FLOAT32 (Degrees)
	// Angle of True calibration scale on airspeed indicator

const AIRSPEED_BARBER_POLE                                  = 1135;
	// FLOAT32 (Knots)
	// Redline airspeed (dynamic on some aircraft)

const AIRSPEED_MACH                                         = 1136;
	// FLOAT32 (Mach)
	// Current mach

const VERTICAL_SPEED                                        = 1137;
	// FLOAT32 (Feet per second)
	// Vertical speed indication

const MACH_MAX_OPERATE                                      = 1138;
	// FLOAT32 (Mach)
	// Maximum design mach

const STALL_WARNING                                         = 1139;
	// INT32 (Bool)
	// Stall warning state

const OVERSPEED_WARNING                                     = 1140;
	// INT32 (Bool)
	// Overspeed warning state

const BARBER_POLE_MACH                                      = 1141;
	// FLOAT32 (Mach)
	// Mach associated with maximum airspeed

const INDICATED_ALTITUDE                                    = 1142;
	// FLOAT32 (Feet)
	// Altimeter indication

const KOHLSMAN_SETTING_MB                                   = 1143;
	// FLOAT32 (Millibars)
	// Altimeter setting

const KOHLSMAN_SETTING_HG                                   = 1144;
	// FLOAT32 (Inches of Mercury, inHg)
	// Altimeter setting

const ATTITUDE_INDICATOR_PITCH_DEGREES                      = 1145;
	// FLOAT32 (Radians)
	// AI pitch indication

const ATTITUDE_INDICATOR_BANK_DEGREES                       = 1146;
	// FLOAT32 (Radians)
	// AI bank indication

const ATTITUDE_BARS_POSITION                                = 1147;
	// FLOAT32 (Percent over 100)
	// AI reference pitch reference bars

const ATTITUDE_CAGE                                         = 1148;
	// INT32 (Bool)
	// AI caged state

const WISKEY_COMPASS_INDICATION_DEGREES                     = 1149;
	// FLOAT32 (Degrees)
	// Magnetic compass indication

const PLANE_HEADING_DEGREES_GYRO                            = 1150;
	// FLOAT32 (Radians)
	// Heading indicator (directional gyro) indication

const HEADING_INDICATOR                                     = 1151;
	// FLOAT32 (Radians)
	// Heading indicator (directional gyro) indication

const GYRO_DRIFT_ERROR                                      = 1152;
	// FLOAT32 (Radians)
	// Angular error of heading indicator

const DELTA_HEADING_RATE                                    = 1153;
	// FLOAT32 (Radians per second)
	// Rate of turn of heading indicator

const TURN_COORDINATOR_BALL                                 = 1154;
	// INT32 (Position 128)
	// Turn coordinator ball position [-127 to 127]

const ANGLE_OF_ATTACK_INDICATOR                             = 1155;
	// FLOAT32 (Radians)
	// AoA indication

const RADIO_HEIGHT                                          = 1156;
	// FLOAT32 (Feet)
	// Radar altitude

const PARTIAL_PANEL_ADF                                     = 1157;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_AIRSPEED                                = 1158;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_ALTIMETER                               = 1159;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_ATTITUDE                                = 1160;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_COMM                                    = 1161;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_COMPASS                                 = 1162;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_ELECTRICAL                              = 1163;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_AVIONICS                                = 1164;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_ENGINE                                  = 1165;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_FUEL_INDICATOR                          = 1166;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_HEADING                                 = 1167;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_VERTICAL_VELOCITY                       = 1168;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_TRANSPONDER                             = 1169;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_NAV                                     = 1170;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_PITOT                                   = 1171;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_TURN_COORDINATOR                        = 1172;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_VACUUM                                  = 1173;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const PARTIAL_PANEL_TACAN                                   = 1174;
	// INT32 (Enum)
	// Gauge fail flag (0 = ok, 1 = fail, 2 = blank)

const MAX_G_FORCE                                           = 1175;
	// FLOAT32 (Gforce)
	// Maximum G force attained

const MIN_G_FORCE                                           = 1176;
	// FLOAT32 (Gforce)
	// Minimum G force attained

const SUCTION_PRESSURE                                      = 1177;
	// FLOAT32 (Inches of Mercury, inHg)
	// Vacuum system suction pressure

const AVIONICS_MASTER_SWITCH                                = 1178;
	// INT32 (Bool)
	// Avionics switch state

const NAV_SOUND                                             = 2105;
	// Array [1..2] of INT32 (Bool)
	// Nav audio flag. Index of 1 or 2.

const DME_SOUND                                             = 1179;
	// INT32 (Bool)
	// DME audio flag

const TACAN_DME_SOUND                                       = 1180;
	// INT32 (Bool)
	// Tacan DME audio flag

const ADF_SOUND                                             = 2106;
	// Array [0..1] of INT32 (Bool)
	// ADF audio flag. Index of 0 or 1.

const TACAN_SOUND                                           = 2107;
	// Array [0..1] of INT32 (Bool)
	// Tacan audio flag. Index of 0 or 1.

const MARKER_SOUND                                          = 1181;
	// INT32 (Bool)
	// Marker audio flag

const COM_TRANSMIT                                          = 2108;
	// Array [1..2] of INT32 (Bool)
	// Audio panel com transmit state. Index of 1 or 2.

const COM_RECIEVE_ALL                                       = 1182;
	// INT32 (Bool)
	// Flag if all Coms receiving

const COM_ACTIVE_FREQUENCY                                  = 2109;
	// Array [1..2] of INT32 (Frequency BCD16)
	// Com frequency. Index is 1 or 2.

const COM_STANDBY_FREQUENCY                                 = 2110;
	// Array [1..2] of INT32 (Frequency BCD16)
	// Com standby frequency. Index is 1 or 2.

const COM_STATUS                                            = 2111;
	// Array [1..2] of INT32 (Enum)
	// Radio status flag :
	// -1 =Invalid
	// 0 = OK
	// 1 = Does not exist
	// 2 = No electricity
	// 3 = Failed

const NAV_AVAILABLE                                         = 2112;
	// Array [1..2] of INT32 (Bool)
	// Flag if Nav equipped on aircraft

const NAV_ACTIVE_FREQUENCY                                  = 2113;
	// Array [1..2] of FLOAT32 (MHz)
	// Nav active frequency. Index is 1 or 2.

const NAV_STANDBY_FREQUENCY                                 = 2114;
	// Array [1..2] of FLOAT32 (MHz)
	// Nav standby frequency. Index is 1 or 2.

const NAV_SIGNAL                                            = 2115;
	// Array [1..2] of INT32 (Number)
	// Nav signal strength

const NAV_HAS_NAV                                           = 2116;
	// Array [1..2] of INT32 (Bool)
	// Flag if Nav has signal

const NAV_HAS_LOCALIZER                                     = 2117;
	// Array [1..2] of INT32 (Bool)
	// Flag if tuned station is a localizer

const NAV_HAS_DME                                           = 2118;
	// Array [1..2] of INT32 (Bool)
	// Flag if tuned station has a DME

const NAV_HAS_GLIDE_SLOPE                                   = 2119;
	// Array [1..2] of INT32 (Bool)
	// Flag if tuned station has a glideslope

const NAV_BACK_COURSE_FLAGS                                 = 2120;
	// Array [1..2] of INT32 (Flags)
	// Returns the following bit flags:
	// BIT0: 1=back course available
	// BIT1: 1=localizer tuned in
	// BIT2: 1=on course
	// BIT7: 1=station active

const NAV_MAGVAR                                            = 2121;
	// Array [1..2] of FLOAT32 (Degrees)
	// Magnetic variation of tuned nav station

const NAV_RADIAL                                            = 2122;
	// Array [1..2] of FLOAT32 (Degrees)
	// Radial that aircraft is on

const NAV_RADIAL_ERROR                                      = 2123;
	// Array [1..2] of FLOAT32 (Degrees)
	// Difference between current radial and OBS tuned radial

const NAV_LOCALIZER                                         = 2124;
	// Array [1..2] of FLOAT32 (Degrees)
	// Localizer course heading

const NAV_GLIDE_SLOPE_ERROR                                 = 2125;
	// Array [1..2] of FLOAT32 (Degrees)
	// Difference between current position and glideslope angle. Note that this provides 32 bit floating
	// point precision, rather than the 8 bit integer precision of NAV GSI.

const NAV_CDI                                               = 2126;
	// Array [1..2] of INT32 (Number)
	// CDI needle deflection (+/- 127)

const NAV_GSI                                               = 2127;
	// Array [1..2] of INT32 (Number)
	// Glideslope needle deflection (+/- 119). Note that this provides only 8 bit precision, whereas NAV
	// GLIDE SLOPE ERROR provides 32 bit floating point precision.

const NAV_TOFROM                                            = 2128;
	// Array [1..2] of INT32 (Enum)
	// Nav TO/FROM flag:
	// 0 = Off
	// 1 = TO
	// 2 = FROM

const NAV_GS_FLAG                                           = 2129;
	// Array [1..2] of INT32 (Bool)
	// Glideslope flag

const NAV_OBS                                               = 2130;
	// Array [1..2] of FLOAT32 (Degrees)
	// OBS setting. Index of 1 or 2.

const NAV_DME                                               = 2131;
	// Array [1..2] of FLOAT32 (Nautical miles)
	// DME distance

const NAV_DMESPEED                                          = 2132;
	// Array [1..2] of FLOAT32 (Knots)
	// DME speed

const ADF_ACTIVE_FREQUENCY                                  = 2133;
	// Array [1..2] of INT32 (Frequency ADF BCD32)
	// ADF frequency. Index of 1 or 2.

const ADF_STANDBY_FREQUENCY                                 = 2134;
	// Array [1..2] of FLOAT32 (Hz)
	// ADF standby frequency

const ADF_RADIAL                                            = 2135;
	// Array [1..2] of FLOAT32 (Degrees)
	// Current direction from NDB station

const ADF_SIGNAL                                            = 2136;
	// Array [1..2] of INT32 (Number)
	// Signal strength

const TACAN_ACTIVE_CHANNEL                                  = 2137;
	// Array [1..2] of INT32 (Number)
	// Active channel

const TACAN_STANDBY_CHANNEL                                 = 2138;
	// Array [1..2] of INT32 (Number)
	// Standby channel

const TACAN_XY_BAND                                         = 2139;
	// Array [1..2] of INT32 (Enum)
	// Selected X-Y Band (0 = X, 1 = Y)

const TACAN_RADIAL                                          = 2140;
	// Array [1..2] of FLOAT32 (Degrees)
	// Direction from the station

const TACAN_SIGNAL                                          = 2141;
	// Array [1..2] of INT32 (Number)
	// Tacan signal strength

const TACAN_AVAILABLE                                       = 2142;
	// Array [1..2] of INT32 (Bool)
	// Flag if equipped on object

const TACAN_HAS_NAV                                         = 2143;
	// Array [1..2] of INT32 (Bool)
	// Flag if Tacan has lateral signal

const TACAN_MAGVAR                                          = 2144;
	// Array [1..2] of FLOAT32 (Degrees)
	// Magnetic variation of tuned station

const TACAN_DME                                             = 2145;
	// Array [1..2] of FLOAT32 (Nautical Miles)
	// Distance from tuned station

const TACAN_DMESPEED                                        = 2146;
	// Array [1..2] of FLOAT32 (Knots)
	// DME speed relative to tuned station

const TRANSPONDER_CODE                                      = 2147;
	// Array [1..1] of INT32 (BCO16)
	// 4-digit code

const MARKER_BEACON_STATE                                   = 1183;
	// INT32 (Enum)
	// Marker beacon state:
	// 0 = None
	// 1 = Outer
	// 2 = Middle
	// 3 = Inner

const INNER_MARKER                                          = 1184;
	// INT32 (Bool)
	// Inner marker state

const MIDDLE_MARKER                                         = 1185;
	// INT32 (Bool)
	// Middle marker state

const OUTER_MARKER                                          = 1186;
	// INT32 (Bool)
	// Outer marker state

const NAV_RAW_GLIDE_SLOPE                                   = 2148;
	// Array [1..2] of FLOAT32 (Degrees)
	// Glide slope angle

const ADF_CARD                                              = 1187;
	// FLOAT32 (Degrees)
	// ADF compass rose setting

const HSI_CDI_NEEDLE                                        = 1188;
	// INT32 (Number)
	// Needle deflection (+/- 127)

const HSI_GSI_NEEDLE                                        = 1189;
	// INT32 (Number)
	// Needle deflection (+/- 119)

const HSI_CDI_NEEDLE_VALID                                  = 1190;
	// INT32 (Bool)
	// Signal valid

const HSI_GSI_NEEDLE_VALID                                  = 1191;
	// INT32 (Bool)
	// Signal valid

const HSI_TF_FLAGS                                          = 1192;
	// INT32 (Enum)
	// Nav TO/FROM flag:
	// 0 = Off
	// 1 = TO
	// 2 = FROM

const HSI_BEARING_VALID                                     = 1193;
	// INT32 (Bool)
	// This will return true if the HSI BEARING variable contains valid data.

const HSI_BEARING                                           = 1194;
	// FLOAT32 (Degrees)
	// If the GPS DRIVES NAV1 variable is true and the HSI BEARING VALID variable is true, this variable
	// contains the HSI needle bearing. If the GPS DRIVES NAV1 variable is false and the HSI BEARING VALID
	// variable is true, this variable contains the ADF1 frequency.

const HSI_HAS_LOCALIZER                                     = 1195;
	// INT32 (Bool)
	// Station is a localizer

const HSI_SPEED                                             = 1196;
	// FLOAT32 (Knots)
	// DME/GPS speed

const HSI_DISTANCE                                          = 1197;
	// FLOAT32 (Nautical miles)
	// DME/GPS distance

const GPS_POSITION_LAT                                      = 1198;
	// FLOAT32 (Degrees)
	// Current GPS latitude

const GPS_POSITION_LON                                      = 1199;
	// FLOAT32 (Degrees)
	// Current GPS longitude

const GPS_POSITION_ALT                                      = 1200;
	// FLOAT32 (Meters)
	// Current GPS altitude

const GPS_MAGVAR                                            = 1201;
	// FLOAT32 (Radians)
	// Current GPS magnetic variation

const GPS_IS_ACTIVE_FLIGHT_PLAN                             = 1202;
	// INT32 (Bool)
	// Flight plan mode active

const GPS_IS_ACTIVE_WAY_POINT                               = 1203;
	// INT32 (Bool)
	// Waypoint mode active

const GPS_IS_ARRIVED                                        = 1204;
	// INT32 (Bool)
	// Is flight plan destination reached

const GPS_IS_DIRECTTO_FLIGHTPLAN                            = 1205;
	// INT32 (Bool)
	// Is Direct To Waypoint mode active

const GPS_GROUND_SPEED                                      = 1206;
	// FLOAT32 (Meters per second)
	// Current ground speed

const GPS_GROUND_TRUE_HEADING                               = 1207;
	// FLOAT32 (Radians)
	// Current true heading

const GPS_GROUND_MAGNETIC_TRACK                             = 1208;
	// FLOAT32 (Radians)
	// Current magnetic ground track

const GPS_GROUND_TRUE_TRACK                                 = 1209;
	// FLOAT32 (Radians)
	// Current true ground track

const GPS_WP_DISTANCE                                       = 1210;
	// FLOAT32 (Meters)
	// Distance to waypoint

const GPS_WP_BEARING                                        = 1211;
	// FLOAT32 (Radians)
	// Magnetic bearing to waypoint

const GPS_WP_TRUE_BEARING                                   = 1212;
	// FLOAT32 (Radians)
	// True bearing to waypoint

const GPS_WP_CROSS_TRK                                      = 1213;
	// FLOAT32 (Meters)
	// Cross track distance

const GPS_WP_DESIRED_TRACK                                  = 1214;
	// FLOAT32 (Radians)
	// Desired track to waypoint

const GPS_WP_TRUE_REQ_HDG                                   = 1215;
	// FLOAT32 (Radians)
	// Required true heading to waypoint

const GPS_WP_VERTICAL_SPEED                                 = 1216;
	// FLOAT32 (Meters per second)
	// Vertical speed to waypoint

const GPS_WP_TRACK_ANGLE_ERROR                              = 1217;
	// FLOAT32 (Radians)
	// Tracking angle error to waypoint

const GPS_ETE                                               = 1218;
	// FLOAT32 (Seconds)
	// Estimated time enroute to destination

const GPS_ETA                                               = 1219;
	// FLOAT32 (Seconds)
	// Estimated time of arrival at destination

const GPS_WP_NEXT_LAT                                       = 1220;
	// FLOAT32 (Degrees)
	// Latitude of next waypoint

const GPS_WP_NEXT_LON                                       = 1221;
	// FLOAT32 (Degrees)
	// Longitude of next waypoint

const GPS_WP_NEXT_ALT                                       = 1222;
	// FLOAT32 (Meters)
	// Altitude of next waypoint

const GPS_WP_PREV_VALID                                     = 1223;
	// INT32 (Bool)
	// Is previous waypoint valid (i.e. current waypoint is not the first waypoint)

const GPS_WP_PREV_LAT                                       = 1224;
	// FLOAT32 (Degrees)
	// Latitude of previous waypoint

const GPS_WP_PREV_LON                                       = 1225;
	// FLOAT32 (Degrees)
	// Longitude of previous waypoint

const GPS_WP_PREV_ALT                                       = 1226;
	// FLOAT32 (Meters)
	// Altitude of previous waypoint

const GPS_WP_ETE                                            = 1227;
	// FLOAT32 (Seconds)
	// Estimated time en route to waypoint

const GPS_WP_ETA                                            = 1228;
	// FLOAT32 (Seconds)
	// Estimated time of arrival at waypoint

const GPS_COURSE_TO_STEER                                   = 1229;
	// FLOAT32 (Radians)
	// Suggested heading to steer (for autopilot)

const GPS_FLIGHT_PLAN_WP_INDEX                              = 1230;
	// INT32 (Number)
	// Index of waypoint

const GPS_FLIGHT_PLAN_WP_COUNT                              = 1231;
	// INT32 (Number)
	// Number of waypoints

const GPS_IS_ACTIVE_WP_LOCKED                               = 1232;
	// INT32 (Bool)
	// Is switching to next waypoint locked

const GPS_IS_APPROACH_LOADED                                = 1233;
	// INT32 (Bool)
	// Is approach loaded

const GPS_IS_APPROACH_ACTIVE                                = 1234;
	// INT32 (Bool)
	// Is approach mode active

const GPS_APPROACH_MODE                                     = 1235;
	// INT32 (Enum)
	// Sub mode within approach mode :
	// 0 = None
	// 1 = Transition
	// 2 = Final
	// 3 = Missed

const GPS_APPROACH_WP_TYPE                                  = 1236;
	// INT32 (Enum)
	// Waypoint type within approach mode :
	// 0 = None
	// 1 = Fix
	// 2 = Procedure turn left
	// 3 = Procedure turn right
	// 4 = Dme arc left
	// 5 = Dme arc right
	// 6 = Holding left
	// 7 = Holding right
	// 8 = Distance
	// 9 = Altitude
	// 10 = Manual sequence
	// 11 = Vector to final

const GPS_APPROACH_IS_WP_RUNWAY                             = 1237;
	// INT32 (Bool)
	// Waypoint is the runway

const GPS_APPROACH_SEGMENT_TYPE                             = 1238;
	// INT32 (Enum)
	// Segment type within approach :
	// 0 = Line
	// 1 = Arc clockwise
	// 2 = Arc counter-clockwise

const GPS_APPROACH_APPROACH_INDEX                           = 1239;
	// INT32 (Number)
	// Index of approach for given airport

const GPS_APPROACH_APPROACH_TYPE                            = 1240;
	// INT32 (Enum)
	// Approach type :
	// 0 = None
	// 1 = GPS
	// 2 = VOR
	// 3 = NDB
	// 4 = ILS
	// 5 = Localizer
	// 6 = SDF
	// 7 = LDA
	// 8 = VOR/DME
	// 9 = NDB/DME
	// 10 = RNAV
	// 11 = Backcourse

const GPS_APPROACH_TRANSITION_INDEX                         = 1241;
	// INT32 (Number)
	// Index of approach transition

const GPS_APPROACH_IS_FINAL                                 = 1242;
	// INT32 (Bool)
	// Is approach transition final approach segment

const GPS_APPROACH_IS_MISSED                                = 1243;
	// INT32 (Bool)
	// Is approach segment missed approach segment

const GPS_APPROACH_TIMEZONE_DEVIATION                       = 1244;
	// FLOAT32 (Seconds)
	// Deviation of local time from GMT

const GPS_APPROACH_WP_INDEX                                 = 1245;
	// INT32 (Number)
	// Index of current waypoint

const GPS_APPROACH_WP_COUNT                                 = 1246;
	// INT32 (Number)
	// Number of waypoints

const GPS_DRIVES_NAV1                                       = 1247;
	// INT32 (Bool)
	// GPS is driving Nav 1 indicator

const COM_RECEIVE_ALL                                       = 1248;
	// INT32 (Bool)
	// Toggles all COM radios to receive on

const COM_AVAILABLE                                         = 1249;
	// INT32 (Bool)
	// True if either COM1 or COM2 is available

const COM_TEST                                              = 2149;
	// Array [1..2] of INT32 (Bool)
	// Enter an index of 1 or 2. True if the COM system is working.

const TRANSPONDER_AVAILABLE                                 = 1250;
	// INT32 (Bool)
	// True if a transponder is available

const ADF_AVAILABLE                                         = 1251;
	// INT32 (Bool)
	// True if ADF is available

const ADF_FREQUENCY                                         = 2150;
	// Array [1..2] of INT32 (Frequency BCD16)
	// Legacy, use ADF ACTIVE FREQUENCY

const ADF_EXT_FREQUENCY                                     = 2151;
	// Array [1..2] of INT32 (Frequency BCD16)
	// Legacy, use ADF ACTIVE FREQUENCY

const ADF_IDENT                                             = 1252;
	// STRING256 (String)
	// ICAO code

const ADF_NAME                                              = 1253;
	// STRING256 (String)
	// Descriptive name

const NAV_IDENT                                             = 1254;
	// STRING256 (String)
	// ICAO code

const NAV_NAME                                              = 1255;
	// STRING256 (String)
	// Descriptive name

const TACAN_IDENT                                           = 1256;
	// STRING256 (String)
	// ICAO code

const TACAN_NAME                                            = 1257;
	// STRING256 (String)
	// Descriptive name

const NAV_CODES                                             = 2152;
	// Array [1..2] of INT32 (Flags)
	// Returns bit flags with the following meaning:
	// BIT7: 0= VOR  1= Localizer
	// BIT6: 1= glideslope available
	// BIT5: 1= no localizer backcourse
	// BIT4: 1= DME transmitter at glide slope transmitter
	// BIT3: 1= no nav signal available
	// BIT2: 1= voice available
	// BIT1: 1 = TACAN available
	// BIT0: 1= DME available

const NAV_GLIDE_SLOPE                                       = 1258;
	// INT32 (Number)
	// The glide slope gradient.

const NAV_RELATIVE_BEARING_TO_STATION                       = 2153;
	// Array [1..2] of FLOAT32 (Degrees)
	// Relative bearing to station

const SELECTED_DME                                          = 1259;
	// INT32 (Number)
	// Selected DME

const GPS_WP_NEXT_ID                                        = 1260;
	// STRING256 (String)
	// ID of next GPS waypoint

const GPS_WP_PREV_ID                                        = 1261;
	// STRING256 (String)
	// ID of previous GPS waypoint

const GPS_TARGET_DISTANCE                                   = 1262;
	// FLOAT32 (Meters)
	// Distance to target

const GPS_TARGET_ALTITUDE                                   = 1263;
	// FLOAT32 (Meters)
	// Altitude of GPS target

const ADF_LATLONALT                                         = 2154;
	// Array [1..2] of LATLONALT (SIMCONNECT_DATA_LATLONALT structure)
	// Returns the latitude, longitude and altitude of the station the radio equipment is currently tuned
	// to, or zeros if the radio is not tuned to any ADF station. Index of 1 or 2 for ADF 1 and ADF 2.

const NAV_VOR_LATLONALT                                     = 2155;
	// Array [1..2] of LATLONALT (SIMCONNECT_DATA_LATLONALT structure)
	// Returns the VOR station latitude, longitude and altitude.

const NAV_GS_LATLONALT                                      = 2156;
	// Array [1..2] of LATLONALT (SIMCONNECT_DATA_LATLONALT structure)
	// Returns the glide slope.

const NAV_DME_LATLONALT                                     = 2157;
	// Array [1..2] of LATLONALT (SIMCONNECT_DATA_LATLONALT structure)
	// Returns the DME station.

const TACAN_LATLONALT                                       = 2158;
	// Array [1..2] of LATLONALT (SIMCONNECT_DATA_LATLONALT structure)
	// Returns the latitude, longitude and altitude of the station the radio equipment is currently tuned
	// to, or zeros if the radio is not tuned to any Tacan station. Index of 1 or 2 for Tacan 1 and Tacan
	// 2.

const TACAN_DME_LATLONALT                                   = 2159;
	// Array [1..2] of LATLONALT (SIMCONNECT_DATA_LATLONALT structure)
	// Returns the Tacan DME station.

const INNER_MARKER_LATLONALT                                = 1264;
	// LATLONALT (SIMCONNECT_DATA_LATLONALT structure)
	// Returns the latitude, longitude and altitude of the inner marker of an approach to a runway, if the
	// aircraft is within the required proximity, otherwise it will return zeros.

const MIDDLE_MARKER_LATLONALT                               = 1265;
	// LATLONALT (SIMCONNECT_DATA_LATLONALT structure)
	// Returns the latitude, longitude and altitude of the middle marker.

const OUTER_MARKER_LATLONALT                                = 1266;
	// LATLONALT (SIMCONNECT_DATA_LATLONALT structure)
	// Returns the latitude, longitude and altitude of the outer marker.

const YOKE_Y_POSITION                                       = 1267;
	// INT32 (Position)
	// Control deflection fore/aft (for animation) [-1.0: Fully In, 1.0: Fully Out]

const YOKE_X_POSITION                                       = 1268;
	// INT32 (Position)
	// Control deflection left/right (for animation) [-1.0: Fully Left, 1.0: Fully Right]

const RUDDER_PEDAL_POSITION                                 = 1269;
	// INT32 (Position)
	// Rudder pedal deflection (for animation) [-1.0: Left Fully In, 1.0: Right Fully In]

const RUDDER_POSITION                                       = 1270;
	// INT32 (Position)
	// Rudder input deflection [-1.0: Full Left, 1.0: Full Right]

const ELEVATOR_POSITION                                     = 1271;
	// INT32 (Position)
	// Elevator input deflection [-1.0: Full Down, 1.0: Full Up]

const AILERON_POSITION                                      = 1272;
	// INT32 (Position)
	// Aileron input left/right [-1.0: Full Left, 1.0: Full Right]

const ELEVATOR_TRIM_POSITION                                = 1273;
	// FLOAT32 (Radians)
	// Elevator trim deflection

const ELEVATOR_TRIM_INDICATOR                               = 1274;
	// INT32 (Position)
	// Elevator trim (for indication) [-1.0: Full Down, 0: Full Up]

const ELEVATOR_TRIM_PCT                                     = 1275;
	// FLOAT32 (Percent over 100)
	// Percent elevator trim

const BRAKE_LEFT_POSITION                                   = 1276;
	// INT32 (Position)
	// Percent left brake [0 Off, 1.0: Full Left Brake]
	// 'Note: Setting this variable is momentary, as the simulation value will bleed back to zero. We are
	// simulating spring-loaded toe brakes, and this is just the brake 'effect'. To set the brakes to a
	// give position, use the event 'KEY_AXIS_LEFT_BRAKE_SET'.'

const BRAKE_RIGHT_POSITION                                  = 1277;
	// INT32 (Position)
	// Percent right brake [0 Off, 1.0: Full Right Brake]
	// 'Note: Setting this variable is momentary, as the simulation value will bleed back to zero. We are
	// simulating spring-loaded toe brakes, and this is just the brake 'effect'. To set the brakes to a
	// give position, use the event 'KEY_AXIS_RIGHT_BRAKE_SET'.'

const BRAKE_INDICATOR                                       = 1278;
	// INT32 (Position)
	// Brake on indication [0.0: Off, 1.0: Full Brakes]

const BRAKE_PARKING_POSITION                                = 1279;
	// INT32 (Bool)
	// Parking brake on [0: Off, 1.0: Full Parking Brake]

const BRAKE_PARKING_INDICATOR                               = 1280;
	// INT32 (Bool)
	// Parking brake indicator

const SPOILERS_ARMED                                        = 1281;
	// INT32 (Bool)
	// Auto-spoilers armed

const SPOILERS_HANDLE_POSITION                              = 1282;
	// INT32 (Position)
	// Spoiler handle position [0: Retracted, 1.0: Fully Extended]

const SPOILERS_LEFT_POSITION                                = 1283;
	// INT32 (Position)
	// Percent left spoiler deflected [0: Retracted, 1.0: Fully Extended]

const SPOILERS_RIGHT_POSITION                               = 1284;
	// INT32 (Position)
	// Percent right spoiler deflected [0: Retracted, 1.0: Fully Extended]

const FLAPS_HANDLE_PERCENT                                  = 1285;
	// FLOAT32 (Percent over 100)
	// Percent flap handle extended

const FLAPS_HANDLE_INDEX                                    = 1286;
	// INT32 (Number)
	// Index of current flap position

const FLAPS_NUM_HANDLE_POSITIONS                            = 1287;
	// INT32 (Number)
	// Number of flap positions

const TRAILING_EDGE_FLAPS_LEFT_PERCENT                      = 1288;
	// FLOAT32 (Percent over 100)
	// Percent left trailing edge flap extended

const TRAILING_EDGE_FLAPS_RIGHT_PERCENT                     = 1289;
	// FLOAT32 (Percent over 100)
	// Percent right trailing edge flap extended

const TRAILING_EDGE_FLAPS_LEFT_ANGLE                        = 1290;
	// FLOAT32 (Radians)
	// Angle left trailing edge flap extended. Use TRAILING EDGE FLAPS LEFT PERCENT to set a value.

const TRAILING_EDGE_FLAPS_RIGHT_ANGLE                       = 1291;
	// FLOAT32 (Radians)
	// Angle right trailing edge flap extended. Use TRAILING EDGE FLAPS RIGHT PERCENT to set a value.

const LEADING_EDGE_FLAPS_LEFT_PERCENT                       = 1292;
	// FLOAT32 (Percent over 100)
	// Percent left leading edge flap extended

const LEADING_EDGE_FLAPS_RIGHT_PERCENT                      = 1293;
	// FLOAT32 (Percent over 100)
	// Percent right leading edge flap extended

const LEADING_EDGE_FLAPS_LEFT_ANGLE                         = 1294;
	// FLOAT32 (Radians)
	// Angle left leading edge flap extended. Use LEADING EDGE FLAPS LEFT PERCENT to set a value.

const LEADING_EDGE_FLAPS_RIGHT_ANGLE                        = 1295;
	// FLOAT32 (Radians)
	// Angle right leading edge flap extended. Use LEADING EDGE FLAPS RIGHT PERCENT to set a value.

const AILERON_LEFT_DEFLECTION                               = 1296;
	// FLOAT32 (Radians)
	// Angle deflection

const AILERON_LEFT_DEFLECTION_PCT                           = 1297;
	// FLOAT32 (Percent over 100)
	// Percent deflection

const AILERON_RIGHT_DEFLECTION                              = 1298;
	// FLOAT32 (Radians)
	// Angle deflection

const AILERON_RIGHT_DEFLECTION_PCT                          = 1299;
	// FLOAT32 (Percent over 100)
	// Percent deflection

const AILERON_AVERAGE_DEFLECTION                            = 1300;
	// FLOAT32 (Radians)
	// Angle deflection

const AILERON_TRIM                                          = 1301;
	// FLOAT32 (Radians)
	// Angle deflection

const AILERON_TRIM_PCT                                      = 1313;
	// FLOAT32 (Percent over 100)
	// The trim position of the ailerons. Zero is fully retracted.

const RUDDER_DEFLECTION                                     = 1303;
	// FLOAT32 (Radians)
	// Angle deflection

const RUDDER_DEFLECTION_PCT                                 = 1304;
	// FLOAT32 (Percent over 100)
	// Percent deflection

const RUDDER_TRIM                                           = 1305;
	// FLOAT32 (Radians)
	// Angle deflection

const RUDDER_TRIM_PCT                                       = 1314;
	// FLOAT32 (Percent over 100)
	// The trim position of the rudder. Zero is no trim.

const FLAPS_AVAILABLE                                       = 1307;
	// INT32 (Bool)
	// True if flaps available

const FLAP_DAMAGE_BY_SPEED                                  = 1308;
	// INT32 (Bool)
	// True if flagps are damaged by excessive speed

const FLAP_SPEED_EXCEEDED                                   = 1309;
	// INT32 (Bool)
	// True if safe speed limit for flaps exceeded

const ELEVATOR_DEFLECTION                                   = 1310;
	// FLOAT32 (Radians)
	// Angle deflection

const ELEVATOR_DEFLECTION_PCT                               = 1311;
	// FLOAT32 (Percent over 100)
	// Percent deflection

const ALTERNATE_STATIC_SOURCE_OPEN                          = 1312;
	// INT32 (Bool)
	// Alternate static air source

const FOLDING_WING_HANDLE_POSITION                          = 1315;
	// INT32 (Bool)
	// True if the folding wing handle is engaged.

const FUEL_DUMP_SWITCH                                      = 1316;
	// INT32 (Bool)
	// If true the aircraft is dumping fuel at the rate set in the configuration file.

const AUTOPILOT_AVAILABLE                                   = 1317;
	// INT32 (Bool)
	// Available flag

const AUTOPILOT_MASTER                                      = 1318;
	// INT32 (Bool)
	// On/off flag

const AUTOPILOT_NAV_SELECTED                                = 1319;
	// INT32 (Number)
	// Index of Nav radio selected

const AUTOPILOT_WING_LEVELER                                = 1320;
	// INT32 (Bool)
	// Wing leveler active

const AUTOPILOT_NAV1_LOCK                                   = 1345;
	// INT32 (Bool)
	// True if autopilot nav1 lock applied

const AUTOPILOT_HEADING_LOCK                                = 1322;
	// INT32 (Bool)
	// Heading mode active

const AUTOPILOT_HEADING_LOCK_DIR                            = 1323;
	// FLOAT32 (Degrees)
	// 'Selected heading ('heading bug')'

const AUTOPILOT_ALTITUDE_LOCK                               = 1324;
	// INT32 (Bool)
	// Altitude hole active

const AUTOPILOT_ALTITUDE_LOCK_VAR                           = 1325;
	// FLOAT32 (Feet)
	// 'Selected altitude ('Altitude bug')'

const AUTOPILOT_ATTITUDE_HOLD                               = 1326;
	// INT32 (Bool)
	// Attitude hold active

const AUTOPILOT_GLIDESLOPE_HOLD                             = 1327;
	// INT32 (Bool)
	// GS hold active

const AUTOPILOT_PITCH_HOLD_REF                              = 1328;
	// FLOAT32 (Radians)
	// Current reference pitch

const AUTOPILOT_APPROACH_HOLD                               = 1329;
	// INT32 (Bool)
	// Approach mode active

const AUTOPILOT_BACKCOURSE_HOLD                             = 1330;
	// INT32 (Bool)
	// Back course mode active

const AUTOPILOT_VERTICAL_HOLD_VAR                           = 1331;
	// FLOAT32 (Feet per minute)
	// 'Selected vertical speed ('VSI bug')'

const AUTOPILOT_PITCH_HOLD                                  = 1332;
	// INT32 (Bool)
	// Set to True if the autopilot pitch hold has is engaged.

const AUTOPILOT_FLIGHT_DIRECTOR_ACTIVE                      = 1333;
	// INT32 (Bool)
	// Flight director active

const AUTOPILOT_FLIGHT_DIRECTOR_PITCH                       = 1334;
	// FLOAT32 (Radians)
	// Reference pitch angle

const AUTOPILOT_FLIGHT_DIRECTOR_BANK                        = 1335;
	// FLOAT32 (Radians)
	// Reference bank angle

const AUTOPILOT_AIRSPEED_HOLD                               = 1336;
	// INT32 (Bool)
	// Airspeed hold active

const AUTOPILOT_AIRSPEED_HOLD_VAR                           = 1337;
	// FLOAT32 (Knots)
	// Selected airspeed

const AUTOPILOT_MACH_HOLD                                   = 1338;
	// INT32 (Bool)
	// Mach hold active

const AUTOPILOT_MACH_HOLD_VAR                               = 1339;
	// INT32 (Number)
	// Selected mach

const AUTOPILOT_YAW_DAMPER                                  = 1340;
	// INT32 (Bool)
	// Yaw damper active

const AUTOPILOT_RPM_HOLD_VAR                                = 1341;
	// INT32 (Number)
	// Selected rpm

const AUTOPILOT_THROTTLE_ARM                                = 1342;
	// INT32 (Bool)
	// Autothrottle armed

const AUTOPILOT_TAKEOFF_POWER_ACTIVE                        = 1343;
	// INT32 (Bool)
	// Takeoff / Go Around power mode active

const AUTOTHROTTLE_ACTIVE                                   = 1344;
	// INT32 (Bool)
	// Auto-throttle active

const AUTOPILOT_VERTICAL_HOLD                               = 1346;
	// INT32 (Bool)
	// True if autopilot vertical hold applied

const AUTOPILOT_RPM_HOLD                                    = 1347;
	// INT32 (Bool)
	// True if autopilot rpm hold applied

const AUTOPILOT_MAX_BANK                                    = 1348;
	// FLOAT32 (Radians)
	// True if autopilot max bank applied

const FLY_BY_WIRE_ELAC_SWITCH                               = 1349;
	// INT32 (Bool)
	// True if the fly by wire Elevators and Ailerons computer is on.

const FLY_BY_WIRE_FAC_SWITCH                                = 1350;
	// INT32 (Bool)
	// True if the fly by wire Flight Augmentation computer is on.

const FLY_BY_WIRE_SEC_SWITCH                                = 1351;
	// INT32 (Bool)
	// True if the fly by wire Spoilers and Elevators computer is on.

const FLY_BY_WIRE_ELAC_FAILED                               = 1352;
	// INT32 (Bool)
	// True if the Elevators and Ailerons computer has failed.

const FLY_BY_WIRE_FAC_FAILED                                = 1353;
	// INT32 (Bool)
	// True if the Flight Augmentation computer has failed.

const FLY_BY_WIRE_SEC_FAILED                                = 1354;
	// INT32 (Bool)
	// True if the Spoilers and Elevators computer has failed.

const IS_GEAR_RETRACTABLE                                   = 1355;
	// INT32 (Bool)
	// True if gear can be retracted

const IS_GEAR_SKIS                                          = 1356;
	// INT32 (Bool)
	// True if landing gear is skis

const IS_GEAR_FLOATS                                        = 1357;
	// INT32 (Bool)
	// True if landing gear is floats

const IS_GEAR_SKIDS                                         = 1358;
	// INT32 (Bool)
	// True if landing gear is skids

const IS_GEAR_WHEELS                                        = 1359;
	// INT32 (Bool)
	// True if landing gear is wheels

const GEAR_HANDLE_POSITION                                  = 1360;
	// INT32 (Bool)
	// True if gear handle is applied

const GEAR_HYDRAULIC_PRESSURE                               = 1361;
	// FLOAT32 (Pound force per square foot (psf))
	// Gear hydraulic pressure

const TAILWHEEL_LOCK_ON                                     = 1362;
	// INT32 (Bool)
	// True if tailwheel lock applied

const GEAR_CENTER_POSITION                                  = 1363;
	// FLOAT32 (Percent over 100)
	// Percent center gear extended

const GEAR_LEFT_POSITION                                    = 1364;
	// FLOAT32 (Percent over 100)
	// Percent left gear extended

const GEAR_RIGHT_POSITION                                   = 1365;
	// FLOAT32 (Percent over 100)
	// Percent right gear extended

const GEAR_TAIL_POSITION                                    = 1366;
	// FLOAT32 (Percent over 100)
	// Percent tail gear extended

const GEAR_AUX_POSITION                                     = 1367;
	// FLOAT32 (Percent over 100)
	// Percent auxiliary gear extended

const GEAR_POSITION                                         = 2160;
	// Array [0..3] of INT32 (Enum)
	// Position of landing gear:
	// 0 = unknown
	// 1 = up
	// 2 = down

const GEAR_ANIMATION_POSITION                               = 2161;
	// Array [0..3] of INT32 (Number)
	// Percent gear animation extended

const GEAR_TOTAL_PCT_EXTENDED                               = 1368;
	// FLOAT32 (Percentage)
	// Percent total gear extended

const AUTO_BRAKE_SWITCH_CB                                  = 1369;
	// INT32 (Number)
	// Auto brake switch position

const WATER_RUDDER_HANDLE_POSITION                          = 1370;
	// FLOAT32 (Percent over 100)
	// Position of the water rudder handle (0 handle retracted, 100 rudder handle applied)

const WATER_LEFT_RUDDER_EXTENDED                            = 1371;
	// FLOAT32 (Percentage)
	// Percent extended

const WATER_RIGHT_RUDDER_EXTENDED                           = 1372;
	// FLOAT32 (Percentage)
	// Percent extended

const GEAR_CENTER_STEER_ANGLE                               = 1373;
	// FLOAT32 (Percent over 100)
	// Center wheel angle, negative to the left, positive to the right.

const GEAR_LEFT_STEER_ANGLE                                 = 1374;
	// FLOAT32 (Percent over 100)
	// Left wheel angle, negative to the left, positive to the right.

const GEAR_RIGHT_STEER_ANGLE                                = 1375;
	// FLOAT32 (Percent over 100)
	// Right wheel angle, negative to the left, positive to the right.

const GEAR_AUX_STEER_ANGLE                                  = 1376;
	// FLOAT32 (Percent over 100)
	// Aux wheel angle, negative to the left, positive to the right. The aux wheel is the fourth set of
	// gear, sometimes used on helicopters.

const GEAR_STEER_ANGLE                                      = 2162;
	// Array [0..3] of FLOAT32 (Percent over 100)
	// Alternative method of getting the steer angle. Index is
	// 0 = center
	// 1 = left
	// 2 = right
	// 3 = aux

const WATER_LEFT_RUDDER_STEER_ANGLE                         = 1377;
	// FLOAT32 (Percent over 100)
	// Water left rudder angle, negative to the left, positive to the right.

const WATER_RIGHT_RUDDER_STEER_ANGLE                        = 1378;
	// FLOAT32 (Percent over 100)
	// Water right rudder angle, negative to the left, positive to the right.

const GEAR_CENTER_STEER_ANGLE_PCT                           = 1379;
	// FLOAT32 (Percent over 100)
	// Center steer angle as a percentage

const GEAR_LEFT_STEER_ANGLE_PCT                             = 1380;
	// FLOAT32 (Percent over 100)
	// Left steer angle as a percentage

const GEAR_RIGHT_STEER_ANGLE_PCT                            = 1381;
	// FLOAT32 (Percent over 100)
	// Right steer angle as a percentage

const GEAR_AUX_STEER_ANGLE_PCT                              = 1382;
	// FLOAT32 (Percent over 100)
	// Aux steer angle as a percentage

const GEAR_STEER_ANGLE_PCT                                  = 2163;
	// Array [0..3] of FLOAT32 (Percent over 100)
	// Alternative method of getting steer angle as a percentage. Index is
	// 0 = center
	// 1 = left
	// 2 = right
	// 3 = aux

const WATER_LEFT_RUDDER_STEER_ANGLE_PCT                     = 1383;
	// FLOAT32 (Percent over 100)
	// Water left rudder angle as a percentage

const WATER_RIGHT_RUDDER_STEER_ANGLE_PCT                    = 1384;
	// FLOAT32 (Percent over 100)
	// Water right rudder as a percentage

const WHEEL_RPM                                             = 2164;
	// Array [0..3] of FLOAT32 (Rpm)
	// Wheel rpm. Index is
	// 0 = center
	// 1 = left
	// 2 = right
	// 3 = aux

const CENTER_WHEEL_RPM                                      = 1385;
	// FLOAT32 (Rpm)
	// Center landing gear rpm

const LEFT_WHEEL_RPM                                        = 1386;
	// FLOAT32 (Rpm)
	// Left landing gear rpm

const RIGHT_WHEEL_RPM                                       = 1387;
	// FLOAT32 (Rpm)
	// Right landing gear rpm

const AUX_WHEEL_RPM                                         = 1388;
	// FLOAT32 (Rpm)
	// Rpm of fourth set of gear wheels.

const WHEEL_ROTATION_ANGLE                                  = 2165;
	// Array [0..3] of FLOAT32 (Radians)
	// Wheel rotation angle. Index is
	// 0 = center
	// 1 = left
	// 2 = right
	// 3 = aux

const CENTER_WHEEL_ROTATION_ANGLE                           = 1389;
	// FLOAT32 (Radians)
	// Center wheel rotation angle

const LEFT_WHEEL_ROTATION_ANGLE                             = 1390;
	// FLOAT32 (Radians)
	// Left wheel rotation angle

const RIGHT_WHEEL_ROTATION_ANGLE                            = 1391;
	// FLOAT32 (Radians)
	// Right wheel rotation angle

const AUX_WHEEL_ROTATION_ANGLE                              = 1392;
	// FLOAT32 (Radians)
	// Aux wheel rotation angle

const GEAR_EMERGENCY_HANDLE_POSITION                        = 1393;
	// INT32 (Bool)
	// True if gear emergency handle applied

const GEAR_WARNING                                          = 1394;
	// INT32 (Enum)
	// One of:
	// 0: unknown
	// 1: normal
	// 2: amphib

const ANTISKID_BRAKES_ACTIVE                                = 1395;
	// INT32 (Bool)
	// True if antiskid brakes active

const RETRACT_FLOAT_SWITCH                                  = 1396;
	// INT32 (Bool)
	// True if retract float switch on

const RETRACT_LEFT_FLOAT_EXTENDED                           = 1397;
	// FLOAT32 (Percent)
	// If aircraft has retractable floats. [0: Fully Retracted, 100: Fully Extended]

const RETRACT_RIGHT_FLOAT_EXTENDED                          = 1398;
	// FLOAT32 (Percent)
	// If aircraft has retractable floats. [0: Fully Retracted, 100: Fully Extended]

const STEER_INPUT_CONTROL                                   = 1399;
	// FLOAT32 (Percent over 100)
	// Position of steering tiller

const GEAR_DAMAGE_BY_SPEED                                  = 1400;
	// INT32 (Bool)
	// True if gear has been damaged by excessive speed

const GEAR_SPEED_EXCEEDED                                   = 1401;
	// INT32 (Bool)
	// True if safe speed limit for gear exceeded

const NOSEWHEEL_LOCK_ON                                     = 1402;
	// INT32 (Bool)
	// True if the nosewheel lock is engaged.

const AMBIENT_DENSITY                                       = 1403;
	// FLOAT32 (Slugs per cubic feet)
	// Ambient density

const AMBIENT_TEMPERATURE                                   = 1404;
	// FLOAT32 (Celsius)
	// Ambient temperature

const AMBIENT_PRESSURE                                      = 1405;
	// FLOAT32 (Inches of mercury, inHg)
	// Ambient pressure

const AMBIENT_WIND_VELOCITY                                 = 1406;
	// FLOAT32 (Knots)
	// Wind velocity

const AMBIENT_WIND_DIRECTION                                = 1407;
	// FLOAT32 (Degrees)
	// Wind direction

const AMBIENT_WIND_X                                        = 1408;
	// FLOAT32 (Meters per second)
	// Wind component in East/West direction.

const AMBIENT_WIND_Y                                        = 1409;
	// FLOAT32 (Meters per second)
	// Wind component in vertical direction.

const AMBIENT_WIND_Z                                        = 1410;
	// FLOAT32 (Meters per second)
	// Wind component in North/South direction.

const STRUCT_AMBIENT_WIND                                   = 1411;
	// FLOAT32 (Feet_per_second)
	// X (latitude), Y (vertical) and Z (longitude) components of the wind.

const AMBIENT_PRECIP_STATE                                  = 1412;
	// INT32 (Mask)
	// Precip state (bit field)
	// 2 = None
	// 4 = Rain
	// 8 = Snow

const AIRCRAFT_WIND_X                                       = 1413;
	// FLOAT32 (Knots)
	// Wind component in aircraft lateral axis

const AIRCRAFT_WIND_Y                                       = 1414;
	// FLOAT32 (Knots)
	// Wind component in aircraft vertical axis

const AIRCRAFT_WIND_Z                                       = 1415;
	// FLOAT32 (Knots)
	// Wind component in aircraft longitudinal axis

const BAROMETER_PRESSURE                                    = 1416;
	// FLOAT32 (Millibars)
	// Barometric pressure

const SEA_LEVEL_PRESSURE                                    = 1417;
	// FLOAT32 (Millibars)
	// Barometric pressure at sea level

const TOTAL_AIR_TEMPERATURE                                 = 1418;
	// FLOAT32 (Celsius)
	// Total air temperature is the air temperature at the front of the aircraft where the ram pressure
	// from the speed of the aircraft is taken into account.

const WINDSHIELD_RAIN_EFFECT_AVAILABLE                      = 1419;
	// INT32 (Bool)
	// Is visual effect available on this aircraft

const AMBIENT_IN_CLOUD                                      = 1420;
	// INT32 (Bool)
	// True if the aircraft is in a cloud.

const AMBIENT_VISIBILITY                                    = 1421;
	// FLOAT32 (Meters)
	// Ambient visibility

const STANDARD_ATM_TEMPERATURE                              = 1422;
	// FLOAT32 (Rankine)
	// Outside temperature on the standard ATM scale

const ROTOR_BRAKE_HANDLE_POS                                = 1423;
	// FLOAT32 (Percent over 100)
	// Percent actuated

const ROTOR_BRAKE_ACTIVE                                    = 1424;
	// INT32 (Bool)
	// Active

const ROTOR_CLUTCH_SWITCH_POS                               = 1425;
	// INT32 (Bool)
	// Switch position

const ROTOR_CLUTCH_ACTIVE                                   = 1426;
	// INT32 (Bool)
	// Active

const ROTOR_TEMPERATURE                                     = 1427;
	// FLOAT32 (Rankine)
	// Main rotor transmission temperature

const ROTOR_CHIP_DETECTED                                   = 1428;
	// INT32 (Bool)
	// Chip detection

const ROTOR_GOV_SWITCH_POS                                  = 1429;
	// INT32 (Bool)
	// Switch position

const ROTOR_GOV_ACTIVE                                      = 1430;
	// INT32 (Bool)
	// Active

const ROTOR_LATERAL_TRIM_PCT                                = 1431;
	// FLOAT32 (Percent over 100)
	// Trim percent

const ROTOR_RPM_PCT                                         = 2166;
	// Array [1..2] of FLOAT32 (Percent over 100)
	// Percent max rated rpm of the given rotor index. Index should be specified to 1 for main rotor and 2
	// for tail rotor.

const ENG_TURBINE_TEMPERATURE                               = 1432;
	// INT32 (Celsius scalar 16K)
	// Turbine temperature. Applies only to Bell helicopter. [Degrees * 16384]

const ENG_TORQUE_PERCENT                                    = 2167;
	// Array [1.. ] of INT32 (Percent scalar 16K)
	// Torque. Returns main rotor torque for Bell helicopter, or the indexed rotor torque of other
	// helicopters. [Ft/lbs * 16384]

const ENG_FUEL_PRESSURE                                     = 1433;
	// INT32 (PSI scalar 16K)
	// Fuel pressure. Applies only to Bell helicopter. [Psi * 16384]

const ENG_ELECTRICAL_LOAD                                   = 1434;
	// INT32 (Percent scalar 16K)
	// Electrical load. Applies only to Bell helicopter. [Max Load * 16384]

const ENG_TRANSMISSION_PRESSURE                             = 1435;
	// INT32 (PSI scalar 16K)
	// Transmission pressure. Applies only to Bell helicopter. [Psi * 16384]

const ENG_TRANSMISSION_TEMPERATURE                          = 1436;
	// INT32 (Celsius scalar 16K)
	// Transmission temperature. Applies only to Bell helicopter. [Degrees * 16384]

const ENG_ROTOR_RPM                                         = 2168;
	// Array [1.. ] of INT32 (Percent scalar 16K)
	// Rotor rpm. Returns main rotor rpm for Bell helicopter, or the indexed rotor rpm of other
	// helicopters. [Max rpm * 16384]

const COLLECTIVE_POSITION                                   = 1437;
	// FLOAT32 (Percent over 100)
	// The position of the helicopter's collective. 0 is fully up, 100 fully depressed.

const NUM_SLING_CABLES                                      = 1438;
	// INT32 (Number)
	// The number of sling cables (not hoists) that are configured for the aircraft. Refer to the document
	// Notes on Aircraft Systems.

const PAYLOAD_STATION_OBJECT                                = 2169;
	// Array [1.. ] of STRING256 (String)
	// Places the named object at the payload station identified by the index (starting from 1). The string
	// is the Container name (refer to the title property of Simulation Object Configuration Files).

const PAYLOAD_STATION_NUM_SIMOBJECTS                        = 2170;
	// Array [1.. ] of INT32 (Number)
	// The number of objects at the payload station (indexed from 1).

const SLING_OBJECT_ATTACHED                                 = 2171;
	// Array [1.. ] of INT32 (String)
	// Returns the container title of the object. There can be multiple sling positions, indexed
	// from 1. The sling positions are set in the Aircraft Configuration File.

const SLING_CABLE_BROKEN                                    = 2172;
	// Array [1.. ] of INT32 (Bool)
	// True if the cable is broken.

const SLING_CABLE_EXTENDED_LENGTH                           = 2173;
	// Array [1.. ] of FLOAT32 (Feet)
	// The length of the cable extending from the aircraft.

const SLING_ACTIVE_PAYLOAD_STATION                          = 2174;
	// Array [1.. ] of INT32 (Number)
	// The payload station (identified by the parameter) where objects will be placed from the sling
	// (identified by the index).

const SLING_HOIST_PERCENT_DEPLOYED                          = 2175;
	// Array [1.. ] of FLOAT32 (Percent over 100)
	// The percentage of the full length of the sling cable deployed.

const SLING_HOOK_IN_PICKUP_MODE                             = 2176;
	// Array [1.. ] of INT32 (Bool)
	// A Boolean for whether or not the hook is in pickup mode, so capable of picking up another object.

const IS_ATTACHED_TO_SLING                                  = 1439;
	// INT32 (Bool)
	// Set to true if this object is attached to a sling.

const ROTOR_ROTATION_ANGLE                                  = 2177;
	// Array [1..2] of FLOAT32 (Radians)
	// Rotor rotation angle of the given rotor index. Index should be specified to 1 for main rotor and 2
	// for tail rotor.

const DISK_PITCH_ANGLE                                      = 2178;
	// Array [1..2] of FLOAT32 (Radians)
	// Rotor pitch angle of the given rotor index. Index should be specified to 1 for main rotor and 2 for
	// tail rotor.

const DISK_BANK_ANGLE                                       = 2179;
	// Array [1..2] of FLOAT32 (Radians)
	// Rotor bank angle of the given rotor index. Index should be specified to 1 for main rotor and 2 for
	// tail rotor.

const DISK_PITCH_PCT                                        = 2180;
	// Array [1..2] of FLOAT32 (Percent over 100)
	// Rotor pitch percent of the given rotor index. Index should be specified to 1 for main rotor and 2
	// for tail rotor.

const DISK_BANK_PCT                                         = 2181;
	// Array [1..2] of FLOAT32 (Percent over 100)
	// Rotor bank percent of the given rotor index. Index should be specified to 1 for main rotor and 2 for
	// tail rotor.

const DISK_CONING_PCT                                       = 2182;
	// Array [1..2] of FLOAT32 (Percent over 100)
	// Rotor coning percent of the given rotor index. Index should be specified to 1 for main rotor and 2
	// for tail rotor.

const SMOKE_ENABLE                                          = 1440;
	// INT32 (Bool)
	// Set to True to activate the smoke system, if one is available (for example, on the Extra).

const SMOKESYSTEM_AVAILABLE                                 = 1441;
	// INT32 (Bool)
	// Smoke system available

const PITOT_HEAT                                            = 1442;
	// INT32 (Bool)
	// Pitot heat active

const FOLDING_WING_LEFT_PERCENT                             = 1443;
	// FLOAT32 (Percent over 100)
	// Left folding wing position, 100 is fully folded

const FOLDING_WING_RIGHT_PERCENT                            = 1444;
	// FLOAT32 (Percent over 100)
	// Right folding wing position, 100 is fully folded

const CANOPY_OPEN                                           = 1445;
	// FLOAT32 (Percent over 100)
	// Percent primary door/exit open

const TAILHOOK_POSITION                                     = 1446;
	// FLOAT32 (Percent over 100)
	// Percent tail hook extended

const EXIT_OPEN                                             = 2183;
	// Array [1..4] of FLOAT32 (Percent over 100)
	// Percent door/exit open

const STALL_HORN_AVAILABLE                                  = 1447;
	// INT32 (Bool)
	// True if stall alarm available

const ENGINE_MIXURE_AVAILABLE                               = 1448;
	// INT32 (Bool)
	// True if engine mixture is available for prop engines. Obsolete value as mixture is always available.
	// Spelling error in variable name.

const CARB_HEAT_AVAILABLE                                   = 1449;
	// INT32 (Bool)
	// True if carb heat available

const SPOILER_AVAILABLE                                     = 1450;
	// INT32 (Bool)
	// True if spoiler system available

const IS_TAIL_DRAGGER                                       = 1451;
	// INT32 (Bool)
	// True if the aircraft is a taildragger

const STROBES_AVAILABLE                                     = 1452;
	// INT32 (Bool)
	// True if strobe lights are available

const TOE_BRAKES_AVAILABLE                                  = 1453;
	// INT32 (Bool)
	// True if toe brakes are available

const PUSHBACK_STATE                                        = 1454;
	// INT32 (Enum)
	// Type of pushback :
	// 0 = Straight
	// 1 = Left
	// 2 = Right

const ELECTRICAL_MASTER_BATTERY                             = 1455;
	// INT32 (Bool)
	// Battery switch position

const ELECTRICAL_TOTAL_LOAD_AMPS                            = 1456;
	// FLOAT32 (Amperes)
	// Total load amps

const ELECTRICAL_BATTERY_LOAD                               = 1457;
	// FLOAT32 (Amperes)
	// Battery load

const ELECTRICAL_BATTERY_VOLTAGE                            = 1458;
	// FLOAT32 (Volts)
	// Battery voltage

const ELECTRICAL_BATTERY_IS_CHARGING                        = 1459;
	// INT32 (Bool)
	// Is battery currently being charged or not

const ELECTRICAL_MAIN_BUS_VOLTAGE                           = 1460;
	// FLOAT32 (Volts)
	// Main bus voltage

const ELECTRICAL_MAIN_BUS_AMPS                              = 1461;
	// FLOAT32 (Amperes)
	// Main bus current

const ELECTRICAL_AVIONICS_BUS_VOLTAGE                       = 1462;
	// FLOAT32 (Volts)
	// Avionics bus voltage

const ELECTRICAL_AVIONICS_BUS_AMPS                          = 1463;
	// FLOAT32 (Amperes)
	// Avionics bus current

const ELECTRICAL_HOT_BATTERY_BUS_VOLTAGE                    = 1464;
	// FLOAT32 (Volts)
	// Voltage available when battery switch is turned off

const ELECTRICAL_HOT_BATTERY_BUS_AMPS                       = 1465;
	// FLOAT32 (Amperes)
	// Current available when battery switch is turned off

const ELECTRICAL_BATTERY_BUS_VOLTAGE                        = 1466;
	// FLOAT32 (Volts)
	// Battery bus voltage

const ELECTRICAL_BATTERY_BUS_AMPS                           = 1467;
	// FLOAT32 (Amperes)
	// Battery bus current

const ELECTRICAL_BATTERY_BUS_CONTACT_SWITCH                 = 1468;
	// FLOAT32 (Volts)
	// Switch that disconnects the battery bus from the main system

const ELECTRICAL_GENALT_BUS_VOLTAGE                         = 2184;
	// Array [1..4] of FLOAT32 (Volts)
	// Genalt bus voltage (takes engine index)

const ELECTRICAL_GENALT_BUS_AMPS                            = 2185;
	// Array [1..4] of FLOAT32 (Amperes)
	// Genalt bus current (takes engine index)

const ELECTRICAL_GENALT_SWITCH                              = 2186;
	// Array [1..4] of INT32 (Bool)
	// Genalt switch (takes generator/alternator index)

const ELECTRICAL_GENALT_BUS_CONTACT_SWITCH                  = 2187;
	// Array [1..4] of INT32 (Bool)
	// Switch that disconnects the bus from the main system (takes generator/alternator index)

const ELECTRICAL_GENALT_ACTIVE                              = 2188;
	// Array [1..4] of INT32 (Bool)
	// Genalt active (takes generator/alternator index)

const ELECTRIC_GPU_ACTIVE                                   = 1469;
	// INT32 (Bool)
	// Ground Power Unit active

const ELECTRIC_GPU_SWITCH                                   = 1470;
	// INT32 (Bool)
	// Ground Power Unit switch on/off

const CIRCUIT_GENERAL_PANEL_ON                              = 1471;
	// INT32 (Bool)
	// Is electrical power available to this circuit

const CIRCUIT_FLAP_MOTOR_ON                                 = 1472;
	// INT32 (Bool)
	// Is electrical power available to this circuit

const CIRCUIT_GEAR_MOTOR_ON                                 = 1473;
	// INT32 (Bool)
	// Is electrical power available to this circuit

const CIRCUIT_AUTOPILOT_ON                                  = 1474;
	// INT32 (Bool)
	// Is electrical power available to this circuit

const CIRCUIT_AVIONICS_ON                                   = 1475;
	// INT32 (Bool)
	// Is electrical power available to this circuit

const CIRCUIT_PITOT_HEAT_ON                                 = 1476;
	// INT32 (Bool)
	// Is electrical power available to this circuit

const CIRCUIT_PROP_SYNC_ON                                  = 1477;
	// INT32 (Bool)
	// Is electrical power available to this circuit

const CIRCUIT_AUTO_FEATHER_ON                               = 1478;
	// INT32 (Bool)
	// Is electrical power available to this circuit

const CIRCUIT_AUTO_BRAKES_ON                                = 1479;
	// INT32 (Bool)
	// Is electrical power available to this circuit

const CIRCUIT_STANDY_VACUUM_ON                              = 1480;
	// INT32 (Bool)
	// Is electrical power available to this circuit

const CIRCUIT_MARKER_BEACON_ON                              = 1481;
	// INT32 (Bool)
	// Is electrical power available to this circuit

const CIRCUIT_GEAR_WARNING_ON                               = 1482;
	// INT32 (Bool)
	// Is electrical power available to this circuit

const CIRCUIT_HYDRAULIC_PUMP_ON                             = 1483;
	// INT32 (Bool)
	// Is electrical power available to this circuit

const HYDRAULIC_PRESSURE                                    = 2189;
	// Array [1.. ] of FLOAT32 (Pound force per square foot)
	// Hydraulic system pressure. Indexes start at 1.

const HYDRAULIC_RESERVOIR_PERCENT                           = 2190;
	// Array [1.. ] of FLOAT32 (Percent over 100)
	// Hydraulic pressure changes will follow changes to this variable. Indexes start at 1.

const HYDRAULIC_SYSTEM_INTEGRITY                            = 1484;
	// FLOAT32 (Percent over 100)
	// Percent system functional

const STRUCTURAL_DEICE_SWITCH                               = 1485;
	// INT32 (Bool)
	// True if the aircraft structure deice switch is on

const APPLY_HEAT_TO_SYSTEMS                                 = 1486;
	// INT32 (Bool)
	// Used when too close to a fire.

const DROPPABLE_OBJECTS_TYPE                                = 2191;
	// Array [0.. ] of STRING256 (String)
	// The type of droppable object at the station number identified by the index.

const DROPPABLE_OBJECTS_COUNT                               = 2192;
	// Array [0.. ] of INT32 (Number)
	// The number of droppable objects at the station number identified by the index.

const TOTAL_WEIGHT                                          = 1487;
	// FLOAT32 (Pounds)
	// Total weight of the aircraft

const MAX_GROSS_WEIGHT                                      = 1488;
	// FLOAT32 (Pounds)
	// Maximum gross weight of the aircraft

const EMPTY_WEIGHT                                          = 1489;
	// FLOAT32 (Pounds)
	// Empty weight of the aircraft

const IS_USER_SIM                                           = 1490;
	// INT32 (Bool)
	// Is this the user loaded aircraft

const LABEL_SUPPORTED                                       = 1491;
	// INT32 (Bool)
	// Is label supported on this object. Setting this will override the default for the object class (TRUE
	// for aircraft, FALSE for everything else), but not the UI settings.

const SIM_DISABLED                                          = 1492;
	// INT32 (Bool)
	// Is sim disabled

const G_FORCE                                               = 1493;
	// FLOAT32 (GForce)
	// Current g force

const ATC_HEAVY                                             = 1494;
	// INT32 (Bool)
	// Is this aircraft recognized by ATC as heavy

const AUTO_COORDINATION                                     = 1495;
	// INT32 (Bool)
	// Is auto-coordination active

const REALISM                                               = 1496;
	// INT32 (Number)
	// General realism percent

const TRUE_AIRSPEED_SELECTED                                = 1497;
	// INT32 (Bool)
	// True if True Airspeed has been selected

const DESIGN_SPEED_VS0                                      = 1498;
	// FLOAT32 (Feet per second)
	// Design speed at VS0

const DESIGN_SPEED_VS1                                      = 1499;
	// FLOAT32 (Feet per second)
	// Design speed at VS1

const DESIGN_SPEED_VC                                       = 1500;
	// FLOAT32 (Feet per second)
	// Design speed at VC

const MIN_DRAG_VELOCITY                                     = 1501;
	// FLOAT32 (Feet per second)
	// Minimum drag velocity

const ESTIMATED_CRUISE_SPEED                                = 1502;
	// FLOAT32 (Feet per second)
	// Estimated cruise speed

const CG_PERCENT                                            = 1503;
	// FLOAT32 (Percent over 100)
	// Longitudinal CG position as a percent of reference chord

const CG_PERCENT_LATERAL                                    = 1504;
	// FLOAT32 (Percent over 100)
	// Lateral CG position as a percent of reference chord

const IS_SLEW_ACTIVE                                        = 1505;
	// INT32 (Bool)
	// True if slew is active

const IS_SLEW_ALLOWED                                       = 1506;
	// INT32 (Bool)
	// True if slew is enabled

const ATC_SUGGESTED_MIN_RWY_TAKEOFF                         = 1507;
	// FLOAT32 (Feet)
	// Suggested minimum runway length for takeoff. Used by ATC

const ATC_SUGGESTED_MIN_RWY_LANDING                         = 1508;
	// FLOAT32 (Feet)
	// Suggested minimum runway length for landing. Used by ATC

const PAYLOAD_STATION_WEIGHT                                = 2193;
	// Array [1.. ] of FLOAT32 (Pounds)
	// Individual payload station weight

const PAYLOAD_STATION_COUNT                                 = 1509;
	// INT32 (Number)
	// Number of payload stations

const USER_INPUT_ENABLED                                    = 1510;
	// INT32 (Bool)
	// Is input allowed from the user

const TYPICAL_DESCENT_RATE                                  = 1511;
	// FLOAT32 (Feet per minute)
	// Normal descent rate

const VISUAL_MODEL_RADIUS                                   = 1512;
	// FLOAT32 (Meters)
	// Model radius

const CATEGORY                                              = 1513;
	// STRING256 (String)
	// One of the following:
	// 'Airplane','
	// 'Animal','
	// 'Avatar','
	// 'Boat','
	// 'ControlTower','
	// 'Countermeasure','
	// 'ExternalSim','
	// 'GroundVehicle','
	// 'Helicopter','
	// 'SimpleObject','
	// 'Submersible','
	// 'Viewer','
	// 'Weapon'

const SIGMA_SQRT                                            = 1514;
	// INT32 (Number)
	// Sigma sqrt

const DYNAMIC_PRESSURE                                      = 1515;
	// FLOAT32 (Pounds per square foot)
	// Dynamic pressure

const TOTAL_VELOCITY                                        = 1516;
	// FLOAT32 (Feet per second)
	// Velocity regardless of direction. For example, if a helicopter is ascending vertically at 100 fps,
	// getting this variable will return 100.

const AIRSPEED_SELECT_INDICATED_OR_TRUE                     = 1517;
	// FLOAT32 (Knots)
	// The airspeed, whether true or indicated airspeed has been selected.

const VARIOMETER_RATE                                       = 1518;
	// FLOAT32 (Feet per second)
	// Variometer rate

const VARIOMETER_SWITCH                                     = 1519;
	// INT32 (Bool)
	// True if the variometer switch is on

const PRESSURE_ALTITUDE                                     = 1520;
	// FLOAT32 (Meters)
	// Altitude reading

const MAGNETIC_COMPASS                                      = 1521;
	// FLOAT32 (Degrees)
	// Compass reading

const TURN_INDICATOR_RATE                                   = 1522;
	// FLOAT32 (Radians per second)
	// Turn indicator reading

const TURN_INDICATOR_SWITCH                                 = 1523;
	// INT32 (Bool)
	// True if turn indicator switch is on

const YOKE_Y_INDICATOR                                      = 1524;
	// INT32 (Position)
	// Yoke position in vertical direction

const YOKE_X_INDICATOR                                      = 1525;
	// INT32 (Position)
	// Yoke position in horizontal direction

const RUDDER_PEDAL_INDICATOR                                = 1526;
	// INT32 (Position)
	// Rudder pedal position

const BRAKE_DEPENDENT_HYDRAULIC_PRESSURE                    = 1527;
	// FLOAT32 (Pounds per square foot)
	// Brake dependent hydraulic pressure reading

const PANEL_ANTI_ICE_SWITCH                                 = 1528;
	// INT32 (Bool)
	// True if panel anti-ice switch is on

const WING_AREA                                             = 1529;
	// FLOAT32 (Square feet)
	// Total wing area

const WING_SPAN                                             = 1530;
	// FLOAT32 (Feet)
	// Total wing span

const BETA_DOT                                              = 1531;
	// FLOAT32 (Radians per second)
	// Beta dot

const LINEAR_CL_ALPHA                                       = 1532;
	// FLOAT32 (Per radian)
	// Linear CL alpha

const STALL_ALPHA                                           = 1533;
	// FLOAT32 (Radians)
	// Stall alpha

const ZERO_LIFT_ALPHA                                       = 1534;
	// FLOAT32 (Radians)
	// Zero lift alpha

const CG_AFT_LIMIT                                          = 1535;
	// FLOAT32 (Percent over 100)
	// Aft limit of CG

const CG_FWD_LIMIT                                          = 1536;
	// FLOAT32 (Percent over 100)
	// Forward limit of CG

const CG_MAX_MACH                                           = 1537;
	// FLOAT32 (Machs)
	// Max mach CG

const CG_MIN_MACH                                           = 1538;
	// FLOAT32 (Machs)
	// Min mach CG

const PAYLOAD_STATION_NAME                                  = 1539;
	// STRING256 (String)
	// Descriptive name for payload station

const ELEVON_DEFLECTION                                     = 1540;
	// FLOAT32 (Radians)
	// Elevon deflection

const EXIT_TYPE                                             = 1541;
	// INT32 (Enum)
	// One of:
	// 0: Main
	// 1: Cargo
	// 2: Emergency
	// 3: Unknown

const EXIT_POSX                                             = 1542;
	// FLOAT32 (Feet)
	// Position of exit relative to datum reference point

const EXIT_POSY                                             = 1543;
	// FLOAT32 (Feet)
	// Position of exit relative to datum reference point

const EXIT_POSZ                                             = 1544;
	// FLOAT32 (Feet)
	// Position of exit relative to datum reference point

const DECISION_HEIGHT                                       = 1545;
	// FLOAT32 (Feet)
	// Design decision height

const DECISION_ALTITUDE_MSL                                 = 1546;
	// FLOAT32 (Feet)
	// Design decision altitude above mean sea level

const EMPTY_WEIGHT_PITCH_MOI                                = 1547;
	// FLOAT32 (Slugs per feet squared)
	// Empty weight pitch moment of inertia

const EMPTY_WEIGHT_ROLL_MOI                                 = 1548;
	// FLOAT32 (Slugs per feet squared)
	// Empty weight roll moment of inertia

const EMPTY_WEIGHT_YAW_MOI                                  = 1549;
	// FLOAT32 (Slugs per feet squared)
	// Empty weight yaw moment of inertia

const EMPTY_WEIGHT_CROSS_COUPLED_MOI                        = 1550;
	// FLOAT32 (Slugs per feet squared)
	// Empty weight cross coupled moment of inertia

const TOTAL_WEIGHT_PITCH_MOI                                = 1551;
	// FLOAT32 (Slugs per feet squared)
	// Total weight pitch moment of inertia

const TOTAL_WEIGHT_ROLL_MOI                                 = 1552;
	// FLOAT32 (Slugs per feet squared)
	// Total weight roll moment of inertia

const TOTAL_WEIGHT_YAW_MOI                                  = 1553;
	// FLOAT32 (Slugs per feet squared)
	// Total weight yaw moment of inertia

const TOTAL_WEIGHT_CROSS_COUPLED_MOI                        = 1554;
	// FLOAT32 (Slugs per feet squared)
	// Total weight cross coupled moment of inertia

const WATER_BALLAST_VALVE                                   = 1555;
	// INT32 (Bool)
	// True if water ballast valve is available

const MAX_RATED_ENGINE_RPM                                  = 1556;
	// FLOAT32 (Rpm)
	// Maximum rated rpm

const FULL_THROTTLE_THRUST_TO_WEIGHT_RATIO                  = 1557;
	// INT32 (Number)
	// Full throttle thrust to weight ratio

const PROP_AUTO_CRUISE_ACTIVE                               = 1558;
	// INT32 (Bool)
	// True if prop auto cruise active

const PROP_ROTATION_ANGLE                                   = 1559;
	// FLOAT32 (Radians)
	// Prop rotation angle

const PROP_BETA_MAX                                         = 1560;
	// FLOAT32 (Radians)
	// Prop beta max

const PROP_BETA_MIN                                         = 1561;
	// FLOAT32 (Radians)
	// Prop beta min

const PROP_BETA_MIN_REVERSE                                 = 1562;
	// FLOAT32 (Radians)
	// Prop beta min reverse

const FUEL_SELECTED_TRANSFER_MODE                           = 1563;
	// INT32 (Enum)
	// One of:
	// -1: off
	// 0: auto
	// 1: forward
	// 2: aft
	// 3: manual

const DROPPABLE_OBJECTS_UI_NAME                             = 1564;
	// STRING256 (String)
	// Descriptive name, used in User Interface dialogs, of a droppable object

const MANUAL_FUEL_PUMP_HANDLE                               = 1565;
	// FLOAT32 (Percent over 100)
	// Position of manual fuel pump handle. 100 is fully deployed.

const BLEED_AIR_SOURCE_CONTROL                              = 1566;
	// INT32 (Enum)
	// One of:
	// 0: min
	// 1: auto
	// 2: off
	// 3: apu
	// 4: engines

const ELECTRICAL_OLD_CHARGING_AMPS                          = 1567;
	// FLOAT32 (Amps)
	// Legacy, use ELECTRICAL BATTERY LOAD

const HYDRAULIC_SWITCH                                      = 1568;
	// INT32 (Bool)
	// True if hydraulic switch is on

const CONCORDE_VISOR_NOSE_HANDLE                            = 1569;
	// INT32 (Enum)
	// One of:
	// 0: visor up, nose down
	// 1: visor down, nose up
	// 2: visor down, nose 5 degrees
	// 3: visor down, nose 12.5 degrees

const CONCORDE_VISOR_POSITION_PERCENT                       = 1570;
	// FLOAT32 (Percent over 100)
	// 0 = up, 1.0 = extended/down

const CONCORDE_NOSE_ANGLE                                   = 1571;
	// FLOAT32 (Radians)
	// 0 = up

const REALISM_CRASH_WITH_OTHERS                             = 1572;
	// INT32 (Bool)
	// True indicates crashing with other aircraft is possible.

const REALISM_CRASH_DETECTION                               = 1573;
	// INT32 (Bool)
	// True indicates crash detection is turned on.

const MANUAL_INSTRUMENT_LIGHTS                              = 1574;
	// INT32 (Bool)
	// True if instrument lights are set manually

const PITOT_ICE_PCT                                         = 1575;
	// FLOAT32 (Percent over 100)
	// Amount of pitot ice. 100 is fully iced.

const RAD_INS_SWITCH                                        = 1576;
	// INT32 (Bool)
	// True if Rad INS switch on

const SIMULATED_RADIUS                                      = 1577;
	// FLOAT32 (Feet)
	// Simulated radius

const STRUCTURAL_ICE_PCT                                    = 1578;
	// FLOAT32 (Percent over 100)
	// Amount of ice on aircraft structure. 100 is fully iced.

const ARTIFICIAL_GROUND_ELEVATION                           = 1579;
	// FLOAT32 (Feet)
	// In case scenery is not loaded for AI planes, this variable can be used to set a default surface
	// elevation.

const SURFACE_INFO_VALID                                    = 1580;
	// INT32 (Bool)
	// True indicates SURFACE CONDITION is meaningful.

const SURFACE_CONDITION                                     = 1581;
	// INT32 (Enum)
	// One of:
	// 0: Normal
	// 1: Wet
	// 2: Icy
	// 3: Snow

const PUSHBACK_ANGLE                                        = 1582;
	// FLOAT32 (Radians)
	// Pushback angle (the heading of the tug)

const PUSHBACK_CONTACTX                                     = 1583;
	// FLOAT32 (Feet)
	// The towpoint position, relative to the aircrafts datum reference point.

const PUSHBACK_CONTACTY                                     = 1584;
	// FLOAT32 (Feet)
	// Pushback contact position in vertical direction

const PUSHBACK_CONTACTZ                                     = 1585;
	// FLOAT32 (Feet)
	// Pushback contact position in fore/aft direction

const PUSHBACK_WAIT                                         = 1586;
	// INT32 (Bool)
	// True if waiting for pushback.

const YAW_STRING_ANGLE                                      = 1587;
	// FLOAT32 (Radians)
	// The yaw string angle. Yaw strings are attached to gliders as visible indicators of the yaw angle. An
	// animation of this is not implemented in Prepar3D.

const YAW_STRING_PCT_EXTENDED                               = 1588;
	// FLOAT32 (Percent over 100)
	// Yaw string angle as a percentage

const INDUCTOR_COMPASS_PERCENT_DEVIATION                    = 1589;
	// FLOAT32 (Percent over 100)
	// Inductor compass deviation reading

const INDUCTOR_COMPASS_HEADING_REF                          = 1590;
	// FLOAT32 (Radians)
	// Inductor compass heading

const ANEMOMETER_PCT_RPM                                    = 1591;
	// FLOAT32 (Percent over 100)
	// Anemometer rpm as a percentage

const NAV_VOR_LLAF64                                        = 1592;
	// LATLONALT (LLA structure)
	// Nav VOR latitude, longitude, altitude

const NAV_GS_LLAF64                                         = 1593;
	// LATLONALT (LLA structure)
	// Nav GS latitude, longitude, altitude

const STATIC_CG_TO_GROUND                                   = 1594;
	// FLOAT32 (Feet)
	// Static CG to ground

const STATIC_PITCH                                          = 1595;
	// FLOAT32 (Radians)
	// Static pitch

const CRASH_SEQUENCE                                        = 1596;
	// INT32 (Enum)
	// One of:
	// 0: off
	// 1: complete
	// 3: reset
	// 4: pause
	// 11: start

const CRASH_FLAG                                            = 1597;
	// INT32 (Enum)
	// One of:
	// 0: None
	// 2: Mountain
	// 4: General
	// 6: Building
	// 8: Splash
	// 10: Gear up
	// 12: Overstress
	// 14: Building
	// 16: Aircraft
	// 18: Fuel Truck

const TOW_RELEASE_HANDLE                                    = 1598;
	// FLOAT32 (Percent over 100)
	// Position of tow release handle. 100 is fully deployed.

const TOW_CONNECTION                                        = 1599;
	// INT32 (Bool)
	// True if a towline is connected to both tow plane and glider.

const APU_PCT_RPM                                           = 1600;
	// FLOAT32 (Percent over 100)
	// Auxiliary power unit rpm, as a percentage

const APU_PCT_STARTER                                       = 1601;
	// FLOAT32 (Percent over 100)
	// Auxiliary power unit starter, as a percentage

const APU_VOLTS                                             = 1602;
	// FLOAT32 (Volts)
	// Auxiliary power unit voltage

const APU_GENERATOR_SWITCH                                  = 1603;
	// INT32 (Bool)
	// True if APU generator switch on

const APU_GENERATOR_ACTIVE                                  = 1604;
	// INT32 (Bool)
	// True if APU generator active

const APU_ON_FIRE_DETECTED                                  = 1605;
	// INT32 (Bool)
	// True if APU on fire

const PRESSURIZATION_CABIN_ALTITUDE                         = 1606;
	// FLOAT32 (Feet)
	// The current altitude of the cabin pressurization..

const PRESSURIZATION_CABIN_ALTITUDE_GOAL                    = 1607;
	// FLOAT32 (Feet)
	// The set altitude of the cabin pressurization.

const PRESSURIZATION_CABIN_ALTITUDE_RATE                    = 1608;
	// FLOAT32 (Feet per second)
	// The rate at which cabin pressurization changes.

const PRESSURIZATION_PRESSURE_DIFFERENTIAL                  = 1609;
	// FLOAT32 (Pounds per square foot)
	// The difference in pressure between the set altitude pressurization and the current pressurization.

const PRESSURIZATION_DUMP_SWITCH                            = 1610;
	// INT32 (Bool)
	// True if the cabin pressurization dump switch is on.

const FIRE_BOTTLE_SWITCH                                    = 1611;
	// INT32 (Bool)
	// True if the fire bottle switch is on.

const FIRE_BOTTLE_DISCHARGED                                = 1612;
	// INT32 (Bool)
	// True if the fire bottle is discharged.

const CABIN_NO_SMOKING_ALERT_SWITCH                         = 1613;
	// INT32 (Bool)
	// True if the No Smoking switch is on.

const CABIN_SEATBELTS_ALERT_SWITCH                          = 1614;
	// INT32 (Bool)
	// True if the Seatbelts switch is on.

const GPWS_WARNING                                          = 1615;
	// INT32 (Bool)
	// True if Ground Proximity Warning System installed.

const GPWS_SYSTEM_ACTIVE                                    = 1616;
	// INT32 (Bool)
	// True if the Ground Proximity Warning System is active

const IS_LATITUDE_LONGITUDE_FREEZE_ON                       = 1617;
	// INT32 (Bool)
	// True if the lat/lon of the aircraft (either user or AI controlled) is frozen. If this variable
	// returns true, it means that the latitude and longitude of the aircraft are not being controlled by
	// Prepar3D, so enabling, for example, a SimConnect client to control the position of the aircraft.
	// This can also apply to altitude and attitude.
	// Also refer to the range of KEY_FREEZE..... Event IDs.

const IS_ALTITUDE_FREEZE_ON                                 = 1618;
	// INT32 (Bool)
	// True if the altitude of the aircraft is frozen.

const IS_ATTITUDE_FREEZE_ON                                 = 1619;
	// INT32 (Bool)
	// True if the attitude (pitch, bank and heading) of the aircraft is frozen.

const EXTERNAL_PRIMARY_SIM_ID                               = 1620;
	// STRING256 (String)
	// ExternalSim Primary GUID

const EXTERNAL_PRIMARY_SIM_DATA                             = 1621;
	// STRING256 (String)
	// Data configured through various ExternalSim SimConnect functions through the szExternalSimParams
	// parameter.

const ATC_TYPE                                              = 1622;
	// STRING32 (String (30))
	// Type used by ATC

const ATC_MODEL                                             = 1623;
	// STRING32 (String (10))
	// Model used by ATC

const ATC_ID                                                = 1624;
	// STRING32 (String (10))
	// ID used by ATC

const ATC_AIRLINE                                           = 1625;
	// STRING64 (String (50))
	// Airline used by ATC

const ATC_FLIGHT_NUMBER                                     = 1626;
	// STRING8 (String (6))
	// Flight Number used by ATC

const title                                                 = 1627;
	// STRINGV (Variable length string)
	// title from aircraft.cfg

const HSI_STATION_IDENT                                     = 1628;
	// STRING8 (String(6))
	// Tuned station identifier

const GPS_WP__PREV_ID                                       = 1629;
	// STRING256 (String)
	// ID of previous GPS waypoint

const GPS_WP__NEXT_ID                                       = 1630;
	// STRING256 (String)
	// ID of next GPS waypoint

const GPS_APPROACH_AIRPORT_ID                               = 1631;
	// STRING256 (String)
	// ID of airport

const GPS_APPROACH_APPROACH_ID                              = 1632;
	// STRING256 (String)
	// ID of approach

const GPS_APPROACH_TRANSITION_ID                            = 1633;
	// STRING256 (String)
	// ID of approach transition

const AI_DESIRED_SPEED                                      = 1634;
	// FLOAT32 (Knots)
	// Desired speed of the AI object.

const AI_CURRENT_WAYPOINT                                   = 1636;
	// INT32 (Number)
	// Current waypoint in the list

const AI_DESIRED_HEADING                                    = 1637;
	// FLOAT32 (Degrees)
	// Desired heading of the AI object.

const AI_GROUNDTURNTIME                                     = 1638;
	// FLOAT32 (Seconds)
	// Time to make a 90 degree turn.

const AI_GROUNDCRUISESPEED                                  = 1639;
	// FLOAT32 (Knots)
	// Cruising speed.

const AI_GROUNDTURNSPEED                                    = 1640;
	// FLOAT32 (Knots)
	// Turning speed.

const AI_TRAFFIC_ISIFR                                      = 1641;
	// INT32 (Boolean)
	// Request whether this aircraft is IFR or VFR See Note 1.

const AI_TRAFFIC_STATE                                      = 1642;
	// STRING256 (String)
	// English string describing an AI object's state.  If the object is an aircraft under ATC control the
	// string will be one of:
	// 'init'
	// 'sleep'
	// 'flt plan'
	// 'startup'
	// 'preflight support'
	// 'clearance'
	// 'push back 1'
	// 'push back 2'
	// 'pre taxi out'
	// 'taxi out'
	// 'takeoff 1'
	// 'takeoff 2'
	// 'T&G depart'
	// 'enroute'
	// 'pattern'
	// 'landing'
	// 'rollout'
	// 'go around'
	// 'taxi in'
	// 'shutdown'
	// 'postflight support'
	// If the AI object is not an aircraft under ATC control, the string is one of:
	// 'Sleep'
	// 'Waypoint'
	// 'Takeoff'
	// 'Landing'
	// 'Taxi'
	// This string also appears in the State column of the Traffic Explorer tool dialog. See Note 1.

const AI_TRAFFIC_CURRENT_AIRPORT                            = 1643;
	// STRING256 (String)
	// ICAO code of current airport. See Note 1.

const AI_TRAFFIC_ASSIGNED_RUNWAY                            = 1644;
	// STRING256 (String)
	// 'Assigned runway name (for example: '32R'). See Note 1.'

const AI_TRAFFIC_ASSIGNED_PARKING                           = 1645;
	// STRING256 (String)
	// English assigned parking name. The string is the same as the one shown in the Parking column of the
	// Traffic Explorer dialog, and is made up in the form:
	// Name + Number, Type ( radius )
	// For example:
	// Ramp 1, RAMP sml (10m)
	// Gate G 4, RAMP lrg (18m)
	// Refer also to the Taxiway Parking section of the Compiling BGL document.
	// See Note 1.

const AI_TRAFFIC_FROMAIRPORT                                = 1646;
	// STRING256 (String)
	// ICAO code of the departure airport in the current schedule. See Note 2.

const AI_TRAFFIC_TOAIRPORT                                  = 1647;
	// STRING256 (String)
	// ICAO code of the destination airport in the current schedule. See Note 2.

const AI_TRAFFIC_ETD                                        = 1648;
	// FLOAT32 (Seconds)
	// Estimated time of departure for the current schedule entry, given as the number of seconds
	// difference from the current simulation time. This can be negative if ETD is earlier than the current
	// simulation time. See Note 2.

const AI_TRAFFIC_ETA                                        = 1649;
	// FLOAT32 (Seconds)
	// Estimated time of arrival for the current schedule entry, given as the number of seconds difference
	// from the current simulated time. This can be negative if ETA is earlier than the current simulated
	// time. See Note 2.

const LAUNCHBAR_POSITION                                    = 1650;
	// FLOAT32 (Percent over 100)
	// Installed on aircraft before takeoff from a carrier catapult. Note that gear cannot retract with
	// this extended. 100 = fully extended. Refer to the document Notes on Aircraft Systems.

const LAUNCHBAR_SWITCH                                      = 1651;
	// INT32 (Bool)
	// If this is set to True the launch bar switch has been engaged.

const LAUNCHBAR_HELD_EXTENDED                               = 1652;
	// INT32 (Bool)
	// This will be True if the launchbar is fully extended, and can be used, for example, to change the
	// color of an instrument light.

const NUMBER_OF_CATAPULTS                                   = 1653;
	// INT32 (Number)
	// Maximum of 4. A model can contain more than 4 catapults, but only the first four will be read and
	// recognized by the simulation.

const CATAPULT_STROKE_POSITION                              = 2194;
	// Array [1.. ] of INT32 (Number)
	// Catapults are indexed from 1. This value will be 0 before the catapult fires, and then up to 100 as
	// the aircraft is propelled down the catapult. The aircraft may takeoff before the value reaches 100
	// (depending on the aircraft weight, power applied, and other factors), in which case this value will
	// not be further updated. This value could be used to drive a bogie animation.

const HOLDBACK_BAR_INSTALLED                                = 1654;
	// INT32 (Bool)
	// Holdback bars allow build up of thrust before takeoff from a catapult, and are installed by the deck
	// crew of an aircraft carrier.

const BLAST_SHIELD_POSITION                                 = 2195;
	// Array [1.. ] of FLOAT32 (Percent over 100)
	// Indexed from 1, 100 is fully deployed, 0 flat on deck

const CABLE_CAUGHT_BY_TAILHOOK                              = 1655;
	// INT32 (Number)
	// A number 1 through 4 for the cable number caught by the tailhook. Cable 1 is the one closest to the
	// stern of the carrier. A value of 0 indicates no cable was caught.

const TAILHOOK_HANDLE                                       = 1656;
	// INT32 (Bool)
	// True if the tailhook handle is engaged.

const SURFACE_RELATIVE_GROUND_SPEED                         = 1657;
	// FLOAT32 (Feet_per_second)
	// The speed of the aircraft relative to the speed of the first surface directly underneath it. Use
	// this to retrieve, for example, an aircraft's taxiing speed while it is moving on a moving carrier.
	// It also applies to airborne aircraft, for example when a helicopter is successfully hovering above a
	// moving ship, this value should be zero. The returned value will be the same as GROUND VELOCITY if
	// the first surface beneath it is not moving.

const CATAPULT_START_POSITION_LLA                           = 2196;
	// Array [1.. ] of LATLONALT (SIMCONNECT_DATA_LATLONALT structure)
	// The starting position of the catapult. Lat Lon in Degrees. Alt in Meters.

const CATAPULT_END_POSITION_LLA                             = 2197;
	// Array [1.. ] of LATLONALT (SIMCONNECT_DATA_LATLONALT structure)
	// The end position of the catapult. Lat Lon in Degrees. Alt in Meters.

const CABLES_ENDPOINT1_POSITION_LLA                         = 2198;
	// Array [1.. ] of LATLONALT (SIMCONNECT_DATA_LATLONALT structure)
	// The first endpoint of the cables position. Lat Lon in Degrees. Alt in Meters.

const CABLES_ENDPOINT2_POSITION_LLA                         = 2199;
	// Array [1.. ] of LATLONALT (SIMCONNECT_DATA_LATLONALT structure)
	// The second endpoint of the cables position. Lat Lon in Degrees. Alt in Meters.

const AIRCRAFT_ELEVATOR_POSITION                            = 2200;
	// Array [1.. ] of FLOAT32 (Percent over 100)
	// The position of the carrier's aircraft elevator at the given index, where 0.0 represents the up
	// position and 1.0 represents the down position. Only available for SimObjects in the Boat category.

const AIRCRAFT_ELEVATOR_CONTROL                             = 2201;
	// Array [1.. ] of INT32 (Number)
	// The control direction of the carrier's aircraft elevator at the given index, where 0 represents the
	// control is in the up position and 1 represents the control in the down position. The value of the
	// control does not indicate the elevator is moving, merely the direction it would be traveling if it
	// were moving. Only available for SimObjects in the Boat category.

const RECIP_ENG_DETONATING                                  = 2202;
	// Array [1.. ] of INT32 (Bool)
	// Indexed from 1. Set to True if the engine is detonating.

const RECIP_ENG_CYLINDER_HEALTH                             = 2203;
	// Array [1.. ] of FLOAT32 (Percent over 100)
	// Index high 16 bits is engine number, low 16 cylinder number, both indexed from 1.

const RECIP_ENG_NUM_CYLINDERS                               = 1658;
	// INT32 (Number)
	// Indexed from 1. The number of engine cylinders.

const RECIP_ENG_NUM_CYLINDERS_FAILED                        = 1659;
	// INT32 (Number)
	// Indexed from 1. The number of cylinders that have failed.

const RECIP_ENG_ANTIDETONATION_TANK_VALVE                   = 2204;
	// Array [1.. ] of INT32 (Bool)
	// Indexed from 1, each engine can have one antidetonation tank. Installed on racing aircraft. Refer to
	// the document Notes on Aircraft Systems.

const RECIP_ENG_ANTIDETONATION_TANK_QUANTITY                = 2205;
	// Array [1.. ] of FLOAT32 (Gallons)
	// Indexed from 1.

const RECIP_ENG_ANTIDETONATION_TANK_MAX_QUANTITY            = 2206;
	// Array [1.. ] of FLOAT32 (Gallons)
	// Indexed from 1. This value set in the Aircraft Configuration File.

const RECIP_ENG_NITROUS_TANK_VALVE                          = 2207;
	// Array [1.. ] of INT32 (Bool)
	// Indexed from 1. Each engine can have one Nitrous fuel tank installed.

const RECIP_ENG_NITROUS_TANK_QUANTITY                       = 2208;
	// Array [1.. ] of FLOAT32 (Gallons)
	// Indexed from 1.

const RECIP_ENG_NITROUS_TANK_MAX_QUANTITY                   = 2209;
	// Array [1.. ] of FLOAT32 (Gallons)
	// Indexed from 1. This value set in the Aircraft Configuration File.

const AVATAR_MODE_IS_ATTACHED                               = 1660;
	// INT32 (Bool)
	// Sets/gets the attachment state of the user avatar.

