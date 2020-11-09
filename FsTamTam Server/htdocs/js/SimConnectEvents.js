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


//
// Aircraft Engine
//

const THROTTLE_FULL                                          = 1; // Set throttles max;
const THROTTLE_INCR                                          = 2; // Increment throttles;
const THROTTLE_INCR_SMALL                                    = 3; // Increment throttles small;
const THROTTLE_DECR                                          = 4; // Decrement throttles;
const THROTTLE_DECR_SMALL                                    = 5; // Decrease throttles small;
const THROTTLE_CUT                                           = 6; // Set throttles to idle;
const INCREASE_THROTTLE                                      = 7; // Increment throttles;
const DECREASE_THROTTLE                                      = 8; // Decrement throttles;
const THROTTLE_SET                                           = 9; // Set throttles exactly (0- 16383);
const AXIS_THROTTLE_SET                                      = 10; // Set throttles (0- 16383);
const THROTTLE1_SET                                          = 11; // Set throttle 1 exactly (0 to 16383);
const THROTTLE2_SET                                          = 12; // Set throttle 2 exactly (0 to 16383);
const THROTTLE3_SET                                          = 13; // Set throttle 3 exactly (0 to 16383);
const THROTTLE4_SET                                          = 14; // Set throttle 4 exactly (0 to 16383);
const THROTTLE1_FULL                                         = 15; // Set throttle 1 max;
const THROTTLE1_INCR                                         = 16; // Increment throttle 1;
const THROTTLE1_INCR_SMALL                                   = 17; // Increment throttle 1 small;
const THROTTLE1_DECR                                         = 18; // Decrement throttle 1;
const THROTTLE1_CUT                                          = 19; // Set throttle 1 to idle;
const THROTTLE2_FULL                                         = 20; // Set throttle 2 max;
const THROTTLE2_INCR                                         = 21; // Increment throttle 2;
const THROTTLE2_INCR_SMALL                                   = 22; // Increment throttle 2 small;
const THROTTLE2_DECR                                         = 23; // Decrement throttle 2;
const THROTTLE2_CUT                                          = 24; // Set throttle 2 to idle;
const THROTTLE3_FULL                                         = 25; // Set throttle 3 max;
const THROTTLE3_INCR                                         = 26; // Increment throttle 3;
const THROTTLE3_INCR_SMALL                                   = 27; // Increment throttle 3 small;
const THROTTLE3_DECR                                         = 28; // Decrement throttle 3;
const THROTTLE3_CUT                                          = 29; // Set throttle 3 to idle;
const THROTTLE4_FULL                                         = 30; // Set throttle 1 max;
const THROTTLE4_INCR                                         = 31; // Increment throttle 4;
const THROTTLE4_INCR_SMALL                                   = 32; // Increment throttle 4 small;
const THROTTLE4_DECR                                         = 33; // Decrement throttle 4;
const THROTTLE4_CUT                                          = 34; // Set throttle 4 to idle;
const THROTTLE_10                                            = 35; // Set throttles to 10%;
const THROTTLE_20                                            = 36; // Set throttles to 20%;
const THROTTLE_30                                            = 37; // Set throttles to 30%;
const THROTTLE_40                                            = 38; // Set throttles to 40%;
const THROTTLE_50                                            = 39; // Set throttles to 50%;
const THROTTLE_60                                            = 40; // Set throttles to 60%;
const THROTTLE_70                                            = 41; // Set throttles to 70%;
const THROTTLE_80                                            = 42; // Set throttles to 80%;
const THROTTLE_90                                            = 43; // Set throttles to 90%;
const AXIS_THROTTLE1_SET                                     = 44; // Set throttle 1 exactly (-16383 - +16383);
const AXIS_THROTTLE2_SET                                     = 45; // Set throttle 2 exactly (-16383 - +16383);
const AXIS_THROTTLE3_SET                                     = 46; // Set throttle 3 exactly (-16383 - +16383);
const AXIS_THROTTLE4_SET                                     = 47; // Set throttle 4 exactly (-16383 - +16383);
const THROTTLE1_DECR_SMALL                                   = 48; // Decrease throttle 1 small;
const THROTTLE2_DECR_SMALL                                   = 49; // Decrease throttle 2 small;
const THROTTLE3_DECR_SMALL                                   = 50; // Decrease throttle 3 small;
const THROTTLE4_DECR_SMALL                                   = 51; // Decrease throttle 4 small;
const PROP_PITCH_DECR_SMALL                                  = 52; // Decrease prop levers small;
const PROP_PITCH1_DECR_SMALL                                 = 53; // Decrease prop lever 1 small;
const PROP_PITCH2_DECR_SMALL                                 = 54; // Decrease prop lever 2 small;
const PROP_PITCH3_DECR_SMALL                                 = 55; // Decrease prop lever 3 small;
const PROP_PITCH4_DECR_SMALL                                 = 56; // Decrease prop lever 4 small;
const MIXTURE1_RICH                                          = 57; // Set mixture lever 1 to max rich;
const MIXTURE1_INCR                                          = 58; // Increment mixture lever 1;
const MIXTURE1_INCR_SMALL                                    = 59; // Increment mixture lever 1 small;
const MIXTURE1_DECR                                          = 60; // Decrement mixture lever 1;
const MIXTURE1_LEAN                                          = 61; // Set mixture lever 1 to max lean;
const MIXTURE2_RICH                                          = 62; // Set mixture lever 2 to max rich;
const MIXTURE2_INCR                                          = 63; // Increment mixture lever 2;
const MIXTURE2_INCR_SMALL                                    = 64; // Increment mixture lever 2 small;
const MIXTURE2_DECR                                          = 65; // Decrement mixture lever 2;
const MIXTURE2_LEAN                                          = 66; // Set mixture lever 2 to max lean;
const MIXTURE3_RICH                                          = 67; // Set mixture lever 3 to max rich;
const MIXTURE3_INCR                                          = 68; // Increment mixture lever 3;
const MIXTURE3_INCR_SMALL                                    = 69; // Increment mixture lever 3 small;
const MIXTURE3_DECR                                          = 70; // Decrement mixture lever 3;
const MIXTURE3_LEAN                                          = 71; // Set mixture lever 3 to max lean;
const MIXTURE4_RICH                                          = 72; // Set mixture lever 4 to max rich;
const MIXTURE4_INCR                                          = 73; // Increment mixture lever 4;
const MIXTURE4_INCR_SMALL                                    = 74; // Increment mixture lever 4 small;
const MIXTURE4_DECR                                          = 75; // Decrement mixture lever 4;
const MIXTURE4_LEAN                                          = 76; // Set mixture lever 4 to max lean;
const MIXTURE_SET                                            = 77; // Set mixture levers to exact value (0 to 16383);
const MIXTURE_RICH                                           = 78; // Set mixture levers to max rich;
const MIXTURE_INCR                                           = 79; // Increment mixture levers;
const MIXTURE_INCR_SMALL                                     = 80; // Increment mixture levers small;
const MIXTURE_DECR                                           = 81; // Decrement mixture levers;
const MIXTURE_LEAN                                           = 82; // Set mixture levers to max lean;
const MIXTURE1_SET                                           = 83; // Set mixture lever 1 exact value (0 to 16383);
const MIXTURE2_SET                                           = 84; // Set mixture lever 2 exact value (0 to 16383);
const MIXTURE3_SET                                           = 85; // Set mixture lever 3 exact value (0 to 16383);
const MIXTURE4_SET                                           = 86; // Set mixture lever 4 exact value (0 to 16383);
const AXIS_MIXTURE_SET                                       = 87; // Set mixture lever 1 exact value (-16383 to +16383);
const AXIS_MIXTURE1_SET                                      = 88; // Set mixture lever 1 exact value (-16383 to +16383);
const AXIS_MIXTURE2_SET                                      = 89; // Set mixture lever 2 exact value (-16383 to +16383);
const AXIS_MIXTURE3_SET                                      = 90; // Set mixture lever 3 exact value (-16383 to +16383);
const AXIS_MIXTURE4_SET                                      = 91; // Set mixture lever 4 exact value (-16383 to +16383);
const MIXTURE_SET_BEST                                       = 92; // Set mixture levers to current best power setting;
const MIXTURE_DECR_SMALL                                     = 93; // Decrement mixture levers small;
const MIXTURE1_DECR_SMALL                                    = 94; // Decrement mixture lever 1 small;
const MIXTURE2_DECR_SMALL                                    = 95; // Decrement mixture lever 4 small;
const MIXTURE3_DECR_SMALL                                    = 96; // Decrement mixture lever 4 small;
const MIXTURE4_DECR_SMALL                                    = 97; // Decrement mixture lever 4 small;
const PROP_PITCH_SET                                         = 98; // Set prop pitch levers (0 to 16383);
const PROP_PITCH_LO                                          = 99; // Set prop pitch levers max (lo pitch);
const PROP_PITCH_INCR                                        = 100; // Increment prop pitch levers;
const PROP_PITCH_INCR_SMALL                                  = 101; // Increment prop pitch levers small;
const PROP_PITCH_DECR                                        = 102; // Decrement prop pitch levers;
const PROP_PITCH_HI                                          = 103; // Set prop pitch levers min (hi pitch);
const PROP_PITCH1_SET                                        = 104; // Set prop pitch lever 1 exact value (0 to 16383);
const PROP_PITCH2_SET                                        = 105; // Set prop pitch lever 2 exact value (0 to 16383);
const PROP_PITCH3_SET                                        = 106; // Set prop pitch lever 3 exact value (0 to 16383);
const PROP_PITCH4_SET                                        = 107; // Set prop pitch lever 4 exact value (0 to 16383);
const PROP_PITCH1_LO                                         = 108; // Set prop pitch lever 1 max (lo pitch);
const PROP_PITCH1_INCR                                       = 109; // Increment prop pitch lever 1;
const PROP_PITCH1_INCR_SMALL                                 = 110; // Increment prop pitch lever 1 small;
const PROP_PITCH1_DECR                                       = 111; // Decrement prop pitch lever 1;
const PROP_PITCH1_HI                                         = 112; // Set prop pitch lever 1 min (hi pitch);
const PROP_PITCH2_LO                                         = 113; // Set prop pitch lever 2 max (lo pitch);
const PROP_PITCH2_INCR                                       = 114; // Increment prop pitch lever 2;
const PROP_PITCH2_INCR_SMALL                                 = 115; // Increment prop pitch lever 2 small;
const PROP_PITCH2_DECR                                       = 116; // Decrement prop pitch lever 2;
const PROP_PITCH2_HI                                         = 117; // Set prop pitch lever 2 min (hi pitch);
const PROP_PITCH3_LO                                         = 118; // Set prop pitch lever 3 max (lo pitch);
const PROP_PITCH3_INCR                                       = 119; // Increment prop pitch lever 3;
const PROP_PITCH3_INCR_SMALL                                 = 120; // Increment prop pitch lever 3 small;
const PROP_PITCH3_DECR                                       = 121; // Decrement prop pitch lever 3;
const PROP_PITCH3_HI                                         = 122; // Set prop pitch lever 3 min (hi pitch);
const PROP_PITCH4_LO                                         = 123; // Set prop pitch lever 4 max (lo pitch);
const PROP_PITCH4_INCR                                       = 124; // Increment prop pitch lever 4;
const PROP_PITCH4_INCR_SMALL                                 = 125; // Increment prop pitch lever 4 small;
const PROP_PITCH4_DECR                                       = 126; // Decrement prop pitch lever 4;
const PROP_PITCH4_HI                                         = 127; // Set prop pitch lever 4 min (hi pitch);
const AXIS_PROPELLER_SET                                     = 128; // Set propeller levers exact value (-16383 to +16383);
const AXIS_PROPELLER1_SET                                    = 129; // Set propeller lever 1 exact value (-16383 to +16383);
const AXIS_PROPELLER2_SET                                    = 130; // Set propeller lever 2 exact value (-16383 to +16383);
const AXIS_PROPELLER3_SET                                    = 131; // Set propeller lever 3 exact value (-16383 to +16383);
const AXIS_PROPELLER4_SET                                    = 132; // Set propeller lever 4 exact value (-16383 to +16383);
const JET_STARTER                                            = 133; // Selects jet engine starter (for +/- sequence);
const MAGNETO_SET                                            = 134; // "Sets magnetos (01)";
const TOGGLE_STARTER1                                        = 135; // Toggle starter 1;
const TOGGLE_STARTER2                                        = 136; // Toggle starter 2;
const TOGGLE_STARTER3                                        = 137; // Toggle starter 3;
const TOGGLE_STARTER4                                        = 138; // Toggle starter 4;
const TOGGLE_ALL_STARTERS                                    = 139; // Toggle starters;
const ENGINE_AUTO_START                                      = 140; // Triggers auto-start;
const ENGINE_AUTO_SHUTDOWN                                   = 141; // Triggers auto-shutdown;
const MAGNETO                                                = 142; // Selects magnetos (for +/- sequence);
const MAGNETO_DECR                                           = 143; // Decrease magneto switches positions;
const MAGNETO_INCR                                           = 144; // Increase magneto switches positions;
const MAGNETO1_OFF                                           = 145; // Set engine 1 magnetos off;
const MAGNETO1_RIGHT                                         = 146; // Toggle engine 1 right magneto;
const MAGNETO1_LEFT                                          = 147; // Toggle engine 1 left magneto;
const MAGNETO1_BOTH                                          = 148; // Set engine 1 magnetos on;
const MAGNETO1_START                                         = 149; // Set engine 1 magnetos on and toggle starter;
const MAGNETO2_OFF                                           = 150; // Set engine 2 magnetos off;
const MAGNETO2_RIGHT                                         = 151; // Toggle engine 2 right magneto;
const MAGNETO2_LEFT                                          = 152; // Toggle engine 2 left magneto;
const MAGNETO2_BOTH                                          = 153; // Set engine 2 magnetos on;
const MAGNETO2_START                                         = 154; // Set engine 2 magnetos on and toggle starter;
const MAGNETO3_OFF                                           = 155; // Set engine 3 magnetos off;
const MAGNETO3_RIGHT                                         = 156; // Toggle engine 3 right magneto;
const MAGNETO3_LEFT                                          = 157; // Toggle engine 3 left magneto;
const MAGNETO3_BOTH                                          = 158; // Set engine 3 magnetos on;
const MAGNETO3_START                                         = 159; // Set engine 3 magnetos on and toggle starter;
const MAGNETO4_OFF                                           = 160; // Set engine 4 magnetos off;
const MAGNETO4_RIGHT                                         = 161; // Toggle engine 4 right magneto;
const MAGNETO4_LEFT                                          = 162; // Toggle engine 4 left magneto;
const MAGNETO4_BOTH                                          = 163; // Set engine 4 magnetos on;
const MAGNETO4_START                                         = 164; // Set engine 4 magnetos on and toggle starter;
const MAGNETO_OFF                                            = 165; // Set engine magnetos off;
const MAGNETO_RIGHT                                          = 166; // Set engine right magnetos on;
const MAGNETO_LEFT                                           = 167; // Set engine left magnetos on;
const MAGNETO_BOTH                                           = 168; // Set engine magnetos on;
const MAGNETO_START                                          = 169; // Set engine magnetos on and toggle starters;
const MAGNETO1_DECR                                          = 170; // Decrease engine 1 magneto switch position;
const MAGNETO1_INCR                                          = 171; // Increase engine 1 magneto switch position;
const MAGNETO2_DECR                                          = 172; // Decrease engine 2 magneto switch position;
const MAGNETO2_INCR                                          = 173; // Increase engine 2 magneto switch position;
const MAGNETO3_DECR                                          = 174; // Decrease engine 3 magneto switch position;
const MAGNETO3_INCR                                          = 175; // Increase engine 3 magneto switch position;
const MAGNETO4_DECR                                          = 176; // Decrease engine 4 magneto switch position;
const MAGNETO4_INCR                                          = 177; // Increase engine 4 magneto switch position;
const MAGNETO1_SET                                           = 178; // Set engine 1 magneto switch;
const MAGNETO2_SET                                           = 179; // Set engine 2 magneto switch;
const MAGNETO3_SET                                           = 180; // Set engine 3 magneto switch;
const MAGNETO4_SET                                           = 181; // Set engine 4 magneto switch;
const ANTI_ICE_ON                                            = 182; // Sets anti-ice switches on;
const ANTI_ICE_OFF                                           = 183; // Sets anti-ice switches off;
const ANTI_ICE_SET                                           = 184; // "Sets anti-ice switches from argument (01)";
const ANTI_ICE_TOGGLE                                        = 185; // Toggle anti-ice switches;
const ANTI_ICE_TOGGLE_ENG1                                   = 186; // Toggle engine 1 anti-ice switch;
const ANTI_ICE_TOGGLE_ENG2                                   = 187; // Toggle engine 2 anti-ice switch;
const ANTI_ICE_TOGGLE_ENG3                                   = 188; // Toggle engine 3 anti-ice switch;
const ANTI_ICE_TOGGLE_ENG4                                   = 189; // Toggle engine 4 anti-ice switch;
const ANTI_ICE_SET_ENG1                                      = 190; // "Sets engine 1 anti-ice switch (01)";
const ANTI_ICE_SET_ENG2                                      = 191; // "Sets engine 2 anti-ice switch (01)";
const ANTI_ICE_SET_ENG3                                      = 192; // "Sets engine 3 anti-ice switch (01)";
const ANTI_ICE_SET_ENG4                                      = 193; // "Sets engine 4 anti-ice switch (01)";
const TOGGLE_FUEL_VALVE_ALL                                  = 194; // Toggle engine fuel valves;
const TOGGLE_FUEL_VALVE_ENG1                                 = 195; // Toggle engine 1 fuel valve;
const TOGGLE_FUEL_VALVE_ENG2                                 = 196; // Toggle engine 2 fuel valve;
const TOGGLE_FUEL_VALVE_ENG3                                 = 197; // Toggle engine 3 fuel valve;
const TOGGLE_FUEL_VALVE_ENG4                                 = 198; // Toggle engine 4 fuel valve;
const COWLFLAP1_SET                                          = 199; // Sets engine 1 cowl flap lever position (0 to 16383);
const COWLFLAP2_SET                                          = 200; // Sets engine 2 cowl flap lever position (0 to 16383);
const COWLFLAP3_SET                                          = 201; // Sets engine 3 cowl flap lever position (0 to 16383);
const COWLFLAP4_SET                                          = 202; // Sets engine 4 cowl flap lever position (0 to 16383);
const INC_COWL_FLAPS                                         = 203; // Increment cowl flap levers;
const DEC_COWL_FLAPS                                         = 204; // Decrement cowl flap levers;
const INC_COWL_FLAPS1                                        = 205; // Increment engine 1 cowl flap lever;
const DEC_COWL_FLAPS1                                        = 206; // Decrement engine 1 cowl flap lever;
const INC_COWL_FLAPS2                                        = 207; // Increment engine 2 cowl flap lever;
const DEC_COWL_FLAPS2                                        = 208; // Decrement engine 2 cowl flap lever;
const INC_COWL_FLAPS3                                        = 209; // Increment engine 3 cowl flap lever;
const DEC_COWL_FLAPS3                                        = 210; // Decrement engine 3 cowl flap lever;
const INC_COWL_FLAPS4                                        = 211; // Increment engine 4 cowl flap lever;
const DEC_COWL_FLAPS4                                        = 212; // Decrement engine 4 cowl flap lever;
const FUEL_PUMP                                              = 213; // Toggle electric fuel pumps;
const TOGGLE_ELECT_FUEL_PUMP                                 = 214; // Toggle electric fuel pumps;
const TOGGLE_ELECT_FUEL_PUMP1                                = 215; // Toggle engine 1 electric fuel pump;
const TOGGLE_ELECT_FUEL_PUMP2                                = 216; // Toggle engine 2 electric fuel pump;
const TOGGLE_ELECT_FUEL_PUMP3                                = 217; // Toggle engine 3 electric fuel pump;
const TOGGLE_ELECT_FUEL_PUMP4                                = 218; // Toggle engine 4 electric fuel pump;
const ENGINE_PRIMER                                          = 219; // Trigger engine primers;
const TOGGLE_PRIMER                                          = 220; // Trigger engine primers;
const TOGGLE_PRIMER1                                         = 221; // Trigger engine 1 primer;
const TOGGLE_PRIMER2                                         = 222; // Trigger engine 2 primer;
const TOGGLE_PRIMER3                                         = 223; // Trigger engine 3 primer;
const TOGGLE_PRIMER4                                         = 224; // Trigger engine 4 primer;
const TOGGLE_FEATHER_SWITCHES                                = 225; // Trigger propeller switches;
const TOGGLE_FEATHER_SWITCH_1                                = 226; // Trigger propeller 1 switch;
const TOGGLE_FEATHER_SWITCH_2                                = 227; // Trigger propeller 2 switch;
const TOGGLE_FEATHER_SWITCH_3                                = 228; // Trigger propeller 3 switch;
const TOGGLE_FEATHER_SWITCH_4                                = 229; // Trigger propeller 4 switch;
const TOGGLE_PROPELLER_SYNC                                  = 230; // Turns propeller synchronization switch on;
const TOGGLE_AUTOFEATHER_ARM                                 = 231; // Turns auto-feather arming switch on.;
const TOGGLE_AFTERBURNER                                     = 232; // Toggles afterburners;
const TOGGLE_AFTERBURNER1                                    = 233; // Toggles engine 1 afterburner;
const TOGGLE_AFTERBURNER2                                    = 234; // Toggles engine 2 afterburner;
const TOGGLE_AFTERBURNER3                                    = 235; // Toggles engine 3 afterburner;
const TOGGLE_AFTERBURNER4                                    = 236; // Toggles engine 4 afterburner;
const ENGINE                                                 = 237; // "Sets engines for 1234 selection (to be followed by SELECT_n)";

//
// Aircraft Flight Controls
//

const SPOILERS_TOGGLE                                        = 238; // Toggles spoiler handle;
const FLAPS_UP                                               = 239; // Sets flap handle to full retract position;
const FLAPS_1                                                = 240; // Sets flap handle to first extension position;
const FLAPS_2                                                = 241; // Sets flap handle to second extension position;
const FLAPS_3                                                = 242; // Sets flap handle to third extension position;
const FLAPS_DOWN                                             = 243; // Sets flap handle to full extension position;
const ELEV_TRIM_DN                                           = 244; // Increments elevator trim down;
const ELEV_DOWN                                              = 245; // Increments elevator down;
const AILERONS_LEFT                                          = 246; // Increments ailerons left;
const CENTER_AILER_RUDDER                                    = 247; // Centers aileron and rudder positions;
const AILERONS_RIGHT                                         = 248; // Increments ailerons right;
const ELEV_TRIM_UP                                           = 249; // Increment elevator trim up;
const ELEV_UP                                                = 250; // Increments elevator up;
const RUDDER_LEFT                                            = 251; // Increments rudder left;
const RUDDER_CENTER                                          = 252; // Centers rudder position;
const RUDDER_RIGHT                                           = 253; // Increments rudder right;
const ELEVATOR_SET                                           = 254; // Sets elevator position (-16383 - +16383);
const AILERON_SET                                            = 255; // Sets aileron position (-16383 - +16383);
const RUDDER_SET                                             = 256; // Sets rudder position (-16383 - +16383);
const FLAPS_INCR                                             = 257; // Increments flap handle position;
const FLAPS_DECR                                             = 258; // Decrements flap handle position;
const AXIS_ELEVATOR_SET                                      = 259; // Sets elevator position (-16383 - +16383);
const AXIS_AILERONS_SET                                      = 260; // Sets aileron position (-16383 - +16383);
const AXIS_RUDDER_SET                                        = 261; // Sets rudder position (-16383 - +16383);
const AXIS_ELEV_TRIM_SET                                     = 262; // Sets elevator trim position (-16383 - +16383);
const SPOILERS_SET                                           = 263; // Sets spoiler handle position (0 to 16383);
const SPOILERS_ARM_TOGGLE                                    = 264; // Toggles arming of auto-spoilers;
const SPOILERS_ON                                            = 265; // Sets spoiler handle to full extend position;
const SPOILERS_OFF                                           = 266; // Sets spoiler handle to full retract position;
const SPOILERS_ARM_ON                                        = 267; // Sets auto-spoiler arming on;
const SPOILERS_ARM_OFF                                       = 268; // Sets auto-spoiler arming off;
const SPOILERS_ARM_SET                                       = 269; // "Sets auto-spoiler arming (01)";
const AILERON_TRIM_LEFT                                      = 270; // Increments aileron trim left;
const AILERON_TRIM_RIGHT                                     = 271; // Increments aileron trim right;
const RUDDER_TRIM_LEFT                                       = 272; // Increments rudder trim left;
const RUDDER_TRIM_RIGHT                                      = 273; // Increments aileron trim right;
const AXIS_SPOILER_SET                                       = 274; // Sets spoiler handle position (-16383 - +16383);
const FLAPS_SET                                              = 275; // Sets flap handle to closest increment (0 to 16383);
const ELEVATOR_TRIM_SET                                      = 276; // Sets elevator trim position (0 to 16383);
const AXIS_FLAPS_SET                                         = 277; // Sets flap handle to closest increment (-16383 - +16383);

//
// Aircraft Automatic Flight Systems / Autopilot
//

const AP_MASTER                                              = 278; // Toggles AP on/off;
const AUTOPILOT_OFF                                          = 279; // Turns AP off;
const AUTOPILOT_ON                                           = 280; // Turns AP on;
const YAW_DAMPER_TOGGLE                                      = 281; // Toggles yaw damper on/off;
const AP_PANEL_HEADING_HOLD                                  = 282; // Toggles heading hold mode on/off;
const AP_PANEL_ALTITUDE_HOLD                                 = 283; // Toggles altitude hold mode on/off;
const AP_ATT_HOLD_ON                                         = 284; // Turns on AP wing leveler and pitch hold mode;
const AP_LOC_HOLD_ON                                         = 285; // Turns AP localizer hold on/armed and glide-slope hold mode off;
const AP_APR_HOLD_ON                                         = 286; // Turns both AP localizer and glide-slope modes on/armed;
const AP_HDG_HOLD_ON                                         = 287; // Turns heading hold mode on;
const AP_ALT_HOLD_ON                                         = 288; // Turns altitude hold mode on;
const AP_WING_LEVELER_ON                                     = 289; // Turns wing leveler mode on;
const AP_BC_HOLD_ON                                          = 290; // Turns localizer back course hold mode on/armed;
const AP_NAV1_HOLD_ON                                        = 291; // Turns lateral hold mode on;
const AP_ATT_HOLD_OFF                                        = 292; // Turns off attitude hold mode;
const AP_LOC_HOLD_OFF                                        = 293; // Turns off localizer hold mode;
const AP_APR_HOLD_OFF                                        = 294; // Turns off approach hold mode;
const AP_HDG_HOLD_OFF                                        = 295; // Turns off heading hold mode;
const AP_ALT_HOLD_OFF                                        = 296; // Turns off altitude hold mode;
const AP_WING_LEVELER_OFF                                    = 297; // Turns off wing leveler mode;
const AP_BC_HOLD_OFF                                         = 298; // Turns off backcourse mode for localizer hold;
const AP_NAV1_HOLD_OFF                                       = 299; // Turns off nav hold mode;
const AP_AIRSPEED_HOLD                                       = 300; // Toggles airspeed hold mode;
const AUTO_THROTTLE_ARM                                      = 301; // Toggles autothrottle arming mode;
const AUTO_THROTTLE_TO_GA                                    = 302; // Toggles Takeoff/Go Around mode;
const HEADING_BUG_INC                                        = 303; // Increments heading hold reference bug;
const HEADING_BUG_DEC                                        = 304; // Decrements heading hold reference bug;
const HEADING_BUG_SET                                        = 305; // Set heading hold reference bug (degrees);
const AP_PANEL_SPEED_HOLD                                    = 306; // Toggles airspeed hold mode;
const AP_ALT_VAR_INC                                         = 307; // Increments reference altitude;
const AP_ALT_VAR_DEC                                         = 308; // Decrements reference altitude;
const AP_VS_VAR_INC                                          = 309; // Increments vertical speed reference;
const AP_VS_VAR_DEC                                          = 310; // Decrements vertical speed reference;
const AP_SPD_VAR_INC                                         = 311; // Increments airspeed hold reference;
const AP_SPD_VAR_DEC                                         = 312; // Decrements airspeed hold reference;
const AP_PANEL_MACH_HOLD                                     = 313; // Toggles mach hold;
const AP_MACH_VAR_INC                                        = 314; // Increments reference mach;
const AP_MACH_VAR_DEC                                        = 315; // Decrements reference mach;
const AP_MACH_HOLD                                           = 316; // Toggles mach hold;
const AP_ALT_VAR_SET_METRIC                                  = 317; // Sets reference altitude in meters;
const AP_VS_VAR_SET_ENGLISH                                  = 318; // Sets reference vertical speed in feet per minute;
const AP_SPD_VAR_SET                                         = 319; // Sets airspeed reference in knots;
const AP_MACH_VAR_SET                                        = 320; // Sets mach reference;
const YAW_DAMPER_ON                                          = 321; // Turns yaw damper on;
const YAW_DAMPER_OFF                                         = 322; // Turns yaw damper off;
const YAW_DAMPER_SET                                         = 323; // "Sets yaw damper on/off (10)";
const AP_AIRSPEED_ON                                         = 324; // Turns airspeed hold on;
const AP_AIRSPEED_OFF                                        = 325; // Turns airspeed hold off;
const AP_AIRSPEED_SET                                        = 326; // "Sets airspeed hold on/off (10)";
const AP_MACH_ON                                             = 327; // Turns mach hold on;
const AP_MACH_OFF                                            = 328; // Turns mach hold off;
const AP_MACH_SET                                            = 329; // "Sets mach hold on/off (10)";
const AP_PANEL_ALTITUDE_ON                                   = 330; // Turns altitude hold mode on (without capturing current altitude);
const AP_PANEL_ALTITUDE_OFF                                  = 331; // Turns altitude hold mode off;
const AP_PANEL_ALTITUDE_SET                                  = 332; // "Sets altitude hold mode on/off (10)";
const AP_PANEL_HEADING_ON                                    = 333; // Turns heading mode on (without capturing current heading);
const AP_PANEL_HEADING_OFF                                   = 334; // Turns heading mode off;
const AP_PANEL_HEADING_SET                                   = 335; // "Set heading mode on/off (10)";
const AP_PANEL_MACH_ON                                       = 336; // Turns on mach hold;
const AP_PANEL_MACH_OFF                                      = 337; // Turns off mach hold;
const AP_PANEL_MACH_SET                                      = 338; // "Sets mach hold on/off (10)";
const AP_PANEL_SPEED_ON                                      = 339; // Turns on speed hold mode;
const AP_PANEL_SPEED_OFF                                     = 340; // Turns off speed hold mode;
const AP_PANEL_SPEED_SET                                     = 341; // "Set speed hold mode on/off (10)";
const AP_ALT_VAR_SET_ENGLISH                                 = 342; // Sets altitude reference in feet;
const AP_VS_VAR_SET_METRIC                                   = 343; // Sets vertical speed reference in meters per minute;
const TOGGLE_FLIGHT_DIRECTOR                                 = 344; // Toggles flight director on/off;
const SYNC_FLIGHT_DIRECTOR_PITCH                             = 345; // Synchronizes flight director pitch with current aircraft pitch;
const INCREASE_AUTOBRAKE_CONTROL                             = 346; // Increments autobrake level;
const DECREASE_AUTOBRAKE_CONTROL                             = 347; // Decrements autobrake level;
const AP_PANEL_SPEED_HOLD_TOGGLE                             = 348; // Turns airspeed hold mode on with current airspeed;
const AP_PANEL_MACH_HOLD_TOGGLE                              = 349; // Sets mach hold reference to current mach;
const AP_NAV_SELECT_SET                                      = 350; // Sets the nav (1 or 2) which is used by the Nav hold modes;
const HEADING_BUG_SELECT                                     = 351; // Selects the heading bug for use with +/-;
const ALTITUDE_BUG_SELECT                                    = 352; // Selects the altitude reference for use with +/-;
const VSI_BUG_SELECT                                         = 353; // Selects the vertical speed reference for use with +/-;
const AIRSPEED_BUG_SELECT                                    = 354; // Selects the airspeed reference for use with +/-;
const AP_PITCH_REF_INC_UP                                    = 355; // Increments the pitch reference for pitch hold mode;
const AP_PITCH_REF_INC_DN                                    = 356; // Decrements the pitch reference for pitch hold mode;
const AP_PITCH_REF_SELECT                                    = 357; // Selects pitch reference for use with +/-;
const AP_ATT_HOLD                                            = 358; // Toggle attitude hold mode;
const AP_LOC_HOLD                                            = 359; // Toggles localizer (only) hold mode;
const AP_APR_HOLD                                            = 360; // Toggles approach hold (localizer and glide-slope);
const AP_HDG_HOLD                                            = 361; // Toggles heading hold mode;
const AP_ALT_HOLD                                            = 362; // Toggles altitude hold mode;
const AP_WING_LEVELER                                        = 363; // Toggles wing leveler mode;
const AP_BC_HOLD                                             = 364; // Toggles the backcourse mode for the localizer hold;
const AP_NAV1_HOLD                                           = 365; // Toggles the nav hold mode;
const AP_MAX_BANK_INC                                        = 366; // Autopilot max bank angle increment.;
const AP_MAX_BANK_DEC                                        = 367; // Autopilot max bank angle decrement.;
const AP_N1_HOLD                                             = 368; // "Autopilot hold the N1 percentage at its current level.";
const AP_N1_REF_INC                                          = 369; // Increment the autopilot N1 reference.;
const AP_N1_REF_DEC                                          = 370; // Decrement the autopilot N1 reference.;
const AP_N1_REF_SET                                          = 371; // Sets the autopilot N1 reference.;
const FLY_BY_WIRE_ELAC_TOGGLE                                = 372; // Turn on or off the fly by wire Elevators and Ailerons computer.;
const FLY_BY_WIRE_FAC_TOGGLE                                 = 373; // Turn on or off the fly by wire Flight Augmentation computer.;
const FLY_BY_WIRE_SEC_TOGGLE                                 = 374; // Turn on or off the fly by wire Spoilers and Elevators computer.;

//
// G1000 Keys (Primary Flight Display)
//

const G1000_PFD_FLIGHTPLAN_BUTTON                            = 375; // The primary flight display (PFD) should display its current flight plan.;
const G1000_PFD_PROCEDURE_BUTTON                             = 376; // Turn to the Procedure page.;
const G1000_PFD_ZOOMIN_BUTTON                                = 377; // Zoom in on the current map.;
const G1000_PFD_ZOOMOUT_BUTTON                               = 378; // Zoom out on the current map.;
const G1000_PFD_DIRECTTO_BUTTON                              = 379; // Turn to the Direct To page.;
const G1000_PFD_MENU_BUTTON                                  = 380; // "If a segmented flight plan is highlighted activates the associated menu.";
const G1000_PFD_CLEAR_BUTTON                                 = 381; // Clears the current input.;
const G1000_PFD_ENTER_BUTTON                                 = 382; // Enters the current input.;
const G1000_PFD_CURSOR_BUTTON                                = 383; // Turns on or off a screen cursor.;
const G1000_PFD_GROUP_KNOB_INC                               = 384; // Step up through the page groups.;
const G1000_PFD_GROUP_KNOB_DEC                               = 385; // Step down through the page groups.;
const G1000_PFD_PAGE_KNOB_INC                                = 386; // Step up through the individual pages.;
const G1000_PFD_PAGE_KNOB_DEC                                = 387; // Step down through the individual pages.;
const G1000_PFD_SOFTKEY1                                     = 388; // Initiate the action for the icon displayed in the softkey position.;
const G1000_PFD_SOFTKEY2                                     = 389; // Initiate the action for the icon displayed in the softkey position.;
const G1000_PFD_SOFTKEY3                                     = 390; // Initiate the action for the icon displayed in the softkey position.;
const G1000_PFD_SOFTKEY4                                     = 391; // Initiate the action for the icon displayed in the softkey position.;
const G1000_PFD_SOFTKEY5                                     = 392; // Initiate the action for the icon displayed in the softkey position.;
const G1000_PFD_SOFTKEY6                                     = 393; // Initiate the action for the icon displayed in the softkey position.;
const G1000_PFD_SOFTKEY7                                     = 394; // Initiate the action for the icon displayed in the softkey position.;
const G1000_PFD_SOFTKEY8                                     = 395; // Initiate the action for the icon displayed in the softkey position.;
const G1000_PFD_SOFTKEY9                                     = 396; // Initiate the action for the icon displayed in the softkey position.;
const G1000_PFD_SOFTKEY10                                    = 397; // Initiate the action for the icon displayed in the softkey position.;
const G1000_PFD_SOFTKEY11                                    = 398; // Initiate the action for the icon displayed in the softkey position.;
const G1000_PFD_SOFTKEY12                                    = 399; // Initiate the action for the icon displayed in the softkey position.;

//
// G1000 (Multi-function Display)
//

const G1000_MFD_FLIGHTPLAN_BUTTON                            = 400; // The multifunction display (MFD) should display its current flight plan.;
const G1000_MFD_PROCEDURE_BUTTON                             = 401; // Turn to the Procedure page.;
const G1000_MFD_ZOOMIN_BUTTON                                = 402; // Zoom in on the current map.;
const G1000_MFD_ZOOMOUT_BUTTON                               = 403; // Zoom out on the current map.;
const G1000_MFD_DIRECTTO_BUTTON                              = 404; // Turn to the Direct To page.;
const G1000_MFD_MENU_BUTTON                                  = 405; // "If a segmented flight plan is highlighted activates the associated menu.";
const G1000_MFD_CLEAR_BUTTON                                 = 406; // Clears the current input.;
const G1000_MFD_ENTER_BUTTON                                 = 407; // Enters the current input.;
const G1000_MFD_CURSOR_BUTTON                                = 408; // Turns on or off a screen cursor.;
const G1000_MFD_GROUP_KNOB_INC                               = 409; // Step up through the page groups.;
const G1000_MFD_GROUP_KNOB_DEC                               = 410; // Step down through the page groups.;
const G1000_MFD_PAGE_KNOB_INC                                = 411; // Step up through the individual pages.;
const G1000_MFD_PAGE_KNOB_DEC                                = 412; // Step down through the individual pages.;
const G1000_MFD_SOFTKEY1                                     = 413; // Initiate the action for the icon displayed in the softkey position.;
const G1000_MFD_SOFTKEY2                                     = 414; // Initiate the action for the icon displayed in the softkey position.;
const G1000_MFD_SOFTKEY3                                     = 415; // Initiate the action for the icon displayed in the softkey position.;
const G1000_MFD_SOFTKEY4                                     = 416; // Initiate the action for the icon displayed in the softkey position.;
const G1000_MFD_SOFTKEY5                                     = 417; // Initiate the action for the icon displayed in the softkey position.;
const G1000_MFD_SOFTKEY6                                     = 418; // Initiate the action for the icon displayed in the softkey position.;
const G1000_MFD_SOFTKEY7                                     = 419; // Initiate the action for the icon displayed in the softkey position.;
const G1000_MFD_SOFTKEY8                                     = 420; // Initiate the action for the icon displayed in the softkey position.;
const G1000_MFD_SOFTKEY9                                     = 421; // Initiate the action for the icon displayed in the softkey position.;
const G1000_MFD_SOFTKEY10                                    = 422; // Initiate the action for the icon displayed in the softkey position.;
const G1000_MFD_SOFTKEY11                                    = 423; // Initiate the action for the icon displayed in the softkey position.;
const G1000_MFD_SOFTKEY12                                    = 424; // Initiate the action for the icon displayed in the softkey position.;

//
// Aircraft Fuel System
//

const FUEL_SELECTOR_OFF                                      = 425; // Turns selector 1 to OFF position;
const FUEL_SELECTOR_ALL                                      = 426; // Turns selector 1 to ALL position;
const FUEL_SELECTOR_LEFT                                     = 427; // Turns selector 1 to LEFT position (burns from tip then aux then main);
const FUEL_SELECTOR_RIGHT                                    = 428; // Turns selector 1 to RIGHT position (burns from tip then aux then main);
const FUEL_SELECTOR_LEFT_AUX                                 = 429; // Turns selector 1 to LEFT AUX position;
const FUEL_SELECTOR_RIGHT_AUX                                = 430; // Turns selector 1 to RIGHT AUX position;
const FUEL_SELECTOR_CENTER                                   = 431; // Turns selector 1 to CENTER position;
const FUEL_SELECTOR_SET                                      = 432; // Sets selector 1 position (see code list below);
const FUEL_SELECTOR_2_OFF                                    = 433; // Turns selector 2 to OFF position;
const FUEL_SELECTOR_2_ALL                                    = 434; // Turns selector 2 to ALL position;
const FUEL_SELECTOR_2_LEFT                                   = 435; // Turns selector 2 to LEFT position (burns from tip then aux then main);
const FUEL_SELECTOR_2_RIGHT                                  = 436; // Turns selector 2 to RIGHT position (burns from tip then aux then main);
const FUEL_SELECTOR_2_LEFT_AUX                               = 437; // Turns selector 2 to LEFT AUX position;
const FUEL_SELECTOR_2_RIGHT_AUX                              = 438; // Turns selector 2 to RIGHT AUX position;
const FUEL_SELECTOR_2_CENTER                                 = 439; // Turns selector 2 to CENTER position;
const FUEL_SELECTOR_2_SET                                    = 440; // Sets selector 2 position (see code list below);
const FUEL_SELECTOR_3_OFF                                    = 441; // Turns selector 3 to OFF position;
const FUEL_SELECTOR_3_ALL                                    = 442; // Turns selector 3 to ALL position;
const FUEL_SELECTOR_3_LEFT                                   = 443; // Turns selector 3 to LEFT position (burns from tip then aux then main);
const FUEL_SELECTOR_3_RIGHT                                  = 444; // Turns selector 3 to RIGHT position (burns from tip then aux then main);
const FUEL_SELECTOR_3_LEFT_AUX                               = 445; // Turns selector 3 to LEFT AUX position;
const FUEL_SELECTOR_3_RIGHT_AUX                              = 446; // Turns selector 3 to RIGHT AUX position;
const FUEL_SELECTOR_3_CENTER                                 = 447; // Turns selector 3 to CENTER position;
const FUEL_SELECTOR_3_SET                                    = 448; // Sets selector 3 position (see code list below);
const FUEL_SELECTOR_4_OFF                                    = 449; // Turns selector 4 to OFF position;
const FUEL_SELECTOR_4_ALL                                    = 450; // Turns selector 4 to ALL position;
const FUEL_SELECTOR_4_LEFT                                   = 451; // Turns selector 4 to LEFT position (burns from tip then aux then main);
const FUEL_SELECTOR_4_RIGHT                                  = 452; // Turns selector 4 to RIGHT position (burns from tip then aux then main);
const FUEL_SELECTOR_4_LEFT_AUX                               = 453; // Turns selector 4 to LEFT AUX position;
const FUEL_SELECTOR_4_RIGHT_AUX                              = 454; // Turns selector 4 to RIGHT AUX position;
const FUEL_SELECTOR_4_CENTER                                 = 455; // Turns selector 4 to CENTER position;
const FUEL_SELECTOR_4_SET                                    = 456; // Sets selector 4 position (see code list below);
const CROSS_FEED_OPEN                                        = 457; // "Opens cross feed valve (when used in conjunction with ""isolate"" tank)";
const CROSS_FEED_TOGGLE                                      = 458; // "Toggles crossfeed valve (when used in conjunction with ""isolate"" tank)";
const CROSS_FEED_OFF                                         = 459; // "Closes crossfeed valve (when used in conjunction with ""isolate"" tank)";
const FUEL_DUMP_SWITCH_SET                                   = 460; // "Set to True or False. The switch can only be set to True if fuel_dump_rateis specified in the aircraft configuration file which indicates that a fuel dump system exists.";
const ANTIDETONATION_TANK_VALVE_TOGGLE                       = 461; // "Toggle the antidetonation valve. Pass a value to determine which tank if there are multiple tanks to use. Tanks are indexed from 1. Refer to the document Notes on Aircraft Systems.";
const NITROUS_TANK_VALVE_TOGGLE                              = 462; // "Toggle the nitrous valve. Pass a value to determine which tank if there are multiple tanks to use. Tanks are indexed from 1.";
const REPAIR_AND_REFUEL                                      = 463; // Fully repair and refuel the user aircraft. Ignored if flight realism is enforced.;
const FUEL_DUMP_TOGGLE                                       = 464; // Turns on or off the fuel dump switch.;
const REQUEST_FUEL_KEY                                       = 465; // Request a fuel truck. The aircraft must be in a parking spot for this to be successful.;

//
// Fuel Selection Keys
//

const FUEL_SELECTOR_LEFT_MAIN                                = 466; // "Sets the fuel selector. Fuel will be taken in the order left tip left aux then main fuel tanks.";
const FUEL_SELECTOR_2_LEFT_MAIN                              = 467; // Sets the fuel selector for engine 2.;
const FUEL_SELECTOR_3_LEFT_MAIN                              = 468; // Sets the fuel selector for engine 3.;
const FUEL_SELECTOR_4_LEFT_MAIN                              = 469; // Sets the fuel selector for engine 4.;
const FUEL_SELECTOR_RIGHT_MAIN                               = 470; // "Sets the fuel selector. Fuel will be taken in the order right tip right aux then main fuel tanks.";
const FUEL_SELECTOR_2_RIGHT_MAIN                             = 471; // Sets the fuel selector for engine 2.;
const FUEL_SELECTOR_3_RIGHT_MAIN                             = 472; // Sets the fuel selector for engine 3.;
const FUEL_SELECTOR_4_RIGHT_MAIN                             = 473; // Sets the fuel selector for engine 4.;

//
// Aircraft Avionics
//

const XPNDR                                                  = 474; // Sequentially selects the transponder digits for use with +/-.;
const ADF                                                    = 475; // Sequentially selects the ADF tuner digits for use with +/-. Follow by KEY_SELECT_2 for ADF 2.;
const DME                                                    = 476; // Selects the DME for use with +/-;
const COM_RADIO                                              = 477; // Sequentially selects the COM tuner digits for use with +/-. Follow by KEY_SELECT_2 for COM 2.;
const VOR_OBS                                                = 478; // Sequentially selects the VOR OBS for use with +/-. Follow by KEY_SELECT_2 for VOR 2.;
const NAV_RADIO                                              = 479; // Sequentially selects the NAV tuner digits for use with +/-. Follow by KEY_SELECT_2 for NAV 2.;
const COM_RADIO_WHOLE_DEC                                    = 480; // Decrements COM by one MHz;
const COM_RADIO_WHOLE_INC                                    = 481; // Increments COM by one MHz;
const COM_RADIO_FRACT_DEC                                    = 482; // Decrements COM by 25 KHz;
const COM_RADIO_FRACT_INC                                    = 483; // Increments COM by 25 KHz;
const NAV1_RADIO_WHOLE_DEC                                   = 484; // Decrements Nav 1 by one MHz;
const NAV1_RADIO_WHOLE_INC                                   = 485; // Increments Nav 1 by one MHz;
const NAV1_RADIO_FRACT_DEC                                   = 486; // Decrements Nav 1 by 25 KHz;
const NAV1_RADIO_FRACT_INC                                   = 487; // Increments Nav 1 by 25 KHz;
const NAV2_RADIO_WHOLE_DEC                                   = 488; // Decrements Nav 2 by one MHz;
const NAV2_RADIO_WHOLE_INC                                   = 489; // Increments Nav 2 by one MHz;
const NAV2_RADIO_FRACT_DEC                                   = 490; // Decrements Nav 2 by 25 KHz;
const NAV2_RADIO_FRACT_INC                                   = 491; // Increments Nav 2 by 25 KHz;
const ADF_100_INC                                            = 492; // Increments ADF by 100 KHz;
const ADF_10_INC                                             = 493; // Increments ADF by 10 KHz;
const ADF_1_INC                                              = 494; // Increments ADF by 1 KHz;
const XPNDR_1000_INC                                         = 495; // Increments first digit of transponder;
const XPNDR_100_INC                                          = 496; // Increments second digit of transponder;
const XPNDR_10_INC                                           = 497; // Increments third digit of transponder;
const XPNDR_1_INC                                            = 498; // Increments fourth digit of transponder;
const VOR1_OBI_DEC                                           = 499; // Decrements the VOR 1 OBS setting;
const VOR1_OBI_INC                                           = 500; // Increments the VOR 1 OBS setting;
const VOR2_OBI_DEC                                           = 501; // Decrements the VOR 2 OBS setting;
const VOR2_OBI_INC                                           = 502; // Increments the VOR 2 OBS setting;
const ADF_100_DEC                                            = 503; // Decrements ADF by 100 KHz;
const ADF_10_DEC                                             = 504; // Decrements ADF by 10 KHz;
const ADF_1_DEC                                              = 505; // Decrements ADF by 1 KHz;
const COM_RADIO_SET                                          = 506; // Sets COM frequency (BCD Hz);
const NAV1_RADIO_SET                                         = 507; // Sets NAV 1 frequency (BCD Hz);
const NAV2_RADIO_SET                                         = 508; // Sets NAV 2 frequency (BCD Hz);
const ADF_SET                                                = 509; // Sets ADF frequency (BCD Hz);
const XPNDR_SET                                              = 510; // Sets transponder code (BCD);
const VOR1_SET                                               = 511; // Sets OBS 1 (0 to 360);
const VOR2_SET                                               = 512; // Sets OBS 2 (0 to 360);
const DME1_TOGGLE                                            = 513; // Sets DME display to Nav 1;
const DME2_TOGGLE                                            = 514; // Sets DME display to Nav 2;
const RADIO_VOR1_IDENT_DISABLE                               = 515; // Turns NAV 1 ID off;
const RADIO_VOR2_IDENT_DISABLE                               = 516; // Turns NAV 2 ID off;
const RADIO_DME1_IDENT_DISABLE                               = 517; // Turns DME 1 ID off;
const RADIO_DME2_IDENT_DISABLE                               = 518; // Turns DME 2 ID off;
const RADIO_ADF_IDENT_DISABLE                                = 519; // Turns ADF 1 ID off;
const RADIO_VOR1_IDENT_ENABLE                                = 520; // Turns NAV 1 ID on;
const RADIO_VOR2_IDENT_ENABLE                                = 521; // Turns NAV 2 ID on;
const RADIO_DME1_IDENT_ENABLE                                = 522; // Turns DME 1 ID on;
const RADIO_DME2_IDENT_ENABLE                                = 523; // Turns DME 2 ID on;
const RADIO_ADF_IDENT_ENABLE                                 = 524; // Turns ADF 1 ID on;
const RADIO_VOR1_IDENT_TOGGLE                                = 525; // Toggles NAV 1 ID;
const RADIO_VOR2_IDENT_TOGGLE                                = 526; // Toggles NAV 2 ID;
const RADIO_DME1_IDENT_TOGGLE                                = 527; // Toggles DME 1 ID;
const RADIO_DME2_IDENT_TOGGLE                                = 528; // Toggles DME 2 ID;
const RADIO_ADF_IDENT_TOGGLE                                 = 529; // Toggles ADF 1 ID;
const RADIO_VOR1_IDENT_SET                                   = 530; // Sets NAV 1 ID (on/off);
const RADIO_VOR2_IDENT_SET                                   = 531; // Sets NAV 2 ID (on/off);
const RADIO_DME1_IDENT_SET                                   = 532; // Sets DME 1 ID (on/off);
const RADIO_DME2_IDENT_SET                                   = 533; // Sets DME 2 ID (on/off);
const RADIO_ADF_IDENT_SET                                    = 534; // Sets ADF 1 ID (on/off);
const ADF_CARD_INC                                           = 535; // Increments ADF card;
const ADF_CARD_DEC                                           = 536; // Decrements ADF card;
const ADF_CARD_SET                                           = 537; // Sets ADF card (0-360);
const TOGGLE_DME                                             = 538; // Toggles between NAV 1 and NAV 2;
const AVIONICS_MASTER_SET                                    = 539; // Sets the avionics master switch;
const TOGGLE_AVIONICS_MASTER                                 = 540; // Toggles the avionics master switch;
const COM_STBY_RADIO_SET                                     = 541; // Sets COM 1 standby frequency (BCD Hz);
const COM_STBY_RADIO_SWAP                                    = 542; // Swaps COM 1 frequency with standby;
const COM_RADIO_FRACT_DEC_CARRY                              = 543; // "Decrement COM 1 frequency by 25 KHz and carry when digit wraps";
const COM_RADIO_FRACT_INC_CARRY                              = 544; // "Increment COM 1 frequency by 25 KHz and carry when digit wraps";
const COM2_RADIO_WHOLE_DEC                                   = 545; // "Decrement COM 2 frequency by 1 MHz with no carry when digit wraps";
const COM2_RADIO_WHOLE_INC                                   = 546; // "Increment COM 2 frequency by 1 MHz with no carry when digit wraps";
const COM2_RADIO_FRACT_DEC                                   = 547; // "Decrement COM 2 frequency by 25 KHz with no carry when digit wraps";
const COM2_RADIO_FRACT_DEC_CARRY                             = 548; // "Decrement COM 2 frequency by 25 KHz and carry when digit wraps";
const COM2_RADIO_FRACT_INC                                   = 549; // "Increment COM 2 frequency by 25 KHz with no carry when digit wraps";
const COM2_RADIO_FRACT_INC_CARRY                             = 550; // "Increment COM 2 frequency by 25 KHz and carry when digit wraps";
const COM2_RADIO_SET                                         = 551; // Sets COM 2 frequency (BCD Hz);
const COM2_STBY_RADIO_SET                                    = 552; // Sets COM 2 standby frequency (BCD Hz);
const COM2_RADIO_SWAP                                        = 553; // Swaps COM 2 frequency with standby;
const NAV1_RADIO_FRACT_DEC_CARRY                             = 554; // "Decrement NAV 1 frequency by 50 KHz and carry when digit wraps";
const NAV1_RADIO_FRACT_INC_CARRY                             = 555; // "Increment NAV 1 frequency by 50 KHz and carry when digit wraps";
const NAV1_STBY_SET                                          = 556; // Sets NAV 1 standby frequency (BCD Hz);
const NAV1_RADIO_SWAP                                        = 557; // Swaps NAV 1 frequency with standby;
const NAV2_RADIO_FRACT_DEC_CARRY                             = 558; // "Decrement NAV 2 frequency by 50 KHz and carry when digit wraps";
const NAV2_RADIO_FRACT_INC_CARRY                             = 559; // "Increment NAV 2 frequency by 50 KHz and carry when digit wraps";
const NAV2_STBY_SET                                          = 560; // Sets NAV 2 standby frequency (BCD Hz);
const NAV2_RADIO_SWAP                                        = 561; // Swaps NAV 2 frequency with standby;
const ADF1_RADIO_TENTHS_DEC                                  = 562; // Decrements ADF 1 by 0.1 KHz.;
const ADF1_RADIO_TENTHS_INC                                  = 563; // Increments ADF 1 by 0.1 KHz.;
const XPNDR_1000_DEC                                         = 564; // Decrements first digit of transponder;
const XPNDR_100_DEC                                          = 565; // Decrements second digit of transponder;
const XPNDR_10_DEC                                           = 566; // Decrements third digit of transponder;
const XPNDR_1_DEC                                            = 567; // Decrements fourth digit of transponder;
const XPNDR_DEC_CARRY                                        = 568; // "Decrements fourth digit of transponder and with carry.";
const XPNDR_INC_CARRY                                        = 569; // "Increments fourth digit of transponder and with carry.";
const ADF_FRACT_DEC_CARRY                                    = 570; // "Decrements ADF 1 frequency by 0.1 KHz with carry";
const ADF_FRACT_INC_CARRY                                    = 571; // "Increments ADF 1 frequency by 0.1 KHz with carry";
const COM1_TRANSMIT_SELECT                                   = 572; // Selects COM 1 to transmit;
const COM2_TRANSMIT_SELECT                                   = 573; // Selects COM 2 to transmit;
const COM_RECEIVE_ALL_TOGGLE                                 = 574; // Toggles all COM radios to receive on;
const COM_RECEIVE_ALL_SET                                    = 575; // "Sets whether to receive on all COM radios (10)";
const MARKER_SOUND_TOGGLE                                    = 576; // Toggles marker beacon sound on/off;
const ADF_COMPLETE_SET                                       = 577; // Sets ADF 1 frequency (BCD Hz);
const ADF1_WHOLE_INC                                         = 578; // "Increments ADF 1 by 1 KHz with carry as digits wrap.";
const ADF1_WHOLE_DEC                                         = 579; // "Decrements ADF 1 by 1 KHz with carry as digits wrap.";
const ADF2_100_INC                                           = 580; // "Increments the ADF 2 frequency 100 digit with wrapping";
const ADF2_10_INC                                            = 581; // "Increments the ADF 2 frequency 10 digit with wrapping";
const ADF2_1_INC                                             = 582; // "Increments the ADF 2 frequency 1 digit with wrapping";
const ADF2_RADIO_TENTHS_INC                                  = 583; // "Increments ADF 2 frequency 1/10 digit with wrapping";
const ADF2_100_DEC                                           = 584; // "Decrements the ADF 2 frequency 100 digit with wrapping";
const ADF2_10_DEC                                            = 585; // "Decrements the ADF 2 frequency 10 digit with wrapping";
const ADF2_1_DEC                                             = 586; // "Decrements the ADF 2 frequency 1 digit with wrapping";
const ADF2_RADIO_TENTHS_DEC                                  = 587; // "Decrements ADF 2 frequency 1/10 digit with wrapping";
const ADF2_WHOLE_INC                                         = 588; // "Increments ADF 2 by 1 KHz with carry as digits wrap.";
const ADF2_WHOLE_DEC                                         = 589; // "Decrements ADF 2 by 1 KHz with carry as digits wrap.";
const ADF2_FRACT_DEC_CARRY                                   = 590; // "Decrements ADF 2 frequency by 0.1 KHz with carry";
const ADF2_FRACT_INC_CARRY                                   = 591; // "Increments ADF 2 frequency by 0.1 KHz with carry";
const ADF2_COMPLETE_SET                                      = 592; // Sets ADF 1 frequency (BCD Hz);
const RADIO_ADF2_IDENT_DISABLE                               = 593; // Turns ADF 2 ID off;
const RADIO_ADF2_IDENT_ENABLE                                = 594; // Turns ADF 2 ID on;
const RADIO_ADF2_IDENT_TOGGLE                                = 595; // Toggles ADF 2 ID;
const RADIO_ADF2_IDENT_SET                                   = 596; // "Sets ADF 2 ID on/off (10)";
const FREQUENCY_SWAP                                         = 597; // Swaps frequency with standby on whichever NAV or COM radio is selected.;
const TOGGLE_GPS_DRIVES_NAV1                                 = 598; // Toggles between GPS and NAV 1 driving NAV 1 OBS display (and AP);
const GPS_POWER_BUTTON                                       = 599; // Toggles power button;
const GPS_NEAREST_BUTTON                                     = 600; // Selects Nearest Airport Page;
const GPS_OBS_BUTTON                                         = 601; // Toggles automatic sequencing of waypoints;
const GPS_MSG_BUTTON                                         = 602; // Toggles the Message Page;
const GPS_MSG_BUTTON_DOWN                                    = 603; // Triggers the pressing of the message button.;
const GPS_MSG_BUTTON_UP                                      = 604; // Triggers the release of the message button;
const GPS_FLIGHTPLAN_BUTTON                                  = 605; // Displays the programmed flightplan.;
const GPS_TERRAIN_BUTTON                                     = 606; // Displays terrain information on default display;
const GPS_PROCEDURE_BUTTON                                   = 607; // Displays the approach procedure page.;
const GPS_ZOOMIN_BUTTON                                      = 608; // Zooms in default display;
const GPS_ZOOMOUT_BUTTON                                     = 609; // Zooms out default display;
const GPS_DIRECTTO_BUTTON                                    = 610; // "Brings up the ""Direct To"" page";
const GPS_MENU_BUTTON                                        = 611; // Brings up page to select active legs in a flightplan.;
const GPS_CLEAR_BUTTON                                       = 612; // Clears entered data on a page;
const GPS_CLEAR_ALL_BUTTON                                   = 613; // Clears all data immediately;
const GPS_CLEAR_BUTTON_DOWN                                  = 614; // Triggers the pressing of the Clear button;
const GPS_CLEAR_BUTTON_UP                                    = 615; // Triggers the release of the Clear button.;
const GPS_ENTER_BUTTON                                       = 616; // Approves entered data.;
const GPS_CURSOR_BUTTON                                      = 617; // Selects GPS cursor;
const GPS_GROUP_KNOB_INC                                     = 618; // Increments cursor;
const GPS_GROUP_KNOB_DEC                                     = 619; // Decrements cursor;
const GPS_PAGE_KNOB_INC                                      = 620; // Increments through pages;
const GPS_PAGE_KNOB_DEC                                      = 621; // Decrements through pages;
const DME_SELECT                                             = 622; // "Selects one of the two DME systems (12).";
const RADIO_SELECTED_DME_IDENT_ENABLE                        = 623; // Turns on the identification sound for the selected DME.;
const RADIO_SELECTED_DME_IDENT_DISABLE                       = 624; // Turns off the identification sound for the selected DME.;
const RADIO_SELECTED_DME_IDENT_SET                           = 625; // Sets the DME identification sound to the given filename.;
const RADIO_SELECTED_DME_IDENT_TOGGLE                        = 626; // Turns on or off the identification sound for the selected DME.;

//
// Aircraft Instruments
//

const EGT                                                    = 627; // Selects EGT bug for +/-;
const EGT_INC                                                = 628; // Increments EGT bugs;
const EGT_DEC                                                = 629; // Decrements EGT bugs;
const EGT_SET                                                = 630; // Sets EGT bugs (0 to 32767);
const BAROMETRIC                                             = 631; // "Syncs altimeter setting to sea level pressure or 29.92 if above 18000 feet";
const GYRO_DRIFT_INC                                         = 632; // Increments heading indicator;
const GYRO_DRIFT_DEC                                         = 633; // Decrements heading indicator;
const KOHLSMAN_INC                                           = 634; // Increments altimeter setting;
const KOHLSMAN_DEC                                           = 635; // Decrements altimeter setting;
const KOHLSMAN_SET                                           = 636; // Sets altimeter setting (Millibars * 16);
const TRUE_AIRSPEED_CAL_INC                                  = 637; // Increments airspeed indicators true airspeed reference card;
const TRUE_AIRSPEED_CAL_DEC                                  = 638; // Decrements airspeed indicators true airspeed reference card;
const TRUE_AIRSPEED_CAL_SET                                  = 639; // "Sets airspeed indicators true airspeed reference card (degrees where 0 is standard sea level conditions)";
const EGT1_INC                                               = 640; // Increments EGT bug 1;
const EGT1_DEC                                               = 641; // Decrements EGT bug 1;
const EGT1_SET                                               = 642; // Sets EGT bug 1 (0 to 32767);
const EGT2_INC                                               = 643; // Increments EGT bug 2;
const EGT2_DEC                                               = 644; // Decrements EGT bug 2;
const EGT2_SET                                               = 645; // Sets EGT bug 2 (0 to 32767);
const EGT3_INC                                               = 646; // Increments EGT bug 3;
const EGT3_DEC                                               = 647; // Decrements EGT bug 3;
const EGT3_SET                                               = 648; // Sets EGT bug 3 (0 to 32767);
const EGT4_INC                                               = 649; // Increments EGT bug 4;
const EGT4_DEC                                               = 650; // Decrements EGT bug 4;
const EGT4_SET                                               = 651; // Sets EGT bug 4 (0 to 32767);
const ATTITUDE_BARS_POSITION_UP                              = 652; // Increments attitude indicator pitch reference bars;
const ATTITUDE_BARS_POSITION_DOWN                            = 653; // Decrements attitude indicator pitch reference bars;
const ATTITUDE_CAGE_BUTTON                                   = 654; // Cages attitude indicator at 0 pitch and bank;
const RESET_G_FORCE_INDICATOR                                = 655; // Resets max/min indicated G force to 1.0.;
const RESET_MAX_RPM_INDICATOR                                = 656; // Reset max indicated engine rpm to 0.;
const HEADING_GYRO_SET                                       = 657; // Sets heading indicator to 0 drift error.;
const GYRO_DRIFT_SET                                         = 658; // Sets heading indicator drift angle (degrees).;

//
// Aircraft Lights
//

const STROBES_TOGGLE                                         = 659; // Toggle strobe lights;
const ALL_LIGHTS_TOGGLE                                      = 660; // Toggle all lights;
const PANEL_LIGHTS_TOGGLE                                    = 661; // Toggle panel lights;
const LANDING_LIGHTS_TOGGLE                                  = 662; // Toggle landing lights;
const LANDING_LIGHT_UP                                       = 663; // Rotate landing light up;
const LANDING_LIGHT_DOWN                                     = 664; // Rotate landing light down;
const LANDING_LIGHT_LEFT                                     = 665; // Rotate landing light left;
const LANDING_LIGHT_RIGHT                                    = 666; // Rotate landing light right;
const LANDING_LIGHT_HOME                                     = 667; // Return landing light to default position;
const STROBES_ON                                             = 668; // Turn strobe lights on;
const STROBES_OFF                                            = 669; // Turn strobe light off;
const STROBES_SET                                            = 670; // "Set strobe lights on/off (10)";
const PANEL_LIGHTS_ON                                        = 671; // Turn panel lights on;
const PANEL_LIGHTS_OFF                                       = 672; // Turn panel lights off;
const PANEL_LIGHTS_SET                                       = 673; // "Set panel lights on/off (10)";
const LANDING_LIGHTS_ON                                      = 674; // Turn landing lights on;
const LANDING_LIGHTS_OFF                                     = 675; // Turn landing lights off;
const LANDING_LIGHTS_SET                                     = 676; // "Set landing lights on/off (10)";
const TOGGLE_BEACON_LIGHTS                                   = 677; // Toggle beacon lights;
const TOGGLE_TAXI_LIGHTS                                     = 678; // Toggle taxi lights;
const TOGGLE_LOGO_LIGHTS                                     = 679; // Toggle logo lights;
const TOGGLE_RECOGNITION_LIGHTS                              = 680; // Toggle recognition lights;
const TOGGLE_WING_LIGHTS                                     = 681; // Toggle wing lights;
const TOGGLE_NAV_LIGHTS                                      = 682; // Toggle navigation lights;
const TOGGLE_CABIN_LIGHTS                                    = 683; // Toggle cockpit/cabin lights;

//
// Aircraft Failures
//

const TOGGLE_VACUUM_FAILURE                                  = 684; // Toggle vacuum system failure;
const TOGGLE_ELECTRICAL_FAILURE                              = 685; // Toggle electrical system failure;
const TOGGLE_PITOT_BLOCKAGE                                  = 686; // Toggles blocked pitot tube;
const TOGGLE_STATIC_PORT_BLOCKAGE                            = 687; // Toggles blocked static port;
const TOGGLE_HYDRAULIC_FAILURE                               = 688; // Toggles hydraulic system failure;
const TOGGLE_TOTAL_BRAKE_FAILURE                             = 689; // Toggles brake failure (both);
const TOGGLE_LEFT_BRAKE_FAILURE                              = 690; // Toggles left brake failure;
const TOGGLE_RIGHT_BRAKE_FAILURE                             = 691; // Toggles right brake failure;
const TOGGLE_ENGINE1_FAILURE                                 = 692; // Toggle engine 1 failure;
const TOGGLE_ENGINE2_FAILURE                                 = 693; // Toggle engine 2 failure;
const TOGGLE_ENGINE3_FAILURE                                 = 694; // Toggle engine 3 failure;
const TOGGLE_ENGINE4_FAILURE                                 = 695; // Toggle engine 4 failure;

//
// Aircraft Miscellaneous Systems
//

const SMOKE_TOGGLE                                           = 696; // Toggle smoke system switch;
const GEAR_TOGGLE                                            = 697; // Toggle gear handle;
const BRAKES                                                 = 698; // Increment brake pressure;
const GEAR_SET                                               = 699; // "Sets gear handle position up/down (01)";
const BRAKES_LEFT                                            = 700; // Increments left brake pressure;
const BRAKES_RIGHT                                           = 701; // Increments right brake pressure;
const PARKING_BRAKES                                         = 702; // Toggles parking brake on/off;
const GEAR_PUMP                                              = 703; // Increments emergency gear extension;
const PITOT_HEAT_TOGGLE                                      = 704; // Toggles pitot heat switch;
const SMOKE_ON                                               = 705; // Turns smoke system on;
const SMOKE_OFF                                              = 706; // Turns smoke system off;
const SMOKE_SET                                              = 707; // "Sets smoke system on/off (10)";
const PITOT_HEAT_ON                                          = 708; // Turns pitot heat switch on;
const PITOT_HEAT_OFF                                         = 709; // Turns pitot heat switch off;
const PITOT_HEAT_SET                                         = 710; // "Sets pitot heat switch on/off (10)";
const GEAR_UP                                                = 711; // Sets gear handle in UP position;
const GEAR_DOWN                                              = 712; // Sets gear handle in DOWN position;
const TOGGLE_MASTER_BATTERY                                  = 713; // Toggles main battery switch;
const TOGGLE_MASTER_ALTERNATOR                               = 714; // Toggles main alternator/generator switch;
const TOGGLE_ELECTRIC_VACUUM_PUMP                            = 715; // Toggles backup electric vacuum pump;
const TOGGLE_ALTERNATE_STATIC                                = 716; // Toggles alternate static pressure port;
const DECREASE_DECISION_HEIGHT                               = 717; // Decrements decision height reference;
const INCREASE_DECISION_HEIGHT                               = 718; // Increments decision height reference;
const TOGGLE_STRUCTURAL_DEICE                                = 719; // Toggles structural deice switch;
const TOGGLE_PROPELLER_DEICE                                 = 720; // Toggles propeller deice switch;
const TOGGLE_ALTERNATOR1                                     = 721; // Toggles alternator/generator 1 switch;
const TOGGLE_ALTERNATOR2                                     = 722; // Toggles alternator/generator 2 switch;
const TOGGLE_ALTERNATOR3                                     = 723; // Toggles alternator/generator 3 switch;
const TOGGLE_ALTERNATOR4                                     = 724; // Toggles alternator/generator 4 switch;
const TOGGLE_MASTER_BATTERY_ALTERNATOR                       = 725; // Toggles master battery and alternator switch;
const AXIS_LEFT_BRAKE_SET                                    = 726; // Sets left brake position from axis controller (e.g. joystick). -16383 (0 brakes) to +16383 (max brakes);
const AXIS_RIGHT_BRAKE_SET                                   = 727; // Sets right brake position from axis controller (e.g. joystick). -16383 (0 brakes) to +16383 (max brakes);
const TOGGLE_AIRCRAFT_EXIT                                   = 728; // "Toggles primary door open/close. Follow by KEY_SELECT_2 etc for subsequent doors.";
const TOGGLE_WING_FOLD                                       = 729; // Toggles wing folding;
const SET_WING_FOLD                                          = 730; // "Sets the wings into the folded position suitable for storage typically on a carrier. Takes a value: ";
const TOGGLE_TAIL_HOOK_HANDLE                                = 731; // Toggles tail hook;
const SET_TAIL_HOOK_HANDLE                                   = 732; // Sets the tail hook handle. Takes a value:;
const TOGGLE_WATER_RUDDER                                    = 733; // Toggles water rudders;
const TOGGLE_PUSHBACK                                        = 734; // Toggles pushback.;
const KEY_TUG_HEADING                                        = 735; // "Triggers tug and sets the desired heading. The units are a 32 bit integer (0 to 4294967295) which represent 0 to 360 degrees. To set a 45 degree angle for example set the value to 4294967295 / 8.";
const KEY_TUG_SPEED                                          = 736; // "Triggers tug and sets desired speed in feet per second. The speed can be both positive (forward movement) and negative (backward movement).";
const TUG_DISABLE                                            = 737; // Disables tug;
const TOGGLE_MASTER_IGNITION_SWITCH                          = 738; // Toggles master ignition switch;
const TOGGLE_TAILWHEEL_LOCK                                  = 739; // Toggles tail wheel lock;
const ADD_FUEL_QUANTITY                                      = 740; // "Adds fuel to the aircraft 25% of capacity by default. 0 to 65535 (max fuel) can be passed.";
const TOW_PLANE_RELEASE                                      = 741; // "Release a towed aircraft usually a glider.";
const TOW_PLANE_REQUEST                                      = 742; // "Request a tow plane. The user aircraft must be tow-able stationary on the ground and not already attached for this to succeed.";
const RELEASE_DROPPABLE_OBJECTS                              = 743; // Release one droppable object. Multiple key events will release multiple objects.;
const RETRACT_FLOAT_SWITCH_DEC                               = 744; // "If the plane has retractable floats moves the retract position from Extend to Neutral or Neutral to Retract.";
const RETRACT_FLOAT_SWITCH_INC                               = 745; // "If the plane has retractable floats moves the retract position from Retract to Neutral or Neutral to Extend.";
const TOGGLE_WATER_BALLAST_VALVE                             = 746; // Turn the water ballast valve on or off.;
const TOGGLE_VARIOMETER_SWITCH                               = 747; // Turn the variometer on or off.;
const TOGGLE_TURN_INDICATOR_SWITCH                           = 748; // Turn the turn indicator on or off.;
const APU_STARTER                                            = 749; // Start up the auxiliary power unit (APU).;
const APU_OFF_SWITCH                                         = 750; // Turn the APU off.;
const APU_GENERATOR_SWITCH_TOGGLE                            = 751; // Turn the auxiliary generator on or off.;
const APU_GENERATOR_SWITCH_SET                               = 752; // "Set the auxiliary generator switch (01).";
const EXTINGUISH_ENGINE_FIRE                                 = 753; // "Takes a two digit argument. The first digit represents the fire extinguisher index and the second represents the engine index. For example 11 would represent using bottle 1 on engine 1. 21 would represent using bottle 2 on engine 1. Typical entries for a twin engine aircraft would be 11 and 22.";
const HYDRAULIC_SWITCH_TOGGLE                                = 754; // Turn the hydraulic switch on or off.;
const BLEED_AIR_SOURCE_CONTROL_INC                           = 755; // Increases the bleed air source control.;
const BLEED_AIR_SOURCE_CONTROL_DEC                           = 756; // Decreases the bleed air source control.;
const BLEED_AIR_SOURCE_CONTROL_SET                           = 757; // Set to one of:;
const TURBINE_IGNITION_SWITCH_TOGGLE                         = 758; // Turn the turbine ignition switch on or off.;
const CABIN_NO_SMOKING_ALERT_SWITCH_TOGGLE                   = 759; // "Turn the ""No smoking"" alert on or off.";
const CABIN_SEATBELTS_ALERT_SWITCH_TOGGLE                    = 760; // "Turn the ""Fasten seatbelts"" alert on or off.";
const ANTISKID_BRAKES_TOGGLE                                 = 761; // Turn the anti-skid braking system on or off.;
const GPWS_SWITCH_TOGGLE                                     = 762; // Turn the g round proximity warning system (GPWS) on or off.;
const MANUAL_FUEL_PRESSURE_PUMP                              = 763; // Activate the manual fuel pressure pump.;

//
// Nose wheel steering
//

const STEERING_INC                                           = 764; // Increments the nose wheel steering position by 5 percent.;
const STEERING_DEC                                           = 765; // Decrements the nose wheel steering position by 5 percent.;
const STEERING_SET                                           = 766; // "Sets the value of the nose wheel steering position. Zero is straight ahead (-16383 far left +16383 far right).";

//
// Cabin pressurization
//

const KEY_PRESSURIZATION_PRESSURE_ALT_INC                    = 767; // Increases the altitude that the cabin is pressurized to.;
const KEY_PRESSURIZATION_PRESSURE_ALT_DEC                    = 768; // Decreases the altitude that the cabin is pressurized to.;
const PRESSURIZATION_CLIMB_RATE_INC                          = 769; // Sets the rate at which cabin pressurization is increased.;
const PRESSURIZATION_CLIMB_RATE_DEC                          = 770; // Sets the rate at which cabin pressurization is decreased.;
const PRESSURIZATION_PRESSURE_DUMP_SWTICH                    = 771; // Sets the cabin pressure to the outside air pressure.;

//
// Catapult Launches
//

const TAKEOFF_ASSIST_ARM_TOGGLE                              = 772; // Deploy or remove the assist arm. Refer to the document Notes on Aircraft Systems.;
const TAKEOFF_ASSIST_ARM_SET                                 = 773; // Value:;
const TAKEOFF_ASSIST_FIRE                                    = 774; // If everything is set up correctly. Launch from the catapult.;
const TOGGLE_LAUNCH_BAR_SWITCH                               = 775; // Toggle the request for the launch bar to be installed or removed.;
const SET_LAUNCH_BAR_SWITCH                                  = 776; // Value:;
const ROTOR_BRAKE                                            = 777; // Triggers rotor braking input;
const ROTOR_CLUTCH_SWITCH_TOGGLE                             = 778; // Toggles on electric rotor clutch switch;
const ROTOR_CLUTCH_SWITCH_SET                                = 779; // "Sets electric rotor clutch switch on/off (10)";
const ROTOR_GOV_SWITCH_TOGGLE                                = 780; // Toggles the electric rotor governor switch;
const ROTOR_GOV_SWITCH_SET                                   = 781; // "Sets the electric rotor governor switch on/off (10)";
const ROTOR_LATERAL_TRIM_INC                                 = 782; // Increments the lateral (right) rotor trim;
const ROTOR_LATERAL_TRIM_DEC                                 = 783; // Decrements the lateral (right) rotor trim;
const ROTOR_LATERAL_TRIM_SET                                 = 784; // Sets the lateral (right) rotor trim (0 to 16383);

//
// Slings and Hoists
//

const SLING_PICKUP_RELEASE                                   = 785; // Toggle between pickup and release mode. Hold mode is automatic and cannot be selected. Refer to the document Notes on Aircraft Systems.;
const HOIST_SWITCH_EXTEND                                    = 786; // The rate at which a hoist cable extends is set in the Aircraft Configuration File.;
const HOIST_SWITCH_RETRACT                                   = 787; // The rate at which a hoist cable retracts is set in the Aircraft Configuration File.;
const HOIST_SWITCH_SET                                       = 788; // The data value should be set to one of:;
const HOIST_DEPLOY_TOGGLE                                    = 789; // "Toggles the hoist arm switch extend or retract.";
const HOIST_DEPLOY_SET                                       = 790; // The data value should be set to:;

//
// Aircraft Slew System
//

const SLEW_TOGGLE                                            = 791; // Toggles slew on/off;
const SLEW_OFF                                               = 792; // Turns slew off;
const SLEW_ON                                                = 793; // Turns slew on;
const SLEW_SET                                               = 794; // "Sets slew on/off (10)";
const SLEW_RESET                                             = 795; // "Stop slew and reset pitch bank and heading all to zero.";
const SLEW_ALTIT_UP_FAST                                     = 796; // Slew upward fast;
const SLEW_ALTIT_UP_SLOW                                     = 797; // Slew upward slow;
const SLEW_ALTIT_FREEZE                                      = 798; // Stop vertical slew;
const SLEW_ALTIT_DN_SLOW                                     = 799; // Slew downward slow;
const SLEW_ALTIT_DN_FAST                                     = 800; // Slew downward fast;
const SLEW_ALTIT_PLUS                                        = 801; // Increase upward slew;
const SLEW_ALTIT_MINUS                                       = 802; // Decrease upward slew;
const SLEW_PITCH_DN_FAST                                     = 803; // Slew pitch downward fast;
const SLEW_PITCH_DN_SLOW                                     = 804; // Slew pitch downward slow;
const SLEW_PITCH_FREEZE                                      = 805; // Stop pitch slew;
const SLEW_PITCH_UP_SLOW                                     = 806; // Slew pitch up slow;
const SLEW_PITCH_UP_FAST                                     = 807; // Slew pitch upward fast;
const SLEW_PITCH_PLUS                                        = 808; // Increase pitch up slew;
const SLEW_PITCH_MINUS                                       = 809; // Decrease pitch up slew;
const SLEW_BANK_MINUS                                        = 810; // Increase left bank slew;
const SLEW_AHEAD_PLUS                                        = 811; // Increase forward slew;
const SLEW_BANK_PLUS                                         = 812; // Increase right bank slew;
const SLEW_LEFT                                              = 813; // Slew to the left;
const SLEW_FREEZE                                            = 814; // Stop all slew;
const SLEW_RIGHT                                             = 815; // Slew to the right;
const SLEW_HEADING_MINUS                                     = 816; // Increase slew heading to the left;
const SLEW_AHEAD_MINUS                                       = 817; // Decrease forward slew;
const SLEW_HEADING_PLUS                                      = 818; // Increase slew heading to the right;
const AXIS_SLEW_AHEAD_SET                                    = 819; // Sets forward slew (+/- 16383);
const AXIS_SLEW_SIDEWAYS_SET                                 = 820; // Sets sideways slew (+/- 16383);
const AXIS_SLEW_HEADING_SET                                  = 821; // Sets heading slew (+/- 16383);
const AXIS_SLEW_ALT_SET                                      = 822; // Sets vertical slew (+/- 16383);
const AXIS_SLEW_BANK_SET                                     = 823; // Sets roll slew (+/- 16383);
const AXIS_SLEW_PITCH_SET                                    = 824; // Sets pitch slew (+/- 16383);

//
// View System
//

const VIEW_MODE                                              = 825; // Selects next view;
const VIEW_WINDOW_TO_FRONT                                   = 826; // Sets active window to front;
const VIEW_RESET                                             = 827; // Resets the view to the default;
const VIEW_ALWAYS_PAN_UP                                     = 828; //;
const VIEW_ALWAYS_PAN_DOWN                                   = 829; //;
const NEXT_SUB_VIEW                                          = 830; //;
const PREV_SUB_VIEW                                          = 831; //;
const VIEW_TRACK_PAN_TOGGLE                                  = 832; //;
const VIEW_PREVIOUS_TOGGLE                                   = 833; //;
const VIEW_CAMERA_SELECT_START                               = 834; //;
const PANEL_HUD_NEXT                                         = 835; //;
const PANEL_HUD_PREVIOUS                                     = 836; //;
const ZOOM_IN                                                = 837; // Zooms view in;
const ZOOM_OUT                                               = 838; // Zooms view out;
const MAP_ZOOM_FINE_IN                                       = 839; // Fine zoom in map view;
const PAN_LEFT                                               = 840; // Pans view left;
const PAN_RIGHT                                              = 841; // Pans view right;
const MAP_ZOOM_FINE_OUT                                      = 842; // Fine zoom out in map view;
const VIEW_FORWARD                                           = 843; // Sets view direction forward;
const VIEW_FORWARD_RIGHT                                     = 844; // Sets view direction forward and right;
const VIEW_RIGHT                                             = 845; // Sets view direction to the right;
const VIEW_REAR_RIGHT                                        = 846; // Sets view direction to the rear and right;
const VIEW_REAR                                              = 847; // Sets view direction to the rear;
const VIEW_REAR_LEFT                                         = 848; // Sets view direction to the rear and left;
const VIEW_LEFT                                              = 849; // Sets view direction to the left;
const VIEW_FORWARD_LEFT                                      = 850; // Sets view direction forward and left;
const VIEW_DOWN                                              = 851; // Sets view direction down;
const ZOOM_MINUS                                             = 852; // Decreases zoom;
const ZOOM_PLUS                                              = 853; // Increase zoom;
const PAN_UP                                                 = 854; // Pan view up;
const PAN_DOWN                                               = 855; // Pan view down;
const VIEW_MODE_REV                                          = 856; // Reverse view cycle;
const ZOOM_IN_FINE                                           = 857; // Zoom in fine;
const ZOOM_OUT_FINE                                          = 858; // Zoom out fine;
const CLOSE_VIEW                                             = 859; // Close current view;
const NEW_VIEW                                               = 860; // Open new view;
const NEXT_VIEW                                              = 861; // Select next view;
const PREV_VIEW                                              = 862; // Select previous view;
const PAN_LEFT_UP                                            = 863; // Pan view left;
const PAN_LEFT_DOWN                                          = 864; // Pan view left and down;
const PAN_RIGHT_UP                                           = 865; // Pan view right and up;
const PAN_RIGHT_DOWN                                         = 866; // Pan view right and down;
const PAN_TILT_LEFT                                          = 867; // Tilt view left;
const PAN_TILT_RIGHT                                         = 868; // Tilt view right;
const PAN_RESET                                              = 869; // Reset view to forward;
const VIEW_FORWARD_UP                                        = 870; // Sets view forward and up;
const VIEW_FORWARD_RIGHT_UP                                  = 871; // "Sets view forward right and up";
const VIEW_RIGHT_UP                                          = 872; // Sets view right and up;
const VIEW_REAR_RIGHT_UP                                     = 873; // "Sets view rear right and up";
const VIEW_REAR_UP                                           = 874; // Sets view rear and up;
const VIEW_REAR_LEFT_UP                                      = 875; // Sets view rear left and up;
const VIEW_LEFT_UP                                           = 876; // Sets view left and up;
const VIEW_FORWARD_LEFT_UP                                   = 877; // Sets view forward left and up;
const VIEW_UP                                                = 878; // Sets view up;
const PAN_RESET_COCKPIT                                      = 879; // "Reset panning to forward if in cockpit view";
const KEY_CHASE_VIEW_NEXT                                    = 880; // Cycle view to next target;
const KEY_CHASE_VIEW_PREV                                    = 881; // Cycle view to previous target;
const CHASE_VIEW_TOGGLE                                      = 882; // Toggles chase view on/off;
const EYEPOINT_UP                                            = 883; // Move eyepoint up;
const EYEPOINT_DOWN                                          = 884; // Move eyepoint down;
const EYEPOINT_RIGHT                                         = 885; // Move eyepoint right;
const EYEPOINT_LEFT                                          = 886; // Move eyepoint left;
const EYEPOINT_FORWARD                                       = 887; // Move eyepoint forward;
const EYEPOINT_BACK                                          = 888; // Move eyepoint backward;
const EYEPOINT_RESET                                         = 889; // Move eyepoint to default position;
const NEW_MAP                                                = 890; // Opens new map view;
const VIEW_COCKPIT_FORWARD                                   = 891; // "Switch immediately to the forward view in 2D mode.";
const VIEW_VIRTUAL_COCKPIT_FORWARD                           = 892; // "Switch immediately to the forward view in virtual cockpit mode.";
const VIEW_PANEL_ALPHA_SET                                   = 893; // "Sets the alpha-blending value for the panel. Takes a parameter in the range 0 to 255. The alpha-blending can be changed from the keyboard using Ctrl-Shift-T and the plus and minus keys.";
const VIEW_PANEL_ALPHA_SELECT                                = 894; // "Sets the mode to change the alpha-blending so the keys KEY_PLUS and KEY_MINUS increment and decrement the value.";
const VIEW_PANEL_ALPHA_INC                                   = 895; // Increment alpha-blending for the panel.;
const VIEW_PANEL_ALPHA_DEC                                   = 896; // Decrement alpha-blending for the panel.;
const VIEW_LINKING_SET                                       = 897; // "Links all the views from one camera together so that panning the view will change the view of all the linked cameras.";
const VIEW_LINKING_TOGGLE                                    = 898; // Turns view linking on or off.;
const VIEW_CHASE_DISTANCE_ADD                                = 899; // "Increments the distance of the view camera from the chase object (such as in Spot Plane view or viewing an AI controlled aircraft).";
const VIEW_CHASE_DISTANCE_SUB                                = 900; // Decrements the distance of the view camera from the chase object.;

//
// Miscellaneous Events
//

const PAUSE_TOGGLE                                           = 901; // Toggles pause on/off;
const PAUSE_ON                                               = 902; // Turns pause on;
const PAUSE_OFF                                              = 903; // Turns pause off;
const PAUSE_SET                                              = 904; // "Sets pause on/off (10)";
const DEMO_STOP                                              = 905; // Stops demo system playback;
const SELECT_1                                               = 906; // "Sets ""selected"" index (for other events) to 1";
const SELECT_2                                               = 907; // "Sets ""selected"" index (for other events) to 2";
const SELECT_3                                               = 908; // "Sets ""selected"" index (for other events) to 3";
const SELECT_4                                               = 909; // "Sets ""selected"" index (for other events) to 4";
const MINUS                                                  = 910; // "Used in conjunction with ""selected"" parameters to decrease their value (e.g. radio frequency)";
const PLUS                                                   = 911; // "Used in conjunction with ""selected"" parameters to increase their value (e.g. radio frequency)";
const ZOOM_1X                                                = 912; // Sets zoom level to 1;
const SOUND_TOGGLE                                           = 913; // Toggles sound on/off;
const SIM_RATE                                               = 914; // "Selects simulation rate (use KEY_MINUS KEY_PLUS to change)";
const JOYSTICK_CALIBRATE                                     = 915; // Toggles joystick on/off;
const SITUATION_SAVE                                         = 916; // Saves flight situation;
const SITUATION_RESET                                        = 917; // Resets flight situation;
const SOUND_SET                                              = 918; // "Sets sound on/off (10)";
const EXIT                                                   = 919; // Quit ESP with a message;
const ABORT                                                  = 920; // Quit ESP without a message;
const READOUTS_SLEW                                          = 921; // Cycle through information readouts while in slew;
const READOUTS_FLIGHT                                        = 922; // Cycle through information readouts;
const MINUS_SHIFT                                            = 923; // Used with other events;
const PLUS_SHIFT                                             = 924; // Used with other events;
const SIM_RATE_INCR                                          = 925; // Increase sim rate;
const SIM_RATE_DECR                                          = 926; // Decrease sim rate;
const KNEEBOARD_VIEW                                         = 927; // Toggles kneeboard;
const PANEL_1                                                = 928; // Toggles panel 1;
const PANEL_2                                                = 929; // Toggles panel 2;
const PANEL_3                                                = 930; // Toggles panel 3;
const PANEL_4                                                = 931; // Toggles panel 4;
const PANEL_5                                                = 932; // Toggles panel 5;
const PANEL_6                                                = 933; // Toggles panel 6;
const PANEL_7                                                = 934; // Toggles panel 7;
const PANEL_8                                                = 935; // Toggles panel 8;
const PANEL_9                                                = 936; // Toggles panel 9;
const SOUND_ON                                               = 937; // Turns sound on;
const SOUND_OFF                                              = 938; // Turns sound off;
const INVOKE_HELP                                            = 939; // Brings up Help system;
const TOGGLE_AIRCRAFT_LABELS                                 = 940; // Toggles aircraft labels;
const FLIGHT_MAP                                             = 941; // Brings up flight map;
const RELOAD_PANELS                                          = 942; // Reload panel data;
const PANEL_ID_TOGGLE                                        = 943; // Toggles indexed panel (1 to 9);
const PANEL_ID_OPEN                                          = 944; // Opens indexed panel (1 to 9);
const PANEL_ID_CLOSE                                         = 945; // Closes indexed panel (1 to 9);
const RELOAD_USER_AIRCRAFT                                   = 946; // "Reloads the user aircraft data (from cache if same type loaded as an AI otherwise from disk)";
const SIM_RESET                                              = 947; // Resets aircraft state;
const VIRTUAL_COPILOT_TOGGLE                                 = 948; // Turns Flying Tips on/off;
const VIRTUAL_COPILOT_SET                                    = 949; // "Sets Flying Tips on/off (10)";
const VIRTUAL_COPILOT_ACTION                                 = 950; // Triggers action noted in Flying Tips;
const REFRESH_SCENERY                                        = 951; // Reloads scenery;
const CLOCK_HOURS_DEC                                        = 952; // Decrements time by hours;
const CLOCK_HOURS_INC                                        = 953; // Increments time by hours;
const CLOCK_MINUTES_DEC                                      = 954; // Decrements time by minutes;
const CLOCK_MINUTES_INC                                      = 955; // Increments time by minutes;
const CLOCK_SECONDS_ZERO                                     = 956; // Zeros seconds;
const CLOCK_HOURS_SET                                        = 957; // Sets hour of day;
const CLOCK_MINUTES_SET                                      = 958; // Sets minutes of the hour;
const ZULU_HOURS_SET                                         = 959; // "Sets hours zulu time";
const ZULU_MINUTES_SET                                       = 960; // "Sets minutes in zulu time";
const ZULU_DAY_SET                                           = 961; // "Sets day in zulu time";
const ZULU_YEAR_SET                                          = 962; // "Sets year in zulu time";
const GAUGE_KEYSTROKE                                        = 963; // "Enables a keystroke to be sent to a gauge that is in focus. The keystrokes can only be in the range 0 to 9 A to Z and the four keys: plus minus comma and period. This is typically used to allow some keyboard entry to a complex device such as a GPS to enter such things as ICAO codes using the keyboard rather than turning dials.";
const SIMUI_WINDOW_HIDESHOW                                  = 964; // Display the ATC window.;
const VIEW_WINDOW_TITLES_TOGGLE                              = 965; // Turn window titles on or off.;
const AXIS_PAN_PITCH                                         = 966; // Sets the pitch of the axis. Requires an angle.;
const AXIS_PAN_HEADING                                       = 967; // Sets the heading of the axis. Requires an angle.;
const AXIS_PAN_TILT                                          = 968; // Sets the tilt of the axis. Requires an angle.;
const VIEW_AXIS_INDICATOR_CYCLE                              = 969; // Step through the view axes.;
const VIEW_MAP_ORIENTATION_CYCLE                             = 970; // Step through the map orientations.;
const TOGGLE_JETWAY                                          = 971; // "Requests a jetway which will only be answered if the aircraft is at a parking spot.";
const VIDEO_RECORD_TOGGLE                                    = 972; // Turn on or off the video recording feature. This records uncompressed AVI format files to:;
const TOGGLE_AIRPORT_NAME_DISPLAY                            = 973; // Turn on or off the airport name.;
const CAPTURE_SCREENSHOT                                     = 974; // Capture the current view as a screenshot. Which will be saved to a bmp file in:;
const MOUSE_LOOK_TOGGLE                                      = 975; // "Switch Mouse Look mode on or off. Mouse Look mode enables a user to control their view using the mouse and holding down the space bar.";
const YAXIS_INVERT_TOGGLE                                    = 976; // Switch inversion of Y axis controls on or off.;
const AUTORUDDER_TOGGLE                                      = 977; // Turn the automatic rudder control feature on or off.;

//
// Freezing position
//

const FREEZE_LATITUDE_LONGITUDE_TOGGLE                       = 978; // "Turns the freezing of the lat/lon position of the aircraft (either user or AI controlled) on or off. If this key event is set it means that the latitude and longitude of the aircraft are not being controlled by ESP so enabling for example a SimConnect client to control the position of the aircraft. This can also apply to altitude and attitude. Refer to the simulation variables: ";
const FREEZE_LATITUDE_LONGITUDE_SET                          = 979; // Freezes the lat/lon position of the aircraft.;
const FREEZE_ALTITUDE_TOGGLE                                 = 980; // Turns the freezing of the altitude of the aircraft on or off.;
const FREEZE_ALTITUDE_SET                                    = 981; // Freezes the altitude of the aircraft..;
const FREEZE_ATTITUDE_TOGGLE                                 = 982; // "Turns the freezing of the attitude (pitch bank and heading) of the aircraft on or off.";
const FREEZE_ATTITUDE_SET                                    = 983; // "Freezes the attitude (pitch bank and heading) of the aircraft.";

//
// Mission Keys
//

const POINT_OF_INTEREST_TOGGLE_POINTER                       = 984; // Turn the point-of-interest indicator (often a light beam) on or off. Refer to the Missionssystem documentation.;
const POINT_OF_INTEREST_CYCLE_PREVIOUS                       = 985; // Change the current point-of-interest to the previous point-of-interest.;
const POINT_OF_INTEREST_CYCLE_NEXT                           = 986; // Change the current point-of-interest to the next point-of-interest.;

//
// ATC
//

const ATC                                                    = 987; // Activates ATC window;
const ATC_MENU_1                                             = 988; // Selects ATC option 1;
const ATC_MENU_2                                             = 989; // Selects ATC option 2;
const ATC_MENU_3                                             = 990; // Selects ATC option 3;
const ATC_MENU_4                                             = 991; // Selects ATC option 4;
const ATC_MENU_5                                             = 992; // Selects ATC option 5;
const ATC_MENU_6                                             = 993; // Selects ATC option 6;
const ATC_MENU_7                                             = 994; // Selects ATC option 7;
const ATC_MENU_8                                             = 995; // Selects ATC option 8;
const ATC_MENU_9                                             = 996; // Selects ATC option 9;
const ATC_MENU_0                                             = 997; // Selects ATC option 10;




