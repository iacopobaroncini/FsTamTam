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


#ifndef _H_PMDG_NGX_VARIABLES
#define _H_PMDG_NGX_VARIABLES


#define PMDG_NGX_ID_OFFSET                                  0x00011000

// FsTamTam custom

#define CDU_ScreenData_0                                    (PMDG_NGX_ID_OFFSET + 1000) // Custom coded string
#define CDU_ScreenData_1                                    (PMDG_NGX_ID_OFFSET + 1001) // Custom coded string

// PMDG-NGX

#define IRS_DisplaySelector                                 (PMDG_NGX_ID_OFFSET + 1)	// uint8_t   // Positions 0..4
#define IRS_SysDisplay_R                                    (PMDG_NGX_ID_OFFSET + 2)	// boolean   // false: L  true: R
#define IRS_annunGPS                                        (PMDG_NGX_ID_OFFSET + 3)	// boolean
#define IRS_annunALIGN_0                                    (PMDG_NGX_ID_OFFSET + 4)	// boolean
#define IRS_annunALIGN_1                                    (PMDG_NGX_ID_OFFSET + 5)	// boolean
#define IRS_annunON_DC_0                                    (PMDG_NGX_ID_OFFSET + 6)	// boolean
#define IRS_annunON_DC_1                                    (PMDG_NGX_ID_OFFSET + 7)	// boolean
#define IRS_annunFAULT_0                                    (PMDG_NGX_ID_OFFSET + 8)	// boolean
#define IRS_annunFAULT_1                                    (PMDG_NGX_ID_OFFSET + 9)	// boolean
#define IRS_annunDC_FAIL_0                                  (PMDG_NGX_ID_OFFSET + 10)	// boolean
#define IRS_annunDC_FAIL_1                                  (PMDG_NGX_ID_OFFSET + 11)	// boolean
#define IRS_ModeSelector_0                                  (PMDG_NGX_ID_OFFSET + 12)	// uint8_t   // 0: OFF  1: ALIGN  2: NAV  3: ATT
#define IRS_ModeSelector_1                                  (PMDG_NGX_ID_OFFSET + 13)	// uint8_t   // 0: OFF  1: ALIGN  2: NAV  3: ATT

#define WARN_annunPSEU                                      (PMDG_NGX_ID_OFFSET + 14)	// boolean

#define COMM_ServiceInterphoneSw                            (PMDG_NGX_ID_OFFSET + 15)	// boolean

#define LTS_DomeWhiteSw                                     (PMDG_NGX_ID_OFFSET + 16)	// uint8_t   // 0: DIM  1: OFF  2: BRIGHT

#define ENG_EECSwitch_0                                     (PMDG_NGX_ID_OFFSET + 17)	// boolean
#define ENG_EECSwitch_1                                     (PMDG_NGX_ID_OFFSET + 18)	// boolean
#define ENG_annunREVERSER_0                                 (PMDG_NGX_ID_OFFSET + 19)	// boolean
#define ENG_annunREVERSER_1                                 (PMDG_NGX_ID_OFFSET + 20)	// boolean
#define ENG_annunENGINE_CONTROL_0                           (PMDG_NGX_ID_OFFSET + 21)	// boolean
#define ENG_annunENGINE_CONTROL_1                           (PMDG_NGX_ID_OFFSET + 22)	// boolean
#define ENG_annunALTN_0                                     (PMDG_NGX_ID_OFFSET + 23)	// boolean
#define ENG_annunALTN_1                                     (PMDG_NGX_ID_OFFSET + 24)	// boolean

#define OXY_Needle                                          (PMDG_NGX_ID_OFFSET + 25)	// uint8_t   // Position 0...240
#define OXY_SwNormal                                        (PMDG_NGX_ID_OFFSET + 26)	// boolean   // true: NORMAL  false: ON
#define OXY_annunPASS_OXY_ON                                (PMDG_NGX_ID_OFFSET + 27)	// boolean

#define GEAR_annunOvhdLEFT                                  (PMDG_NGX_ID_OFFSET + 28)	// boolean
#define GEAR_annunOvhdNOSE                                  (PMDG_NGX_ID_OFFSET + 29)	// boolean
#define GEAR_annunOvhdRIGHT                                 (PMDG_NGX_ID_OFFSET + 30)	// boolean

#define FLTREC_SwNormal                                     (PMDG_NGX_ID_OFFSET + 31)	// boolean   // true: NORMAL  false: TEST
#define FLTREC_annunOFF                                     (PMDG_NGX_ID_OFFSET + 32)	// boolean

#define FCTL_FltControl_Sw_0                                (PMDG_NGX_ID_OFFSET + 33)	// uint8_t   // 0: STBY/RUD  1: OFF  2: ON
#define FCTL_FltControl_Sw_1                                (PMDG_NGX_ID_OFFSET + 34)	// uint8_t   // 0: STBY/RUD  1: OFF  2: ON
#define FCTL_Spoiler_Sw_0                                   (PMDG_NGX_ID_OFFSET + 35)	// boolean   // true: ON  false: OFF
#define FCTL_Spoiler_Sw_1                                   (PMDG_NGX_ID_OFFSET + 36)	// boolean   // true: ON  false: OFF
#define FCTL_YawDamper_Sw                                   (PMDG_NGX_ID_OFFSET + 37)	// boolean
#define FCTL_AltnFlaps_Sw_ARM                               (PMDG_NGX_ID_OFFSET + 38)	// boolean   // true: ARM  false: OFF
#define FCTL_AltnFlaps_Control_Sw                           (PMDG_NGX_ID_OFFSET + 39)	// uint8_t   // 0: UP  1: OFF  2: DOWN
#define FCTL_annunFC_LOW_PRESSURE_0                         (PMDG_NGX_ID_OFFSET + 40)	// boolean   // FLT CONTROL
#define FCTL_annunFC_LOW_PRESSURE_1                         (PMDG_NGX_ID_OFFSET + 41)	// boolean   // FLT CONTROL
#define FCTL_annunYAW_DAMPER                                (PMDG_NGX_ID_OFFSET + 42)	// boolean
#define FCTL_annunLOW_QUANTITY                              (PMDG_NGX_ID_OFFSET + 43)	// boolean
#define FCTL_annunLOW_PRESSURE                              (PMDG_NGX_ID_OFFSET + 44)	// boolean
#define FCTL_annunLOW_STBY_RUD_ON                           (PMDG_NGX_ID_OFFSET + 45)	// boolean
#define FCTL_annunFEEL_DIFF_PRESS                           (PMDG_NGX_ID_OFFSET + 46)	// boolean
#define FCTL_annunSPEED_TRIM_FAIL                           (PMDG_NGX_ID_OFFSET + 47)	// boolean
#define FCTL_annunMACH_TRIM_FAIL                            (PMDG_NGX_ID_OFFSET + 48)	// boolean
#define FCTL_annunAUTO_SLAT_FAIL                            (PMDG_NGX_ID_OFFSET + 49)	// boolean

#define NAVDIS_VHFNavSelector                               (PMDG_NGX_ID_OFFSET + 50)	// uint8_t   // 0: BOTH ON 1  1: NORMAL  2: BOTH ON 2
#define NAVDIS_IRSSelector                                  (PMDG_NGX_ID_OFFSET + 51)	// uint8_t   // 0: BOTH ON L  1: NORMAL  2: BOTH ON R
#define NAVDIS_FMCSelector                                  (PMDG_NGX_ID_OFFSET + 52)	// uint8_t   // 0: BOTH ON L  1: NORMAL  2: BOTH ON R
#define NAVDIS_SourceSelector                               (PMDG_NGX_ID_OFFSET + 53)	// uint8_t   // 0: ALL ON 1   1: AUTO    2: ALL ON 2
#define NAVDIS_ControlPaneSelector                          (PMDG_NGX_ID_OFFSET + 54)	// uint8_t   // 0: BOTH ON 1  1: NORMAL  2: BOTH ON 2

#define FUEL_FuelTempNeedle                                 (PMDG_NGX_ID_OFFSET + 55)	// float     // Value
#define FUEL_CrossFeedSw                                    (PMDG_NGX_ID_OFFSET + 56)	// boolean
#define FUEL_PumpFwdSw_0                                    (PMDG_NGX_ID_OFFSET + 57)	// boolean   // left fwd / right fwd
#define FUEL_PumpFwdSw_1                                    (PMDG_NGX_ID_OFFSET + 58)	// boolean   // left fwd / right fwd
#define FUEL_PumpAftSw_0                                    (PMDG_NGX_ID_OFFSET + 59)	// boolean   // left aft / right aft
#define FUEL_PumpAftSw_1                                    (PMDG_NGX_ID_OFFSET + 60)	// boolean   // left aft / right aft
#define FUEL_PumpCtrSw_0                                    (PMDG_NGX_ID_OFFSET + 61)	// boolean   // ctr left / ctr right
#define FUEL_PumpCtrSw_1                                    (PMDG_NGX_ID_OFFSET + 62)	// boolean   // ctr left / ctr right
#define FUEL_annunENG_VALVE_CLOSED_0                        (PMDG_NGX_ID_OFFSET + 63)	// boolean
#define FUEL_annunENG_VALVE_CLOSED_1                        (PMDG_NGX_ID_OFFSET + 64)	// boolean
#define FUEL_annunSPAR_VALVE_CLOSED_0                       (PMDG_NGX_ID_OFFSET + 65)	// boolean
#define FUEL_annunSPAR_VALVE_CLOSED_1                       (PMDG_NGX_ID_OFFSET + 66)	// boolean
#define FUEL_annunFILTER_BYPASS_0                           (PMDG_NGX_ID_OFFSET + 67)	// boolean
#define FUEL_annunFILTER_BYPASS_1                           (PMDG_NGX_ID_OFFSET + 68)	// boolean
#define FUEL_annunXFEED_VALVE_OPEN                          (PMDG_NGX_ID_OFFSET + 69)	// boolean
#define FUEL_annunLOWPRESS_Fwd_0                            (PMDG_NGX_ID_OFFSET + 70)	// boolean
#define FUEL_annunLOWPRESS_Fwd_1                            (PMDG_NGX_ID_OFFSET + 71)	// boolean
#define FUEL_annunLOWPRESS_Aft_0                            (PMDG_NGX_ID_OFFSET + 72)	// boolean
#define FUEL_annunLOWPRESS_Aft_1                            (PMDG_NGX_ID_OFFSET + 73)	// boolean
#define FUEL_annunLOWPRESS_Ctr_0                            (PMDG_NGX_ID_OFFSET + 74)	// boolean
#define FUEL_annunLOWPRESS_Ctr_1                            (PMDG_NGX_ID_OFFSET + 75)	// boolean

#define ELEC_annunBAT_DISCHARGE                             (PMDG_NGX_ID_OFFSET + 76)	// boolean
#define ELEC_annunTR_UNIT                                   (PMDG_NGX_ID_OFFSET + 77)	// boolean
#define ELEC_annunELEC                                      (PMDG_NGX_ID_OFFSET + 78)	// boolean
#define ELEC_DCMeterSelector                                (PMDG_NGX_ID_OFFSET + 79)	// uint8_t   // 0: STBY PWR  1: BAT BUS ... 7: TEST
#define ELEC_ACMeterSelector                                (PMDG_NGX_ID_OFFSET + 80)	// uint8_t   // 0: STBY PWR  1: GND PWR ... 6: TEST
#define ELEC_BatSelector                                    (PMDG_NGX_ID_OFFSET + 81)	// uint8_t   // 0: OFF  1: BAT  2: ON
#define ELEC_CabUtilSw                                      (PMDG_NGX_ID_OFFSET + 82)	// boolean
#define ELEC_IFEPassSeatSw                                  (PMDG_NGX_ID_OFFSET + 83)	// boolean
#define ELEC_annunDRIVE_0                                   (PMDG_NGX_ID_OFFSET + 84)	// boolean
#define ELEC_annunDRIVE_1                                   (PMDG_NGX_ID_OFFSET + 85)	// boolean
#define ELEC_annunSTANDBY_POWER_OFF                         (PMDG_NGX_ID_OFFSET + 86)	// boolean
#define ELEC_IDGDisconnectSw_0                              (PMDG_NGX_ID_OFFSET + 87)	// boolean
#define ELEC_IDGDisconnectSw_1                              (PMDG_NGX_ID_OFFSET + 88)	// boolean
#define ELEC_StandbyPowerSelector                           (PMDG_NGX_ID_OFFSET + 89)	// uint8_t   // 0: BAT  1: OFF  2: AUTO
#define ELEC_annunGRD_POWER_AVAILABLE                       (PMDG_NGX_ID_OFFSET + 90)	// boolean
#define ELEC_GrdPwrSw                                       (PMDG_NGX_ID_OFFSET + 91)	// boolean
#define ELEC_BusTransSw_AUTO                                (PMDG_NGX_ID_OFFSET + 92)	// boolean
#define ELEC_GenSw_0                                        (PMDG_NGX_ID_OFFSET + 93)	// boolean
#define ELEC_GenSw_1                                        (PMDG_NGX_ID_OFFSET + 94)	// boolean
#define ELEC_APUGenSw_0                                     (PMDG_NGX_ID_OFFSET + 95)	// boolean
#define ELEC_APUGenSw_1                                     (PMDG_NGX_ID_OFFSET + 96)	// boolean
#define ELEC_annunTRANSFER_BUS_OFF_0                        (PMDG_NGX_ID_OFFSET + 97)	// boolean
#define ELEC_annunTRANSFER_BUS_OFF_1                        (PMDG_NGX_ID_OFFSET + 98)	// boolean
#define ELEC_annunSOURCE_OFF_0                              (PMDG_NGX_ID_OFFSET + 99)	// boolean
#define ELEC_annunSOURCE_OFF_1                              (PMDG_NGX_ID_OFFSET + 100)	// boolean
#define ELEC_annunGEN_BUS_OFF_0                             (PMDG_NGX_ID_OFFSET + 101)	// boolean
#define ELEC_annunGEN_BUS_OFF_1                             (PMDG_NGX_ID_OFFSET + 102)	// boolean
#define ELEC_annunAPU_GEN_OFF_BUS                           (PMDG_NGX_ID_OFFSET + 103)	// boolean

#define APU_EGTNeedle                                       (PMDG_NGX_ID_OFFSET + 104)	// float     // Value
#define APU_annunMAINT                                      (PMDG_NGX_ID_OFFSET + 105)	// boolean
#define APU_annunLOW_OIL_PRESSURE                           (PMDG_NGX_ID_OFFSET + 106)	// boolean
#define APU_annunFAULT                                      (PMDG_NGX_ID_OFFSET + 107)	// boolean
#define APU_annunOVERSPEED                                  (PMDG_NGX_ID_OFFSET + 108)	// boolean

#define OH_WiperLSelector                                   (PMDG_NGX_ID_OFFSET + 109)	// uint8_t   // 0: PARK  1: INT  2: LOW  3:HIGH
#define OH_WiperRSelector                                   (PMDG_NGX_ID_OFFSET + 110)	// uint8_t   // 0: PARK  1: INT  2: LOW  3:HIGH

#define LTS_CircuitBreakerKnob                              (PMDG_NGX_ID_OFFSET + 111)	// uint8_t   // Position 0...150
#define LTS_OvereadPanelKnob                                (PMDG_NGX_ID_OFFSET + 112)	// uint8_t   // Position 0...150

#define AIR_EquipCoolingSupplyNORM                          (PMDG_NGX_ID_OFFSET + 113)	// boolean
#define AIR_EquipCoolingExhaustNORM                         (PMDG_NGX_ID_OFFSET + 114)	// boolean
#define AIR_annunEquipCoolingSupplyOFF                      (PMDG_NGX_ID_OFFSET + 115)	// boolean
#define AIR_annunEquipCoolingExhaustOFF                     (PMDG_NGX_ID_OFFSET + 116)	// boolean

#define LTS_annunEmerNOT_ARMED                              (PMDG_NGX_ID_OFFSET + 117)	// boolean
#define LTS_EmerExitSelector                                (PMDG_NGX_ID_OFFSET + 118)	// uint8_t   // 0: OFF  1: ARMED  2: ON

#define COMM_NoSmokingSelector                              (PMDG_NGX_ID_OFFSET + 119)	// uint8_t   // 0: OFF  1: AUTO   2: ON
#define COMM_FastenBeltsSelector                            (PMDG_NGX_ID_OFFSET + 120)	// uint8_t   // 0: OFF  1: AUTO   2: ON
#define COMM_annunCALL                                      (PMDG_NGX_ID_OFFSET + 121)	// boolean
#define COMM_annunPA_IN_USE                                 (PMDG_NGX_ID_OFFSET + 122)	// boolean

#define ICE_annunOVERHEAT_0                                 (PMDG_NGX_ID_OFFSET + 123)	// boolean
#define ICE_annunOVERHEAT_1                                 (PMDG_NGX_ID_OFFSET + 124)	// boolean
#define ICE_annunOVERHEAT_2                                 (PMDG_NGX_ID_OFFSET + 125)	// boolean
#define ICE_annunOVERHEAT_3                                 (PMDG_NGX_ID_OFFSET + 126)	// boolean
#define ICE_annunON_0                                       (PMDG_NGX_ID_OFFSET + 127)	// boolean
#define ICE_annunON_1                                       (PMDG_NGX_ID_OFFSET + 128)	// boolean
#define ICE_annunON_2                                       (PMDG_NGX_ID_OFFSET + 129)	// boolean
#define ICE_annunON_3                                       (PMDG_NGX_ID_OFFSET + 130)	// boolean
#define ICE_WindowHeatSw_0                                  (PMDG_NGX_ID_OFFSET + 131)	// boolean
#define ICE_WindowHeatSw_1                                  (PMDG_NGX_ID_OFFSET + 132)	// boolean
#define ICE_WindowHeatSw_2                                  (PMDG_NGX_ID_OFFSET + 133)	// boolean
#define ICE_WindowHeatSw_3                                  (PMDG_NGX_ID_OFFSET + 134)	// boolean
#define ICE_annunCAPT_PITOT                                 (PMDG_NGX_ID_OFFSET + 135)	// boolean
#define ICE_annunL_ELEV_PITOT                               (PMDG_NGX_ID_OFFSET + 136)	// boolean
#define ICE_annunL_ALPHA_VANE                               (PMDG_NGX_ID_OFFSET + 137)	// boolean
#define ICE_annunL_TEMP_PROBE                               (PMDG_NGX_ID_OFFSET + 138)	// boolean
#define ICE_annunFO_PITOT                                   (PMDG_NGX_ID_OFFSET + 139)	// boolean
#define ICE_annunR_ELEV_PITOT                               (PMDG_NGX_ID_OFFSET + 140)	// boolean
#define ICE_annunR_ALPHA_VANE                               (PMDG_NGX_ID_OFFSET + 141)	// boolean
#define ICE_annunAUX_PITOT                                  (PMDG_NGX_ID_OFFSET + 142)	// boolean
#define ICE_TestProbeHeatSw_0                               (PMDG_NGX_ID_OFFSET + 143)	// boolean
#define ICE_TestProbeHeatSw_1                               (PMDG_NGX_ID_OFFSET + 144)	// boolean
#define ICE_annunVALVE_OPEN_0                               (PMDG_NGX_ID_OFFSET + 145)	// boolean
#define ICE_annunVALVE_OPEN_1                               (PMDG_NGX_ID_OFFSET + 146)	// boolean
#define ICE_annunCOWL_ANTI_ICE_0                            (PMDG_NGX_ID_OFFSET + 147)	// boolean
#define ICE_annunCOWL_ANTI_ICE_1                            (PMDG_NGX_ID_OFFSET + 148)	// boolean
#define ICE_annunCOWL_VALVE_OPEN_0                          (PMDG_NGX_ID_OFFSET + 149)	// boolean
#define ICE_annunCOWL_VALVE_OPEN_1                          (PMDG_NGX_ID_OFFSET + 150)	// boolean
#define ICE_WingAntiIceSw                                   (PMDG_NGX_ID_OFFSET + 151)	// boolean
#define ICE_EngAntiIceSw_0                                  (PMDG_NGX_ID_OFFSET + 152)	// boolean
#define ICE_EngAntiIceSw_1                                  (PMDG_NGX_ID_OFFSET + 153)	// boolean

#define HYD_annunLOW_PRESS_eng_0                            (PMDG_NGX_ID_OFFSET + 154)	// boolean
#define HYD_annunLOW_PRESS_eng_1                            (PMDG_NGX_ID_OFFSET + 155)	// boolean
#define HYD_annunLOW_PRESS_elec_0                           (PMDG_NGX_ID_OFFSET + 156)	// boolean
#define HYD_annunLOW_PRESS_elec_1                           (PMDG_NGX_ID_OFFSET + 157)	// boolean
#define HYD_annunOVERHEAT_elec_0                            (PMDG_NGX_ID_OFFSET + 158)	// boolean
#define HYD_annunOVERHEAT_elec_1                            (PMDG_NGX_ID_OFFSET + 159)	// boolean
#define HYD_PumpSw_eng_0                                    (PMDG_NGX_ID_OFFSET + 160)	// boolean
#define HYD_PumpSw_eng_1                                    (PMDG_NGX_ID_OFFSET + 161)	// boolean
#define HYD_PumpSw_elec_0                                   (PMDG_NGX_ID_OFFSET + 162)	// boolean
#define HYD_PumpSw_elec_1                                   (PMDG_NGX_ID_OFFSET + 163)	// boolean

#define AIR_TempSourceSelector                              (PMDG_NGX_ID_OFFSET + 164)	// uint8_t   // Positions 0..6
#define AIR_TrimAirSwitch                                   (PMDG_NGX_ID_OFFSET + 165)	// boolean
#define AIR_annunZoneTemp_0                                 (PMDG_NGX_ID_OFFSET + 166)	// boolean
#define AIR_annunZoneTemp_1                                 (PMDG_NGX_ID_OFFSET + 167)	// boolean
#define AIR_annunZoneTemp_2                                 (PMDG_NGX_ID_OFFSET + 168)	// boolean
#define AIR_annunDualBleed                                  (PMDG_NGX_ID_OFFSET + 169)	// boolean
#define AIR_annunRamDoorL                                   (PMDG_NGX_ID_OFFSET + 170)	// boolean
#define AIR_annunRamDoorR                                   (PMDG_NGX_ID_OFFSET + 171)	// boolean
#define AIR_RecircFanSwitch_0                               (PMDG_NGX_ID_OFFSET + 172)	// boolean
#define AIR_RecircFanSwitch_1                               (PMDG_NGX_ID_OFFSET + 173)	// boolean
#define AIR_PackSwitch_0                                    (PMDG_NGX_ID_OFFSET + 174)	// uint8_t   // 0=OFF  1=AUTO  2=HIGH
#define AIR_PackSwitch_1                                    (PMDG_NGX_ID_OFFSET + 175)	// uint8_t   // 0=OFF  1=AUTO  2=HIGH
#define AIR_BleedAirSwitch_0                                (PMDG_NGX_ID_OFFSET + 176)	// boolean
#define AIR_BleedAirSwitch_1                                (PMDG_NGX_ID_OFFSET + 177)	// boolean
#define AIR_APUBleedAirSwitch                               (PMDG_NGX_ID_OFFSET + 178)	// boolean
#define AIR_IsolationValveSwitch                            (PMDG_NGX_ID_OFFSET + 179)	// boolean
#define AIR_annunPackTripOff_0                              (PMDG_NGX_ID_OFFSET + 180)	// boolean
#define AIR_annunPackTripOff_1                              (PMDG_NGX_ID_OFFSET + 181)	// boolean
#define AIR_annunWingBodyOverheat_0                         (PMDG_NGX_ID_OFFSET + 182)	// boolean
#define AIR_annunWingBodyOverheat_1                         (PMDG_NGX_ID_OFFSET + 183)	// boolean
#define AIR_annunBleedTripOff_0                             (PMDG_NGX_ID_OFFSET + 184)	// boolean
#define AIR_annunBleedTripOff_1                             (PMDG_NGX_ID_OFFSET + 185)	// boolean
#define AIR_FltAltWindow                                    (PMDG_NGX_ID_OFFSET + 186)	// uint16_t
#define AIR_LandAltWindow                                   (PMDG_NGX_ID_OFFSET + 187)	// uint16_t
#define AIR_OutflowValveSwitch                              (PMDG_NGX_ID_OFFSET + 188)	// uint16_t  // 0=CLOSE  1=NEUTRAL  2=OPEN
#define AIR_PressurizationModeSelector                      (PMDG_NGX_ID_OFFSET + 189)	// uint16_t  // 0=AUTO  1=ALTN  2=MAN

#define LTS_LandingLtRetractableSw_0                        (PMDG_NGX_ID_OFFSET + 190)	// uint8_t   // 0: RETRACT  1: EXTEND  2: ON
#define LTS_LandingLtRetractableSw_1                        (PMDG_NGX_ID_OFFSET + 191)	// uint8_t   // 0: RETRACT  1: EXTEND  2: ON
#define LTS_LandingLtFixedSw_0                              (PMDG_NGX_ID_OFFSET + 192)	// boolean
#define LTS_LandingLtFixedSw_1                              (PMDG_NGX_ID_OFFSET + 193)	// boolean
#define LTS_RunwayTurnoffSw_0                               (PMDG_NGX_ID_OFFSET + 194)	// boolean
#define LTS_RunwayTurnoffSw_1                               (PMDG_NGX_ID_OFFSET + 195)	// boolean
#define LTS_TaxiSw                                          (PMDG_NGX_ID_OFFSET + 196)	// boolean

#define APU_Selector                                        (PMDG_NGX_ID_OFFSET + 197)	// uint8_t   // 0: OFF  1: ON  2: START

#define ENG_StartSelector_0                                 (PMDG_NGX_ID_OFFSET + 198)	// uint8_t   // 0: GRD  1: OFF  2: CONT  3: FLT
#define ENG_StartSelector_1                                 (PMDG_NGX_ID_OFFSET + 199)	// uint8_t   // 0: GRD  1: OFF  2: CONT  3: FLT
#define ENG_IgnitionSelector                                (PMDG_NGX_ID_OFFSET + 200)	// uint8_t   // 0: IGN L  1: BOTH  2: IGN R

#define LTS_LogoSw                                          (PMDG_NGX_ID_OFFSET + 201)	// boolean
#define LTS_PositionSw                                      (PMDG_NGX_ID_OFFSET + 202)	// uint8_t   // 0: STEADY  1: OFF  2: STROBE&STEADY
#define LTS_AntiCollisionSw                                 (PMDG_NGX_ID_OFFSET + 203)	// boolean
#define LTS_WingSw                                          (PMDG_NGX_ID_OFFSET + 204)	// boolean
#define LTS_WheelWellSw                                     (PMDG_NGX_ID_OFFSET + 205)	// boolean

#define WARN_annunFIRE_WARN_0                               (PMDG_NGX_ID_OFFSET + 206)	// boolean
#define WARN_annunFIRE_WARN_1                               (PMDG_NGX_ID_OFFSET + 207)	// boolean
#define WARN_annunMASTER_CAUTION_0                          (PMDG_NGX_ID_OFFSET + 208)	// boolean
#define WARN_annunMASTER_CAUTION_1                          (PMDG_NGX_ID_OFFSET + 209)	// boolean
#define WARN_annunFLT_CONT                                  (PMDG_NGX_ID_OFFSET + 210)	// boolean
#define WARN_annunIRS                                       (PMDG_NGX_ID_OFFSET + 211)	// boolean
#define WARN_annunFUEL                                      (PMDG_NGX_ID_OFFSET + 212)	// boolean
#define WARN_annunELEC                                      (PMDG_NGX_ID_OFFSET + 213)	// boolean
#define WARN_annunAPU                                       (PMDG_NGX_ID_OFFSET + 214)	// boolean
#define WARN_annunOVHT_DET                                  (PMDG_NGX_ID_OFFSET + 215)	// boolean
#define WARN_annunANTI_ICE                                  (PMDG_NGX_ID_OFFSET + 216)	// boolean
#define WARN_annunHYD                                       (PMDG_NGX_ID_OFFSET + 217)	// boolean
#define WARN_annunDOORS                                     (PMDG_NGX_ID_OFFSET + 218)	// boolean
#define WARN_annunENG                                       (PMDG_NGX_ID_OFFSET + 219)	// boolean
#define WARN_annunOVERHEAD                                  (PMDG_NGX_ID_OFFSET + 220)	// boolean
#define WARN_annunAIR_COND                                  (PMDG_NGX_ID_OFFSET + 221)	// boolean

#define EFIS_MinsSelBARO_0                                  (PMDG_NGX_ID_OFFSET + 222)	// boolean
#define EFIS_MinsSelBARO_1                                  (PMDG_NGX_ID_OFFSET + 223)	// boolean
#define EFIS_BaroSelHPA_0                                   (PMDG_NGX_ID_OFFSET + 224)	// boolean
#define EFIS_BaroSelHPA_1                                   (PMDG_NGX_ID_OFFSET + 225)	// boolean
#define EFIS_VORADFSel1_0                                   (PMDG_NGX_ID_OFFSET + 226)	// uint8_t   // 0: VOR  1: OFF  2: ADF
#define EFIS_VORADFSel1_1                                   (PMDG_NGX_ID_OFFSET + 227)	// uint8_t   // 0: VOR  1: OFF  2: ADF
#define EFIS_VORADFSel2_0                                   (PMDG_NGX_ID_OFFSET + 228)	// uint8_t   // 0: VOR  1: OFF  2: ADF
#define EFIS_VORADFSel2_1                                   (PMDG_NGX_ID_OFFSET + 229)	// uint8_t   // 0: VOR  1: OFF  2: ADF
#define EFIS_ModeSel_0                                      (PMDG_NGX_ID_OFFSET + 230)	// uint8_t   // 0: APP  1: VOR  2: MAP  3: PLAn
#define EFIS_ModeSel_1                                      (PMDG_NGX_ID_OFFSET + 231)	// uint8_t   // 0: APP  1: VOR  2: MAP  3: PLAn
#define EFIS_RangeSel_0                                     (PMDG_NGX_ID_OFFSET + 232)	// uint8_t   // 0: 5 ... 7: 640
#define EFIS_RangeSel_1                                     (PMDG_NGX_ID_OFFSET + 233)	// uint8_t   // 0: 5 ... 7: 640

#define MCP_Course_0                                        (PMDG_NGX_ID_OFFSET + 234)	// uint16_t
#define MCP_Course_1                                        (PMDG_NGX_ID_OFFSET + 235)	// uint16_t
#define MCP_IASMach                                         (PMDG_NGX_ID_OFFSET + 236)	// float     // Mach if < 10.0
#define MCP_IASBlank                                        (PMDG_NGX_ID_OFFSET + 237)	// boolean
#define MCP_IASOverspeedFlash                               (PMDG_NGX_ID_OFFSET + 238)	// boolean
#define MCP_IASUnderspeedFlash                              (PMDG_NGX_ID_OFFSET + 239)	// boolean
#define MCP_Heading                                         (PMDG_NGX_ID_OFFSET + 240)	// uint16_t
#define MCP_Altitude                                        (PMDG_NGX_ID_OFFSET + 241)	// uint16_t
#define MCP_VertSpeed                                       (PMDG_NGX_ID_OFFSET + 242)	// int16_t
#define MCP_VertSpeedBlank                                  (PMDG_NGX_ID_OFFSET + 243)	// boolean
#define MCP_FDSw_0                                          (PMDG_NGX_ID_OFFSET + 244)	// boolean
#define MCP_FDSw_1                                          (PMDG_NGX_ID_OFFSET + 245)	// boolean
#define MCP_ATArmSw                                         (PMDG_NGX_ID_OFFSET + 246)	// boolean
#define MCP_BankLimitSel                                    (PMDG_NGX_ID_OFFSET + 247)	// uint8_t   // 0: 10 ... 4: 30
#define MCP_DisengageBar                                    (PMDG_NGX_ID_OFFSET + 248)	// boolean
#define MCP_annunFD_0                                       (PMDG_NGX_ID_OFFSET + 249)	// boolean
#define MCP_annunFD_1                                       (PMDG_NGX_ID_OFFSET + 250)	// boolean
#define MCP_annunATArm                                      (PMDG_NGX_ID_OFFSET + 251)	// boolean
#define MCP_annunN1                                         (PMDG_NGX_ID_OFFSET + 252)	// boolean
#define MCP_annunSPEED                                      (PMDG_NGX_ID_OFFSET + 253)	// boolean
#define MCP_annunVNAV                                       (PMDG_NGX_ID_OFFSET + 254)	// boolean
#define MCP_annunLVL_CHG                                    (PMDG_NGX_ID_OFFSET + 255)	// boolean
#define MCP_annunHDG_SEL                                    (PMDG_NGX_ID_OFFSET + 256)	// boolean
#define MCP_annunLNAV                                       (PMDG_NGX_ID_OFFSET + 257)	// boolean
#define MCP_annunVOR_LOC                                    (PMDG_NGX_ID_OFFSET + 258)	// boolean
#define MCP_annunAPP                                        (PMDG_NGX_ID_OFFSET + 259)	// boolean
#define MCP_annunALT_HOLD                                   (PMDG_NGX_ID_OFFSET + 260)	// boolean
#define MCP_annunVS                                         (PMDG_NGX_ID_OFFSET + 261)	// boolean
#define MCP_annunCMD_A                                      (PMDG_NGX_ID_OFFSET + 262)	// boolean
#define MCP_annunCWS_A                                      (PMDG_NGX_ID_OFFSET + 263)	// boolean
#define MCP_annunCMD_B                                      (PMDG_NGX_ID_OFFSET + 264)	// boolean
#define MCP_annunCWS_B                                      (PMDG_NGX_ID_OFFSET + 265)	// boolean

#define MAIN_NoseWheelSteeringSwNORM                        (PMDG_NGX_ID_OFFSET + 266)	// boolean   // false: ALT
#define MAIN_annunBELOW_GS_0                                (PMDG_NGX_ID_OFFSET + 267)	// boolean
#define MAIN_annunBELOW_GS_1                                (PMDG_NGX_ID_OFFSET + 268)	// boolean
#define MAIN_MainPanelDUSel_0                               (PMDG_NGX_ID_OFFSET + 269)	// uint8_t   // 0: OUTBD PFD ... 4 MFD for Capt; reverse sequence for FO
#define MAIN_MainPanelDUSel_1                               (PMDG_NGX_ID_OFFSET + 270)	// uint8_t   // 0: OUTBD PFD ... 4 MFD for Capt; reverse sequence for FO
#define MAIN_LowerDUSel_0                                   (PMDG_NGX_ID_OFFSET + 271)	// uint8_t   // 0: ENG PRI ... 2 ND for Capt; reverse sequence for FO
#define MAIN_LowerDUSel_1                                   (PMDG_NGX_ID_OFFSET + 272)	// uint8_t   // 0: ENG PRI ... 2 ND for Capt; reverse sequence for FO
#define MAIN_annunAP_0                                      (PMDG_NGX_ID_OFFSET + 273)	// boolean
#define MAIN_annunAP_1                                      (PMDG_NGX_ID_OFFSET + 274)	// boolean
#define MAIN_annunAT_0                                      (PMDG_NGX_ID_OFFSET + 275)	// boolean
#define MAIN_annunAT_1                                      (PMDG_NGX_ID_OFFSET + 276)	// boolean
#define MAIN_annunFMC_0                                     (PMDG_NGX_ID_OFFSET + 277)	// boolean
#define MAIN_annunFMC_1                                     (PMDG_NGX_ID_OFFSET + 278)	// boolean
#define MAIN_DisengageTestSelector_0                        (PMDG_NGX_ID_OFFSET + 279)	// uint8_t   // 0: 1  1: OFF  2: 2
#define MAIN_DisengageTestSelector_1                        (PMDG_NGX_ID_OFFSET + 280)	// uint8_t   // 0: 1  1: OFF  2: 2
#define MAIN_annunSPEEDBRAKE_ARMED                          (PMDG_NGX_ID_OFFSET + 281)	// boolean
#define MAIN_annunSPEEDBRAKE_DO_NOT_ARM                     (PMDG_NGX_ID_OFFSET + 282)	// boolean
#define MAIN_annunSPEEDBRAKE_EXTENDED                       (PMDG_NGX_ID_OFFSET + 283)	// boolean
#define MAIN_annunSTAB_OUT_OF_TRIM                          (PMDG_NGX_ID_OFFSET + 284)	// boolean
#define MAIN_LightsSelector                                 (PMDG_NGX_ID_OFFSET + 285)	// uint8_t   // 0: TEST  1: BRT  2: DIM
#define MAIN_RMISelector1_VOR                               (PMDG_NGX_ID_OFFSET + 286)	// boolean
#define MAIN_RMISelector2_VOR                               (PMDG_NGX_ID_OFFSET + 287)	// boolean
#define MAIN_N1SetSelector                                  (PMDG_NGX_ID_OFFSET + 288)	// uint8_t   // 0: 2  1: 1  2: AUTO  3: BOTH
#define MAIN_SpdRefSelector                                 (PMDG_NGX_ID_OFFSET + 289)	// uint8_t   // 0: SET  1: AUTO  2: V1  3: VR  4: WT  5: VREF  6: Bug
#define MAIN_FuelFlowSelector                               (PMDG_NGX_ID_OFFSET + 290)	// uint8_t   // 0: RESET  1: RATE  2: USED
#define MAIN_AutobrakeSelector                              (PMDG_NGX_ID_OFFSET + 291)	// uint8_t   // 0: RTO  1: OFF ... 5: MAX
#define MAIN_annunANTI_SKID_INOP                            (PMDG_NGX_ID_OFFSET + 292)	// boolean
#define MAIN_annunAUTO_BRAKE_DISARM                         (PMDG_NGX_ID_OFFSET + 293)	// boolean
#define MAIN_annunLE_FLAPS_TRANSIT                          (PMDG_NGX_ID_OFFSET + 294)	// boolean
#define MAIN_annunLE_FLAPS_EXT                              (PMDG_NGX_ID_OFFSET + 295)	// boolean
#define MAIN_TEFlapsNeedle_0                                (PMDG_NGX_ID_OFFSET + 296)	// float     // Value
#define MAIN_TEFlapsNeedle_1                                (PMDG_NGX_ID_OFFSET + 297)	// float     // Value
#define MAIN_annunGEAR_transit_0                            (PMDG_NGX_ID_OFFSET + 298)	// boolean
#define MAIN_annunGEAR_transit_1                            (PMDG_NGX_ID_OFFSET + 299)	// boolean
#define MAIN_annunGEAR_transit_2                            (PMDG_NGX_ID_OFFSET + 300)	// boolean
#define MAIN_annunGEAR_locked_0                             (PMDG_NGX_ID_OFFSET + 301)	// boolean
#define MAIN_annunGEAR_locked_1                             (PMDG_NGX_ID_OFFSET + 302)	// boolean
#define MAIN_annunGEAR_locked_2                             (PMDG_NGX_ID_OFFSET + 303)	// boolean
#define MAIN_GearLever                                      (PMDG_NGX_ID_OFFSET + 304)	// uint8_t   // 0: UP  1: OFF  2: DOWN
#define MAIN_BrakePressNeedle                               (PMDG_NGX_ID_OFFSET + 305)	// float     // Value

#define HGS_annun_AIII                                      (PMDG_NGX_ID_OFFSET + 306)	// boolean
#define HGS_annun_NO_AIII                                   (PMDG_NGX_ID_OFFSET + 307)	// boolean
#define HGS_annun_FLARE                                     (PMDG_NGX_ID_OFFSET + 308)	// boolean
#define HGS_annun_RO                                        (PMDG_NGX_ID_OFFSET + 309)	// boolean
#define HGS_annun_RO_CTN                                    (PMDG_NGX_ID_OFFSET + 310)	// boolean
#define HGS_annun_RO_ARM                                    (PMDG_NGX_ID_OFFSET + 311)	// boolean
#define HGS_annun_TO                                        (PMDG_NGX_ID_OFFSET + 312)	// boolean
#define HGS_annun_TO_CTN                                    (PMDG_NGX_ID_OFFSET + 313)	// boolean
#define HGS_annun_APCH                                      (PMDG_NGX_ID_OFFSET + 314)	// boolean
#define HGS_annun_TO_WARN                                   (PMDG_NGX_ID_OFFSET + 315)	// boolean
#define HGS_annun_Bar                                       (PMDG_NGX_ID_OFFSET + 316)	// boolean
#define HGS_annun_FAIL                                      (PMDG_NGX_ID_OFFSET + 317)	// boolean

#define LTS_MainPanelKnob_0                                 (PMDG_NGX_ID_OFFSET + 318)	// uint8_t   // Position 0...150
#define LTS_MainPanelKnob_1                                 (PMDG_NGX_ID_OFFSET + 319)	// uint8_t   // Position 0...150
#define LTS_BackgroundKnob                                  (PMDG_NGX_ID_OFFSET + 320)	// uint8_t   // Position 0...150
#define LTS_AFDSFloodKnob                                   (PMDG_NGX_ID_OFFSET + 321)	// uint8_t   // Position 0...150
#define LTS_OutbdDUBrtKnob_0                                (PMDG_NGX_ID_OFFSET + 322)	// uint8_t   // Position 0...127
#define LTS_OutbdDUBrtKnob_1                                (PMDG_NGX_ID_OFFSET + 323)	// uint8_t   // Position 0...127
#define LTS_InbdDUBrtKnob_0                                 (PMDG_NGX_ID_OFFSET + 324)	// uint8_t   // Position 0...127
#define LTS_InbdDUBrtKnob_1                                 (PMDG_NGX_ID_OFFSET + 325)	// uint8_t   // Position 0...127
#define LTS_InbdDUMapBrtKnob_0                              (PMDG_NGX_ID_OFFSET + 326)	// uint8_t   // Position 0...127
#define LTS_InbdDUMapBrtKnob_1                              (PMDG_NGX_ID_OFFSET + 327)	// uint8_t   // Position 0...127
#define LTS_UpperDUBrtKnob                                  (PMDG_NGX_ID_OFFSET + 328)	// uint8_t   // Position 0...127
#define LTS_LowerDUBrtKnob                                  (PMDG_NGX_ID_OFFSET + 329)	// uint8_t   // Position 0...127
#define LTS_LowerDUMapBrtKnob                               (PMDG_NGX_ID_OFFSET + 330)	// uint8_t   // Position 0...127

#define GPWS_annunINOP                                      (PMDG_NGX_ID_OFFSET + 331)	// boolean
#define GPWS_FlapInhibitSw_NORM                             (PMDG_NGX_ID_OFFSET + 332)	// boolean
#define GPWS_GearInhibitSw_NORM                             (PMDG_NGX_ID_OFFSET + 333)	// boolean
#define GPWS_TerrInhibitSw_NORM                             (PMDG_NGX_ID_OFFSET + 334)	// boolean

#define CDU_annunEXEC_0                                     (PMDG_NGX_ID_OFFSET + 335)	// boolean
#define CDU_annunEXEC_1                                     (PMDG_NGX_ID_OFFSET + 336)	// boolean
#define CDU_annunCALL_0                                     (PMDG_NGX_ID_OFFSET + 337)	// boolean
#define CDU_annunCALL_1                                     (PMDG_NGX_ID_OFFSET + 338)	// boolean
#define CDU_annunFAIL_0                                     (PMDG_NGX_ID_OFFSET + 339)	// boolean
#define CDU_annunFAIL_1                                     (PMDG_NGX_ID_OFFSET + 340)	// boolean
#define CDU_annunMSG_0                                      (PMDG_NGX_ID_OFFSET + 341)	// boolean
#define CDU_annunMSG_1                                      (PMDG_NGX_ID_OFFSET + 342)	// boolean
#define CDU_annunOFST_0                                     (PMDG_NGX_ID_OFFSET + 343)	// boolean
#define CDU_annunOFST_1                                     (PMDG_NGX_ID_OFFSET + 344)	// boolean
#define CDU_BrtKnob_0                                       (PMDG_NGX_ID_OFFSET + 345)	// uint8_t   // Position 0...127
#define CDU_BrtKnob_1                                       (PMDG_NGX_ID_OFFSET + 346)	// uint8_t   // Position 0...127

#define TRIM_StabTrimMainElecSw_NORMAL                      (PMDG_NGX_ID_OFFSET + 347)	// boolean
#define TRIM_StabTrimAutoPilotSw_NORMAL                     (PMDG_NGX_ID_OFFSET + 348)	// boolean

#define PED_annunParkingBrake                               (PMDG_NGX_ID_OFFSET + 349)	// boolean

#define FIRE_OvhtDetSw_0                                    (PMDG_NGX_ID_OFFSET + 350)	// uint8_t   // 0: A  1: NORMAL  2: B
#define FIRE_OvhtDetSw_1                                    (PMDG_NGX_ID_OFFSET + 351)	// uint8_t   // 0: A  1: NORMAL  2: B
#define FIRE_annunENG_OVERHEAT_0                            (PMDG_NGX_ID_OFFSET + 352)	// boolean
#define FIRE_annunENG_OVERHEAT_1                            (PMDG_NGX_ID_OFFSET + 353)	// boolean
#define FIRE_DetTestSw                                      (PMDG_NGX_ID_OFFSET + 354)	// uint8_t   // 0: FAULT/INOP  1: neutral  2: OVHT/FIRE
#define FIRE_HandlePos_0                                    (PMDG_NGX_ID_OFFSET + 355)	// uint8_t   // 0: In  1: Blocked  2: Out  3: Turned Left  4: Turned right
#define FIRE_HandlePos_1                                    (PMDG_NGX_ID_OFFSET + 356)	// uint8_t   // 0: In  1: Blocked  2: Out  3: Turned Left  4: Turned right
#define FIRE_HandlePos_2                                    (PMDG_NGX_ID_OFFSET + 357)	// uint8_t   // 0: In  1: Blocked  2: Out  3: Turned Left  4: Turned right
#define FIRE_HandleIlluminated_0                            (PMDG_NGX_ID_OFFSET + 358)	// boolean
#define FIRE_HandleIlluminated_1                            (PMDG_NGX_ID_OFFSET + 359)	// boolean
#define FIRE_HandleIlluminated_2                            (PMDG_NGX_ID_OFFSET + 360)	// boolean
#define FIRE_annunWHEEL_WELL                                (PMDG_NGX_ID_OFFSET + 361)	// boolean
#define FIRE_annunFAULT                                     (PMDG_NGX_ID_OFFSET + 362)	// boolean
#define FIRE_annunAPU_DET_INOP                              (PMDG_NGX_ID_OFFSET + 363)	// boolean
#define FIRE_annunAPU_BOTTLE_DISCHARGE                      (PMDG_NGX_ID_OFFSET + 364)	// boolean
#define FIRE_annunBOTTLE_DISCHARGE_0                        (PMDG_NGX_ID_OFFSET + 365)	// boolean
#define FIRE_annunBOTTLE_DISCHARGE_1                        (PMDG_NGX_ID_OFFSET + 366)	// boolean
#define FIRE_ExtinguisherTestSw                             (PMDG_NGX_ID_OFFSET + 367)	// uint8_t   // 0: 1  1: neutral  2: 2
#define FIRE_annunExtinguisherTest_0                        (PMDG_NGX_ID_OFFSET + 368)	// boolean   // Left, Right, APU
#define FIRE_annunExtinguisherTest_1                        (PMDG_NGX_ID_OFFSET + 369)	// boolean   // Left, Right, APU
#define FIRE_annunExtinguisherTest_2                        (PMDG_NGX_ID_OFFSET + 370)	// boolean   // Left, Right, APU

#define CARGO_annunExtTest_0                                (PMDG_NGX_ID_OFFSET + 371)	// boolean   // Fwd, Aft
#define CARGO_annunExtTest_1                                (PMDG_NGX_ID_OFFSET + 372)	// boolean   // Fwd, Aft
#define CARGO_DetSelect_0                                   (PMDG_NGX_ID_OFFSET + 373)	// uint8_t   // 0: A  1: ORM  2: B
#define CARGO_DetSelect_1                                   (PMDG_NGX_ID_OFFSET + 374)	// uint8_t   // 0: A  1: ORM  2: B
#define CARGO_ArmedSw_0                                     (PMDG_NGX_ID_OFFSET + 375)	// boolean
#define CARGO_ArmedSw_1                                     (PMDG_NGX_ID_OFFSET + 376)	// boolean
#define CARGO_annunFWD                                      (PMDG_NGX_ID_OFFSET + 377)	// boolean
#define CARGO_annunAFT                                      (PMDG_NGX_ID_OFFSET + 378)	// boolean
#define CARGO_annunDETECTOR_FAULT                           (PMDG_NGX_ID_OFFSET + 379)	// boolean
#define CARGO_annunDISCH                                    (PMDG_NGX_ID_OFFSET + 380)	// boolean

#define HGS_annunRWY                                        (PMDG_NGX_ID_OFFSET + 381)	// boolean
#define HGS_annunGS                                         (PMDG_NGX_ID_OFFSET + 382)	// boolean
#define HGS_annunFAULT                                      (PMDG_NGX_ID_OFFSET + 383)	// boolean
#define HGS_annunCLR                                        (PMDG_NGX_ID_OFFSET + 384)	// boolean

#define XPDR_XpndrSelector_1                                (PMDG_NGX_ID_OFFSET + 385)	// boolean   // false: 1  true: 2
#define XPDR_AltSourceSel_1                                 (PMDG_NGX_ID_OFFSET + 386)	// boolean   // false: 1  true: 2
#define XPDR_ModeSel                                        (PMDG_NGX_ID_OFFSET + 387)	// uint8_t   // 0: STBY  1: ALT RPTG OFF ... 4: TA/RA
#define XPDR_annunFAIL                                      (PMDG_NGX_ID_OFFSET + 388)	// boolean

#define LTS_PedFloodKnob                                    (PMDG_NGX_ID_OFFSET + 389)	// uint8_t   // Position 0...150
#define LTS_PedPanelKnob                                    (PMDG_NGX_ID_OFFSET + 390)	// uint8_t   // Position 0...150

#define TRIM_StabTrimSw_NORMAL                              (PMDG_NGX_ID_OFFSET + 391)	// boolean

#define PED_annunLOCK_FAIL                                  (PMDG_NGX_ID_OFFSET + 392)	// boolean
#define PED_annunAUTO_UNLK                                  (PMDG_NGX_ID_OFFSET + 393)	// boolean
#define PED_FltDkDoorSel                                    (PMDG_NGX_ID_OFFSET + 394)	// uint8_t   // 0: UNLKD  1 AUTO pushed in  2: AUTO  3: DENY

#define ENG_StartValve_0                                    (PMDG_NGX_ID_OFFSET + 395)	// boolean   // true: valve open
#define ENG_StartValve_1                                    (PMDG_NGX_ID_OFFSET + 396)	// boolean   // true: valve open

#define AIR_DuctPress_0                                     (PMDG_NGX_ID_OFFSET + 397)	// float     // PSI
#define AIR_DuctPress_1                                     (PMDG_NGX_ID_OFFSET + 398)	// float     // PSI

#define COMM_Attend_PressCount                              (PMDG_NGX_ID_OFFSET + 399)	// uint8_t   // incremented with each button press
#define COMM_GrdCall_PressCount                             (PMDG_NGX_ID_OFFSET + 400)	// uint8_t   // incremented with each button press
#define COMM_SelectedMic_0                                  (PMDG_NGX_ID_OFFSET + 401)	// uint8_t   // array: 0=capt, 1=F/O, 2=observer.
#define COMM_SelectedMic_1                                  (PMDG_NGX_ID_OFFSET + 402)	// uint8_t   // array: 0=capt, 1=F/O, 2=observer.
#define COMM_SelectedMic_2                                  (PMDG_NGX_ID_OFFSET + 403)	// uint8_t   // array: 0=capt, 1=F/O, 2=observer.

#define FUEL_QtyCenter                                      (PMDG_NGX_ID_OFFSET + 404)	// float     // LBS
#define FUEL_QtyLeft                                        (PMDG_NGX_ID_OFFSET + 405)	// float     // LBS
#define FUEL_QtyRight                                       (PMDG_NGX_ID_OFFSET + 406)	// float     // LBS

#define IRS_aligned                                         (PMDG_NGX_ID_OFFSET + 407)	// boolean   // at least one IRU is aligned

#define AircraftModel                                       (PMDG_NGX_ID_OFFSET + 408)	// uint8_t   // 1: -600  2: -700  3: -700WL  4: -800  5: -800WL  6: -900  7: -900ER
#define WeightInKg                                          (PMDG_NGX_ID_OFFSET + 409)	// boolean   // false: LBS  true: KG

#define GPWS_V1CallEnabled                                  (PMDG_NGX_ID_OFFSET + 410)	// boolean   // GPWS V1 callout option enabled

#define GroundConnAvailable                                 (PMDG_NGX_ID_OFFSET + 411)	// boolean   // can connect/disconnect ground air/electrics

#define FMC_TakeoffFlaps                                    (PMDG_NGX_ID_OFFSET + 412)	// uint8_t   // degrees, 0 if not set
#define FMC_V1                                              (PMDG_NGX_ID_OFFSET + 413)	// uint8_t   // knots, 0 if not set
#define FMC_VR                                              (PMDG_NGX_ID_OFFSET + 414)	// uint8_t   // knots, 0 if not set
#define FMC_V2                                              (PMDG_NGX_ID_OFFSET + 415)	// uint8_t   // knots, 0 if not set
#define FMC_LandingFlaps                                    (PMDG_NGX_ID_OFFSET + 416)	// uint8_t   // degrees, 0 if not set
#define FMC_LandingVREF                                     (PMDG_NGX_ID_OFFSET + 417)	// uint8_t   // knots, 0 if not set
#define FMC_CruiseAlt                                       (PMDG_NGX_ID_OFFSET + 418)	// uint16_t  // ft, 0 if not set
#define FMC_LandingAltitude                                 (PMDG_NGX_ID_OFFSET + 419)	// int16_t   // ft; -32767 if not available
#define FMC_TransitionAlt                                   (PMDG_NGX_ID_OFFSET + 420)	// uint16_t  // ft
#define FMC_TransitionLevel                                 (PMDG_NGX_ID_OFFSET + 421)	// uint16_t  // ft
#define FMC_PerfInputComplete                               (PMDG_NGX_ID_OFFSET + 422)	// boolean
#define FMC_DistanceToTOD                                   (PMDG_NGX_ID_OFFSET + 423)	// float     // nm; 0.0 if passed, negative if n/a
#define FMC_DistanceToDest                                  (PMDG_NGX_ID_OFFSET + 424)	// float     // nm; negative if n/a
#define FMC_flightNumber                                    (PMDG_NGX_ID_OFFSET + 425)	// char

// New from service SP2

#define COMM_ReceiverSwitches_0                             (PMDG_NGX_ID_OFFSET + 426)	// Bit flags for selector receivers (see ACP_SEL_RECV_VHF1 etc): [0]=Capt, [1]=FO, [2]=Overhead
#define COMM_ReceiverSwitches_1                             (PMDG_NGX_ID_OFFSET + 427)	// Bit flags for selector receivers (see ACP_SEL_RECV_VHF1 etc): [0]=Capt, [1]=FO, [2]=Overhead
#define COMM_ReceiverSwitches_2                             (PMDG_NGX_ID_OFFSET + 428)	// Bit flags for selector receivers (see ACP_SEL_RECV_VHF1 etc): [0]=Capt, [1]=FO, [2]=Overhead
#define MAIN_annunAP_Amber_0                                (PMDG_NGX_ID_OFFSET + 429)	// Amber color
#define MAIN_annunAP_Amber_1                                (PMDG_NGX_ID_OFFSET + 430)	// Amber color
#define MAIN_annunAT_Amber_0                                (PMDG_NGX_ID_OFFSET + 431)	// Amber color
#define MAIN_annunAT_Amber_1                                (PMDG_NGX_ID_OFFSET + 432)	// Amber color
#define ICE_WindowHeatTestSw                                (PMDG_NGX_ID_OFFSET + 433)	// 0: OVHT  1: Neutral  2: PWR TEST
#define DOOR_annunFWD_ENTRY                                 (PMDG_NGX_ID_OFFSET + 434)
#define DOOR_annunFWD_SERVICE                               (PMDG_NGX_ID_OFFSET + 435)
#define DOOR_annunAIRSTAIR                                  (PMDG_NGX_ID_OFFSET + 436)
#define DOOR_annunLEFT_FWD_OVERWING                         (PMDG_NGX_ID_OFFSET + 437)
#define DOOR_annunRIGHT_FWD_OVERWING                        (PMDG_NGX_ID_OFFSET + 438)
#define DOOR_annunFWD_CARGO                                 (PMDG_NGX_ID_OFFSET + 439)
#define DOOR_annunEQUIP                                     (PMDG_NGX_ID_OFFSET + 440)
#define DOOR_annunLEFT_AFT_OVERWING                         (PMDG_NGX_ID_OFFSET + 441)
#define DOOR_annunRIGHT_AFT_OVERWING                        (PMDG_NGX_ID_OFFSET + 442)
#define DOOR_annunAFT_CARGO                                 (PMDG_NGX_ID_OFFSET + 443)
#define DOOR_annunAFT_ENTRY                                 (PMDG_NGX_ID_OFFSET + 444)
#define DOOR_annunAFT_SERVICE                               (PMDG_NGX_ID_OFFSET + 445)
#define AIR_annunAUTO_FAIL                                  (PMDG_NGX_ID_OFFSET + 446)
#define AIR_annunOFFSCHED_DESCENT                           (PMDG_NGX_ID_OFFSET + 447)
#define AIR_annunALTN                                       (PMDG_NGX_ID_OFFSET + 448)
#define AIR_annunMANUAL                                     (PMDG_NGX_ID_OFFSET + 449)
#define AIR_CabinAltNeedle                                  (PMDG_NGX_ID_OFFSET + 440)	// Value - ft
#define AIR_CabinDPNeedle                                   (PMDG_NGX_ID_OFFSET + 451)	// Value - PSI
#define AIR_CabinVSNeedle                                   (PMDG_NGX_ID_OFFSET + 452)	// Value - ft/min
#define AIR_CabinValveNeedle                                (PMDG_NGX_ID_OFFSET + 453)	// Value - 0 (closed) .. 1 (open)
#define AIR_TemperatureNeedle                               (PMDG_NGX_ID_OFFSET + 454)	// Value - degrees C
#define AIR_DuctPressNeedle_0                               (PMDG_NGX_ID_OFFSET + 455)	// Value - degrees C
#define AIR_DuctPressNeedle_1                               (PMDG_NGX_ID_OFFSET + 456)	// Value - degrees C
#define ELEC_MeterDisplayTop                                (PMDG_NGX_ID_OFFSET + 457)	// Top line of the display: 3 groups of 4 digits (or symbols) + terminating zero (max 13 chars)
#define ELEC_MeterDisplayBottom                             (PMDG_NGX_ID_OFFSET + 458)	// Bottom line of the display (max 13 chars)
#define IRS_DisplayLeft                                     (PMDG_NGX_ID_OFFSET + 459)	// Left display string, zero terminated (max 7 chars)
#define IRS_DisplayRight                                    (PMDG_NGX_ID_OFFSET + 460)	// Right display string, zero terminated (max 8 chars)
#define IRS_DisplayShowsDots                                (PMDG_NGX_ID_OFFSET + 461)	// True if the degrees and decimal dot symbols are shown on the IRS display


#endif
