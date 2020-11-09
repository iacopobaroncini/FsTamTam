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
// Data source: PMDG_NGX_SDK.h (SP2)
//


const EVT_OH_ELEC_BATTERY_SWITCH                             = (PMDG_NGX_ID_OFFSET + 1); // 01 - BAT Switch;
const EVT_OH_ELEC_BATTERY_GUARD                              = (PMDG_NGX_ID_OFFSET + 2); // 02 - BAT Switch Guard;
const EVT_OH_ELEC_DC_METER                                   = (PMDG_NGX_ID_OFFSET + 3); // 03 - DC SOURCE Knob;
const EVT_OH_ELEC_AC_METER                                   = (PMDG_NGX_ID_OFFSET + 4); // 04 - AC SOURCE Knob;
const EVT_OH_ELEC_GALLEY                                     = (PMDG_NGX_ID_OFFSET + 974); // 974- GALLEY Switch [-600/700 only];
const EVT_OH_ELEC_CAB_UTIL                                   = (PMDG_NGX_ID_OFFSET + 5); // 05 - CAB UTIL Switch [-800/900 only];
const EVT_OH_ELEC_IFE                                        = (PMDG_NGX_ID_OFFSET + 6); // 06 - IFE/PASS Switch [-800/900 only];
const EVT_OH_ELEC_STBY_PWR_SWITCH                            = (PMDG_NGX_ID_OFFSET + 10); // 10 - STANDBY POWER Switch;
const EVT_OH_ELEC_STBY_PWR_GUARD                             = (PMDG_NGX_ID_OFFSET + 11); // 11 - STANDBY POWER Switch Guard;
const EVT_OH_ELEC_DISCONNECT_1_SWITCH                        = (PMDG_NGX_ID_OFFSET + 12); // 12 - GEN DRIVE DISC Left Switch;
const EVT_OH_ELEC_DISCONNECT_1_GUARD                         = (PMDG_NGX_ID_OFFSET + 13); // 13 - GEN DRIVE DISC Left Guard;
const EVT_OH_ELEC_DISCONNECT_2_SWITCH                        = (PMDG_NGX_ID_OFFSET + 14); // 14 - GEN DRIVE DISC Right Switch;
const EVT_OH_ELEC_DISCONNECT_2_GUARD                         = (PMDG_NGX_ID_OFFSET + 15); // 15 - GEN DRIVE DISC Right Guard;
const EVT_OH_ELEC_GRD_PWR_SWITCH                             = (PMDG_NGX_ID_OFFSET + 17); // 17 - GROUND POWER Switch;
const EVT_OH_ELEC_BUS_TRANSFER_SWITCH                        = (PMDG_NGX_ID_OFFSET + 18); // 18 - BUS TRANSFER Switch;
const EVT_OH_ELEC_BUS_TRANSFER_GUARD                         = (PMDG_NGX_ID_OFFSET + 19); // 19 - BUS TRANSFER Guard;
const EVT_OH_ELEC_GEN1_SWITCH                                = (PMDG_NGX_ID_OFFSET + 27); // 27 - GENERATOR Left Switch;
const EVT_OH_ELEC_APU_GEN1_SWITCH                            = (PMDG_NGX_ID_OFFSET + 28); // 28 - APU GENERATOR Left Switch;
const EVT_OH_ELEC_APU_GEN2_SWITCH                            = (PMDG_NGX_ID_OFFSET + 29); // 29 - APU GENERATOR RIGHT Switch;
const EVT_OH_ELEC_GEN2_SWITCH                                = (PMDG_NGX_ID_OFFSET + 30); // 30 - GENERATOR RIGHT Switch;
const EVT_OH_ELEC_MAINT_SWITCH                               = (PMDG_NGX_ID_OFFSET + 93); // 93 - ELEC MAINT Switch;
const EVT_OH_FUEL_PUMP_1_AFT                                 = (PMDG_NGX_ID_OFFSET + 37); // 37 - FUEL PUMP LEFT AFT Switch;
const EVT_OH_FUEL_PUMP_1_FORWARD                             = (PMDG_NGX_ID_OFFSET + 38); // 38 - FUEL PUMP LEFT FWD Switch;
const EVT_OH_FUEL_PUMP_2_FORWARD                             = (PMDG_NGX_ID_OFFSET + 39); // 39 - FUEL PUMP RIGHT FWD Switch;
const EVT_OH_FUEL_PUMP_2_AFT                                 = (PMDG_NGX_ID_OFFSET + 40); // 40 - FUEL PUMP RIGHT AFT Switch;
const EVT_OH_FUEL_PUMP_L_CENTER                              = (PMDG_NGX_ID_OFFSET + 45); // 45 - FUEL PUMP CENTER LEFT Switch;
const EVT_OH_FUEL_PUMP_R_CENTER                              = (PMDG_NGX_ID_OFFSET + 46); // 46 - FUEL PUMP CENTER LEFT Switch;
const EVT_OH_FUEL_CROSSFEED                                  = (PMDG_NGX_ID_OFFSET + 49); // 49 - CROSSFEED Selector;
const EVT_OH_LAND_LIGHTS_GUARD                               = (PMDG_NGX_ID_OFFSET + 110);
const EVT_OH_LIGHTS_L_RETRACT                                = (PMDG_NGX_ID_OFFSET + 111);
const EVT_OH_LIGHTS_R_RETRACT                                = (PMDG_NGX_ID_OFFSET + 112);
const EVT_OH_LIGHTS_L_FIXED                                  = (PMDG_NGX_ID_OFFSET + 113);
const EVT_OH_LIGHTS_R_FIXED                                  = (PMDG_NGX_ID_OFFSET + 114);
const EVT_OH_LIGHTS_L_TURNOFF                                = (PMDG_NGX_ID_OFFSET + 115);
const EVT_OH_LIGHTS_R_TURNOFF                                = (PMDG_NGX_ID_OFFSET + 116);
const EVT_OH_LIGHTS_TAXI                                     = (PMDG_NGX_ID_OFFSET + 117);
const EVT_OH_LIGHTS_APU_START                                = (PMDG_NGX_ID_OFFSET + 118);
const EVT_OH_LIGHTS_L_ENGINE_START                           = (PMDG_NGX_ID_OFFSET + 119);
const EVT_OH_LIGHTS_IGN_SEL                                  = (PMDG_NGX_ID_OFFSET + 120);
const EVT_OH_LIGHTS_R_ENGINE_START                           = (PMDG_NGX_ID_OFFSET + 121);
const EVT_OH_LIGHTS_LOGO                                     = (PMDG_NGX_ID_OFFSET + 122);
const EVT_OH_LIGHTS_POS_STROBE                               = (PMDG_NGX_ID_OFFSET + 123);
const EVT_OH_LIGHTS_ANT_COL                                  = (PMDG_NGX_ID_OFFSET + 124);
const EVT_OH_LIGHTS_WING                                     = (PMDG_NGX_ID_OFFSET + 125);
const EVT_OH_LIGHTS_WHEEL_WELL                               = (PMDG_NGX_ID_OFFSET + 126);
const EVT_OH_LIGHTS_COMPASS                                  = (PMDG_NGX_ID_OFFSET + 982);
const EVT_OH_CB_LIGHT_CONTROL                                = (PMDG_NGX_ID_OFFSET + 94); // CIRCUIT BREAKER Light Control;
const EVT_OH_PANEL_LIGHT_CONTROL                             = (PMDG_NGX_ID_OFFSET + 95); // PANEL Light Control Decrease;
const EVT_OH_EC_SUPPLY_SWITCH                                = (PMDG_NGX_ID_OFFSET + 96); // EQUIPMENT COOLING SUPPLY Switch;
const EVT_OH_EC_EXHAUST_SWITCH                               = (PMDG_NGX_ID_OFFSET + 97); // EQUIPMENT COOLING EXHAUST Switch;
const EVT_OH_EMER_EXIT_LIGHT_SWITCH                          = (PMDG_NGX_ID_OFFSET + 100); // EMERGENCY EXIT LIGHTS Switch;
const EVT_OH_EMER_EXIT_LIGHT_GUARD                           = (PMDG_NGX_ID_OFFSET + 101); // EMERGENCY EXIT LIGHTS Guard;
const EVT_OH_NO_SMOKING_LIGHT_SWITCH                         = (PMDG_NGX_ID_OFFSET + 103); // NO SMOKING Switch;
const EVT_OH_FASTEN_BELTS_LIGHT_SWITCH                       = (PMDG_NGX_ID_OFFSET + 104); // FASTEN BELTS Switch;
const EVT_OH_ATTND_CALL_SWITCH                               = (PMDG_NGX_ID_OFFSET + 105); // ATTENDANT CALL Switch;
const EVT_OH_GRND_CALL_SWITCH                                = (PMDG_NGX_ID_OFFSET + 106); // GROUND CALL Switch;
const EVT_OH_WIPER_LEFT_CONTROL                              = (PMDG_NGX_ID_OFFSET + 36); // LEFT WIPER Control;
const EVT_OH_WIPER_RIGHT_CONTROL                             = (PMDG_NGX_ID_OFFSET + 109); // RIGHT WIPER Control;
const EVT_OH_EFIS_HDG_REF_TOGGLE                             = (PMDG_NGX_ID_OFFSET + 6920); // 692A - Heading Reference Switch Toggle - note: this is only for acft. with polar nav. option, e.g. BBJ;
const EVT_OH_NAVDSP_DISPLAYS_SOURCE_SEL                      = (PMDG_NGX_ID_OFFSET + 58); // DISPLAYS SOURCE Selector;
const EVT_OH_NAVDSP_CONTROL_PANEL_SEL                        = (PMDG_NGX_ID_OFFSET + 59); // CONTROL PANEL Select Switch;
const EVT_OH_NAVDSP_FMC_SEL                                  = (PMDG_NGX_ID_OFFSET + 60); // FMC Source Select Switch;
const EVT_OH_NAVDSP_IRS_SEL                                  = (PMDG_NGX_ID_OFFSET + 61); // IRS Transfer Switch;
const EVT_OH_NAVDSP_VHF_NAV_SEL                              = (PMDG_NGX_ID_OFFSET + 62); // VHF NAV Transfer Switch;
const EVT_OH_YAW_DAMPER                                      = (PMDG_NGX_ID_OFFSET + 63); // YAW DAMPER Switch;
const EVT_OH_ALT_FLAPS_MASTER_SWITCH                         = (PMDG_NGX_ID_OFFSET + 73); // ALTERNATE FLAPS Master Switch;
const EVT_OH_ALT_FLAPS_MASTER_GUARD                          = (PMDG_NGX_ID_OFFSET + 74); // ALTERNATE FLAPS Master Guard;
const EVT_OH_SPOILER_A_SWITCH                                = (PMDG_NGX_ID_OFFSET + 65); // SPOILER A Switch;
const EVT_OH_SPOILER_A_GUARD                                 = (PMDG_NGX_ID_OFFSET + 66); // SPOILER A Guard;
const EVT_OH_SPOILER_B_SWITCH                                = (PMDG_NGX_ID_OFFSET + 67); // SPOILER B Switch;
const EVT_OH_SPOILER_B_GUARD                                 = (PMDG_NGX_ID_OFFSET + 68); // SPOILER B Guard;
const EVT_OH_ALT_FLAPS_POS_SWITCH                            = (PMDG_NGX_ID_OFFSET + 75); // ALTERNATE FLAPS Position Switch;
const EVT_OH_FCTL_A_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 78); // FLIGHT CONTROL A Switch Decrease;
const EVT_OH_FCTL_A_GUARD                                    = (PMDG_NGX_ID_OFFSET + 79); // FLIGHT CONTROL A Guard;
const EVT_OH_FCTL_B_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 80); // FLIGHT CONTROL B Switch Decrease;
const EVT_OH_FCTL_B_GUARD                                    = (PMDG_NGX_ID_OFFSET + 81); // FLIGHT CONTROL B Guard;
const EVT_OH_CVR_TEST                                        = (PMDG_NGX_ID_OFFSET + 178);
const EVT_OH_CVR_ERASE                                       = (PMDG_NGX_ID_OFFSET + 180);
const EVT_OH_HYD_ENG1                                        = (PMDG_NGX_ID_OFFSET + 165);
const EVT_OH_HYD_ELEC2                                       = (PMDG_NGX_ID_OFFSET + 167);
const EVT_OH_HYD_ELEC1                                       = (PMDG_NGX_ID_OFFSET + 168);
const EVT_OH_HYD_ENG2                                        = (PMDG_NGX_ID_OFFSET + 166);
const EVT_OH_ICE_WINDOW_HEAT_1                               = (PMDG_NGX_ID_OFFSET + 135);
const EVT_OH_ICE_WINDOW_HEAT_2                               = (PMDG_NGX_ID_OFFSET + 136);
const EVT_OH_ICE_WINDOW_HEAT_3                               = (PMDG_NGX_ID_OFFSET + 138);
const EVT_OH_ICE_WINDOW_HEAT_4                               = (PMDG_NGX_ID_OFFSET + 139);
const EVT_OH_ICE_WINDOW_HEAT_TEST                            = (PMDG_NGX_ID_OFFSET + 137);
const EVT_OH_ICE_PROBE_HEAT_1                                = (PMDG_NGX_ID_OFFSET + 140);
const EVT_OH_ICE_PROBE_HEAT_2                                = (PMDG_NGX_ID_OFFSET + 141);
const EVT_OH_ICE_TAT_TEST                                    = (PMDG_NGX_ID_OFFSET + 142); // was used for "CAPT PITOT" annunciator light;
const EVT_OH_ICE_WING_ANTIICE                                = (PMDG_NGX_ID_OFFSET + 156);
const EVT_OH_ICE_ENGINE_ANTIICE_1                            = (PMDG_NGX_ID_OFFSET + 157);
const EVT_OH_ICE_ENGINE_ANTIICE_2                            = (PMDG_NGX_ID_OFFSET + 158);
const EVT_OH_AIRCOND_TEMP_SOURCE_SELECTOR                    = (PMDG_NGX_ID_OFFSET + 187);
const EVT_OH_AIRCOND_TEMP_SELECTOR_CONT                      = (PMDG_NGX_ID_OFFSET + 191);
const EVT_OH_AIRCOND_TEMP_SELECTOR_CABIN                     = (PMDG_NGX_ID_OFFSET + 192);
const EVT_OH_AIRCOND_TYPE_600_LAST                           = EVT_OH_AIRCOND_TEMP_SELECTOR_CABIN;
const EVT_OH_AIRCOND_TEMP_SOURCE_SELECTOR_800                = (PMDG_NGX_ID_OFFSET + 313);
const EVT_OH_AIRCOND_TEMP_SELECTOR_CONT_800                  = (PMDG_NGX_ID_OFFSET + 305);
const EVT_OH_AIRCOND_TEMP_SELECTOR_FWD_800                   = (PMDG_NGX_ID_OFFSET + 306);
const EVT_OH_AIRCOND_TEMP_SELECTOR_AFT_800                   = (PMDG_NGX_ID_OFFSET + 307);
const EVT_OH_AIRCOND_TRIM_AIR_SWITCH_800                     = (PMDG_NGX_ID_OFFSET + 311);
const EVT_OH_BLEED_RECIRC_FAN_L_SWITCH                       = (PMDG_NGX_ID_OFFSET + 872);
const EVT_OH_BLEED_RECIRC_FAN_R_SWITCH                       = (PMDG_NGX_ID_OFFSET + 196);
const EVT_OH_BLEED_OVHT_TEST_BUTTON                          = (PMDG_NGX_ID_OFFSET + 199);
const EVT_OH_BLEED_PACK_L_SWITCH                             = (PMDG_NGX_ID_OFFSET + 200);
const EVT_OH_BLEED_PACK_R_SWITCH                             = (PMDG_NGX_ID_OFFSET + 201);
const EVT_OH_BLEED_ISOLATION_VALVE_SWITCH                    = (PMDG_NGX_ID_OFFSET + 202);
const EVT_OH_BLEED_TRIP_RESET_BUTTON                         = (PMDG_NGX_ID_OFFSET + 209);
const EVT_OH_BLEED_ENG_1_SWITCH                              = (PMDG_NGX_ID_OFFSET + 210);
const EVT_OH_BLEED_APU_SWITCH                                = (PMDG_NGX_ID_OFFSET + 211);
const EVT_OH_BLEED_ENG_2_SWITCH                              = (PMDG_NGX_ID_OFFSET + 212);
const EVT_OH_PRESS_FLT_ALT_KNOB                              = (PMDG_NGX_ID_OFFSET + 218);
const EVT_OH_PRESS_LAND_ALT_KNOB                             = (PMDG_NGX_ID_OFFSET + 220);
const EVT_OH_PRESS_VALVE_SWITCH                              = (PMDG_NGX_ID_OFFSET + 222);
const EVT_OH_PRESS_SELECTOR                                  = (PMDG_NGX_ID_OFFSET + 223);
const EVT_OH_CAB_ALT_HORN_CUTOUT_BUTTON                      = (PMDG_NGX_ID_OFFSET + 183);
const EVT_OH_LE_DEVICES_TEST_SWITCH                          = (PMDG_NGX_ID_OFFSET + 224);
const EVT_OH_SERVICE_INTERPHONE_SWITCH                       = (PMDG_NGX_ID_OFFSET + 257);
const EVT_OH_DOME_SWITCH                                     = (PMDG_NGX_ID_OFFSET + 258);

const EVT_ISDU_DSPL_SEL                                      = (PMDG_NGX_ID_OFFSET + 229); // ISDU DiSPLay SELector;
const EVT_ISDU_FIRST                                         = EVT_ISDU_DSPL_SEL;
const EVT_ISDU_DSPL_SEL_BRT                                  = (PMDG_NGX_ID_OFFSET + 230); // ISDU DiSPLay SELector BRT (Brightness);
const EVT_ISDU_SYS_DSPL                                      = (PMDG_NGX_ID_OFFSET + 231); // ISDU SYS DSPL;
const EVT_ISDU_KBD_1                                         = (PMDG_NGX_ID_OFFSET + 232); // ISDU KEYBOARD 1;
const EVT_ISDU_KBD_2                                         = (PMDG_NGX_ID_OFFSET + 233); // ISDU KEYBOARD 2 or N;
const EVT_ISDU_KBD_3                                         = (PMDG_NGX_ID_OFFSET + 234); // ISDU KEYBOARD 3;
const EVT_ISDU_KBD_4                                         = (PMDG_NGX_ID_OFFSET + 235); // ISDU KEYBOARD 4 or W;
const EVT_ISDU_KBD_5                                         = (PMDG_NGX_ID_OFFSET + 236); // ISDU KEYBOARD 5 or H;
const EVT_ISDU_KBD_6                                         = (PMDG_NGX_ID_OFFSET + 237); // ISDU KEYBOARD 6 or E;
const EVT_ISDU_KBD_7                                         = (PMDG_NGX_ID_OFFSET + 238); // ISDU KEYBOARD 7;
const EVT_ISDU_KBD_8                                         = (PMDG_NGX_ID_OFFSET + 239); // ISDU KEYBOARD 8 or S;
const EVT_ISDU_KBD_9                                         = (PMDG_NGX_ID_OFFSET + 240); // ISDU KEYBOARD 9;
const EVT_ISDU_KBD_ENT                                       = (PMDG_NGX_ID_OFFSET + 241); // ISDU KEYBOARD ENTer;
const EVT_ISDU_KBD_0                                         = (PMDG_NGX_ID_OFFSET + 243); // ISDU KEYBOARD 0;
const EVT_ISDU_KBD_CLR                                       = (PMDG_NGX_ID_OFFSET + 244); // ISDU KEYBOARD CLR;

const EVT_IRU_MSU_LEFT                                       = (PMDG_NGX_ID_OFFSET + 255); // LEFT IRS Mode Selector Unit;
const EVT_IRU_MSU_RIGHT                                      = (PMDG_NGX_ID_OFFSET + 256); // RIGHT IRS Mode Selector Unit;

const EVT_ISDU_LAST                                          = EVT_IRU_MSU_RIGHT;

const EVT_WLAN_SWITCH                                        = (PMDG_NGX_ID_OFFSET + 888);
const EVT_WLAN_GUARD                                         = (PMDG_NGX_ID_OFFSET + 889);

const EVT_OH_EEC_L_GUARD                                     = (PMDG_NGX_ID_OFFSET + 267);
const EVT_OH_EEC_L_SWITCH                                    = (PMDG_NGX_ID_OFFSET + 268);
const EVT_OH_EEC_R_GUARD                                     = (PMDG_NGX_ID_OFFSET + 270);
const EVT_OH_EEC_R_SWITCH                                    = (PMDG_NGX_ID_OFFSET + 271);
const EVT_OH_OXY_PASS_SWITCH                                 = (PMDG_NGX_ID_OFFSET + 264);
const EVT_OH_OXY_PASS_GUARD                                  = (PMDG_NGX_ID_OFFSET + 265);
const EVT_OH_OXY_TEST_RESET_SWITCH_L                         = (PMDG_NGX_ID_OFFSET + 983);
const EVT_OH_OXY_TEST_RESET_SWITCH_R                         = (PMDG_NGX_ID_OFFSET + 9832);
const EVT_OH_OXY_RED_BUTTON_L                                = (PMDG_NGX_ID_OFFSET + 9831);
const EVT_OH_OXY_RED_BUTTON_R                                = (PMDG_NGX_ID_OFFSET + 9833);
const EVT_OH_FLTREC_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 298);
const EVT_OH_FLTREC_GUARD                                    = (PMDG_NGX_ID_OFFSET + 299);
const EVT_OH_WARNING_TEST_MACH_IAS_1_PUSH                    = (PMDG_NGX_ID_OFFSET + 301);
const EVT_OH_WARNING_TEST_MACH_IAS_2_PUSH                    = (PMDG_NGX_ID_OFFSET + 302);
const EVT_OH_WARNING_TEST_STALL_1_PUSH                       = (PMDG_NGX_ID_OFFSET + 303);
const EVT_OH_WARNING_TEST_STALL_2_PUSH                       = (PMDG_NGX_ID_OFFSET + 304);
const EVT_OH_TRIM_AIR_SWITCH_TOGGLE                          = (PMDG_NGX_ID_OFFSET + 15200); // user clicks a switch;
const EVT_OH_WING_BODY_OVERHEAT_TEST_PUSH                    = (PMDG_NGX_ID_OFFSET + 15201); // user pushes a pushbutton;

const EVT_ISFD_APP                                           = (PMDG_NGX_ID_OFFSET + 987);
const EVT_ISFD_HP_IN                                         = (PMDG_NGX_ID_OFFSET + 986);
const EVT_ISFD_PLUS                                          = (PMDG_NGX_ID_OFFSET + 988);
const EVT_ISFD_MINUS                                         = (PMDG_NGX_ID_OFFSET + 989);
const EVT_ISFD_ATT_RST                                       = (PMDG_NGX_ID_OFFSET + 990);
const EVT_ISFD_BARO                                          = (PMDG_NGX_ID_OFFSET + 991);
const EVT_ISFD_BARO_PUSH                                     = (PMDG_NGX_ID_OFFSET + 993);

const EVT_STANDBY_ADI_APPR_MODE                              = (PMDG_NGX_ID_OFFSET + 474);
const EVT_STANDBY_ADI_CAGE_KNOB                              = (PMDG_NGX_ID_OFFSET + 476);
const EVT_STANDBY_ALT_BARO_KNOB                              = (PMDG_NGX_ID_OFFSET + 492);

const EVT_RMI_LEFT_SELECTOR                                  = (PMDG_NGX_ID_OFFSET + 497);
const EVT_RMI_RIGHT_SELECTOR                                 = (PMDG_NGX_ID_OFFSET + 498);

const EVT_MCP_COURSE_SELECTOR_L                              = (PMDG_NGX_ID_OFFSET + 376);
const EVT_MCP_FD_SWITCH_L                                    = (PMDG_NGX_ID_OFFSET + 378);
const EVT_MCP_AT_ARM_SWITCH                                  = (PMDG_NGX_ID_OFFSET + 380);
const EVT_MCP_N1_SWITCH                                      = (PMDG_NGX_ID_OFFSET + 381);
const EVT_MCP_SPEED_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 382);
const EVT_MCP_CO_SWITCH                                      = (PMDG_NGX_ID_OFFSET + 383);
const EVT_MCP_SPEED_SELECTOR                                 = (PMDG_NGX_ID_OFFSET + 384);
const EVT_MCP_VNAV_SWITCH                                    = (PMDG_NGX_ID_OFFSET + 386);
const EVT_MCP_SPD_INTV_SWITCH                                = (PMDG_NGX_ID_OFFSET + 387);
const EVT_MCP_BANK_ANGLE_SELECTOR                            = (PMDG_NGX_ID_OFFSET + 389);
const EVT_MCP_HEADING_SELECTOR                               = (PMDG_NGX_ID_OFFSET + 390);
const EVT_MCP_LVL_CHG_SWITCH                                 = (PMDG_NGX_ID_OFFSET + 391);
const EVT_MCP_HDG_SEL_SWITCH                                 = (PMDG_NGX_ID_OFFSET + 392);
const EVT_MCP_APP_SWITCH                                     = (PMDG_NGX_ID_OFFSET + 393);
const EVT_MCP_ALT_HOLD_SWITCH                                = (PMDG_NGX_ID_OFFSET + 394);
const EVT_MCP_VS_SWITCH                                      = (PMDG_NGX_ID_OFFSET + 395);
const EVT_MCP_VOR_LOC_SWITCH                                 = (PMDG_NGX_ID_OFFSET + 396);
const EVT_MCP_LNAV_SWITCH                                    = (PMDG_NGX_ID_OFFSET + 397);
const EVT_MCP_ALTITUDE_SELECTOR                              = (PMDG_NGX_ID_OFFSET + 400);
const EVT_MCP_VS_SELECTOR                                    = (PMDG_NGX_ID_OFFSET + 401);
const EVT_MCP_CMD_A_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 402);
const EVT_MCP_CMD_B_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 403);
const EVT_MCP_CWS_A_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 404);
const EVT_MCP_CWS_B_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 405);
const EVT_MCP_DISENGAGE_BAR                                  = (PMDG_NGX_ID_OFFSET + 406);
const EVT_MCP_FD_SWITCH_R                                    = (PMDG_NGX_ID_OFFSET + 407);
const EVT_MCP_COURSE_SELECTOR_R                              = (PMDG_NGX_ID_OFFSET + 409);
const EVT_MCP_ALT_INTV_SWITCH                                = (PMDG_NGX_ID_OFFSET + 885);

const EVT_EFIS_CPT_MINIMUMS                                  = (PMDG_NGX_ID_OFFSET + 355);
const EVT_EFIS_CPT_FIRST                                     = EVT_EFIS_CPT_MINIMUMS;
const EVT_EFIS_CPT_MINIMUMS_RADIO_BARO                       = (PMDG_NGX_ID_OFFSET + 356);
const EVT_EFIS_CPT_MINIMUMS_RST                              = (PMDG_NGX_ID_OFFSET + 357);
const EVT_EFIS_CPT_VOR_ADF_SELECTOR_L                        = (PMDG_NGX_ID_OFFSET + 358);
const EVT_EFIS_CPT_MODE                                      = (PMDG_NGX_ID_OFFSET + 359);
const EVT_EFIS_CPT_MODE_CTR                                  = (PMDG_NGX_ID_OFFSET + 360);
const EVT_EFIS_CPT_RANGE                                     = (PMDG_NGX_ID_OFFSET + 361);
const EVT_EFIS_CPT_RANGE_TFC                                 = (PMDG_NGX_ID_OFFSET + 362);
const EVT_EFIS_CPT_FPV                                       = (PMDG_NGX_ID_OFFSET + 363);
const EVT_EFIS_CPT_MTRS                                      = (PMDG_NGX_ID_OFFSET + 364);
const EVT_EFIS_CPT_BARO                                      = (PMDG_NGX_ID_OFFSET + 365);
const EVT_EFIS_CPT_BARO_IN_HPA                               = (PMDG_NGX_ID_OFFSET + 366);
const EVT_EFIS_CPT_BARO_STD                                  = (PMDG_NGX_ID_OFFSET + 367);
const EVT_EFIS_CPT_VOR_ADF_SELECTOR_R                        = (PMDG_NGX_ID_OFFSET + 368);
const EVT_EFIS_CPT_WXR                                       = (PMDG_NGX_ID_OFFSET + 369);
const EVT_EFIS_CPT_STA                                       = (PMDG_NGX_ID_OFFSET + 370);
const EVT_EFIS_CPT_WPT                                       = (PMDG_NGX_ID_OFFSET + 371);
const EVT_EFIS_CPT_ARPT                                      = (PMDG_NGX_ID_OFFSET + 372);
const EVT_EFIS_CPT_DATA                                      = (PMDG_NGX_ID_OFFSET + 373);
const EVT_EFIS_CPT_POS                                       = (PMDG_NGX_ID_OFFSET + 374);
const EVT_EFIS_CPT_TERR                                      = (PMDG_NGX_ID_OFFSET + 375);
const EVT_EFIS_CPT_LAST                                      = EVT_EFIS_CPT_TERR;
const EVT_EFIS_FO_MINIMUMS                                   = (PMDG_NGX_ID_OFFSET + 411);
const EVT_EFIS_FO_FIRST                                      = EVT_EFIS_FO_MINIMUMS;
const EVT_EFIS_FO_MINIMUMS_RADIO_BARO                        = (PMDG_NGX_ID_OFFSET + 412);
const EVT_EFIS_FO_MINIMUMS_RST                               = (PMDG_NGX_ID_OFFSET + 413);
const EVT_EFIS_FO_VOR_ADF_SELECTOR_L                         = (PMDG_NGX_ID_OFFSET + 414);
const EVT_EFIS_FO_MODE                                       = (PMDG_NGX_ID_OFFSET + 415);
const EVT_EFIS_FO_MODE_CTR                                   = (PMDG_NGX_ID_OFFSET + 416);
const EVT_EFIS_FO_RANGE                                      = (PMDG_NGX_ID_OFFSET + 417);
const EVT_EFIS_FO_RANGE_TFC                                  = (PMDG_NGX_ID_OFFSET + 418);
const EVT_EFIS_FO_FPV                                        = (PMDG_NGX_ID_OFFSET + 419);
const EVT_EFIS_FO_MTRS                                       = (PMDG_NGX_ID_OFFSET + 420);
const EVT_EFIS_FO_BARO                                       = (PMDG_NGX_ID_OFFSET + 421);
const EVT_EFIS_FO_BARO_IN_HPA                                = (PMDG_NGX_ID_OFFSET + 422);
const EVT_EFIS_FO_BARO_STD                                   = (PMDG_NGX_ID_OFFSET + 423);
const EVT_EFIS_FO_VOR_ADF_SELECTOR_R                         = (PMDG_NGX_ID_OFFSET + 424);
const EVT_EFIS_FO_WXR                                        = (PMDG_NGX_ID_OFFSET + 425);
const EVT_EFIS_FO_STA                                        = (PMDG_NGX_ID_OFFSET + 426);
const EVT_EFIS_FO_WPT                                        = (PMDG_NGX_ID_OFFSET + 427);
const EVT_EFIS_FO_ARPT                                       = (PMDG_NGX_ID_OFFSET + 428);
const EVT_EFIS_FO_DATA                                       = (PMDG_NGX_ID_OFFSET + 429);
const EVT_EFIS_FO_POS                                        = (PMDG_NGX_ID_OFFSET + 430);
const EVT_EFIS_FO_TERR                                       = (PMDG_NGX_ID_OFFSET + 431);
const EVT_EFIS_FO_LAST                                       = EVT_EFIS_FO_TERR;

const EVT_DSP_CPT_BELOW_GS_INHIBIT_SWITCH                    = (PMDG_NGX_ID_OFFSET + 327); // CAPT Side BELOW GS INHIBIT Pushbutton;
const EVT_DSP_CPT_MAIN_DU_SELECTOR                           = (PMDG_NGX_ID_OFFSET + 335); // CAPT side MAIN PANEL DISPLAY UNITS (MAIN PANEL DUs) Selector;
const EVT_DSP_CPT_LOWER_DU_SELECTOR                          = (PMDG_NGX_ID_OFFSET + 336); // CAPT side LOWER DISPLAY UNIT (LOWER DU) Selector;
const EVT_DSP_CPT_DISENGAGE_TEST_SWITCH                      = (PMDG_NGX_ID_OFFSET + 342); // CAPT side DISENGAGE LIGHTS TEST switch;
const EVT_DSP_CPT_AP_RESET_SWITCH                            = (PMDG_NGX_ID_OFFSET + 339); // CAPT Side AP RESET Pushbutton;
const EVT_DSP_CPT_AT_RESET_SWITCH                            = (PMDG_NGX_ID_OFFSET + 340); // CAPT Side AT RESET Pushbutton;
const EVT_DSP_CPT_FMC_RESET_SWITCH                           = (PMDG_NGX_ID_OFFSET + 341); // CAPT Side FMC RESET Pushbutton;
const EVT_DSP_CPT_MASTER_LIGHTS_SWITCH                       = (PMDG_NGX_ID_OFFSET + 346); // MASTER LIGHTS & TEST switch;
const EVT_DSP_CPT_LAST                                       = EVT_DSP_CPT_MASTER_LIGHTS_SWITCH; // Keep this the last of CAPT side DSP panel items and before the F/O DSP panel items start;
const EVT_DSP_FO_MAIN_DU_SELECTOR                            = (PMDG_NGX_ID_OFFSET + 440); // FO side MAIN PANEL DISPLAY UNITS (MAIN PANEL DUs) Selector;
const EVT_DSP_FO_LOWER_DU_SELECTOR                           = (PMDG_NGX_ID_OFFSET + 441); // FO side LOWER DISPLAY UNIT (LOWER DU) Selector;
const EVT_DSP_FO_DISENGAGE_TEST_SWITCH                       = (PMDG_NGX_ID_OFFSET + 442); // FO side DISENGAGE LIGHTS TEST switch;
const EVT_DSP_FO_FMC_RESET_SWITCH                            = (PMDG_NGX_ID_OFFSET + 443); // FO Side FMC RESET Pushbutton;
const EVT_DSP_FO_AT_RESET_SWITCH                             = (PMDG_NGX_ID_OFFSET + 444); // FO Side AT RESET Pushbutton;
const EVT_DSP_FO_AP_RESET_SWITCH                             = (PMDG_NGX_ID_OFFSET + 445); // FO Side AP RESET Pushbutton;
const EVT_DSP_FO_BELOW_GS_INHIBIT_SWITCH                     = (PMDG_NGX_ID_OFFSET + 446); // FO Side BELOW GS INHIBIT Pushbutton;

const EVT_MPM_AUTOBRAKE_SELECTOR                             = (PMDG_NGX_ID_OFFSET + 460);
const EVT_MPM_MFD_SYS_BUTTON                                 = (PMDG_NGX_ID_OFFSET + 462);
const EVT_MPM_MFD_ENG_BUTTON                                 = (PMDG_NGX_ID_OFFSET + 463);
const EVT_MPM_MFD_C_R_BUTTON                                 = (PMDG_NGX_ID_OFFSET + 4621);
const EVT_MPM_SPEED_REFERENCE_SELECTOR                       = (PMDG_NGX_ID_OFFSET + 464);
const EVT_MPM_SPEED_REFERENCE_CONTROL                        = (PMDG_NGX_ID_OFFSET + 465);
const EVT_MPM_N1SET_SELECTOR                                 = (PMDG_NGX_ID_OFFSET + 466);
const EVT_MPM_N1SET_CONTROL                                  = (PMDG_NGX_ID_OFFSET + 467);
const EVT_MPM_FUEL_FLOW_SWITCH                               = (PMDG_NGX_ID_OFFSET + 468);

const EVT_GEAR_LEVER                                         = (PMDG_NGX_ID_OFFSET + 455);
const EVT_GEAR_LEVER_OFF                                     = (PMDG_NGX_ID_OFFSET + 4551);
const EVT_GEAR_LEVER_UNLOCK                                  = (PMDG_NGX_ID_OFFSET + 4552);

const EVT_NOSE_WHEEL_STEERING_SWITCH                         = (PMDG_NGX_ID_OFFSET + 325);
const EVT_NOSE_WHEEL_STEERING_SWITCH_GUARD                   = (PMDG_NGX_ID_OFFSET + 326);

const EVT_TILLER                                             = (PMDG_NGX_ID_OFFSET + 975);

const EVT_FIRE_WARN_LIGHT_LEFT                               = (PMDG_NGX_ID_OFFSET + 347); // 347 - Master Fire Warning (FIRE WARN) Light Left Switch Toggle;

const EVT_MASTER_CAUTION_LIGHT_LEFT                          = (PMDG_NGX_ID_OFFSET + 348); // 348 - MASTER CAUTION Light Left Switch Toggle;

const EVT_FIRE_WARN_LIGHT_RIGHT                              = (PMDG_NGX_ID_OFFSET + 439);

const EVT_MASTER_CAUTION_LIGHT_RIGHT                         = (PMDG_NGX_ID_OFFSET + 438);

const EVT_SYSTEM_ANNUNCIATOR_PANEL_LEFT                      = (PMDG_NGX_ID_OFFSET + 349);
const EVT_SYSTEM_ANNUNCIATOR_PANEL_RIGHT                     = (PMDG_NGX_ID_OFFSET + 437);

const EVT_LWRMAIN_CAPT_MAIN_PANEL_BRT                        = (PMDG_NGX_ID_OFFSET + 328);
const EVT_LWRMAIN_CAPT_OUTBD_DU_BRT                          = (PMDG_NGX_ID_OFFSET + 329);
const EVT_LWRMAIN_CAPT_INBD_DU_BRT                           = (PMDG_NGX_ID_OFFSET + 330);
const EVT_LWRMAIN_CAPT_INBD_DU_INNER_BRT                     = (PMDG_NGX_ID_OFFSET + 331);
const EVT_LWRMAIN_CAPT_LOWER_DU_BRT                          = (PMDG_NGX_ID_OFFSET + 332);
const EVT_LWRMAIN_CAPT_LOWER_DU_INNER_BRT                    = (PMDG_NGX_ID_OFFSET + 333);
const EVT_LWRMAIN_CAPT_UPPER_DU_BRT                          = (PMDG_NGX_ID_OFFSET + 334);
const EVT_LWRMAIN_CAPT_BACKGROUND_BRT                        = (PMDG_NGX_ID_OFFSET + 337);
const EVT_LWRMAIN_CAPT_AFDS_BRT                              = (PMDG_NGX_ID_OFFSET + 338);
const EVT_LWRMAIN_FO_INBD_DU_BRT                             = (PMDG_NGX_ID_OFFSET + 507);
const EVT_LWRMAIN_FO_INBD_DU_INNER_BRT                       = (PMDG_NGX_ID_OFFSET + 508);
const EVT_LWRMAIN_FO_MAIN_PANEL_BRT                          = (PMDG_NGX_ID_OFFSET + 510);
const EVT_LWRMAIN_FO_OUTBD_DU_BRT                            = (PMDG_NGX_ID_OFFSET + 509);

const EVT_GPWS_SYS_TEST_BTN                                  = (PMDG_NGX_ID_OFFSET + 500);
const EVT_GPWS_FLAP_INHIBIT_SWITCH                           = (PMDG_NGX_ID_OFFSET + 501);
const EVT_GPWS_FLAP_INHIBIT_GUARD                            = (PMDG_NGX_ID_OFFSET + 502);
const EVT_GPWS_GEAR_INHIBIT_SWITCH                           = (PMDG_NGX_ID_OFFSET + 503);
const EVT_GPWS_GEAR_INHIBIT_GUARD                            = (PMDG_NGX_ID_OFFSET + 504);
const EVT_GPWS_TERR_INHIBIT_SWITCH                           = (PMDG_NGX_ID_OFFSET + 505);
const EVT_GPWS_TERR_INHIBIT_GUARD                            = (PMDG_NGX_ID_OFFSET + 506);

const EVT_CHRONO_L_CHR                                       = (PMDG_NGX_ID_OFFSET + 314);
const EVT_CHRONO_L_TIME_DATE                                 = (PMDG_NGX_ID_OFFSET + 315);
const EVT_CHRONO_L_SET                                       = (PMDG_NGX_ID_OFFSET + 316);
const EVT_CHRONO_L_PLUS                                      = (PMDG_NGX_ID_OFFSET + 317);
const EVT_CHRONO_L_MINUS                                     = (PMDG_NGX_ID_OFFSET + 318);
const EVT_CHRONO_L_RESET                                     = (PMDG_NGX_ID_OFFSET + 320);
const EVT_CHRONO_L_ET                                        = (PMDG_NGX_ID_OFFSET + 321);
const EVT_CHRONO_R_CHR                                       = (PMDG_NGX_ID_OFFSET + 523);
const EVT_CHRONO_R_TIME_DATE                                 = (PMDG_NGX_ID_OFFSET + 524);
const EVT_CHRONO_R_SET                                       = (PMDG_NGX_ID_OFFSET + 525);
const EVT_CHRONO_R_PLUS                                      = (PMDG_NGX_ID_OFFSET + 526);
const EVT_CHRONO_R_MINUS                                     = (PMDG_NGX_ID_OFFSET + 527);
const EVT_CHRONO_R_RESET                                     = (PMDG_NGX_ID_OFFSET + 529);
const EVT_CHRONO_R_ET                                        = (PMDG_NGX_ID_OFFSET + 530);

const EVT_CLOCK_L                                            = (PMDG_NGX_ID_OFFSET + 890);
const EVT_CLOCK_R                                            = (PMDG_NGX_ID_OFFSET + 893);

const EVT_CONTROL_STAND_TRIM_WHEEL                           = (PMDG_NGX_ID_OFFSET + 678);
const EVT_CONTROL_STAND_SPEED_BRAKE_LEVER                    = (PMDG_NGX_ID_OFFSET + 679);
const EVT_CONTROL_STAND_SPEED_BRAKE_LEVER_DOWN               = (PMDG_NGX_ID_OFFSET + 6791);
const EVT_CONTROL_STAND_SPEED_BRAKE_LEVER_ARM                = (PMDG_NGX_ID_OFFSET + 6792);
const EVT_CONTROL_STAND_SPEED_BRAKE_LEVER_50PCT              = (PMDG_NGX_ID_OFFSET + 6793);
const EVT_CONTROL_STAND_SPEED_BRAKE_LEVER_FLT_DET            = (PMDG_NGX_ID_OFFSET + 6794);
const EVT_CONTROL_STAND_SPEED_BRAKE_LEVER_UP                 = (PMDG_NGX_ID_OFFSET + 6795);
const EVT_CONTROL_STAND_REV_THRUST1_LEVER                    = (PMDG_NGX_ID_OFFSET + 680);
const EVT_CONTROL_STAND_REV_THRUST2_LEVER                    = (PMDG_NGX_ID_OFFSET + 681);
const EVT_CONTROL_STAND_FWD_THRUST1_LEVER                    = (PMDG_NGX_ID_OFFSET + 683);
const EVT_CONTROL_STAND_FWD_THRUST2_LEVER                    = (PMDG_NGX_ID_OFFSET + 686);
const EVT_CONTROL_STAND_TOGA1_SWITCH                         = (PMDG_NGX_ID_OFFSET + 684);
const EVT_CONTROL_STAND_TOGA2_SWITCH                         = (PMDG_NGX_ID_OFFSET + 687);
const EVT_CONTROL_STAND_AT1_DISENGAGE_SWITCH                 = (PMDG_NGX_ID_OFFSET + 682);
const EVT_CONTROL_STAND_AT2_DISENGAGE_SWITCH                 = (PMDG_NGX_ID_OFFSET + 685);
const EVT_CONTROL_STAND_ENG1_START_LEVER                     = (PMDG_NGX_ID_OFFSET + 688);
const EVT_CONTROL_STAND_ENG2_START_LEVER                     = (PMDG_NGX_ID_OFFSET + 689);
const EVT_CONTROL_STAND_PARK_BRAKE_LEVER                     = (PMDG_NGX_ID_OFFSET + 693);
const EVT_CONTROL_STAND_STABTRIM_ELEC_SWITCH                 = (PMDG_NGX_ID_OFFSET + 709);
const EVT_CONTROL_STAND_STABTRIM_ELEC_SWITCH_GUARD           = (PMDG_NGX_ID_OFFSET + 710);
const EVT_CONTROL_STAND_STABTRIM_AP_SWITCH                   = (PMDG_NGX_ID_OFFSET + 711);
const EVT_CONTROL_STAND_STABTRIM_AP_SWITCH_GUARD             = (PMDG_NGX_ID_OFFSET + 712);
const EVT_CONTROL_STAND_HORN_CUTOUT_SWITCH                   = (PMDG_NGX_ID_OFFSET + 713);
const EVT_CONTROL_STAND_FLAPS_LEVER                          = (PMDG_NGX_ID_OFFSET + 714);
const EVT_CONTROL_STAND_FLAPS_LEVER_0                        = (PMDG_NGX_ID_OFFSET + 7141);
const EVT_CONTROL_STAND_FLAPS_LEVER_1                        = (PMDG_NGX_ID_OFFSET + 7142);
const EVT_CONTROL_STAND_FLAPS_LEVER_2                        = (PMDG_NGX_ID_OFFSET + 7143);
const EVT_CONTROL_STAND_FLAPS_LEVER_5                        = (PMDG_NGX_ID_OFFSET + 7144);
const EVT_CONTROL_STAND_FLAPS_LEVER_10                       = (PMDG_NGX_ID_OFFSET + 7145);
const EVT_CONTROL_STAND_FLAPS_LEVER_15                       = (PMDG_NGX_ID_OFFSET + 7146);
const EVT_CONTROL_STAND_FLAPS_LEVER_25                       = (PMDG_NGX_ID_OFFSET + 7147);
const EVT_CONTROL_STAND_FLAPS_LEVER_30                       = (PMDG_NGX_ID_OFFSET + 7148);
const EVT_CONTROL_STAND_FLAPS_LEVER_40                       = (PMDG_NGX_ID_OFFSET + 7149);

const EVT_FLT_DK_DOOR_KNOB                                   = (PMDG_NGX_ID_OFFSET + 834);

const EVT_STAB_TRIM_OVRD_SWITCH_GUARD                        = (PMDG_NGX_ID_OFFSET + 830);
const EVT_STAB_TRIM_OVRD_SWITCH                              = (PMDG_NGX_ID_OFFSET + 831);

const EVT_NAV1_TRANSFER_SWITCH                               = (PMDG_NGX_ID_OFFSET + 729);
const EVT_NAV1_FIRST                                         = EVT_NAV1_TRANSFER_SWITCH;
const EVT_NAV1_TEST_SWICTH                                   = (PMDG_NGX_ID_OFFSET + 731);
const EVT_NAV1_INNER_SELECTOR                                = (PMDG_NGX_ID_OFFSET + 732);
const EVT_NAV1_OUTER_SELECTOR                                = (PMDG_NGX_ID_OFFSET + 733);
const EVT_NAV1_LAST                                          = EVT_NAV1_OUTER_SELECTOR;

const EVT_NAV2_TRANSFER_SWITCH                               = (PMDG_NGX_ID_OFFSET + 845);
const EVT_NAV2_FIRST                                         = EVT_NAV2_TRANSFER_SWITCH;
const EVT_NAV2_TEST_SWICTH                                   = (PMDG_NGX_ID_OFFSET + 847);
const EVT_NAV2_OUTER_SELECTOR                                = (PMDG_NGX_ID_OFFSET + 848);
const EVT_NAV2_INNER_SELECTOR                                = (PMDG_NGX_ID_OFFSET + 849);
const EVT_NAV2_LAST                                          = EVT_NAV2_INNER_SELECTOR;

const EVT_ADF_MODE_SELECTOR                                  = (PMDG_NGX_ID_OFFSET + 818);
const EVT_ADF_TONE_SWITCH                                    = (PMDG_NGX_ID_OFFSET + 820);
const EVT_ADF_INNER_SELECTOR                                 = (PMDG_NGX_ID_OFFSET + 822);
const EVT_ADF_MIDDLE_SELECTOR                                = (PMDG_NGX_ID_OFFSET + 823);
const EVT_ADF_OUTER_SELECTOR                                 = (PMDG_NGX_ID_OFFSET + 824);
const EVT_ADF_TRANSFER_SWITCH                                = (PMDG_NGX_ID_OFFSET + 827);

const EVT_SELCAL_VHF1_SWITCH                                 = (PMDG_NGX_ID_OFFSET + 812);
const EVT_SELCAL_VHF2_SWITCH                                 = (PMDG_NGX_ID_OFFSET + 813);
const EVT_SELCAL_VHF3_SWITCH                                 = (PMDG_NGX_ID_OFFSET + 814);
const EVT_SELCAL_HF1_SWITCH                                  = (PMDG_NGX_ID_OFFSET + 937);
const EVT_SELCAL_HF2_SWITCH                                  = (PMDG_NGX_ID_OFFSET + 938);

const EVT_COM1_TRANSFER_SWITCH                               = (PMDG_NGX_ID_OFFSET + 721);
const EVT_COM1_START_RANGE1                                  = EVT_COM1_TRANSFER_SWITCH;
const EVT_COM1_HF_SENSOR_KNOB                                = (PMDG_NGX_ID_OFFSET + 724);
const EVT_COM1_TEST_SWICTH                                   = (PMDG_NGX_ID_OFFSET + 725);
const EVT_COM1_OUTER_SELECTOR                                = (PMDG_NGX_ID_OFFSET + 726);
const EVT_COM1_INNER_SELECTOR                                = (PMDG_NGX_ID_OFFSET + 727);
const EVT_COM1_END_RANGE1                                    = EVT_COM1_INNER_SELECTOR;
const EVT_COM1_PNL_OFF_SWITCH                                = (PMDG_NGX_ID_OFFSET + 903);
const EVT_COM1_START_RANGE2                                  = EVT_COM1_PNL_OFF_SWITCH;
const EVT_COM1_VHF1_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 904);
const EVT_COM1_VHF2_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 906);
const EVT_COM1_VHF3_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 908);
const EVT_COM1_HF1_SWITCH                                    = (PMDG_NGX_ID_OFFSET + 910);
const EVT_COM1_AM_SWITCH                                     = (PMDG_NGX_ID_OFFSET + 912);
const EVT_COM1_HF2_SWITCH                                    = (PMDG_NGX_ID_OFFSET + 914);
const EVT_COM1_END_RANGE2                                    = EVT_COM1_HF2_SWITCH;

const EVT_COM2_TRANSFER_SWITCH                               = (PMDG_NGX_ID_OFFSET + 837);
const EVT_COM2_START_RANGE1                                  = EVT_COM2_TRANSFER_SWITCH;
const EVT_COM2_HF_SENSOR_KNOB                                = (PMDG_NGX_ID_OFFSET + 840);
const EVT_COM2_TEST_SWICTH                                   = (PMDG_NGX_ID_OFFSET + 841);
const EVT_COM2_OUTER_SELECTOR                                = (PMDG_NGX_ID_OFFSET + 842);
const EVT_COM2_INNER_SELECTOR                                = (PMDG_NGX_ID_OFFSET + 843);
const EVT_COM2_END_RANGE1                                    = EVT_COM2_INNER_SELECTOR;
const EVT_COM2_PNL_OFF_SWITCH                                = (PMDG_NGX_ID_OFFSET + 924);
const EVT_COM2_START_RANGE2                                  = EVT_COM2_PNL_OFF_SWITCH;
const EVT_COM2_VHF1_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 925);
const EVT_COM2_VHF2_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 927);
const EVT_COM2_VHF3_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 929);
const EVT_COM2_HF1_SWITCH                                    = (PMDG_NGX_ID_OFFSET + 931);
const EVT_COM2_AM_SWITCH                                     = (PMDG_NGX_ID_OFFSET + 933);
const EVT_COM2_HF2_SWITCH                                    = (PMDG_NGX_ID_OFFSET + 935);
const EVT_COM2_END_RANGE2                                    = EVT_COM2_HF2_SWITCH;

const EVT_COM3_TRANSFER_SWITCH                               = (PMDG_NGX_ID_OFFSET + 946);
const EVT_COM3_START_RANGE1                                  = EVT_COM3_TRANSFER_SWITCH;
const EVT_COM3_HF_SENSOR_KNOB                                = (PMDG_NGX_ID_OFFSET + 949);
const EVT_COM3_TEST_SWICTH                                   = (PMDG_NGX_ID_OFFSET + 950);
const EVT_COM3_OUTER_SELECTOR                                = (PMDG_NGX_ID_OFFSET + 951);
const EVT_COM3_INNER_SELECTOR                                = (PMDG_NGX_ID_OFFSET + 952);
const EVT_COM3_END_RANGE1                                    = EVT_COM3_INNER_SELECTOR;
const EVT_COM3_PNL_OFF_SWITCH                                = (PMDG_NGX_ID_OFFSET + 953);
const EVT_COM3_START_RANGE2                                  = EVT_COM3_PNL_OFF_SWITCH;
const EVT_COM3_VHF1_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 954);
const EVT_COM3_VHF2_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 956);
const EVT_COM3_VHF3_SWITCH                                   = (PMDG_NGX_ID_OFFSET + 958);
const EVT_COM3_HF1_SWITCH                                    = (PMDG_NGX_ID_OFFSET + 960);
const EVT_COM3_AM_SWITCH                                     = (PMDG_NGX_ID_OFFSET + 962);
const EVT_COM3_HF2_SWITCH                                    = (PMDG_NGX_ID_OFFSET + 964);
const EVT_COM3_END_RANGE2                                    = EVT_COM3_HF2_SWITCH;

const EVT_ACP_CAPT_MIC_VHF1                                  = (PMDG_NGX_ID_OFFSET + 734);
const EVT_ACP_CAPT_MIC_VHF2                                  = (PMDG_NGX_ID_OFFSET + 735);
const EVT_ACP_CAPT_MIC_VHF3                                  = (PMDG_NGX_ID_OFFSET + 877); // out of order;
const EVT_ACP_CAPT_MIC_HF1                                   = (PMDG_NGX_ID_OFFSET + 878); // out of order;
const EVT_ACP_CAPT_MIC_HF2                                   = (PMDG_NGX_ID_OFFSET + 879); // out of order;
const EVT_ACP_CAPT_MIC_FLT                                   = (PMDG_NGX_ID_OFFSET + 736);
const EVT_ACP_CAPT_MIC_SVC                                   = (PMDG_NGX_ID_OFFSET + 737);
const EVT_ACP_CAPT_MIC_PA                                    = (PMDG_NGX_ID_OFFSET + 738);
const EVT_ACP_CAPT_REC_VHF1                                  = (PMDG_NGX_ID_OFFSET + 739);
const EVT_ACP_CAPT_REC_VHF2                                  = (PMDG_NGX_ID_OFFSET + 740);
const EVT_ACP_CAPT_REC_VHF3                                  = (PMDG_NGX_ID_OFFSET + 741);
const EVT_ACP_CAPT_REC_HF1                                   = (PMDG_NGX_ID_OFFSET + 742);
const EVT_ACP_CAPT_REC_HF2                                   = (PMDG_NGX_ID_OFFSET + 880); // out of order;
const EVT_ACP_CAPT_REC_FLT                                   = (PMDG_NGX_ID_OFFSET + 743);
const EVT_ACP_CAPT_REC_SVC                                   = (PMDG_NGX_ID_OFFSET + 744);
const EVT_ACP_CAPT_REC_PA                                    = (PMDG_NGX_ID_OFFSET + 745);
const EVT_ACP_CAPT_REC_NAV1                                  = (PMDG_NGX_ID_OFFSET + 746);
const EVT_ACP_CAPT_REC_NAV2                                  = (PMDG_NGX_ID_OFFSET + 747);
const EVT_ACP_CAPT_REC_ADF1                                  = (PMDG_NGX_ID_OFFSET + 748);
const EVT_ACP_CAPT_REC_ADF2                                  = (PMDG_NGX_ID_OFFSET + 749);
const EVT_ACP_CAPT_REC_MKR                                   = (PMDG_NGX_ID_OFFSET + 750);
const EVT_ACP_CAPT_REC_SPKR                                  = (PMDG_NGX_ID_OFFSET + 751);
const EVT_ACP_CAPT_RT_IC_SWITCH                              = (PMDG_NGX_ID_OFFSET + 752);
const EVT_ACP_CAPT_MASK_BOOM_SWITCH                          = (PMDG_NGX_ID_OFFSET + 753);
const EVT_ACP_CAPT_FILTER_SWITCH                             = (PMDG_NGX_ID_OFFSET + 754);
const EVT_ACP_CAPT_ALT_NORM_SWITCH                           = (PMDG_NGX_ID_OFFSET + 755);
const EVT_ACP_CAPT_FIRST1                                    = EVT_ACP_CAPT_MIC_VHF1;
const EVT_ACP_CAPT_LAST1                                     = EVT_ACP_CAPT_ALT_NORM_SWITCH;
const EVT_ACP_CAPT_FIRST2                                    = EVT_ACP_CAPT_MIC_VHF3;
const EVT_ACP_CAPT_LAST2                                     = EVT_ACP_CAPT_REC_HF2;
const EVT_ACP_FO_MIC_VHF1                                    = (PMDG_NGX_ID_OFFSET + 850);
const EVT_ACP_FO_MIC_VHF2                                    = (PMDG_NGX_ID_OFFSET + 851);
const EVT_ACP_FO_MIC_VHF3                                    = (PMDG_NGX_ID_OFFSET + 881); // out of order;
const EVT_ACP_FO_MIC_HF1                                     = (PMDG_NGX_ID_OFFSET + 882); // out of order;
const EVT_ACP_FO_MIC_HF2                                     = (PMDG_NGX_ID_OFFSET + 883); // out of order;
const EVT_ACP_FO_MIC_FLT                                     = (PMDG_NGX_ID_OFFSET + 852);
const EVT_ACP_FO_MIC_SVC                                     = (PMDG_NGX_ID_OFFSET + 853);
const EVT_ACP_FO_MIC_PA                                      = (PMDG_NGX_ID_OFFSET + 854);
const EVT_ACP_FO_REC_VHF1                                    = (PMDG_NGX_ID_OFFSET + 855);
const EVT_ACP_FO_REC_VHF2                                    = (PMDG_NGX_ID_OFFSET + 856);
const EVT_ACP_FO_REC_VHF3                                    = (PMDG_NGX_ID_OFFSET + 857);
const EVT_ACP_FO_REC_HF1                                     = (PMDG_NGX_ID_OFFSET + 858);
const EVT_ACP_FO_REC_HF2                                     = (PMDG_NGX_ID_OFFSET + 884); // out of order;
const EVT_ACP_FO_REC_FLT                                     = (PMDG_NGX_ID_OFFSET + 859);
const EVT_ACP_FO_REC_SVC                                     = (PMDG_NGX_ID_OFFSET + 860);
const EVT_ACP_FO_REC_PA                                      = (PMDG_NGX_ID_OFFSET + 861);
const EVT_ACP_FO_REC_NAV1                                    = (PMDG_NGX_ID_OFFSET + 862);
const EVT_ACP_FO_REC_NAV2                                    = (PMDG_NGX_ID_OFFSET + 863);
const EVT_ACP_FO_REC_ADF1                                    = (PMDG_NGX_ID_OFFSET + 864);
const EVT_ACP_FO_REC_ADF2                                    = (PMDG_NGX_ID_OFFSET + 865);
const EVT_ACP_FO_REC_MKR                                     = (PMDG_NGX_ID_OFFSET + 866);
const EVT_ACP_FO_REC_SPKR                                    = (PMDG_NGX_ID_OFFSET + 867);
const EVT_ACP_FO_VOL_NAV1                                    = (PMDG_NGX_ID_OFFSET + 1862); // 1000 added for volume rotation event;
const EVT_ACP_FO_VOL_NAV2                                    = (PMDG_NGX_ID_OFFSET + 1863);
const EVT_ACP_FO_VOL_ADF1                                    = (PMDG_NGX_ID_OFFSET + 1864);
const EVT_ACP_FO_VOL_ADF2                                    = (PMDG_NGX_ID_OFFSET + 1865);
const EVT_ACP_FO_VOL_MKR                                     = (PMDG_NGX_ID_OFFSET + 1866);
const EVT_ACP_FO_RT_IC_SWITCH                                = (PMDG_NGX_ID_OFFSET + 868);
const EVT_ACP_FO_MASK_BOOM_SWITCH                            = (PMDG_NGX_ID_OFFSET + 869);
const EVT_ACP_FO_FILTER_SWITCH                               = (PMDG_NGX_ID_OFFSET + 870);
const EVT_ACP_FO_ALT_NORM_SWITCH                             = (PMDG_NGX_ID_OFFSET + 871);
const EVT_ACP_FO_FIRST1                                      = EVT_ACP_FO_MIC_VHF1;
const EVT_ACP_FO_LAST1                                       = EVT_ACP_FO_ALT_NORM_SWITCH;
const EVT_ACP_FO_FIRST2                                      = EVT_ACP_FO_MIC_VHF3;
const EVT_ACP_FO_LAST2                                       = EVT_ACP_FO_REC_HF2;
const EVT_ACP_OBS_MIC_VHF1                                   = (PMDG_NGX_ID_OFFSET + 291);
const EVT_ACP_OBS_MIC_VHF2                                   = (PMDG_NGX_ID_OFFSET + 292);
const EVT_ACP_OBS_MIC_VHF3                                   = (PMDG_NGX_ID_OFFSET + 293);
const EVT_ACP_OBS_MIC_HF1                                    = (PMDG_NGX_ID_OFFSET + 294);
const EVT_ACP_OBS_MIC_HF2                                    = (PMDG_NGX_ID_OFFSET + 295);
const EVT_ACP_OBS_MIC_FLT                                    = (PMDG_NGX_ID_OFFSET + 296);
const EVT_ACP_OBS_MIC_SVC                                    = (PMDG_NGX_ID_OFFSET + 297);
const EVT_ACP_OBS_MIC_PA                                     = (PMDG_NGX_ID_OFFSET + 873); // out of order;
const EVT_ACP_OBS_REC_VHF1                                   = (PMDG_NGX_ID_OFFSET + 286);
const EVT_ACP_OBS_REC_VHF2                                   = (PMDG_NGX_ID_OFFSET + 287);
const EVT_ACP_OBS_REC_VHF3                                   = (PMDG_NGX_ID_OFFSET + 874); // out of order;
const EVT_ACP_OBS_REC_HF1                                    = (PMDG_NGX_ID_OFFSET + 875); // out of order;
const EVT_ACP_OBS_REC_HF2                                    = (PMDG_NGX_ID_OFFSET + 876); // out of order;
const EVT_ACP_OBS_REC_FLT                                    = (PMDG_NGX_ID_OFFSET + 288);
const EVT_ACP_OBS_REC_SVC                                    = (PMDG_NGX_ID_OFFSET + 289);
const EVT_ACP_OBS_REC_PA                                     = (PMDG_NGX_ID_OFFSET + 290);
const EVT_ACP_OBS_REC_NAV1                                   = (PMDG_NGX_ID_OFFSET + 280);
const EVT_ACP_OBS_REC_NAV2                                   = (PMDG_NGX_ID_OFFSET + 281);
const EVT_ACP_OBS_REC_ADF1                                   = (PMDG_NGX_ID_OFFSET + 282);
const EVT_ACP_OBS_REC_ADF2                                   = (PMDG_NGX_ID_OFFSET + 283);
const EVT_ACP_OBS_REC_MKR                                    = (PMDG_NGX_ID_OFFSET + 284);
const EVT_ACP_OBS_REC_SPKR                                   = (PMDG_NGX_ID_OFFSET + 285);
const EVT_ACP_OBS_VOL_NAV1                                   = (PMDG_NGX_ID_OFFSET + 1280); // 1000 added for volume rotation event;
const EVT_ACP_OBS_VOL_NAV2                                   = (PMDG_NGX_ID_OFFSET + 1281);
const EVT_ACP_OBS_VOL_ADF1                                   = (PMDG_NGX_ID_OFFSET + 1282);
const EVT_ACP_OBS_VOL_ADF2                                   = (PMDG_NGX_ID_OFFSET + 1283);
const EVT_ACP_OBS_VOL_MKR                                    = (PMDG_NGX_ID_OFFSET + 1284);
const EVT_ACP_OBS_RT_IC_SWITCH                               = (PMDG_NGX_ID_OFFSET + 276);
const EVT_ACP_OBS_MASK_BOOM_SWITCH                           = (PMDG_NGX_ID_OFFSET + 277);
const EVT_ACP_OBS_FILTER_SWITCH                              = (PMDG_NGX_ID_OFFSET + 278);
const EVT_ACP_OBS_ALT_NORM_SWITCH                            = (PMDG_NGX_ID_OFFSET + 279);
const EVT_ACP_OBS_FIRST1                                     = EVT_ACP_OBS_RT_IC_SWITCH;
const EVT_ACP_OBS_LAST1                                      = EVT_ACP_OBS_MIC_SVC;
const EVT_ACP_OBS_FIRST2                                     = EVT_ACP_OBS_MIC_PA;
const EVT_ACP_OBS_LAST2                                      = EVT_ACP_OBS_REC_HF2;

// SP2
const EVT_WXR_L_TFR                                          = (PMDG_NGX_ID_OFFSET + 790);
const EVT_WXR_L_WX                                           = (PMDG_NGX_ID_OFFSET + 791);
const EVT_WXR_L_WX_T                                         = (PMDG_NGX_ID_OFFSET + 916);
const EVT_WXR_L_MAP                                          = (PMDG_NGX_ID_OFFSET + 792);
const EVT_WXR_L_GC                                           = (PMDG_NGX_ID_OFFSET + 793);
const EVT_WXR_AUTO                                           = (PMDG_NGX_ID_OFFSET + 917);
const EVT_WXR_TEST                                           = (PMDG_NGX_ID_OFFSET + 918);
const EVT_WXR_R_TFR                                          = (PMDG_NGX_ID_OFFSET + 919);
const EVT_WXR_R_WX                                           = (PMDG_NGX_ID_OFFSET + 796);
const EVT_WXR_R_WX_T                                         = (PMDG_NGX_ID_OFFSET + 920);
const EVT_WXR_R_MAP                                          = (PMDG_NGX_ID_OFFSET + 797);
const EVT_WXR_R_GC                                           = (PMDG_NGX_ID_OFFSET + 921);
const EVT_WXR_L_TILT_CONTROL                                 = (PMDG_NGX_ID_OFFSET + 794);
const EVT_WXR_L_GAIN_CONTROL                                 = (PMDG_NGX_ID_OFFSET + 923);
const EVT_WXR_R_TILT_CONTROL                                 = (PMDG_NGX_ID_OFFSET + 795);
const EVT_WXR_R_GAIN_CONTROL                                 = (PMDG_NGX_ID_OFFSET + 922);

const EVT_TCAS_XPNDR                                         = (PMDG_NGX_ID_OFFSET + 798);
const EVT_TCAS_MODE                                          = (PMDG_NGX_ID_OFFSET + 800);
const EVT_TCAS_TEST                                          = (PMDG_NGX_ID_OFFSET + 801);
const EVT_TCAS_ALTSOURCE                                     = (PMDG_NGX_ID_OFFSET + 803);
const EVT_TCAS_KNOB1                                         = (PMDG_NGX_ID_OFFSET + 804);
const EVT_TCAS_KNOB2                                         = (PMDG_NGX_ID_OFFSET + 805);
const EVT_TCAS_IDENT                                         = (PMDG_NGX_ID_OFFSET + 806);
const EVT_TCAS_KNOB4                                         = (PMDG_NGX_ID_OFFSET + 807);
const EVT_TCAS_KNOB3                                         = (PMDG_NGX_ID_OFFSET + 808);

const EVT_HUD_MODE                                           = (PMDG_NGX_ID_OFFSET + 770);
const EVT_HUD_STB                                            = (PMDG_NGX_ID_OFFSET + 771);
const EVT_HUD_RWY                                            = (PMDG_NGX_ID_OFFSET + 772);
const EVT_HUD_GS                                             = (PMDG_NGX_ID_OFFSET + 773);
const EVT_HUD_CLR                                            = (PMDG_NGX_ID_OFFSET + 775);
const EVT_HUD_BRT                                            = (PMDG_NGX_ID_OFFSET + 776);
const EVT_HUD_DIM                                            = (PMDG_NGX_ID_OFFSET + 777);
const EVT_HUD_1                                              = (PMDG_NGX_ID_OFFSET + 778);
const EVT_HUD_2                                              = (PMDG_NGX_ID_OFFSET + 779);
const EVT_HUD_3                                              = (PMDG_NGX_ID_OFFSET + 780);
const EVT_HUD_4                                              = (PMDG_NGX_ID_OFFSET + 781);
const EVT_HUD_5                                              = (PMDG_NGX_ID_OFFSET + 782);
const EVT_HUD_6                                              = (PMDG_NGX_ID_OFFSET + 783);
const EVT_HUD_7                                              = (PMDG_NGX_ID_OFFSET + 784);
const EVT_HUD_8                                              = (PMDG_NGX_ID_OFFSET + 785);
const EVT_HUD_9                                              = (PMDG_NGX_ID_OFFSET + 786);
const EVT_HUD_0                                              = (PMDG_NGX_ID_OFFSET + 788);
const EVT_HUD_ENTER                                          = (PMDG_NGX_ID_OFFSET + 787);
const EVT_HUD_TEST                                           = (PMDG_NGX_ID_OFFSET + 789);
const EVT_HUD_STOW                                           = (PMDG_NGX_ID_OFFSET + 979);
const EVT_HUD_BRIGTHNESS                                     = (PMDG_NGX_ID_OFFSET + 980);
const EVT_HUD_AUTO_MAN                                       = (PMDG_NGX_ID_OFFSET + 981);

const EVT_HGS_FAIL_SWITCH                                    = (PMDG_NGX_ID_OFFSET + 522);

const EVT_CDU_L_L1                                           = (PMDG_NGX_ID_OFFSET + 534);
const EVT_CDU_L_L2                                           = (PMDG_NGX_ID_OFFSET + 535);
const EVT_CDU_L_L3                                           = (PMDG_NGX_ID_OFFSET + 536);
const EVT_CDU_L_L4                                           = (PMDG_NGX_ID_OFFSET + 537);
const EVT_CDU_L_L5                                           = (PMDG_NGX_ID_OFFSET + 538);
const EVT_CDU_L_L6                                           = (PMDG_NGX_ID_OFFSET + 539);
const EVT_CDU_L_R1                                           = (PMDG_NGX_ID_OFFSET + 540);
const EVT_CDU_L_R2                                           = (PMDG_NGX_ID_OFFSET + 541);
const EVT_CDU_L_R3                                           = (PMDG_NGX_ID_OFFSET + 542);
const EVT_CDU_L_R4                                           = (PMDG_NGX_ID_OFFSET + 543);
const EVT_CDU_L_R5                                           = (PMDG_NGX_ID_OFFSET + 544);
const EVT_CDU_L_R6                                           = (PMDG_NGX_ID_OFFSET + 545);
const EVT_CDU_L_INIT_REF                                     = (PMDG_NGX_ID_OFFSET + 546);
const EVT_CDU_L_RTE                                          = (PMDG_NGX_ID_OFFSET + 547);
const EVT_CDU_L_CLB                                          = (PMDG_NGX_ID_OFFSET + 548);
const EVT_CDU_L_CRZ                                          = (PMDG_NGX_ID_OFFSET + 549);
const EVT_CDU_L_DES                                          = (PMDG_NGX_ID_OFFSET + 550);
const EVT_CDU_L_MENU                                         = (PMDG_NGX_ID_OFFSET + 551);
const EVT_CDU_L_LEGS                                         = (PMDG_NGX_ID_OFFSET + 552);
const EVT_CDU_L_DEP_ARR                                      = (PMDG_NGX_ID_OFFSET + 553);
const EVT_CDU_L_HOLD                                         = (PMDG_NGX_ID_OFFSET + 554);
const EVT_CDU_L_PROG                                         = (PMDG_NGX_ID_OFFSET + 555);
const EVT_CDU_L_EXEC                                         = (PMDG_NGX_ID_OFFSET + 556);
const EVT_CDU_L_N1_LIMIT                                     = (PMDG_NGX_ID_OFFSET + 557);
const EVT_CDU_L_FIX                                          = (PMDG_NGX_ID_OFFSET + 558);
const EVT_CDU_L_PREV_PAGE                                    = (PMDG_NGX_ID_OFFSET + 559);
const EVT_CDU_L_NEXT_PAGE                                    = (PMDG_NGX_ID_OFFSET + 560);
const EVT_CDU_L_1                                            = (PMDG_NGX_ID_OFFSET + 561);
const EVT_CDU_L_2                                            = (PMDG_NGX_ID_OFFSET + 562);
const EVT_CDU_L_3                                            = (PMDG_NGX_ID_OFFSET + 563);
const EVT_CDU_L_4                                            = (PMDG_NGX_ID_OFFSET + 564);
const EVT_CDU_L_5                                            = (PMDG_NGX_ID_OFFSET + 565);
const EVT_CDU_L_6                                            = (PMDG_NGX_ID_OFFSET + 566);
const EVT_CDU_L_7                                            = (PMDG_NGX_ID_OFFSET + 567);
const EVT_CDU_L_8                                            = (PMDG_NGX_ID_OFFSET + 568);
const EVT_CDU_L_9                                            = (PMDG_NGX_ID_OFFSET + 569);
const EVT_CDU_L_DOT                                          = (PMDG_NGX_ID_OFFSET + 570);
const EVT_CDU_L_0                                            = (PMDG_NGX_ID_OFFSET + 571);
const EVT_CDU_L_PLUS_MINUS                                   = (PMDG_NGX_ID_OFFSET + 572);
const EVT_CDU_L_A                                            = (PMDG_NGX_ID_OFFSET + 573);
const EVT_CDU_L_B                                            = (PMDG_NGX_ID_OFFSET + 574);
const EVT_CDU_L_C                                            = (PMDG_NGX_ID_OFFSET + 575);
const EVT_CDU_L_D                                            = (PMDG_NGX_ID_OFFSET + 576);
const EVT_CDU_L_E                                            = (PMDG_NGX_ID_OFFSET + 577);
const EVT_CDU_L_F                                            = (PMDG_NGX_ID_OFFSET + 578);
const EVT_CDU_L_G                                            = (PMDG_NGX_ID_OFFSET + 579);
const EVT_CDU_L_H                                            = (PMDG_NGX_ID_OFFSET + 580);
const EVT_CDU_L_I                                            = (PMDG_NGX_ID_OFFSET + 581);
const EVT_CDU_L_J                                            = (PMDG_NGX_ID_OFFSET + 582);
const EVT_CDU_L_K                                            = (PMDG_NGX_ID_OFFSET + 583);
const EVT_CDU_L_L                                            = (PMDG_NGX_ID_OFFSET + 584);
const EVT_CDU_L_M                                            = (PMDG_NGX_ID_OFFSET + 585);
const EVT_CDU_L_N                                            = (PMDG_NGX_ID_OFFSET + 586);
const EVT_CDU_L_O                                            = (PMDG_NGX_ID_OFFSET + 587);
const EVT_CDU_L_P                                            = (PMDG_NGX_ID_OFFSET + 588);
const EVT_CDU_L_Q                                            = (PMDG_NGX_ID_OFFSET + 589);
const EVT_CDU_L_R                                            = (PMDG_NGX_ID_OFFSET + 590);
const EVT_CDU_L_S                                            = (PMDG_NGX_ID_OFFSET + 591);
const EVT_CDU_L_T                                            = (PMDG_NGX_ID_OFFSET + 592);
const EVT_CDU_L_U                                            = (PMDG_NGX_ID_OFFSET + 593);
const EVT_CDU_L_V                                            = (PMDG_NGX_ID_OFFSET + 594);
const EVT_CDU_L_W                                            = (PMDG_NGX_ID_OFFSET + 595);
const EVT_CDU_L_X                                            = (PMDG_NGX_ID_OFFSET + 596);
const EVT_CDU_L_Y                                            = (PMDG_NGX_ID_OFFSET + 597);
const EVT_CDU_L_Z                                            = (PMDG_NGX_ID_OFFSET + 598);
const EVT_CDU_L_SPACE                                        = (PMDG_NGX_ID_OFFSET + 599);
const EVT_CDU_L_DEL                                          = (PMDG_NGX_ID_OFFSET + 600);
const EVT_CDU_L_SLASH                                        = (PMDG_NGX_ID_OFFSET + 601);
const EVT_CDU_L_CLR                                          = (PMDG_NGX_ID_OFFSET + 602);
const EVT_CDU_L_BRITENESS                                    = (PMDG_NGX_ID_OFFSET + 605);
const EVT_CDU_R_L1                                           = (PMDG_NGX_ID_OFFSET + 606);
const EVT_CDU_R_L2                                           = (PMDG_NGX_ID_OFFSET + 607);
const EVT_CDU_R_L3                                           = (PMDG_NGX_ID_OFFSET + 608);
const EVT_CDU_R_L4                                           = (PMDG_NGX_ID_OFFSET + 609);
const EVT_CDU_R_L5                                           = (PMDG_NGX_ID_OFFSET + 610);
const EVT_CDU_R_L6                                           = (PMDG_NGX_ID_OFFSET + 611);
const EVT_CDU_R_R1                                           = (PMDG_NGX_ID_OFFSET + 612);
const EVT_CDU_R_R2                                           = (PMDG_NGX_ID_OFFSET + 613);
const EVT_CDU_R_R3                                           = (PMDG_NGX_ID_OFFSET + 614);
const EVT_CDU_R_R4                                           = (PMDG_NGX_ID_OFFSET + 615);
const EVT_CDU_R_R5                                           = (PMDG_NGX_ID_OFFSET + 616);
const EVT_CDU_R_R6                                           = (PMDG_NGX_ID_OFFSET + 617);
const EVT_CDU_R_INIT_REF                                     = (PMDG_NGX_ID_OFFSET + 618);
const EVT_CDU_R_RTE                                          = (PMDG_NGX_ID_OFFSET + 619);
const EVT_CDU_R_CLB                                          = (PMDG_NGX_ID_OFFSET + 620);
const EVT_CDU_R_CRZ                                          = (PMDG_NGX_ID_OFFSET + 621);
const EVT_CDU_R_DES                                          = (PMDG_NGX_ID_OFFSET + 622);
const EVT_CDU_R_MENU                                         = (PMDG_NGX_ID_OFFSET + 623);
const EVT_CDU_R_LEGS                                         = (PMDG_NGX_ID_OFFSET + 624);
const EVT_CDU_R_DEP_ARR                                      = (PMDG_NGX_ID_OFFSET + 625);
const EVT_CDU_R_HOLD                                         = (PMDG_NGX_ID_OFFSET + 626);
const EVT_CDU_R_PROG                                         = (PMDG_NGX_ID_OFFSET + 627);
const EVT_CDU_R_EXEC                                         = (PMDG_NGX_ID_OFFSET + 628);
const EVT_CDU_R_N1_LIMIT                                     = (PMDG_NGX_ID_OFFSET + 629);
const EVT_CDU_R_FIX                                          = (PMDG_NGX_ID_OFFSET + 630);
const EVT_CDU_R_PREV_PAGE                                    = (PMDG_NGX_ID_OFFSET + 631);
const EVT_CDU_R_NEXT_PAGE                                    = (PMDG_NGX_ID_OFFSET + 632);
const EVT_CDU_R_1                                            = (PMDG_NGX_ID_OFFSET + 633);
const EVT_CDU_R_2                                            = (PMDG_NGX_ID_OFFSET + 634);
const EVT_CDU_R_3                                            = (PMDG_NGX_ID_OFFSET + 635);
const EVT_CDU_R_4                                            = (PMDG_NGX_ID_OFFSET + 636);
const EVT_CDU_R_5                                            = (PMDG_NGX_ID_OFFSET + 637);
const EVT_CDU_R_6                                            = (PMDG_NGX_ID_OFFSET + 638);
const EVT_CDU_R_7                                            = (PMDG_NGX_ID_OFFSET + 639);
const EVT_CDU_R_8                                            = (PMDG_NGX_ID_OFFSET + 640);
const EVT_CDU_R_9                                            = (PMDG_NGX_ID_OFFSET + 641);
const EVT_CDU_R_DOT                                          = (PMDG_NGX_ID_OFFSET + 642);
const EVT_CDU_R_0                                            = (PMDG_NGX_ID_OFFSET + 643);
const EVT_CDU_R_PLUS_MINUS                                   = (PMDG_NGX_ID_OFFSET + 644);
const EVT_CDU_R_A                                            = (PMDG_NGX_ID_OFFSET + 645);
const EVT_CDU_R_B                                            = (PMDG_NGX_ID_OFFSET + 646);
const EVT_CDU_R_C                                            = (PMDG_NGX_ID_OFFSET + 647);
const EVT_CDU_R_D                                            = (PMDG_NGX_ID_OFFSET + 648);
const EVT_CDU_R_E                                            = (PMDG_NGX_ID_OFFSET + 649);
const EVT_CDU_R_F                                            = (PMDG_NGX_ID_OFFSET + 650);
const EVT_CDU_R_G                                            = (PMDG_NGX_ID_OFFSET + 651);
const EVT_CDU_R_H                                            = (PMDG_NGX_ID_OFFSET + 652);
const EVT_CDU_R_I                                            = (PMDG_NGX_ID_OFFSET + 653);
const EVT_CDU_R_J                                            = (PMDG_NGX_ID_OFFSET + 654);
const EVT_CDU_R_K                                            = (PMDG_NGX_ID_OFFSET + 655);
const EVT_CDU_R_L                                            = (PMDG_NGX_ID_OFFSET + 656);
const EVT_CDU_R_M                                            = (PMDG_NGX_ID_OFFSET + 657);
const EVT_CDU_R_N                                            = (PMDG_NGX_ID_OFFSET + 658);
const EVT_CDU_R_O                                            = (PMDG_NGX_ID_OFFSET + 659);
const EVT_CDU_R_P                                            = (PMDG_NGX_ID_OFFSET + 660);
const EVT_CDU_R_Q                                            = (PMDG_NGX_ID_OFFSET + 661);
const EVT_CDU_R_R                                            = (PMDG_NGX_ID_OFFSET + 662);
const EVT_CDU_R_S                                            = (PMDG_NGX_ID_OFFSET + 663);
const EVT_CDU_R_T                                            = (PMDG_NGX_ID_OFFSET + 664);
const EVT_CDU_R_U                                            = (PMDG_NGX_ID_OFFSET + 665);
const EVT_CDU_R_V                                            = (PMDG_NGX_ID_OFFSET + 666);
const EVT_CDU_R_W                                            = (PMDG_NGX_ID_OFFSET + 667);
const EVT_CDU_R_X                                            = (PMDG_NGX_ID_OFFSET + 668);
const EVT_CDU_R_Y                                            = (PMDG_NGX_ID_OFFSET + 669);
const EVT_CDU_R_Z                                            = (PMDG_NGX_ID_OFFSET + 670);
const EVT_CDU_R_SPACE                                        = (PMDG_NGX_ID_OFFSET + 671);
const EVT_CDU_R_DEL                                          = (PMDG_NGX_ID_OFFSET + 672);
const EVT_CDU_R_SLASH                                        = (PMDG_NGX_ID_OFFSET + 673);
const EVT_CDU_R_CLR                                          = (PMDG_NGX_ID_OFFSET + 674);
const EVT_CDU_R_BRITENESS                                    = (PMDG_NGX_ID_OFFSET + 677);

const EVT_FIRE_OVHT_DET_SWITCH_1                             = (PMDG_NGX_ID_OFFSET + 694);
const EVT_FIRE_DETECTION_TEST_SWITCH                         = (PMDG_NGX_ID_OFFSET + 696);
const EVT_FIRE_HANDLE_ENGINE_1_TOP                           = (PMDG_NGX_ID_OFFSET + 697);
const EVT_FIRE_HANDLE_ENGINE_1_BOTTOM                        = (PMDG_NGX_ID_OFFSET + 6971);
const EVT_FIRE_HANDLE_APU_TOP                                = (PMDG_NGX_ID_OFFSET + 698);
const EVT_FIRE_HANDLE_APU_BOTTOM                             = (PMDG_NGX_ID_OFFSET + 6981);
const EVT_FIRE_HANDLE_ENGINE_2_TOP                           = (PMDG_NGX_ID_OFFSET + 699);
const EVT_FIRE_HANDLE_ENGINE_2_BOTTOM                        = (PMDG_NGX_ID_OFFSET + 6991);
const EVT_FIRE_BELL_CUTOUT_SWITCH                            = (PMDG_NGX_ID_OFFSET + 704);
const EVT_FIRE_OVHT_DET_SWITCH_2                             = (PMDG_NGX_ID_OFFSET + 705);
const EVT_FIRE_EXTINGUISHER_TEST_SWITCH                      = (PMDG_NGX_ID_OFFSET + 715);
const EVT_FIRE_UNLOCK_SWITCH_ENGINE_1                        = (PMDG_NGX_ID_OFFSET + 976);
const EVT_FIRE_UNLOCK_SWITCH_APU                             = (PMDG_NGX_ID_OFFSET + 977);
const EVT_FIRE_UNLOCK_SWITCH_ENGINE_2                        = (PMDG_NGX_ID_OFFSET + 978);

const EVT_CARGO_FIRE_DET_SEL_SWITCH_FWD                      = (PMDG_NGX_ID_OFFSET + 760);
const EVT_CARGO_FIRE_DET_SEL_SWITCH_AFT                      = (PMDG_NGX_ID_OFFSET + 761);
const EVT_CARGO_FIRE_ARM_SWITCH_FWD                          = (PMDG_NGX_ID_OFFSET + 764);
const EVT_CARGO_FIRE_ARM_SWITCH_AFT                          = (PMDG_NGX_ID_OFFSET + 766);
const EVT_CARGO_FIRE_DISC_SWITCH_GUARD                       = (PMDG_NGX_ID_OFFSET + 767);
const EVT_CARGO_FIRE_DISC_SWITCH                             = (PMDG_NGX_ID_OFFSET + 768);
const EVT_CARGO_FIRE_TEST_SWITCH                             = (PMDG_NGX_ID_OFFSET + 769);

const EVT_FCTL_AILERON_TRIM                                  = (PMDG_NGX_ID_OFFSET + 810);
const EVT_FCTL_RUDDER_TRIM                                   = (PMDG_NGX_ID_OFFSET + 811);

const EVT_PED_FLOOD_CONTROL                                  = (PMDG_NGX_ID_OFFSET + 756);
const EVT_PED_PANEL_CONTROL                                  = (PMDG_NGX_ID_OFFSET + 757);

const EVT_LDG_LIGHTS_TOGGLE                                  = (PMDG_NGX_ID_OFFSET + 14000);

const EVT_TURNOFF_LIGHTS_TOGGLE                              = (PMDG_NGX_ID_OFFSET + 14001);

const EVT_COCKPIT_LIGHTS_TOGGLE                              = (PMDG_NGX_ID_OFFSET + 14002);
const EVT_COCKPIT_LIGHTS_ON                                  = (PMDG_NGX_ID_OFFSET + 14003);
const EVT_COCKPIT_LIGHTS_OFF                                 = (PMDG_NGX_ID_OFFSET + 14004);

const EVT_DOOR_FWD_L                                         = (PMDG_NGX_ID_OFFSET + 14005);
const EVT_DOOR_FWD_R                                         = (PMDG_NGX_ID_OFFSET + 14006);
const EVT_DOOR_AFT_L                                         = (PMDG_NGX_ID_OFFSET + 14007);
const EVT_DOOR_AFT_R                                         = (PMDG_NGX_ID_OFFSET + 14008);
const EVT_DOOR_OVERWING_EXIT_L                               = (PMDG_NGX_ID_OFFSET + 14009);
const EVT_DOOR_OVERWING_EXIT_R                               = (PMDG_NGX_ID_OFFSET + 14010);
const EVT_DOOR_CARGO_FWD                                     = (PMDG_NGX_ID_OFFSET + 14013); // note number skip to match eDoors enum;
const EVT_DOOR_CARGO_AFT                                     = (PMDG_NGX_ID_OFFSET + 14014);
const EVT_DOOR_EQUIPMENT_HATCH                               = (PMDG_NGX_ID_OFFSET + 14015);
const EVT_DOOR_AIRSTAIR                                      = (PMDG_NGX_ID_OFFSET + 14016);

const EVT_YOKE_L_COUNTER_1                                   = (PMDG_NGX_ID_OFFSET + 998); // Counters (digits left to right);
const EVT_YOKE_L_COUNTER_2                                   = (PMDG_NGX_ID_OFFSET + 999);
const EVT_YOKE_L_COUNTER_3                                   = (PMDG_NGX_ID_OFFSET + 1000);
const EVT_YOKE_R_COUNTER_1                                   = (PMDG_NGX_ID_OFFSET + 1001);
const EVT_YOKE_R_COUNTER_2                                   = (PMDG_NGX_ID_OFFSET + 1002);
const EVT_YOKE_R_COUNTER_3                                   = (PMDG_NGX_ID_OFFSET + 1003);
const EVT_YOKE_L_AP_DISC_SWITCH                              = (PMDG_NGX_ID_OFFSET + 1004); // AP Disconnect switches;
const EVT_YOKE_R_AP_DISC_SWITCH                              = (PMDG_NGX_ID_OFFSET + 1005);

const EVT_MCP_CRS_L_SET                                      = (PMDG_NGX_ID_OFFSET + 14500); // Sets MCP course specified by the event parameter;
const EVT_MCP_CRS_R_SET                                      = (PMDG_NGX_ID_OFFSET + 14501);
const EVT_MCP_IAS_SET                                        = (PMDG_NGX_ID_OFFSET + 14502); // Sets MCP IAS, if IAS mode is active;
const EVT_MCP_MACH_SET                                       = (PMDG_NGX_ID_OFFSET + 14503); // Sets MCP MACH (if active) to parameter*0.01 (e.g. send 78 to set M0.78);
const EVT_MCP_HDG_SET                                        = (PMDG_NGX_ID_OFFSET + 14504); // Sets new heading, commands the shortest turn;
const EVT_MCP_ALT_SET                                        = (PMDG_NGX_ID_OFFSET + 14505);
const EVT_MCP_VS_SET                                         = (PMDG_NGX_ID_OFFSET + 14506); // Sets MCP VS (if VS window open) to parameter-10000 (e.g. send 8200 for -1800fpm);


// SP2
const EVT_OH_PRESS_FLT_ALT_SET                               = (PMDG_NGX_ID_OFFSET + 14507);
const EVT_OH_PRESS_LAND_ALT_SET                              = (PMDG_NGX_ID_OFFSET + 14508);

const EVT_CTRL_ACCELERATION_DISABLE                          = (PMDG_NGX_ID_OFFSET + 14600);
const EVT_CTRL_ACCELERATION_ENABLE                           = (PMDG_NGX_ID_OFFSET + 14600);


