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


#ifndef _H_PMDG_NGX_EVENTS
#define _H_PMDG_NGX_EVENTS


#define PMDG_NGX_ID_OFFSET                                  0x00011000

#define EVT_OH_ELEC_BATTERY_SWITCH                          (PMDG_NGX_ID_OFFSET + 1)	// 01 - BAT Switch
#define EVT_OH_ELEC_BATTERY_GUARD                           (PMDG_NGX_ID_OFFSET + 2)	// 02 - BAT Switch Guard
#define EVT_OH_ELEC_DC_METER                                (PMDG_NGX_ID_OFFSET + 3)	// 03 - DC SOURCE Knob
#define EVT_OH_ELEC_AC_METER                                (PMDG_NGX_ID_OFFSET + 4)	// 04 - AC SOURCE Knob
#define EVT_OH_ELEC_GALLEY                                  (PMDG_NGX_ID_OFFSET + 974)	// 974- GALLEY Switch [-600/700 only]
#define EVT_OH_ELEC_CAB_UTIL                                (PMDG_NGX_ID_OFFSET + 5)	// 05 - CAB UTIL Switch	[-800/900 only]
#define EVT_OH_ELEC_IFE                                     (PMDG_NGX_ID_OFFSET + 6)	// 06 - IFE/PASS Switch	[-800/900 only]
#define EVT_OH_ELEC_STBY_PWR_SWITCH                         (PMDG_NGX_ID_OFFSET + 10)	// 10 - STANDBY POWER Switch
#define EVT_OH_ELEC_STBY_PWR_GUARD                          (PMDG_NGX_ID_OFFSET + 11)	// 11 - STANDBY POWER Switch Guard
#define EVT_OH_ELEC_DISCONNECT_1_SWITCH                     (PMDG_NGX_ID_OFFSET + 12)	// 12 - GEN DRIVE DISC Left Switch
#define EVT_OH_ELEC_DISCONNECT_1_GUARD                      (PMDG_NGX_ID_OFFSET + 13)	// 13 - GEN DRIVE DISC Left Guard
#define EVT_OH_ELEC_DISCONNECT_2_SWITCH                     (PMDG_NGX_ID_OFFSET + 14)	// 14 - GEN DRIVE DISC Right Switch
#define EVT_OH_ELEC_DISCONNECT_2_GUARD                      (PMDG_NGX_ID_OFFSET + 15)	// 15 - GEN DRIVE DISC Right Guard
#define EVT_OH_ELEC_GRD_PWR_SWITCH                          (PMDG_NGX_ID_OFFSET + 17)	// 17 - GROUND POWER Switch
#define EVT_OH_ELEC_BUS_TRANSFER_SWITCH                     (PMDG_NGX_ID_OFFSET + 18)	// 18 - BUS TRANSFER Switch
#define EVT_OH_ELEC_BUS_TRANSFER_GUARD                      (PMDG_NGX_ID_OFFSET + 19)	// 19 - BUS TRANSFER Guard
#define EVT_OH_ELEC_GEN1_SWITCH                             (PMDG_NGX_ID_OFFSET + 27)	// 27 - GENERATOR Left Switch
#define EVT_OH_ELEC_APU_GEN1_SWITCH                         (PMDG_NGX_ID_OFFSET + 28)	// 28 - APU GENERATOR Left Switch
#define EVT_OH_ELEC_APU_GEN2_SWITCH                         (PMDG_NGX_ID_OFFSET + 29)	// 29 - APU GENERATOR RIGHT Switch
#define EVT_OH_ELEC_GEN2_SWITCH                             (PMDG_NGX_ID_OFFSET + 30)	// 30 - GENERATOR RIGHT Switch
#define EVT_OH_ELEC_MAINT_SWITCH                            (PMDG_NGX_ID_OFFSET + 93)	// 93 - ELEC MAINT Switch
#define EVT_OH_FUEL_PUMP_1_AFT                              (PMDG_NGX_ID_OFFSET + 37)	// 37 - FUEL PUMP LEFT AFT Switch
#define EVT_OH_FUEL_PUMP_1_FORWARD                          (PMDG_NGX_ID_OFFSET + 38)	// 38 - FUEL PUMP LEFT FWD Switch
#define EVT_OH_FUEL_PUMP_2_FORWARD                          (PMDG_NGX_ID_OFFSET + 39)	// 39 - FUEL PUMP RIGHT FWD Switch
#define EVT_OH_FUEL_PUMP_2_AFT                              (PMDG_NGX_ID_OFFSET + 40)	// 40 - FUEL PUMP RIGHT AFT Switch
#define EVT_OH_FUEL_PUMP_L_CENTER                           (PMDG_NGX_ID_OFFSET + 45)	// 45 - FUEL PUMP CENTER LEFT Switch
#define EVT_OH_FUEL_PUMP_R_CENTER                           (PMDG_NGX_ID_OFFSET + 46)	// 46 - FUEL PUMP CENTER LEFT Switch
#define EVT_OH_FUEL_CROSSFEED                               (PMDG_NGX_ID_OFFSET + 49)	// 49 - CROSSFEED Selector
#define EVT_OH_LAND_LIGHTS_GUARD                            (PMDG_NGX_ID_OFFSET + 110)
#define EVT_OH_LIGHTS_L_RETRACT                             (PMDG_NGX_ID_OFFSET + 111)
#define EVT_OH_LIGHTS_R_RETRACT                             (PMDG_NGX_ID_OFFSET + 112)
#define EVT_OH_LIGHTS_L_FIXED                               (PMDG_NGX_ID_OFFSET + 113)
#define EVT_OH_LIGHTS_R_FIXED                               (PMDG_NGX_ID_OFFSET + 114)
#define EVT_OH_LIGHTS_L_TURNOFF                             (PMDG_NGX_ID_OFFSET + 115)
#define EVT_OH_LIGHTS_R_TURNOFF                             (PMDG_NGX_ID_OFFSET + 116)
#define EVT_OH_LIGHTS_TAXI                                  (PMDG_NGX_ID_OFFSET + 117)
#define EVT_OH_LIGHTS_APU_START                             (PMDG_NGX_ID_OFFSET + 118)
#define EVT_OH_LIGHTS_L_ENGINE_START                        (PMDG_NGX_ID_OFFSET + 119)
#define EVT_OH_LIGHTS_IGN_SEL                               (PMDG_NGX_ID_OFFSET + 120)
#define EVT_OH_LIGHTS_R_ENGINE_START                        (PMDG_NGX_ID_OFFSET + 121)
#define EVT_OH_LIGHTS_LOGO                                  (PMDG_NGX_ID_OFFSET + 122)
#define EVT_OH_LIGHTS_POS_STROBE                            (PMDG_NGX_ID_OFFSET + 123)
#define EVT_OH_LIGHTS_ANT_COL                               (PMDG_NGX_ID_OFFSET + 124)
#define EVT_OH_LIGHTS_WING                                  (PMDG_NGX_ID_OFFSET + 125)
#define EVT_OH_LIGHTS_WHEEL_WELL                            (PMDG_NGX_ID_OFFSET + 126)
#define EVT_OH_LIGHTS_COMPASS                               (PMDG_NGX_ID_OFFSET + 982)
#define EVT_OH_CB_LIGHT_CONTROL                             (PMDG_NGX_ID_OFFSET + 94)	// CIRCUIT BREAKER Light Control
#define EVT_OH_PANEL_LIGHT_CONTROL                          (PMDG_NGX_ID_OFFSET + 95)	// PANEL Light Control Decrease
#define EVT_OH_EC_SUPPLY_SWITCH                             (PMDG_NGX_ID_OFFSET + 96)	// EQUIPMENT COOLING SUPPLY Switch
#define EVT_OH_EC_EXHAUST_SWITCH                            (PMDG_NGX_ID_OFFSET + 97)	// EQUIPMENT COOLING EXHAUST Switch
#define EVT_OH_EMER_EXIT_LIGHT_SWITCH                       (PMDG_NGX_ID_OFFSET + 100)	// EMERGENCY EXIT LIGHTS Switch
#define EVT_OH_EMER_EXIT_LIGHT_GUARD                        (PMDG_NGX_ID_OFFSET + 101)	// EMERGENCY EXIT LIGHTS Guard
#define EVT_OH_NO_SMOKING_LIGHT_SWITCH                      (PMDG_NGX_ID_OFFSET + 103)	// NO SMOKING Switch
#define EVT_OH_FASTEN_BELTS_LIGHT_SWITCH                    (PMDG_NGX_ID_OFFSET + 104)	// FASTEN BELTS Switch
#define EVT_OH_ATTND_CALL_SWITCH                            (PMDG_NGX_ID_OFFSET + 105)	// ATTENDANT CALL Switch
#define EVT_OH_GRND_CALL_SWITCH                             (PMDG_NGX_ID_OFFSET + 106)	// GROUND CALL Switch
#define EVT_OH_WIPER_LEFT_CONTROL                           (PMDG_NGX_ID_OFFSET + 36)	// LEFT WIPER Control
#define EVT_OH_WIPER_RIGHT_CONTROL                          (PMDG_NGX_ID_OFFSET + 109)	// RIGHT WIPER Control
#define EVT_OH_EFIS_HDG_REF_TOGGLE                          (PMDG_NGX_ID_OFFSET + 6920)	// 692A - Heading Reference Switch Toggle - note: this is only for acft. with polar nav. option, e.g. BBJ
#define EVT_OH_NAVDSP_DISPLAYS_SOURCE_SEL                   (PMDG_NGX_ID_OFFSET + 58)	// DISPLAYS SOURCE Selector
#define EVT_OH_NAVDSP_CONTROL_PANEL_SEL                     (PMDG_NGX_ID_OFFSET + 59)	// CONTROL PANEL Select Switch
#define EVT_OH_NAVDSP_FMC_SEL                               (PMDG_NGX_ID_OFFSET + 60)	// FMC Source Select Switch
#define EVT_OH_NAVDSP_IRS_SEL                               (PMDG_NGX_ID_OFFSET + 61)	// IRS Transfer Switch
#define EVT_OH_NAVDSP_VHF_NAV_SEL                           (PMDG_NGX_ID_OFFSET + 62)	// VHF NAV Transfer Switch
#define EVT_OH_YAW_DAMPER                                   (PMDG_NGX_ID_OFFSET + 63)	// YAW DAMPER Switch
#define EVT_OH_ALT_FLAPS_MASTER_SWITCH                      (PMDG_NGX_ID_OFFSET + 73)	// ALTERNATE FLAPS Master Switch
#define EVT_OH_ALT_FLAPS_MASTER_GUARD                       (PMDG_NGX_ID_OFFSET + 74)	// ALTERNATE FLAPS Master Guard
#define EVT_OH_SPOILER_A_SWITCH                             (PMDG_NGX_ID_OFFSET + 65)	// SPOILER A Switch
#define EVT_OH_SPOILER_A_GUARD                              (PMDG_NGX_ID_OFFSET + 66)	// SPOILER A Guard
#define EVT_OH_SPOILER_B_SWITCH                             (PMDG_NGX_ID_OFFSET + 67)	// SPOILER B Switch
#define EVT_OH_SPOILER_B_GUARD                              (PMDG_NGX_ID_OFFSET + 68)	// SPOILER B Guard
#define EVT_OH_ALT_FLAPS_POS_SWITCH                         (PMDG_NGX_ID_OFFSET + 75)	// ALTERNATE FLAPS Position Switch
#define EVT_OH_FCTL_A_SWITCH                                (PMDG_NGX_ID_OFFSET + 78)	// FLIGHT CONTROL A Switch Decrease
#define EVT_OH_FCTL_A_GUARD                                 (PMDG_NGX_ID_OFFSET + 79)	// FLIGHT CONTROL A Guard
#define EVT_OH_FCTL_B_SWITCH                                (PMDG_NGX_ID_OFFSET + 80)	// FLIGHT CONTROL B Switch Decrease
#define EVT_OH_FCTL_B_GUARD                                 (PMDG_NGX_ID_OFFSET + 81)	// FLIGHT CONTROL B Guard
#define EVT_OH_CVR_TEST                                     (PMDG_NGX_ID_OFFSET + 178)
#define EVT_OH_CVR_ERASE                                    (PMDG_NGX_ID_OFFSET + 180)
#define EVT_OH_HYD_ENG1                                     (PMDG_NGX_ID_OFFSET + 165)
#define EVT_OH_HYD_ELEC2                                    (PMDG_NGX_ID_OFFSET + 167)
#define EVT_OH_HYD_ELEC1                                    (PMDG_NGX_ID_OFFSET + 168)
#define EVT_OH_HYD_ENG2                                     (PMDG_NGX_ID_OFFSET + 166)
#define EVT_OH_ICE_WINDOW_HEAT_1                            (PMDG_NGX_ID_OFFSET + 135)
#define EVT_OH_ICE_WINDOW_HEAT_2                            (PMDG_NGX_ID_OFFSET + 136)
#define EVT_OH_ICE_WINDOW_HEAT_3                            (PMDG_NGX_ID_OFFSET + 138)
#define EVT_OH_ICE_WINDOW_HEAT_4                            (PMDG_NGX_ID_OFFSET + 139)
#define EVT_OH_ICE_WINDOW_HEAT_TEST                         (PMDG_NGX_ID_OFFSET + 137)
#define EVT_OH_ICE_PROBE_HEAT_1                             (PMDG_NGX_ID_OFFSET + 140)
#define EVT_OH_ICE_PROBE_HEAT_2                             (PMDG_NGX_ID_OFFSET + 141)
#define EVT_OH_ICE_TAT_TEST                                 (PMDG_NGX_ID_OFFSET + 142)	// was used for "CAPT PITOT" annunciator light
#define EVT_OH_ICE_WING_ANTIICE                             (PMDG_NGX_ID_OFFSET + 156)
#define EVT_OH_ICE_ENGINE_ANTIICE_1                         (PMDG_NGX_ID_OFFSET + 157)
#define EVT_OH_ICE_ENGINE_ANTIICE_2                         (PMDG_NGX_ID_OFFSET + 158)
#define EVT_OH_AIRCOND_TEMP_SOURCE_SELECTOR                 (PMDG_NGX_ID_OFFSET + 187)
#define EVT_OH_AIRCOND_TEMP_SELECTOR_CONT                   (PMDG_NGX_ID_OFFSET + 191)
#define EVT_OH_AIRCOND_TEMP_SELECTOR_CABIN                  (PMDG_NGX_ID_OFFSET + 192)
#define EVT_OH_AIRCOND_TYPE_600_LAST                        EVT_OH_AIRCOND_TEMP_SELECTOR_CABIN
#define EVT_OH_AIRCOND_TEMP_SOURCE_SELECTOR_800             (PMDG_NGX_ID_OFFSET + 313)
#define EVT_OH_AIRCOND_TEMP_SELECTOR_CONT_800               (PMDG_NGX_ID_OFFSET + 305)
#define EVT_OH_AIRCOND_TEMP_SELECTOR_FWD_800                (PMDG_NGX_ID_OFFSET + 306)
#define EVT_OH_AIRCOND_TEMP_SELECTOR_AFT_800                (PMDG_NGX_ID_OFFSET + 307)
#define EVT_OH_AIRCOND_TRIM_AIR_SWITCH_800                  (PMDG_NGX_ID_OFFSET + 311)
#define EVT_OH_BLEED_RECIRC_FAN_L_SWITCH                    (PMDG_NGX_ID_OFFSET + 872)
#define EVT_OH_BLEED_RECIRC_FAN_R_SWITCH                    (PMDG_NGX_ID_OFFSET + 196)
#define EVT_OH_BLEED_OVHT_TEST_BUTTON                       (PMDG_NGX_ID_OFFSET + 199)
#define EVT_OH_BLEED_PACK_L_SWITCH                          (PMDG_NGX_ID_OFFSET + 200)
#define EVT_OH_BLEED_PACK_R_SWITCH                          (PMDG_NGX_ID_OFFSET + 201)
#define EVT_OH_BLEED_ISOLATION_VALVE_SWITCH                 (PMDG_NGX_ID_OFFSET + 202)
#define EVT_OH_BLEED_TRIP_RESET_BUTTON                      (PMDG_NGX_ID_OFFSET + 209)
#define EVT_OH_BLEED_ENG_1_SWITCH                           (PMDG_NGX_ID_OFFSET + 210)
#define EVT_OH_BLEED_APU_SWITCH                             (PMDG_NGX_ID_OFFSET + 211)
#define EVT_OH_BLEED_ENG_2_SWITCH                           (PMDG_NGX_ID_OFFSET + 212)
#define EVT_OH_PRESS_FLT_ALT_KNOB                           (PMDG_NGX_ID_OFFSET + 218)
#define EVT_OH_PRESS_LAND_ALT_KNOB                          (PMDG_NGX_ID_OFFSET + 220)
#define EVT_OH_PRESS_VALVE_SWITCH                           (PMDG_NGX_ID_OFFSET + 222)
#define EVT_OH_PRESS_SELECTOR                               (PMDG_NGX_ID_OFFSET + 223)
#define EVT_OH_CAB_ALT_HORN_CUTOUT_BUTTON                   (PMDG_NGX_ID_OFFSET + 183)
#define EVT_OH_LE_DEVICES_TEST_SWITCH                       (PMDG_NGX_ID_OFFSET + 224)
#define EVT_OH_SERVICE_INTERPHONE_SWITCH                    (PMDG_NGX_ID_OFFSET + 257)
#define EVT_OH_DOME_SWITCH                                  (PMDG_NGX_ID_OFFSET + 258)

#define EVT_ISDU_DSPL_SEL                                   (PMDG_NGX_ID_OFFSET + 229)	// ISDU DiSPLay SELector
#define EVT_ISDU_FIRST                                      EVT_ISDU_DSPL_SEL
#define EVT_ISDU_DSPL_SEL_BRT                               (PMDG_NGX_ID_OFFSET + 230)	// ISDU DiSPLay SELector BRT (Brightness)
#define EVT_ISDU_SYS_DSPL                                   (PMDG_NGX_ID_OFFSET + 231)	// ISDU SYS DSPL
#define EVT_ISDU_KBD_1                                      (PMDG_NGX_ID_OFFSET + 232)	// ISDU KEYBOARD 1
#define EVT_ISDU_KBD_2                                      (PMDG_NGX_ID_OFFSET + 233)	// ISDU KEYBOARD 2 or N
#define EVT_ISDU_KBD_3                                      (PMDG_NGX_ID_OFFSET + 234)	// ISDU KEYBOARD 3
#define EVT_ISDU_KBD_4                                      (PMDG_NGX_ID_OFFSET + 235)	// ISDU KEYBOARD 4 or W
#define EVT_ISDU_KBD_5                                      (PMDG_NGX_ID_OFFSET + 236)	// ISDU KEYBOARD 5 or H
#define EVT_ISDU_KBD_6                                      (PMDG_NGX_ID_OFFSET + 237)	// ISDU KEYBOARD 6 or E
#define EVT_ISDU_KBD_7                                      (PMDG_NGX_ID_OFFSET + 238)	// ISDU KEYBOARD 7
#define EVT_ISDU_KBD_8                                      (PMDG_NGX_ID_OFFSET + 239)	// ISDU KEYBOARD 8 or S
#define EVT_ISDU_KBD_9                                      (PMDG_NGX_ID_OFFSET + 240)	// ISDU KEYBOARD 9
#define EVT_ISDU_KBD_ENT                                    (PMDG_NGX_ID_OFFSET + 241)	// ISDU KEYBOARD ENTer
#define EVT_ISDU_KBD_0                                      (PMDG_NGX_ID_OFFSET + 243)	// ISDU KEYBOARD 0
#define EVT_ISDU_KBD_CLR                                    (PMDG_NGX_ID_OFFSET + 244)	// ISDU KEYBOARD CLR

#define EVT_IRU_MSU_LEFT                                    (PMDG_NGX_ID_OFFSET + 255)	// LEFT IRS Mode Selector Unit
#define EVT_IRU_MSU_RIGHT                                   (PMDG_NGX_ID_OFFSET + 256)	// RIGHT IRS Mode Selector Unit

#define EVT_ISDU_LAST                                       EVT_IRU_MSU_RIGHT

#define EVT_WLAN_SWITCH                                     (PMDG_NGX_ID_OFFSET + 888)
#define EVT_WLAN_GUARD                                      (PMDG_NGX_ID_OFFSET + 889)

#define EVT_OH_EEC_L_GUARD                                  (PMDG_NGX_ID_OFFSET + 267)
#define EVT_OH_EEC_L_SWITCH                                 (PMDG_NGX_ID_OFFSET + 268)
#define EVT_OH_EEC_R_GUARD                                  (PMDG_NGX_ID_OFFSET + 270)
#define EVT_OH_EEC_R_SWITCH                                 (PMDG_NGX_ID_OFFSET + 271)
#define EVT_OH_OXY_PASS_SWITCH                              (PMDG_NGX_ID_OFFSET + 264)
#define EVT_OH_OXY_PASS_GUARD                               (PMDG_NGX_ID_OFFSET + 265)
#define EVT_OH_OXY_TEST_RESET_SWITCH_L                      (PMDG_NGX_ID_OFFSET + 983)
#define EVT_OH_OXY_TEST_RESET_SWITCH_R                      (PMDG_NGX_ID_OFFSET + 9832)
#define EVT_OH_OXY_RED_BUTTON_L                             (PMDG_NGX_ID_OFFSET + 9831)
#define EVT_OH_OXY_RED_BUTTON_R                             (PMDG_NGX_ID_OFFSET + 9833)
#define EVT_OH_FLTREC_SWITCH                                (PMDG_NGX_ID_OFFSET + 298)
#define EVT_OH_FLTREC_GUARD                                 (PMDG_NGX_ID_OFFSET + 299)
#define EVT_OH_WARNING_TEST_MACH_IAS_1_PUSH                 (PMDG_NGX_ID_OFFSET + 301)
#define EVT_OH_WARNING_TEST_MACH_IAS_2_PUSH                 (PMDG_NGX_ID_OFFSET + 302)
#define EVT_OH_WARNING_TEST_STALL_1_PUSH                    (PMDG_NGX_ID_OFFSET + 303)
#define EVT_OH_WARNING_TEST_STALL_2_PUSH                    (PMDG_NGX_ID_OFFSET + 304)
#define EVT_OH_TRIM_AIR_SWITCH_TOGGLE                       (PMDG_NGX_ID_OFFSET + 15200)	// user clicks a switch
#define EVT_OH_WING_BODY_OVERHEAT_TEST_PUSH                 (PMDG_NGX_ID_OFFSET + 15201)	// user pushes a pushbutton

#define EVT_ISFD_APP                                        (PMDG_NGX_ID_OFFSET + 987)
#define EVT_ISFD_HP_IN                                      (PMDG_NGX_ID_OFFSET + 986)
#define EVT_ISFD_PLUS                                       (PMDG_NGX_ID_OFFSET + 988)
#define EVT_ISFD_MINUS                                      (PMDG_NGX_ID_OFFSET + 989)
#define EVT_ISFD_ATT_RST                                    (PMDG_NGX_ID_OFFSET + 990)
#define EVT_ISFD_BARO                                       (PMDG_NGX_ID_OFFSET + 991)
#define EVT_ISFD_BARO_PUSH                                  (PMDG_NGX_ID_OFFSET + 993)

#define EVT_STANDBY_ADI_APPR_MODE                           (PMDG_NGX_ID_OFFSET + 474)
#define EVT_STANDBY_ADI_CAGE_KNOB                           (PMDG_NGX_ID_OFFSET + 476)
#define EVT_STANDBY_ALT_BARO_KNOB                           (PMDG_NGX_ID_OFFSET + 492)

#define EVT_RMI_LEFT_SELECTOR                               (PMDG_NGX_ID_OFFSET + 497)
#define EVT_RMI_RIGHT_SELECTOR                              (PMDG_NGX_ID_OFFSET + 498)

#define EVT_MCP_COURSE_SELECTOR_L                           (PMDG_NGX_ID_OFFSET + 376)
#define EVT_MCP_FD_SWITCH_L                                 (PMDG_NGX_ID_OFFSET + 378)
#define EVT_MCP_AT_ARM_SWITCH                               (PMDG_NGX_ID_OFFSET + 380)
#define EVT_MCP_N1_SWITCH                                   (PMDG_NGX_ID_OFFSET + 381)
#define EVT_MCP_SPEED_SWITCH                                (PMDG_NGX_ID_OFFSET + 382)
#define EVT_MCP_CO_SWITCH                                   (PMDG_NGX_ID_OFFSET + 383)
#define EVT_MCP_SPEED_SELECTOR                              (PMDG_NGX_ID_OFFSET + 384)
#define EVT_MCP_VNAV_SWITCH                                 (PMDG_NGX_ID_OFFSET + 386)
#define EVT_MCP_SPD_INTV_SWITCH                             (PMDG_NGX_ID_OFFSET + 387)
#define EVT_MCP_BANK_ANGLE_SELECTOR                         (PMDG_NGX_ID_OFFSET + 389)
#define EVT_MCP_HEADING_SELECTOR                            (PMDG_NGX_ID_OFFSET + 390)
#define EVT_MCP_LVL_CHG_SWITCH                              (PMDG_NGX_ID_OFFSET + 391)
#define EVT_MCP_HDG_SEL_SWITCH                              (PMDG_NGX_ID_OFFSET + 392)
#define EVT_MCP_APP_SWITCH                                  (PMDG_NGX_ID_OFFSET + 393)
#define EVT_MCP_ALT_HOLD_SWITCH                             (PMDG_NGX_ID_OFFSET + 394)
#define EVT_MCP_VS_SWITCH                                   (PMDG_NGX_ID_OFFSET + 395)
#define EVT_MCP_VOR_LOC_SWITCH                              (PMDG_NGX_ID_OFFSET + 396)
#define EVT_MCP_LNAV_SWITCH                                 (PMDG_NGX_ID_OFFSET + 397)
#define EVT_MCP_ALTITUDE_SELECTOR                           (PMDG_NGX_ID_OFFSET + 400)
#define EVT_MCP_VS_SELECTOR                                 (PMDG_NGX_ID_OFFSET + 401)
#define EVT_MCP_CMD_A_SWITCH                                (PMDG_NGX_ID_OFFSET + 402)
#define EVT_MCP_CMD_B_SWITCH                                (PMDG_NGX_ID_OFFSET + 403)
#define EVT_MCP_CWS_A_SWITCH                                (PMDG_NGX_ID_OFFSET + 404)
#define EVT_MCP_CWS_B_SWITCH                                (PMDG_NGX_ID_OFFSET + 405)
#define EVT_MCP_DISENGAGE_BAR                               (PMDG_NGX_ID_OFFSET + 406)
#define EVT_MCP_FD_SWITCH_R                                 (PMDG_NGX_ID_OFFSET + 407)
#define EVT_MCP_COURSE_SELECTOR_R                           (PMDG_NGX_ID_OFFSET + 409)
#define EVT_MCP_ALT_INTV_SWITCH                             (PMDG_NGX_ID_OFFSET + 885)

#define EVT_EFIS_CPT_MINIMUMS                               (PMDG_NGX_ID_OFFSET + 355)
#define EVT_EFIS_CPT_FIRST                                  EVT_EFIS_CPT_MINIMUMS
#define EVT_EFIS_CPT_MINIMUMS_RADIO_BARO                    (PMDG_NGX_ID_OFFSET + 356)
#define EVT_EFIS_CPT_MINIMUMS_RST                           (PMDG_NGX_ID_OFFSET + 357)
#define EVT_EFIS_CPT_VOR_ADF_SELECTOR_L                     (PMDG_NGX_ID_OFFSET + 358)
#define EVT_EFIS_CPT_MODE                                   (PMDG_NGX_ID_OFFSET + 359)
#define EVT_EFIS_CPT_MODE_CTR                               (PMDG_NGX_ID_OFFSET + 360)
#define EVT_EFIS_CPT_RANGE                                  (PMDG_NGX_ID_OFFSET + 361)
#define EVT_EFIS_CPT_RANGE_TFC                              (PMDG_NGX_ID_OFFSET + 362)
#define EVT_EFIS_CPT_FPV                                    (PMDG_NGX_ID_OFFSET + 363)
#define EVT_EFIS_CPT_MTRS                                   (PMDG_NGX_ID_OFFSET + 364)
#define EVT_EFIS_CPT_BARO                                   (PMDG_NGX_ID_OFFSET + 365)
#define EVT_EFIS_CPT_BARO_IN_HPA                            (PMDG_NGX_ID_OFFSET + 366)
#define EVT_EFIS_CPT_BARO_STD                               (PMDG_NGX_ID_OFFSET + 367)
#define EVT_EFIS_CPT_VOR_ADF_SELECTOR_R                     (PMDG_NGX_ID_OFFSET + 368)
#define EVT_EFIS_CPT_WXR                                    (PMDG_NGX_ID_OFFSET + 369)
#define EVT_EFIS_CPT_STA                                    (PMDG_NGX_ID_OFFSET + 370)
#define EVT_EFIS_CPT_WPT                                    (PMDG_NGX_ID_OFFSET + 371)
#define EVT_EFIS_CPT_ARPT                                   (PMDG_NGX_ID_OFFSET + 372)
#define EVT_EFIS_CPT_DATA                                   (PMDG_NGX_ID_OFFSET + 373)
#define EVT_EFIS_CPT_POS                                    (PMDG_NGX_ID_OFFSET + 374)
#define EVT_EFIS_CPT_TERR                                   (PMDG_NGX_ID_OFFSET + 375)
#define EVT_EFIS_CPT_LAST                                   EVT_EFIS_CPT_TERR
#define EVT_EFIS_FO_MINIMUMS                                (PMDG_NGX_ID_OFFSET + 411)
#define EVT_EFIS_FO_FIRST                                   EVT_EFIS_FO_MINIMUMS
#define EVT_EFIS_FO_MINIMUMS_RADIO_BARO                     (PMDG_NGX_ID_OFFSET + 412)
#define EVT_EFIS_FO_MINIMUMS_RST                            (PMDG_NGX_ID_OFFSET + 413)
#define EVT_EFIS_FO_VOR_ADF_SELECTOR_L                      (PMDG_NGX_ID_OFFSET + 414)
#define EVT_EFIS_FO_MODE                                    (PMDG_NGX_ID_OFFSET + 415)
#define EVT_EFIS_FO_MODE_CTR                                (PMDG_NGX_ID_OFFSET + 416)
#define EVT_EFIS_FO_RANGE                                   (PMDG_NGX_ID_OFFSET + 417)
#define EVT_EFIS_FO_RANGE_TFC                               (PMDG_NGX_ID_OFFSET + 418)
#define EVT_EFIS_FO_FPV                                     (PMDG_NGX_ID_OFFSET + 419)
#define EVT_EFIS_FO_MTRS                                    (PMDG_NGX_ID_OFFSET + 420)
#define EVT_EFIS_FO_BARO                                    (PMDG_NGX_ID_OFFSET + 421)
#define EVT_EFIS_FO_BARO_IN_HPA                             (PMDG_NGX_ID_OFFSET + 422)
#define EVT_EFIS_FO_BARO_STD                                (PMDG_NGX_ID_OFFSET + 423)
#define EVT_EFIS_FO_VOR_ADF_SELECTOR_R                      (PMDG_NGX_ID_OFFSET + 424)
#define EVT_EFIS_FO_WXR                                     (PMDG_NGX_ID_OFFSET + 425)
#define EVT_EFIS_FO_STA                                     (PMDG_NGX_ID_OFFSET + 426)
#define EVT_EFIS_FO_WPT                                     (PMDG_NGX_ID_OFFSET + 427)
#define EVT_EFIS_FO_ARPT                                    (PMDG_NGX_ID_OFFSET + 428)
#define EVT_EFIS_FO_DATA                                    (PMDG_NGX_ID_OFFSET + 429)
#define EVT_EFIS_FO_POS                                     (PMDG_NGX_ID_OFFSET + 430)
#define EVT_EFIS_FO_TERR                                    (PMDG_NGX_ID_OFFSET + 431)
#define EVT_EFIS_FO_LAST                                    EVT_EFIS_FO_TERR

#define EVT_DSP_CPT_BELOW_GS_INHIBIT_SWITCH                 (PMDG_NGX_ID_OFFSET + 327)	// CAPT Side BELOW GS INHIBIT Pushbutton
#define EVT_DSP_CPT_MAIN_DU_SELECTOR                        (PMDG_NGX_ID_OFFSET + 335)	// CAPT side MAIN PANEL DISPLAY UNITS (MAIN PANEL DUs) Selector
#define EVT_DSP_CPT_LOWER_DU_SELECTOR                       (PMDG_NGX_ID_OFFSET + 336)	// CAPT side LOWER DISPLAY UNIT (LOWER DU) Selector
#define EVT_DSP_CPT_DISENGAGE_TEST_SWITCH                   (PMDG_NGX_ID_OFFSET + 342)	// CAPT side DISENGAGE LIGHTS TEST switch
#define EVT_DSP_CPT_AP_RESET_SWITCH                         (PMDG_NGX_ID_OFFSET + 339)	// CAPT Side AP RESET Pushbutton
#define EVT_DSP_CPT_AT_RESET_SWITCH                         (PMDG_NGX_ID_OFFSET + 340)	// CAPT Side AT RESET Pushbutton
#define EVT_DSP_CPT_FMC_RESET_SWITCH                        (PMDG_NGX_ID_OFFSET + 341)	// CAPT Side FMC RESET Pushbutton
#define EVT_DSP_CPT_MASTER_LIGHTS_SWITCH                    (PMDG_NGX_ID_OFFSET + 346)	// MASTER LIGHTS & TEST switch
#define EVT_DSP_CPT_LAST                                    EVT_DSP_CPT_MASTER_LIGHTS_SWITCH	// Keep this the last of CAPT side DSP panel items and before the F/O DSP panel items start
#define EVT_DSP_FO_MAIN_DU_SELECTOR                         (PMDG_NGX_ID_OFFSET + 440)	// FO side MAIN PANEL DISPLAY UNITS (MAIN PANEL DUs) Selector
#define EVT_DSP_FO_LOWER_DU_SELECTOR                        (PMDG_NGX_ID_OFFSET + 441)	// FO side LOWER DISPLAY UNIT (LOWER DU) Selector
#define EVT_DSP_FO_DISENGAGE_TEST_SWITCH                    (PMDG_NGX_ID_OFFSET + 442)	// FO side DISENGAGE LIGHTS TEST switch
#define EVT_DSP_FO_FMC_RESET_SWITCH                         (PMDG_NGX_ID_OFFSET + 443)	// FO Side FMC RESET Pushbutton
#define EVT_DSP_FO_AT_RESET_SWITCH                          (PMDG_NGX_ID_OFFSET + 444)	// FO Side AT RESET Pushbutton
#define EVT_DSP_FO_AP_RESET_SWITCH                          (PMDG_NGX_ID_OFFSET + 445)	// FO Side AP RESET Pushbutton
#define EVT_DSP_FO_BELOW_GS_INHIBIT_SWITCH                  (PMDG_NGX_ID_OFFSET + 446)	// FO Side BELOW GS INHIBIT Pushbutton

#define EVT_MPM_AUTOBRAKE_SELECTOR                          (PMDG_NGX_ID_OFFSET + 460)
#define EVT_MPM_MFD_SYS_BUTTON                              (PMDG_NGX_ID_OFFSET + 462)
#define EVT_MPM_MFD_ENG_BUTTON                              (PMDG_NGX_ID_OFFSET + 463)
#define EVT_MPM_MFD_C_R_BUTTON                              (PMDG_NGX_ID_OFFSET + 4621)
#define EVT_MPM_SPEED_REFERENCE_SELECTOR                    (PMDG_NGX_ID_OFFSET + 464)
#define EVT_MPM_SPEED_REFERENCE_CONTROL                     (PMDG_NGX_ID_OFFSET + 465)
#define EVT_MPM_N1SET_SELECTOR                              (PMDG_NGX_ID_OFFSET + 466)
#define EVT_MPM_N1SET_CONTROL                               (PMDG_NGX_ID_OFFSET + 467)
#define EVT_MPM_FUEL_FLOW_SWITCH                            (PMDG_NGX_ID_OFFSET + 468)

#define EVT_GEAR_LEVER                                      (PMDG_NGX_ID_OFFSET + 455)
#define EVT_GEAR_LEVER_OFF                                  (PMDG_NGX_ID_OFFSET + 4551)
#define EVT_GEAR_LEVER_UNLOCK                               (PMDG_NGX_ID_OFFSET + 4552)

#define EVT_NOSE_WHEEL_STEERING_SWITCH                      (PMDG_NGX_ID_OFFSET + 325)
#define EVT_NOSE_WHEEL_STEERING_SWITCH_GUARD                (PMDG_NGX_ID_OFFSET + 326)

#define EVT_TILLER                                          (PMDG_NGX_ID_OFFSET + 975)

#define EVT_FIRE_WARN_LIGHT_LEFT                            (PMDG_NGX_ID_OFFSET + 347)	// 347 - Master Fire Warning (FIRE WARN) Light Left Switch Toggle

#define EVT_MASTER_CAUTION_LIGHT_LEFT                       (PMDG_NGX_ID_OFFSET + 348)	// 348 - MASTER CAUTION Light Left Switch Toggle

#define EVT_FIRE_WARN_LIGHT_RIGHT                           (PMDG_NGX_ID_OFFSET + 439)

#define EVT_MASTER_CAUTION_LIGHT_RIGHT                      (PMDG_NGX_ID_OFFSET + 438)

#define EVT_SYSTEM_ANNUNCIATOR_PANEL_LEFT                   (PMDG_NGX_ID_OFFSET + 349)
#define EVT_SYSTEM_ANNUNCIATOR_PANEL_RIGHT                  (PMDG_NGX_ID_OFFSET + 437)

#define EVT_LWRMAIN_CAPT_MAIN_PANEL_BRT                     (PMDG_NGX_ID_OFFSET + 328)
#define EVT_LWRMAIN_CAPT_OUTBD_DU_BRT                       (PMDG_NGX_ID_OFFSET + 329)
#define EVT_LWRMAIN_CAPT_INBD_DU_BRT                        (PMDG_NGX_ID_OFFSET + 330)
#define EVT_LWRMAIN_CAPT_INBD_DU_INNER_BRT                  (PMDG_NGX_ID_OFFSET + 331)
#define EVT_LWRMAIN_CAPT_LOWER_DU_BRT                       (PMDG_NGX_ID_OFFSET + 332)
#define EVT_LWRMAIN_CAPT_LOWER_DU_INNER_BRT                 (PMDG_NGX_ID_OFFSET + 333)
#define EVT_LWRMAIN_CAPT_UPPER_DU_BRT                       (PMDG_NGX_ID_OFFSET + 334)
#define EVT_LWRMAIN_CAPT_BACKGROUND_BRT                     (PMDG_NGX_ID_OFFSET + 337)
#define EVT_LWRMAIN_CAPT_AFDS_BRT                           (PMDG_NGX_ID_OFFSET + 338)
#define EVT_LWRMAIN_FO_INBD_DU_BRT                          (PMDG_NGX_ID_OFFSET + 507)
#define EVT_LWRMAIN_FO_INBD_DU_INNER_BRT                    (PMDG_NGX_ID_OFFSET + 508)
#define EVT_LWRMAIN_FO_MAIN_PANEL_BRT                       (PMDG_NGX_ID_OFFSET + 510)
#define EVT_LWRMAIN_FO_OUTBD_DU_BRT                         (PMDG_NGX_ID_OFFSET + 509)

#define EVT_GPWS_SYS_TEST_BTN                               (PMDG_NGX_ID_OFFSET + 500)
#define EVT_GPWS_FLAP_INHIBIT_SWITCH                        (PMDG_NGX_ID_OFFSET + 501)
#define EVT_GPWS_FLAP_INHIBIT_GUARD                         (PMDG_NGX_ID_OFFSET + 502)
#define EVT_GPWS_GEAR_INHIBIT_SWITCH                        (PMDG_NGX_ID_OFFSET + 503)
#define EVT_GPWS_GEAR_INHIBIT_GUARD                         (PMDG_NGX_ID_OFFSET + 504)
#define EVT_GPWS_TERR_INHIBIT_SWITCH                        (PMDG_NGX_ID_OFFSET + 505)
#define EVT_GPWS_TERR_INHIBIT_GUARD                         (PMDG_NGX_ID_OFFSET + 506)

#define EVT_CHRONO_L_CHR                                    (PMDG_NGX_ID_OFFSET + 314)
#define EVT_CHRONO_L_TIME_DATE                              (PMDG_NGX_ID_OFFSET + 315)
#define EVT_CHRONO_L_SET                                    (PMDG_NGX_ID_OFFSET + 316)
#define EVT_CHRONO_L_PLUS                                   (PMDG_NGX_ID_OFFSET + 317)
#define EVT_CHRONO_L_MINUS                                  (PMDG_NGX_ID_OFFSET + 318)
#define EVT_CHRONO_L_RESET                                  (PMDG_NGX_ID_OFFSET + 320)
#define EVT_CHRONO_L_ET                                     (PMDG_NGX_ID_OFFSET + 321)
#define EVT_CHRONO_R_CHR                                    (PMDG_NGX_ID_OFFSET + 523)
#define EVT_CHRONO_R_TIME_DATE                              (PMDG_NGX_ID_OFFSET + 524)
#define EVT_CHRONO_R_SET                                    (PMDG_NGX_ID_OFFSET + 525)
#define EVT_CHRONO_R_PLUS                                   (PMDG_NGX_ID_OFFSET + 526)
#define EVT_CHRONO_R_MINUS                                  (PMDG_NGX_ID_OFFSET + 527)
#define EVT_CHRONO_R_RESET                                  (PMDG_NGX_ID_OFFSET + 529)
#define EVT_CHRONO_R_ET                                     (PMDG_NGX_ID_OFFSET + 530)

#define EVT_CLOCK_L                                         (PMDG_NGX_ID_OFFSET + 890)
#define EVT_CLOCK_R                                         (PMDG_NGX_ID_OFFSET + 893)

#define EVT_CONTROL_STAND_TRIM_WHEEL                        (PMDG_NGX_ID_OFFSET + 678)
#define EVT_CONTROL_STAND_SPEED_BRAKE_LEVER                 (PMDG_NGX_ID_OFFSET + 679)
#define EVT_CONTROL_STAND_SPEED_BRAKE_LEVER_DOWN            (PMDG_NGX_ID_OFFSET + 6791)
#define EVT_CONTROL_STAND_SPEED_BRAKE_LEVER_ARM             (PMDG_NGX_ID_OFFSET + 6792)
#define EVT_CONTROL_STAND_SPEED_BRAKE_LEVER_50PCT           (PMDG_NGX_ID_OFFSET + 6793)
#define EVT_CONTROL_STAND_SPEED_BRAKE_LEVER_FLT_DET         (PMDG_NGX_ID_OFFSET + 6794)
#define EVT_CONTROL_STAND_SPEED_BRAKE_LEVER_UP              (PMDG_NGX_ID_OFFSET + 6795)
#define EVT_CONTROL_STAND_REV_THRUST1_LEVER                 (PMDG_NGX_ID_OFFSET + 680)
#define EVT_CONTROL_STAND_REV_THRUST2_LEVER                 (PMDG_NGX_ID_OFFSET + 681)
#define EVT_CONTROL_STAND_FWD_THRUST1_LEVER                 (PMDG_NGX_ID_OFFSET + 683)
#define EVT_CONTROL_STAND_FWD_THRUST2_LEVER                 (PMDG_NGX_ID_OFFSET + 686)
#define EVT_CONTROL_STAND_TOGA1_SWITCH                      (PMDG_NGX_ID_OFFSET + 684)
#define EVT_CONTROL_STAND_TOGA2_SWITCH                      (PMDG_NGX_ID_OFFSET + 687)
#define EVT_CONTROL_STAND_AT1_DISENGAGE_SWITCH              (PMDG_NGX_ID_OFFSET + 682)
#define EVT_CONTROL_STAND_AT2_DISENGAGE_SWITCH              (PMDG_NGX_ID_OFFSET + 685)
#define EVT_CONTROL_STAND_ENG1_START_LEVER                  (PMDG_NGX_ID_OFFSET + 688)
#define EVT_CONTROL_STAND_ENG2_START_LEVER                  (PMDG_NGX_ID_OFFSET + 689)
#define EVT_CONTROL_STAND_PARK_BRAKE_LEVER                  (PMDG_NGX_ID_OFFSET + 693)
#define EVT_CONTROL_STAND_STABTRIM_ELEC_SWITCH              (PMDG_NGX_ID_OFFSET + 709)
#define EVT_CONTROL_STAND_STABTRIM_ELEC_SWITCH_GUARD        (PMDG_NGX_ID_OFFSET + 710)
#define EVT_CONTROL_STAND_STABTRIM_AP_SWITCH                (PMDG_NGX_ID_OFFSET + 711)
#define EVT_CONTROL_STAND_STABTRIM_AP_SWITCH_GUARD          (PMDG_NGX_ID_OFFSET + 712)
#define EVT_CONTROL_STAND_HORN_CUTOUT_SWITCH                (PMDG_NGX_ID_OFFSET + 713)
#define EVT_CONTROL_STAND_FLAPS_LEVER                       (PMDG_NGX_ID_OFFSET + 714)
#define EVT_CONTROL_STAND_FLAPS_LEVER_0                     (PMDG_NGX_ID_OFFSET + 7141)
#define EVT_CONTROL_STAND_FLAPS_LEVER_1                     (PMDG_NGX_ID_OFFSET + 7142)
#define EVT_CONTROL_STAND_FLAPS_LEVER_2                     (PMDG_NGX_ID_OFFSET + 7143)
#define EVT_CONTROL_STAND_FLAPS_LEVER_5                     (PMDG_NGX_ID_OFFSET + 7144)
#define EVT_CONTROL_STAND_FLAPS_LEVER_10                    (PMDG_NGX_ID_OFFSET + 7145)
#define EVT_CONTROL_STAND_FLAPS_LEVER_15                    (PMDG_NGX_ID_OFFSET + 7146)
#define EVT_CONTROL_STAND_FLAPS_LEVER_25                    (PMDG_NGX_ID_OFFSET + 7147)
#define EVT_CONTROL_STAND_FLAPS_LEVER_30                    (PMDG_NGX_ID_OFFSET + 7148)
#define EVT_CONTROL_STAND_FLAPS_LEVER_40                    (PMDG_NGX_ID_OFFSET + 7149)

#define EVT_FLT_DK_DOOR_KNOB                                (PMDG_NGX_ID_OFFSET + 834)

#define EVT_STAB_TRIM_OVRD_SWITCH_GUARD                     (PMDG_NGX_ID_OFFSET + 830)
#define EVT_STAB_TRIM_OVRD_SWITCH                           (PMDG_NGX_ID_OFFSET + 831)

#define EVT_NAV1_TRANSFER_SWITCH                            (PMDG_NGX_ID_OFFSET + 729)
#define EVT_NAV1_FIRST                                      EVT_NAV1_TRANSFER_SWITCH
#define EVT_NAV1_TEST_SWICTH                                (PMDG_NGX_ID_OFFSET + 731)
#define EVT_NAV1_INNER_SELECTOR                             (PMDG_NGX_ID_OFFSET + 732)
#define EVT_NAV1_OUTER_SELECTOR                             (PMDG_NGX_ID_OFFSET + 733)
#define EVT_NAV1_LAST                                       EVT_NAV1_OUTER_SELECTOR

#define EVT_NAV2_TRANSFER_SWITCH                            (PMDG_NGX_ID_OFFSET + 845)
#define EVT_NAV2_FIRST                                      EVT_NAV2_TRANSFER_SWITCH
#define EVT_NAV2_TEST_SWICTH                                (PMDG_NGX_ID_OFFSET + 847)
#define EVT_NAV2_OUTER_SELECTOR                             (PMDG_NGX_ID_OFFSET + 848)
#define EVT_NAV2_INNER_SELECTOR                             (PMDG_NGX_ID_OFFSET + 849)
#define EVT_NAV2_LAST                                       EVT_NAV2_INNER_SELECTOR

#define EVT_ADF_MODE_SELECTOR                               (PMDG_NGX_ID_OFFSET + 818)
#define EVT_ADF_TONE_SWITCH                                 (PMDG_NGX_ID_OFFSET + 820)
#define EVT_ADF_INNER_SELECTOR                              (PMDG_NGX_ID_OFFSET + 822)
#define EVT_ADF_MIDDLE_SELECTOR                             (PMDG_NGX_ID_OFFSET + 823)
#define EVT_ADF_OUTER_SELECTOR                              (PMDG_NGX_ID_OFFSET + 824)
#define EVT_ADF_TRANSFER_SWITCH                             (PMDG_NGX_ID_OFFSET + 827)

#define EVT_SELCAL_VHF1_SWITCH                              (PMDG_NGX_ID_OFFSET + 812)
#define EVT_SELCAL_VHF2_SWITCH                              (PMDG_NGX_ID_OFFSET + 813)
#define EVT_SELCAL_VHF3_SWITCH                              (PMDG_NGX_ID_OFFSET + 814)
#define EVT_SELCAL_HF1_SWITCH                               (PMDG_NGX_ID_OFFSET + 937)
#define EVT_SELCAL_HF2_SWITCH                               (PMDG_NGX_ID_OFFSET + 938)

#define EVT_COM1_TRANSFER_SWITCH                            (PMDG_NGX_ID_OFFSET + 721)
#define EVT_COM1_START_RANGE1                               EVT_COM1_TRANSFER_SWITCH
#define EVT_COM1_HF_SENSOR_KNOB                             (PMDG_NGX_ID_OFFSET + 724)
#define EVT_COM1_TEST_SWICTH                                (PMDG_NGX_ID_OFFSET + 725)
#define EVT_COM1_OUTER_SELECTOR                             (PMDG_NGX_ID_OFFSET + 726)
#define EVT_COM1_INNER_SELECTOR                             (PMDG_NGX_ID_OFFSET + 727)
#define EVT_COM1_END_RANGE1                                 EVT_COM1_INNER_SELECTOR
#define EVT_COM1_PNL_OFF_SWITCH                             (PMDG_NGX_ID_OFFSET + 903)
#define EVT_COM1_START_RANGE2                               EVT_COM1_PNL_OFF_SWITCH
#define EVT_COM1_VHF1_SWITCH                                (PMDG_NGX_ID_OFFSET + 904)
#define EVT_COM1_VHF2_SWITCH                                (PMDG_NGX_ID_OFFSET + 906)
#define EVT_COM1_VHF3_SWITCH                                (PMDG_NGX_ID_OFFSET + 908)
#define EVT_COM1_HF1_SWITCH                                 (PMDG_NGX_ID_OFFSET + 910)
#define EVT_COM1_AM_SWITCH                                  (PMDG_NGX_ID_OFFSET + 912)
#define EVT_COM1_HF2_SWITCH                                 (PMDG_NGX_ID_OFFSET + 914)
#define EVT_COM1_END_RANGE2                                 EVT_COM1_HF2_SWITCH

#define EVT_COM2_TRANSFER_SWITCH                            (PMDG_NGX_ID_OFFSET + 837)
#define EVT_COM2_START_RANGE1                               EVT_COM2_TRANSFER_SWITCH
#define EVT_COM2_HF_SENSOR_KNOB                             (PMDG_NGX_ID_OFFSET + 840)
#define EVT_COM2_TEST_SWICTH                                (PMDG_NGX_ID_OFFSET + 841)
#define EVT_COM2_OUTER_SELECTOR                             (PMDG_NGX_ID_OFFSET + 842)
#define EVT_COM2_INNER_SELECTOR                             (PMDG_NGX_ID_OFFSET + 843)
#define EVT_COM2_END_RANGE1                                 EVT_COM2_INNER_SELECTOR
#define EVT_COM2_PNL_OFF_SWITCH                             (PMDG_NGX_ID_OFFSET + 924)
#define EVT_COM2_START_RANGE2                               EVT_COM2_PNL_OFF_SWITCH
#define EVT_COM2_VHF1_SWITCH                                (PMDG_NGX_ID_OFFSET + 925)
#define EVT_COM2_VHF2_SWITCH                                (PMDG_NGX_ID_OFFSET + 927)
#define EVT_COM2_VHF3_SWITCH                                (PMDG_NGX_ID_OFFSET + 929)
#define EVT_COM2_HF1_SWITCH                                 (PMDG_NGX_ID_OFFSET + 931)
#define EVT_COM2_AM_SWITCH                                  (PMDG_NGX_ID_OFFSET + 933)
#define EVT_COM2_HF2_SWITCH                                 (PMDG_NGX_ID_OFFSET + 935)
#define EVT_COM2_END_RANGE2                                 EVT_COM2_HF2_SWITCH

#define EVT_COM3_TRANSFER_SWITCH                            (PMDG_NGX_ID_OFFSET + 946)
#define EVT_COM3_START_RANGE1                               EVT_COM3_TRANSFER_SWITCH
#define EVT_COM3_HF_SENSOR_KNOB                             (PMDG_NGX_ID_OFFSET + 949)
#define EVT_COM3_TEST_SWICTH                                (PMDG_NGX_ID_OFFSET + 950)
#define EVT_COM3_OUTER_SELECTOR                             (PMDG_NGX_ID_OFFSET + 951)
#define EVT_COM3_INNER_SELECTOR                             (PMDG_NGX_ID_OFFSET + 952)
#define EVT_COM3_END_RANGE1                                 EVT_COM3_INNER_SELECTOR
#define EVT_COM3_PNL_OFF_SWITCH                             (PMDG_NGX_ID_OFFSET + 953)
#define EVT_COM3_START_RANGE2                               EVT_COM3_PNL_OFF_SWITCH
#define EVT_COM3_VHF1_SWITCH                                (PMDG_NGX_ID_OFFSET + 954)
#define EVT_COM3_VHF2_SWITCH                                (PMDG_NGX_ID_OFFSET + 956)
#define EVT_COM3_VHF3_SWITCH                                (PMDG_NGX_ID_OFFSET + 958)
#define EVT_COM3_HF1_SWITCH                                 (PMDG_NGX_ID_OFFSET + 960)
#define EVT_COM3_AM_SWITCH                                  (PMDG_NGX_ID_OFFSET + 962)
#define EVT_COM3_HF2_SWITCH                                 (PMDG_NGX_ID_OFFSET + 964)
#define EVT_COM3_END_RANGE2                                 EVT_COM3_HF2_SWITCH

#define EVT_ACP_CAPT_MIC_VHF1                               (PMDG_NGX_ID_OFFSET + 734)
#define EVT_ACP_CAPT_MIC_VHF2                               (PMDG_NGX_ID_OFFSET + 735)
#define EVT_ACP_CAPT_MIC_VHF3                               (PMDG_NGX_ID_OFFSET + 877)	// out of order
#define EVT_ACP_CAPT_MIC_HF1                                (PMDG_NGX_ID_OFFSET + 878)	// out of order
#define EVT_ACP_CAPT_MIC_HF2                                (PMDG_NGX_ID_OFFSET + 879)	// out of order
#define EVT_ACP_CAPT_MIC_FLT                                (PMDG_NGX_ID_OFFSET + 736)
#define EVT_ACP_CAPT_MIC_SVC                                (PMDG_NGX_ID_OFFSET + 737)
#define EVT_ACP_CAPT_MIC_PA                                 (PMDG_NGX_ID_OFFSET + 738)
#define EVT_ACP_CAPT_REC_VHF1                               (PMDG_NGX_ID_OFFSET + 739)
#define EVT_ACP_CAPT_REC_VHF2                               (PMDG_NGX_ID_OFFSET + 740)
#define EVT_ACP_CAPT_REC_VHF3                               (PMDG_NGX_ID_OFFSET + 741)
#define EVT_ACP_CAPT_REC_HF1                                (PMDG_NGX_ID_OFFSET + 742)
#define EVT_ACP_CAPT_REC_HF2                                (PMDG_NGX_ID_OFFSET + 880)	// out of order
#define EVT_ACP_CAPT_REC_FLT                                (PMDG_NGX_ID_OFFSET + 743)
#define EVT_ACP_CAPT_REC_SVC                                (PMDG_NGX_ID_OFFSET + 744)
#define EVT_ACP_CAPT_REC_PA                                 (PMDG_NGX_ID_OFFSET + 745)
#define EVT_ACP_CAPT_REC_NAV1                               (PMDG_NGX_ID_OFFSET + 746)
#define EVT_ACP_CAPT_REC_NAV2                               (PMDG_NGX_ID_OFFSET + 747)
#define EVT_ACP_CAPT_REC_ADF1                               (PMDG_NGX_ID_OFFSET + 748)
#define EVT_ACP_CAPT_REC_ADF2                               (PMDG_NGX_ID_OFFSET + 749)
#define EVT_ACP_CAPT_REC_MKR                                (PMDG_NGX_ID_OFFSET + 750)
#define EVT_ACP_CAPT_REC_SPKR                               (PMDG_NGX_ID_OFFSET + 751)
#define EVT_ACP_CAPT_RT_IC_SWITCH                           (PMDG_NGX_ID_OFFSET + 752)
#define EVT_ACP_CAPT_MASK_BOOM_SWITCH                       (PMDG_NGX_ID_OFFSET + 753)
#define EVT_ACP_CAPT_FILTER_SWITCH                          (PMDG_NGX_ID_OFFSET + 754)
#define EVT_ACP_CAPT_ALT_NORM_SWITCH                        (PMDG_NGX_ID_OFFSET + 755)
#define EVT_ACP_CAPT_FIRST1                                 EVT_ACP_CAPT_MIC_VHF1
#define EVT_ACP_CAPT_LAST1                                  EVT_ACP_CAPT_ALT_NORM_SWITCH
#define EVT_ACP_CAPT_FIRST2                                 EVT_ACP_CAPT_MIC_VHF3
#define EVT_ACP_CAPT_LAST2                                  EVT_ACP_CAPT_REC_HF2
#define EVT_ACP_FO_MIC_VHF1                                 (PMDG_NGX_ID_OFFSET + 850)
#define EVT_ACP_FO_MIC_VHF2                                 (PMDG_NGX_ID_OFFSET + 851)
#define EVT_ACP_FO_MIC_VHF3                                 (PMDG_NGX_ID_OFFSET + 881)	// out of order
#define EVT_ACP_FO_MIC_HF1                                  (PMDG_NGX_ID_OFFSET + 882)	// out of order
#define EVT_ACP_FO_MIC_HF2                                  (PMDG_NGX_ID_OFFSET + 883)	// out of order
#define EVT_ACP_FO_MIC_FLT                                  (PMDG_NGX_ID_OFFSET + 852)
#define EVT_ACP_FO_MIC_SVC                                  (PMDG_NGX_ID_OFFSET + 853)
#define EVT_ACP_FO_MIC_PA                                   (PMDG_NGX_ID_OFFSET + 854)
#define EVT_ACP_FO_REC_VHF1                                 (PMDG_NGX_ID_OFFSET + 855)
#define EVT_ACP_FO_REC_VHF2                                 (PMDG_NGX_ID_OFFSET + 856)
#define EVT_ACP_FO_REC_VHF3                                 (PMDG_NGX_ID_OFFSET + 857)
#define EVT_ACP_FO_REC_HF1                                  (PMDG_NGX_ID_OFFSET + 858)
#define EVT_ACP_FO_REC_HF2                                  (PMDG_NGX_ID_OFFSET + 884)	// out of order
#define EVT_ACP_FO_REC_FLT                                  (PMDG_NGX_ID_OFFSET + 859)
#define EVT_ACP_FO_REC_SVC                                  (PMDG_NGX_ID_OFFSET + 860)
#define EVT_ACP_FO_REC_PA                                   (PMDG_NGX_ID_OFFSET + 861)
#define EVT_ACP_FO_REC_NAV1                                 (PMDG_NGX_ID_OFFSET + 862)
#define EVT_ACP_FO_REC_NAV2                                 (PMDG_NGX_ID_OFFSET + 863)
#define EVT_ACP_FO_REC_ADF1                                 (PMDG_NGX_ID_OFFSET + 864)
#define EVT_ACP_FO_REC_ADF2                                 (PMDG_NGX_ID_OFFSET + 865)
#define EVT_ACP_FO_REC_MKR                                  (PMDG_NGX_ID_OFFSET + 866)
#define EVT_ACP_FO_REC_SPKR                                 (PMDG_NGX_ID_OFFSET + 867)
#define EVT_ACP_FO_VOL_NAV1                                 (PMDG_NGX_ID_OFFSET + 1862)	// 1000 added for volume rotation event
#define EVT_ACP_FO_VOL_NAV2                                 (PMDG_NGX_ID_OFFSET + 1863)
#define EVT_ACP_FO_VOL_ADF1                                 (PMDG_NGX_ID_OFFSET + 1864)
#define EVT_ACP_FO_VOL_ADF2                                 (PMDG_NGX_ID_OFFSET + 1865)
#define EVT_ACP_FO_VOL_MKR                                  (PMDG_NGX_ID_OFFSET + 1866)
#define EVT_ACP_FO_RT_IC_SWITCH                             (PMDG_NGX_ID_OFFSET + 868)
#define EVT_ACP_FO_MASK_BOOM_SWITCH                         (PMDG_NGX_ID_OFFSET + 869)
#define EVT_ACP_FO_FILTER_SWITCH                            (PMDG_NGX_ID_OFFSET + 870)
#define EVT_ACP_FO_ALT_NORM_SWITCH                          (PMDG_NGX_ID_OFFSET + 871)
#define EVT_ACP_FO_FIRST1                                   EVT_ACP_FO_MIC_VHF1
#define EVT_ACP_FO_LAST1                                    EVT_ACP_FO_ALT_NORM_SWITCH
#define EVT_ACP_FO_FIRST2                                   EVT_ACP_FO_MIC_VHF3
#define EVT_ACP_FO_LAST2                                    EVT_ACP_FO_REC_HF2
#define EVT_ACP_OBS_MIC_VHF1                                (PMDG_NGX_ID_OFFSET + 291)
#define EVT_ACP_OBS_MIC_VHF2                                (PMDG_NGX_ID_OFFSET + 292)
#define EVT_ACP_OBS_MIC_VHF3                                (PMDG_NGX_ID_OFFSET + 293)
#define EVT_ACP_OBS_MIC_HF1                                 (PMDG_NGX_ID_OFFSET + 294)
#define EVT_ACP_OBS_MIC_HF2                                 (PMDG_NGX_ID_OFFSET + 295)
#define EVT_ACP_OBS_MIC_FLT                                 (PMDG_NGX_ID_OFFSET + 296)
#define EVT_ACP_OBS_MIC_SVC                                 (PMDG_NGX_ID_OFFSET + 297)
#define EVT_ACP_OBS_MIC_PA                                  (PMDG_NGX_ID_OFFSET + 873)	// out of order
#define EVT_ACP_OBS_REC_VHF1                                (PMDG_NGX_ID_OFFSET + 286)
#define EVT_ACP_OBS_REC_VHF2                                (PMDG_NGX_ID_OFFSET + 287)
#define EVT_ACP_OBS_REC_VHF3                                (PMDG_NGX_ID_OFFSET + 874)	// out of order
#define EVT_ACP_OBS_REC_HF1                                 (PMDG_NGX_ID_OFFSET + 875)	// out of order
#define EVT_ACP_OBS_REC_HF2                                 (PMDG_NGX_ID_OFFSET + 876)	// out of order
#define EVT_ACP_OBS_REC_FLT                                 (PMDG_NGX_ID_OFFSET + 288)
#define EVT_ACP_OBS_REC_SVC                                 (PMDG_NGX_ID_OFFSET + 289)
#define EVT_ACP_OBS_REC_PA                                  (PMDG_NGX_ID_OFFSET + 290)
#define EVT_ACP_OBS_REC_NAV1                                (PMDG_NGX_ID_OFFSET + 280)
#define EVT_ACP_OBS_REC_NAV2                                (PMDG_NGX_ID_OFFSET + 281)
#define EVT_ACP_OBS_REC_ADF1                                (PMDG_NGX_ID_OFFSET + 282)
#define EVT_ACP_OBS_REC_ADF2                                (PMDG_NGX_ID_OFFSET + 283)
#define EVT_ACP_OBS_REC_MKR                                 (PMDG_NGX_ID_OFFSET + 284)
#define EVT_ACP_OBS_REC_SPKR                                (PMDG_NGX_ID_OFFSET + 285)
#define EVT_ACP_OBS_VOL_NAV1                                (PMDG_NGX_ID_OFFSET + 1280)	// 1000 added for volume rotation event
#define EVT_ACP_OBS_VOL_NAV2                                (PMDG_NGX_ID_OFFSET + 1281)
#define EVT_ACP_OBS_VOL_ADF1                                (PMDG_NGX_ID_OFFSET + 1282)
#define EVT_ACP_OBS_VOL_ADF2                                (PMDG_NGX_ID_OFFSET + 1283)
#define EVT_ACP_OBS_VOL_MKR                                 (PMDG_NGX_ID_OFFSET + 1284)
#define EVT_ACP_OBS_RT_IC_SWITCH                            (PMDG_NGX_ID_OFFSET + 276)
#define EVT_ACP_OBS_MASK_BOOM_SWITCH                        (PMDG_NGX_ID_OFFSET + 277)
#define EVT_ACP_OBS_FILTER_SWITCH                           (PMDG_NGX_ID_OFFSET + 278)
#define EVT_ACP_OBS_ALT_NORM_SWITCH                         (PMDG_NGX_ID_OFFSET + 279)
#define EVT_ACP_OBS_FIRST1                                  EVT_ACP_OBS_RT_IC_SWITCH
#define EVT_ACP_OBS_LAST1                                   EVT_ACP_OBS_MIC_SVC
#define EVT_ACP_OBS_FIRST2                                  EVT_ACP_OBS_MIC_PA
#define EVT_ACP_OBS_LAST2                                   EVT_ACP_OBS_REC_HF2

// SP2
#define EVT_WXR_L_TFR                                       (PMDG_NGX_ID_OFFSET + 790)
#define EVT_WXR_L_WX                                        (PMDG_NGX_ID_OFFSET + 791)
#define EVT_WXR_L_WX_T                                      (PMDG_NGX_ID_OFFSET + 916)
#define EVT_WXR_L_MAP                                       (PMDG_NGX_ID_OFFSET + 792)
#define EVT_WXR_L_GC                                        (PMDG_NGX_ID_OFFSET + 793)
#define EVT_WXR_AUTO                                        (PMDG_NGX_ID_OFFSET + 917)
#define EVT_WXR_TEST                                        (PMDG_NGX_ID_OFFSET + 918)
#define EVT_WXR_R_TFR                                       (PMDG_NGX_ID_OFFSET + 919)
#define EVT_WXR_R_WX                                        (PMDG_NGX_ID_OFFSET + 796)
#define EVT_WXR_R_WX_T                                      (PMDG_NGX_ID_OFFSET + 920)
#define EVT_WXR_R_MAP                                       (PMDG_NGX_ID_OFFSET + 797)
#define EVT_WXR_R_GC                                        (PMDG_NGX_ID_OFFSET + 921)
#define EVT_WXR_L_TILT_CONTROL                              (PMDG_NGX_ID_OFFSET + 794)
#define EVT_WXR_L_GAIN_CONTROL                              (PMDG_NGX_ID_OFFSET + 923)
#define EVT_WXR_R_TILT_CONTROL                              (PMDG_NGX_ID_OFFSET + 795)
#define EVT_WXR_R_GAIN_CONTROL                              (PMDG_NGX_ID_OFFSET + 922)

#define EVT_TCAS_XPNDR                                      (PMDG_NGX_ID_OFFSET + 798)
#define EVT_TCAS_MODE                                       (PMDG_NGX_ID_OFFSET + 800)
#define EVT_TCAS_TEST                                       (PMDG_NGX_ID_OFFSET + 801)
#define EVT_TCAS_ALTSOURCE                                  (PMDG_NGX_ID_OFFSET + 803)
#define EVT_TCAS_KNOB1                                      (PMDG_NGX_ID_OFFSET + 804)
#define EVT_TCAS_KNOB2                                      (PMDG_NGX_ID_OFFSET + 805)
#define EVT_TCAS_IDENT                                      (PMDG_NGX_ID_OFFSET + 806)
#define EVT_TCAS_KNOB4                                      (PMDG_NGX_ID_OFFSET + 807)
#define EVT_TCAS_KNOB3                                      (PMDG_NGX_ID_OFFSET + 808)

#define EVT_HUD_MODE                                        (PMDG_NGX_ID_OFFSET + 770)
#define EVT_HUD_STB                                         (PMDG_NGX_ID_OFFSET + 771)
#define EVT_HUD_RWY                                         (PMDG_NGX_ID_OFFSET + 772)
#define EVT_HUD_GS                                          (PMDG_NGX_ID_OFFSET + 773)
#define EVT_HUD_CLR                                         (PMDG_NGX_ID_OFFSET + 775)
#define EVT_HUD_BRT                                         (PMDG_NGX_ID_OFFSET + 776)
#define EVT_HUD_DIM                                         (PMDG_NGX_ID_OFFSET + 777)
#define EVT_HUD_1                                           (PMDG_NGX_ID_OFFSET + 778)
#define EVT_HUD_2                                           (PMDG_NGX_ID_OFFSET + 779)
#define EVT_HUD_3                                           (PMDG_NGX_ID_OFFSET + 780)
#define EVT_HUD_4                                           (PMDG_NGX_ID_OFFSET + 781)
#define EVT_HUD_5                                           (PMDG_NGX_ID_OFFSET + 782)
#define EVT_HUD_6                                           (PMDG_NGX_ID_OFFSET + 783)
#define EVT_HUD_7                                           (PMDG_NGX_ID_OFFSET + 784)
#define EVT_HUD_8                                           (PMDG_NGX_ID_OFFSET + 785)
#define EVT_HUD_9                                           (PMDG_NGX_ID_OFFSET + 786)
#define EVT_HUD_0                                           (PMDG_NGX_ID_OFFSET + 788)
#define EVT_HUD_ENTER                                       (PMDG_NGX_ID_OFFSET + 787)
#define EVT_HUD_TEST                                        (PMDG_NGX_ID_OFFSET + 789)
#define EVT_HUD_STOW                                        (PMDG_NGX_ID_OFFSET + 979)
#define EVT_HUD_BRIGTHNESS                                  (PMDG_NGX_ID_OFFSET + 980)
#define EVT_HUD_AUTO_MAN                                    (PMDG_NGX_ID_OFFSET + 981)

#define EVT_HGS_FAIL_SWITCH                                 (PMDG_NGX_ID_OFFSET + 522)

#define EVT_CDU_L_L1                                        (PMDG_NGX_ID_OFFSET + 534)
#define EVT_CDU_L_L2                                        (PMDG_NGX_ID_OFFSET + 535)
#define EVT_CDU_L_L3                                        (PMDG_NGX_ID_OFFSET + 536)
#define EVT_CDU_L_L4                                        (PMDG_NGX_ID_OFFSET + 537)
#define EVT_CDU_L_L5                                        (PMDG_NGX_ID_OFFSET + 538)
#define EVT_CDU_L_L6                                        (PMDG_NGX_ID_OFFSET + 539)
#define EVT_CDU_L_R1                                        (PMDG_NGX_ID_OFFSET + 540)
#define EVT_CDU_L_R2                                        (PMDG_NGX_ID_OFFSET + 541)
#define EVT_CDU_L_R3                                        (PMDG_NGX_ID_OFFSET + 542)
#define EVT_CDU_L_R4                                        (PMDG_NGX_ID_OFFSET + 543)
#define EVT_CDU_L_R5                                        (PMDG_NGX_ID_OFFSET + 544)
#define EVT_CDU_L_R6                                        (PMDG_NGX_ID_OFFSET + 545)
#define EVT_CDU_L_INIT_REF                                  (PMDG_NGX_ID_OFFSET + 546)
#define EVT_CDU_L_RTE                                       (PMDG_NGX_ID_OFFSET + 547)
#define EVT_CDU_L_CLB                                       (PMDG_NGX_ID_OFFSET + 548)
#define EVT_CDU_L_CRZ                                       (PMDG_NGX_ID_OFFSET + 549)
#define EVT_CDU_L_DES                                       (PMDG_NGX_ID_OFFSET + 550)
#define EVT_CDU_L_MENU                                      (PMDG_NGX_ID_OFFSET + 551)
#define EVT_CDU_L_LEGS                                      (PMDG_NGX_ID_OFFSET + 552)
#define EVT_CDU_L_DEP_ARR                                   (PMDG_NGX_ID_OFFSET + 553)
#define EVT_CDU_L_HOLD                                      (PMDG_NGX_ID_OFFSET + 554)
#define EVT_CDU_L_PROG                                      (PMDG_NGX_ID_OFFSET + 555)
#define EVT_CDU_L_EXEC                                      (PMDG_NGX_ID_OFFSET + 556)
#define EVT_CDU_L_N1_LIMIT                                  (PMDG_NGX_ID_OFFSET + 557)
#define EVT_CDU_L_FIX                                       (PMDG_NGX_ID_OFFSET + 558)
#define EVT_CDU_L_PREV_PAGE                                 (PMDG_NGX_ID_OFFSET + 559)
#define EVT_CDU_L_NEXT_PAGE                                 (PMDG_NGX_ID_OFFSET + 560)
#define EVT_CDU_L_1                                         (PMDG_NGX_ID_OFFSET + 561)
#define EVT_CDU_L_2                                         (PMDG_NGX_ID_OFFSET + 562)
#define EVT_CDU_L_3                                         (PMDG_NGX_ID_OFFSET + 563)
#define EVT_CDU_L_4                                         (PMDG_NGX_ID_OFFSET + 564)
#define EVT_CDU_L_5                                         (PMDG_NGX_ID_OFFSET + 565)
#define EVT_CDU_L_6                                         (PMDG_NGX_ID_OFFSET + 566)
#define EVT_CDU_L_7                                         (PMDG_NGX_ID_OFFSET + 567)
#define EVT_CDU_L_8                                         (PMDG_NGX_ID_OFFSET + 568)
#define EVT_CDU_L_9                                         (PMDG_NGX_ID_OFFSET + 569)
#define EVT_CDU_L_DOT                                       (PMDG_NGX_ID_OFFSET + 570)
#define EVT_CDU_L_0                                         (PMDG_NGX_ID_OFFSET + 571)
#define EVT_CDU_L_PLUS_MINUS                                (PMDG_NGX_ID_OFFSET + 572)
#define EVT_CDU_L_A                                         (PMDG_NGX_ID_OFFSET + 573)
#define EVT_CDU_L_B                                         (PMDG_NGX_ID_OFFSET + 574)
#define EVT_CDU_L_C                                         (PMDG_NGX_ID_OFFSET + 575)
#define EVT_CDU_L_D                                         (PMDG_NGX_ID_OFFSET + 576)
#define EVT_CDU_L_E                                         (PMDG_NGX_ID_OFFSET + 577)
#define EVT_CDU_L_F                                         (PMDG_NGX_ID_OFFSET + 578)
#define EVT_CDU_L_G                                         (PMDG_NGX_ID_OFFSET + 579)
#define EVT_CDU_L_H                                         (PMDG_NGX_ID_OFFSET + 580)
#define EVT_CDU_L_I                                         (PMDG_NGX_ID_OFFSET + 581)
#define EVT_CDU_L_J                                         (PMDG_NGX_ID_OFFSET + 582)
#define EVT_CDU_L_K                                         (PMDG_NGX_ID_OFFSET + 583)
#define EVT_CDU_L_L                                         (PMDG_NGX_ID_OFFSET + 584)
#define EVT_CDU_L_M                                         (PMDG_NGX_ID_OFFSET + 585)
#define EVT_CDU_L_N                                         (PMDG_NGX_ID_OFFSET + 586)
#define EVT_CDU_L_O                                         (PMDG_NGX_ID_OFFSET + 587)
#define EVT_CDU_L_P                                         (PMDG_NGX_ID_OFFSET + 588)
#define EVT_CDU_L_Q                                         (PMDG_NGX_ID_OFFSET + 589)
#define EVT_CDU_L_R                                         (PMDG_NGX_ID_OFFSET + 590)
#define EVT_CDU_L_S                                         (PMDG_NGX_ID_OFFSET + 591)
#define EVT_CDU_L_T                                         (PMDG_NGX_ID_OFFSET + 592)
#define EVT_CDU_L_U                                         (PMDG_NGX_ID_OFFSET + 593)
#define EVT_CDU_L_V                                         (PMDG_NGX_ID_OFFSET + 594)
#define EVT_CDU_L_W                                         (PMDG_NGX_ID_OFFSET + 595)
#define EVT_CDU_L_X                                         (PMDG_NGX_ID_OFFSET + 596)
#define EVT_CDU_L_Y                                         (PMDG_NGX_ID_OFFSET + 597)
#define EVT_CDU_L_Z                                         (PMDG_NGX_ID_OFFSET + 598)
#define EVT_CDU_L_SPACE                                     (PMDG_NGX_ID_OFFSET + 599)
#define EVT_CDU_L_DEL                                       (PMDG_NGX_ID_OFFSET + 600)
#define EVT_CDU_L_SLASH                                     (PMDG_NGX_ID_OFFSET + 601)
#define EVT_CDU_L_CLR                                       (PMDG_NGX_ID_OFFSET + 602)
#define EVT_CDU_L_BRITENESS                                 (PMDG_NGX_ID_OFFSET + 605)
#define EVT_CDU_R_L1                                        (PMDG_NGX_ID_OFFSET + 606)
#define EVT_CDU_R_L2                                        (PMDG_NGX_ID_OFFSET + 607)
#define EVT_CDU_R_L3                                        (PMDG_NGX_ID_OFFSET + 608)
#define EVT_CDU_R_L4                                        (PMDG_NGX_ID_OFFSET + 609)
#define EVT_CDU_R_L5                                        (PMDG_NGX_ID_OFFSET + 610)
#define EVT_CDU_R_L6                                        (PMDG_NGX_ID_OFFSET + 611)
#define EVT_CDU_R_R1                                        (PMDG_NGX_ID_OFFSET + 612)
#define EVT_CDU_R_R2                                        (PMDG_NGX_ID_OFFSET + 613)
#define EVT_CDU_R_R3                                        (PMDG_NGX_ID_OFFSET + 614)
#define EVT_CDU_R_R4                                        (PMDG_NGX_ID_OFFSET + 615)
#define EVT_CDU_R_R5                                        (PMDG_NGX_ID_OFFSET + 616)
#define EVT_CDU_R_R6                                        (PMDG_NGX_ID_OFFSET + 617)
#define EVT_CDU_R_INIT_REF                                  (PMDG_NGX_ID_OFFSET + 618)
#define EVT_CDU_R_RTE                                       (PMDG_NGX_ID_OFFSET + 619)
#define EVT_CDU_R_CLB                                       (PMDG_NGX_ID_OFFSET + 620)
#define EVT_CDU_R_CRZ                                       (PMDG_NGX_ID_OFFSET + 621)
#define EVT_CDU_R_DES                                       (PMDG_NGX_ID_OFFSET + 622)
#define EVT_CDU_R_MENU                                      (PMDG_NGX_ID_OFFSET + 623)
#define EVT_CDU_R_LEGS                                      (PMDG_NGX_ID_OFFSET + 624)
#define EVT_CDU_R_DEP_ARR                                   (PMDG_NGX_ID_OFFSET + 625)
#define EVT_CDU_R_HOLD                                      (PMDG_NGX_ID_OFFSET + 626)
#define EVT_CDU_R_PROG                                      (PMDG_NGX_ID_OFFSET + 627)
#define EVT_CDU_R_EXEC                                      (PMDG_NGX_ID_OFFSET + 628)
#define EVT_CDU_R_N1_LIMIT                                  (PMDG_NGX_ID_OFFSET + 629)
#define EVT_CDU_R_FIX                                       (PMDG_NGX_ID_OFFSET + 630)
#define EVT_CDU_R_PREV_PAGE                                 (PMDG_NGX_ID_OFFSET + 631)
#define EVT_CDU_R_NEXT_PAGE                                 (PMDG_NGX_ID_OFFSET + 632)
#define EVT_CDU_R_1                                         (PMDG_NGX_ID_OFFSET + 633)
#define EVT_CDU_R_2                                         (PMDG_NGX_ID_OFFSET + 634)
#define EVT_CDU_R_3                                         (PMDG_NGX_ID_OFFSET + 635)
#define EVT_CDU_R_4                                         (PMDG_NGX_ID_OFFSET + 636)
#define EVT_CDU_R_5                                         (PMDG_NGX_ID_OFFSET + 637)
#define EVT_CDU_R_6                                         (PMDG_NGX_ID_OFFSET + 638)
#define EVT_CDU_R_7                                         (PMDG_NGX_ID_OFFSET + 639)
#define EVT_CDU_R_8                                         (PMDG_NGX_ID_OFFSET + 640)
#define EVT_CDU_R_9                                         (PMDG_NGX_ID_OFFSET + 641)
#define EVT_CDU_R_DOT                                       (PMDG_NGX_ID_OFFSET + 642)
#define EVT_CDU_R_0                                         (PMDG_NGX_ID_OFFSET + 643)
#define EVT_CDU_R_PLUS_MINUS                                (PMDG_NGX_ID_OFFSET + 644)
#define EVT_CDU_R_A                                         (PMDG_NGX_ID_OFFSET + 645)
#define EVT_CDU_R_B                                         (PMDG_NGX_ID_OFFSET + 646)
#define EVT_CDU_R_C                                         (PMDG_NGX_ID_OFFSET + 647)
#define EVT_CDU_R_D                                         (PMDG_NGX_ID_OFFSET + 648)
#define EVT_CDU_R_E                                         (PMDG_NGX_ID_OFFSET + 649)
#define EVT_CDU_R_F                                         (PMDG_NGX_ID_OFFSET + 650)
#define EVT_CDU_R_G                                         (PMDG_NGX_ID_OFFSET + 651)
#define EVT_CDU_R_H                                         (PMDG_NGX_ID_OFFSET + 652)
#define EVT_CDU_R_I                                         (PMDG_NGX_ID_OFFSET + 653)
#define EVT_CDU_R_J                                         (PMDG_NGX_ID_OFFSET + 654)
#define EVT_CDU_R_K                                         (PMDG_NGX_ID_OFFSET + 655)
#define EVT_CDU_R_L                                         (PMDG_NGX_ID_OFFSET + 656)
#define EVT_CDU_R_M                                         (PMDG_NGX_ID_OFFSET + 657)
#define EVT_CDU_R_N                                         (PMDG_NGX_ID_OFFSET + 658)
#define EVT_CDU_R_O                                         (PMDG_NGX_ID_OFFSET + 659)
#define EVT_CDU_R_P                                         (PMDG_NGX_ID_OFFSET + 660)
#define EVT_CDU_R_Q                                         (PMDG_NGX_ID_OFFSET + 661)
#define EVT_CDU_R_R                                         (PMDG_NGX_ID_OFFSET + 662)
#define EVT_CDU_R_S                                         (PMDG_NGX_ID_OFFSET + 663)
#define EVT_CDU_R_T                                         (PMDG_NGX_ID_OFFSET + 664)
#define EVT_CDU_R_U                                         (PMDG_NGX_ID_OFFSET + 665)
#define EVT_CDU_R_V                                         (PMDG_NGX_ID_OFFSET + 666)
#define EVT_CDU_R_W                                         (PMDG_NGX_ID_OFFSET + 667)
#define EVT_CDU_R_X                                         (PMDG_NGX_ID_OFFSET + 668)
#define EVT_CDU_R_Y                                         (PMDG_NGX_ID_OFFSET + 669)
#define EVT_CDU_R_Z                                         (PMDG_NGX_ID_OFFSET + 670)
#define EVT_CDU_R_SPACE                                     (PMDG_NGX_ID_OFFSET + 671)
#define EVT_CDU_R_DEL                                       (PMDG_NGX_ID_OFFSET + 672)
#define EVT_CDU_R_SLASH                                     (PMDG_NGX_ID_OFFSET + 673)
#define EVT_CDU_R_CLR                                       (PMDG_NGX_ID_OFFSET + 674)
#define EVT_CDU_R_BRITENESS                                 (PMDG_NGX_ID_OFFSET + 677)

#define EVT_FIRE_OVHT_DET_SWITCH_1                          (PMDG_NGX_ID_OFFSET + 694)
#define EVT_FIRE_DETECTION_TEST_SWITCH                      (PMDG_NGX_ID_OFFSET + 696)
#define EVT_FIRE_HANDLE_ENGINE_1_TOP                        (PMDG_NGX_ID_OFFSET + 697)
#define EVT_FIRE_HANDLE_ENGINE_1_BOTTOM                     (PMDG_NGX_ID_OFFSET + 6971)
#define EVT_FIRE_HANDLE_APU_TOP                             (PMDG_NGX_ID_OFFSET + 698)
#define EVT_FIRE_HANDLE_APU_BOTTOM                          (PMDG_NGX_ID_OFFSET + 6981)
#define EVT_FIRE_HANDLE_ENGINE_2_TOP                        (PMDG_NGX_ID_OFFSET + 699)
#define EVT_FIRE_HANDLE_ENGINE_2_BOTTOM                     (PMDG_NGX_ID_OFFSET + 6991)
#define EVT_FIRE_BELL_CUTOUT_SWITCH                         (PMDG_NGX_ID_OFFSET + 704)
#define EVT_FIRE_OVHT_DET_SWITCH_2                          (PMDG_NGX_ID_OFFSET + 705)
#define EVT_FIRE_EXTINGUISHER_TEST_SWITCH                   (PMDG_NGX_ID_OFFSET + 715)
#define EVT_FIRE_UNLOCK_SWITCH_ENGINE_1                     (PMDG_NGX_ID_OFFSET + 976)
#define EVT_FIRE_UNLOCK_SWITCH_APU                          (PMDG_NGX_ID_OFFSET + 977)
#define EVT_FIRE_UNLOCK_SWITCH_ENGINE_2                     (PMDG_NGX_ID_OFFSET + 978)

#define EVT_CARGO_FIRE_DET_SEL_SWITCH_FWD                   (PMDG_NGX_ID_OFFSET + 760)
#define EVT_CARGO_FIRE_DET_SEL_SWITCH_AFT                   (PMDG_NGX_ID_OFFSET + 761)
#define EVT_CARGO_FIRE_ARM_SWITCH_FWD                       (PMDG_NGX_ID_OFFSET + 764)
#define EVT_CARGO_FIRE_ARM_SWITCH_AFT                       (PMDG_NGX_ID_OFFSET + 766)
#define EVT_CARGO_FIRE_DISC_SWITCH_GUARD                    (PMDG_NGX_ID_OFFSET + 767)
#define EVT_CARGO_FIRE_DISC_SWITCH                          (PMDG_NGX_ID_OFFSET + 768)
#define EVT_CARGO_FIRE_TEST_SWITCH                          (PMDG_NGX_ID_OFFSET + 769)

#define EVT_FCTL_AILERON_TRIM                               (PMDG_NGX_ID_OFFSET + 810)
#define EVT_FCTL_RUDDER_TRIM                                (PMDG_NGX_ID_OFFSET + 811)

#define EVT_PED_FLOOD_CONTROL                               (PMDG_NGX_ID_OFFSET + 756)
#define EVT_PED_PANEL_CONTROL                               (PMDG_NGX_ID_OFFSET + 757)

#define EVT_LDG_LIGHTS_TOGGLE                               (PMDG_NGX_ID_OFFSET + 14000)

#define EVT_TURNOFF_LIGHTS_TOGGLE                           (PMDG_NGX_ID_OFFSET + 14001)

#define EVT_COCKPIT_LIGHTS_TOGGLE                           (PMDG_NGX_ID_OFFSET + 14002)
#define EVT_COCKPIT_LIGHTS_ON                               (PMDG_NGX_ID_OFFSET + 14003)
#define EVT_COCKPIT_LIGHTS_OFF                              (PMDG_NGX_ID_OFFSET + 14004)

#define EVT_DOOR_FWD_L                                      (PMDG_NGX_ID_OFFSET + 14005)
#define EVT_DOOR_FWD_R                                      (PMDG_NGX_ID_OFFSET + 14006)
#define EVT_DOOR_AFT_L                                      (PMDG_NGX_ID_OFFSET + 14007)
#define EVT_DOOR_AFT_R                                      (PMDG_NGX_ID_OFFSET + 14008)
#define EVT_DOOR_OVERWING_EXIT_L                            (PMDG_NGX_ID_OFFSET + 14009)
#define EVT_DOOR_OVERWING_EXIT_R                            (PMDG_NGX_ID_OFFSET + 14010)
#define EVT_DOOR_CARGO_FWD                                  (PMDG_NGX_ID_OFFSET + 14013)	// note number skip to match eDoors enum
#define EVT_DOOR_CARGO_AFT                                  (PMDG_NGX_ID_OFFSET + 14014)
#define EVT_DOOR_EQUIPMENT_HATCH                            (PMDG_NGX_ID_OFFSET + 14015)
#define EVT_DOOR_AIRSTAIR                                   (PMDG_NGX_ID_OFFSET + 14016)

#define EVT_YOKE_L_COUNTER_1                                (PMDG_NGX_ID_OFFSET + 998)	// Counters (digits left to right)
#define EVT_YOKE_L_COUNTER_2                                (PMDG_NGX_ID_OFFSET + 999)
#define EVT_YOKE_L_COUNTER_3                                (PMDG_NGX_ID_OFFSET + 1000)
#define EVT_YOKE_R_COUNTER_1                                (PMDG_NGX_ID_OFFSET + 1001)
#define EVT_YOKE_R_COUNTER_2                                (PMDG_NGX_ID_OFFSET + 1002)
#define EVT_YOKE_R_COUNTER_3                                (PMDG_NGX_ID_OFFSET + 1003)
#define EVT_YOKE_L_AP_DISC_SWITCH                           (PMDG_NGX_ID_OFFSET + 1004)	// AP Disconnect switches
#define EVT_YOKE_R_AP_DISC_SWITCH                           (PMDG_NGX_ID_OFFSET + 1005)

#define EVT_MCP_CRS_L_SET                                   (PMDG_NGX_ID_OFFSET + 14500)	// Sets MCP course specified by the event parameter
#define EVT_MCP_CRS_R_SET                                   (PMDG_NGX_ID_OFFSET + 14501)
#define EVT_MCP_IAS_SET                                     (PMDG_NGX_ID_OFFSET + 14502)	// Sets MCP IAS, if IAS mode is active
#define EVT_MCP_MACH_SET                                    (PMDG_NGX_ID_OFFSET + 14503)	// Sets MCP MACH (if active) to parameter*0.01 (e.g. send 78 to set M0.78)
#define EVT_MCP_HDG_SET                                     (PMDG_NGX_ID_OFFSET + 14504)	// Sets new heading, commands the shortest turn
#define EVT_MCP_ALT_SET                                     (PMDG_NGX_ID_OFFSET + 14505)
#define EVT_MCP_VS_SET                                      (PMDG_NGX_ID_OFFSET + 14506)	// Sets MCP VS (if VS window open) to parameter-10000 (e.g. send 8200 for -1800fpm)


// SP2
#define EVT_OH_PRESS_FLT_ALT_SET                            (PMDG_NGX_ID_OFFSET + 14507)
#define EVT_OH_PRESS_LAND_ALT_SET                           (PMDG_NGX_ID_OFFSET + 14508)

#define EVT_CTRL_ACCELERATION_DISABLE                       (PMDG_NGX_ID_OFFSET + 14600)
#define EVT_CTRL_ACCELERATION_ENABLE                        (PMDG_NGX_ID_OFFSET + 14600)


#endif
