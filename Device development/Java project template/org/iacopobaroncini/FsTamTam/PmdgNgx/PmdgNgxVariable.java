package org.iacopobaroncini.FsTamTam.PmdgNgx;

public class PmdgNgxVariable {

    //
    // Data source: PMDG_NGX_SDK.h (SP2)
    //

    private static final int PMDG_NGX_ID_OFFSET                                     = 0x00011000;

    public static final int CDU_ScreenData_0                                       = (PMDG_NGX_ID_OFFSET + 1000); // string - custom coding;
    public static final int CDU_ScreenData_1                                       = (PMDG_NGX_ID_OFFSET + 1001); // string - custom coding;

    public static final int IRS_DisplaySelector                                    = (PMDG_NGX_ID_OFFSET + 1); // uint8_t; // Positions 0..4;
    public static final int IRS_SysDisplay_R                                       = (PMDG_NGX_ID_OFFSET + 2); // boolean; // false: L true: R;
    public static final int IRS_annunGPS                                           = (PMDG_NGX_ID_OFFSET + 3); // boolean;
    public static final int IRS_annunALIGN_0                                       = (PMDG_NGX_ID_OFFSET + 4); // boolean;
    public static final int IRS_annunALIGN_1                                       = (PMDG_NGX_ID_OFFSET + 5); // boolean;
    public static final int IRS_annunON_DC_0                                       = (PMDG_NGX_ID_OFFSET + 6); // boolean;
    public static final int IRS_annunON_DC_1                                       = (PMDG_NGX_ID_OFFSET + 7); // boolean;
    public static final int IRS_annunFAULT_0                                       = (PMDG_NGX_ID_OFFSET + 8); // boolean;
    public static final int IRS_annunFAULT_1                                       = (PMDG_NGX_ID_OFFSET + 9); // boolean;
    public static final int IRS_annunDC_FAIL_0                                     = (PMDG_NGX_ID_OFFSET + 10); // boolean;
    public static final int IRS_annunDC_FAIL_1                                     = (PMDG_NGX_ID_OFFSET + 11); // boolean;
    public static final int IRS_ModeSelector_0                                     = (PMDG_NGX_ID_OFFSET + 12); // uint8_t; // 0: OFF 1: ALIGN 2: NAV 3: ATT;
    public static final int IRS_ModeSelector_1                                     = (PMDG_NGX_ID_OFFSET + 13); // uint8_t; // 0: OFF 1: ALIGN 2: NAV 3: ATT;

    public static final int WARN_annunPSEU                                         = (PMDG_NGX_ID_OFFSET + 14); // boolean;

    public static final int COMM_ServiceInterphoneSw                               = (PMDG_NGX_ID_OFFSET + 15); // boolean;

    public static final int LTS_DomeWhiteSw                                        = (PMDG_NGX_ID_OFFSET + 16); // uint8_t; // 0: DIM 1: OFF 2: BRIGHT;

    public static final int ENG_EECSwitch_0                                        = (PMDG_NGX_ID_OFFSET + 17); // boolean;
    public static final int ENG_EECSwitch_1                                        = (PMDG_NGX_ID_OFFSET + 18); // boolean;
    public static final int ENG_annunREVERSER_0                                    = (PMDG_NGX_ID_OFFSET + 19); // boolean;
    public static final int ENG_annunREVERSER_1                                    = (PMDG_NGX_ID_OFFSET + 20); // boolean;
    public static final int ENG_annunENGINE_CONTROL_0                              = (PMDG_NGX_ID_OFFSET + 21); // boolean;
    public static final int ENG_annunENGINE_CONTROL_1                              = (PMDG_NGX_ID_OFFSET + 22); // boolean;
    public static final int ENG_annunALTN_0                                        = (PMDG_NGX_ID_OFFSET + 23); // boolean;
    public static final int ENG_annunALTN_1                                        = (PMDG_NGX_ID_OFFSET + 24); // boolean;

    public static final int OXY_Needle                                             = (PMDG_NGX_ID_OFFSET + 25); // uint8_t; // Position 0...240;
    public static final int OXY_SwNormal                                           = (PMDG_NGX_ID_OFFSET + 26); // boolean; // true: NORMAL false: ON;
    public static final int OXY_annunPASS_OXY_ON                                   = (PMDG_NGX_ID_OFFSET + 27); // boolean;

    public static final int GEAR_annunOvhdLEFT                                     = (PMDG_NGX_ID_OFFSET + 28); // boolean;
    public static final int GEAR_annunOvhdNOSE                                     = (PMDG_NGX_ID_OFFSET + 29); // boolean;
    public static final int GEAR_annunOvhdRIGHT                                    = (PMDG_NGX_ID_OFFSET + 30); // boolean;

    public static final int FLTREC_SwNormal                                        = (PMDG_NGX_ID_OFFSET + 31); // boolean; // true: NORMAL false: TEST;
    public static final int FLTREC_annunOFF                                        = (PMDG_NGX_ID_OFFSET + 32); // boolean;

    public static final int FCTL_FltControl_Sw_0                                   = (PMDG_NGX_ID_OFFSET + 33); // uint8_t; // 0: STBY/RUD 1: OFF 2: ON;
    public static final int FCTL_FltControl_Sw_1                                   = (PMDG_NGX_ID_OFFSET + 34); // uint8_t; // 0: STBY/RUD 1: OFF 2: ON;
    public static final int FCTL_Spoiler_Sw_0                                      = (PMDG_NGX_ID_OFFSET + 35); // boolean; // true: ON false: OFF;
    public static final int FCTL_Spoiler_Sw_1                                      = (PMDG_NGX_ID_OFFSET + 36); // boolean; // true: ON false: OFF;
    public static final int FCTL_YawDamper_Sw                                      = (PMDG_NGX_ID_OFFSET + 37); // boolean;
    public static final int FCTL_AltnFlaps_Sw_ARM                                  = (PMDG_NGX_ID_OFFSET + 38); // boolean; // true: ARM false: OFF;
    public static final int FCTL_AltnFlaps_Control_Sw                              = (PMDG_NGX_ID_OFFSET + 39); // uint8_t; // 0: UP 1: OFF 2: DOWN;
    public static final int FCTL_annunFC_LOW_PRESSURE_0                            = (PMDG_NGX_ID_OFFSET + 40); // boolean; // FLT CONTROL;
    public static final int FCTL_annunFC_LOW_PRESSURE_1                            = (PMDG_NGX_ID_OFFSET + 41); // boolean; // FLT CONTROL;
    public static final int FCTL_annunYAW_DAMPER                                   = (PMDG_NGX_ID_OFFSET + 42); // boolean;
    public static final int FCTL_annunLOW_QUANTITY                                 = (PMDG_NGX_ID_OFFSET + 43); // boolean;
    public static final int FCTL_annunLOW_PRESSURE                                 = (PMDG_NGX_ID_OFFSET + 44); // boolean;
    public static final int FCTL_annunLOW_STBY_RUD_ON                              = (PMDG_NGX_ID_OFFSET + 45); // boolean;
    public static final int FCTL_annunFEEL_DIFF_PRESS                              = (PMDG_NGX_ID_OFFSET + 46); // boolean;
    public static final int FCTL_annunSPEED_TRIM_FAIL                              = (PMDG_NGX_ID_OFFSET + 47); // boolean;
    public static final int FCTL_annunMACH_TRIM_FAIL                               = (PMDG_NGX_ID_OFFSET + 48); // boolean;
    public static final int FCTL_annunAUTO_SLAT_FAIL                               = (PMDG_NGX_ID_OFFSET + 49); // boolean;

    public static final int NAVDIS_VHFNavSelector                                  = (PMDG_NGX_ID_OFFSET + 50); // uint8_t; // 0: BOTH ON 1 1: NORMAL 2: BOTH ON 2;
    public static final int NAVDIS_IRSSelector                                     = (PMDG_NGX_ID_OFFSET + 51); // uint8_t; // 0: BOTH ON L 1: NORMAL 2: BOTH ON R;
    public static final int NAVDIS_FMCSelector                                     = (PMDG_NGX_ID_OFFSET + 52); // uint8_t; // 0: BOTH ON L 1: NORMAL 2: BOTH ON R;
    public static final int NAVDIS_SourceSelector                                  = (PMDG_NGX_ID_OFFSET + 53); // uint8_t; // 0: ALL ON 1 1: AUTO 2: ALL ON 2;
    public static final int NAVDIS_ControlPaneSelector                             = (PMDG_NGX_ID_OFFSET + 54); // uint8_t; // 0: BOTH ON 1 1: NORMAL 2: BOTH ON 2;

    public static final int FUEL_FuelTempNeedle                                    = (PMDG_NGX_ID_OFFSET + 55); // float; // Value;
    public static final int FUEL_CrossFeedSw                                       = (PMDG_NGX_ID_OFFSET + 56); // boolean;
    public static final int FUEL_PumpFwdSw_0                                       = (PMDG_NGX_ID_OFFSET + 57); // boolean; // left fwd / right fwd;
    public static final int FUEL_PumpFwdSw_1                                       = (PMDG_NGX_ID_OFFSET + 58); // boolean; // left fwd / right fwd;
    public static final int FUEL_PumpAftSw_0                                       = (PMDG_NGX_ID_OFFSET + 59); // boolean; // left aft / right aft;
    public static final int FUEL_PumpAftSw_1                                       = (PMDG_NGX_ID_OFFSET + 60); // boolean; // left aft / right aft;
    public static final int FUEL_PumpCtrSw_0                                       = (PMDG_NGX_ID_OFFSET + 61); // boolean; // ctr left / ctr right;
    public static final int FUEL_PumpCtrSw_1                                       = (PMDG_NGX_ID_OFFSET + 62); // boolean; // ctr left / ctr right;
    public static final int FUEL_annunENG_VALVE_CLOSED_0                           = (PMDG_NGX_ID_OFFSET + 63); // boolean;
    public static final int FUEL_annunENG_VALVE_CLOSED_1                           = (PMDG_NGX_ID_OFFSET + 64); // boolean;
    public static final int FUEL_annunSPAR_VALVE_CLOSED_0                          = (PMDG_NGX_ID_OFFSET + 65); // boolean;
    public static final int FUEL_annunSPAR_VALVE_CLOSED_1                          = (PMDG_NGX_ID_OFFSET + 66); // boolean;
    public static final int FUEL_annunFILTER_BYPASS_0                              = (PMDG_NGX_ID_OFFSET + 67); // boolean;
    public static final int FUEL_annunFILTER_BYPASS_1                              = (PMDG_NGX_ID_OFFSET + 68); // boolean;
    public static final int FUEL_annunXFEED_VALVE_OPEN                             = (PMDG_NGX_ID_OFFSET + 69); // boolean;
    public static final int FUEL_annunLOWPRESS_Fwd_0                               = (PMDG_NGX_ID_OFFSET + 70); // boolean;
    public static final int FUEL_annunLOWPRESS_Fwd_1                               = (PMDG_NGX_ID_OFFSET + 71); // boolean;
    public static final int FUEL_annunLOWPRESS_Aft_0                               = (PMDG_NGX_ID_OFFSET + 72); // boolean;
    public static final int FUEL_annunLOWPRESS_Aft_1                               = (PMDG_NGX_ID_OFFSET + 73); // boolean;
    public static final int FUEL_annunLOWPRESS_Ctr_0                               = (PMDG_NGX_ID_OFFSET + 74); // boolean;
    public static final int FUEL_annunLOWPRESS_Ctr_1                               = (PMDG_NGX_ID_OFFSET + 75); // boolean;

    public static final int ELEC_annunBAT_DISCHARGE                                = (PMDG_NGX_ID_OFFSET + 76); // boolean;
    public static final int ELEC_annunTR_UNIT                                      = (PMDG_NGX_ID_OFFSET + 77); // boolean;
    public static final int ELEC_annunELEC                                         = (PMDG_NGX_ID_OFFSET + 78); // boolean;
    public static final int ELEC_DCMeterSelector                                   = (PMDG_NGX_ID_OFFSET + 79); // uint8_t; // 0: STBY PWR 1: BAT BUS ... 7: TEST;
    public static final int ELEC_ACMeterSelector                                   = (PMDG_NGX_ID_OFFSET + 80); // uint8_t; // 0: STBY PWR 1: GND PWR ... 6: TEST;
    public static final int ELEC_BatSelector                                       = (PMDG_NGX_ID_OFFSET + 81); // uint8_t; // 0: OFF 1: BAT 2: ON;
    public static final int ELEC_CabUtilSw                                         = (PMDG_NGX_ID_OFFSET + 82); // boolean;
    public static final int ELEC_IFEPassSeatSw                                     = (PMDG_NGX_ID_OFFSET + 83); // boolean;
    public static final int ELEC_annunDRIVE_0                                      = (PMDG_NGX_ID_OFFSET + 84); // boolean;
    public static final int ELEC_annunDRIVE_1                                      = (PMDG_NGX_ID_OFFSET + 85); // boolean;
    public static final int ELEC_annunSTANDBY_POWER_OFF                            = (PMDG_NGX_ID_OFFSET + 86); // boolean;
    public static final int ELEC_IDGDisconnectSw_0                                 = (PMDG_NGX_ID_OFFSET + 87); // boolean;
    public static final int ELEC_IDGDisconnectSw_1                                 = (PMDG_NGX_ID_OFFSET + 88); // boolean;
    public static final int ELEC_StandbyPowerSelector                              = (PMDG_NGX_ID_OFFSET + 89); // uint8_t; // 0: BAT 1: OFF 2: AUTO;
    public static final int ELEC_annunGRD_POWER_AVAILABLE                          = (PMDG_NGX_ID_OFFSET + 90); // boolean;
    public static final int ELEC_GrdPwrSw                                          = (PMDG_NGX_ID_OFFSET + 91); // boolean;
    public static final int ELEC_BusTransSw_AUTO                                   = (PMDG_NGX_ID_OFFSET + 92); // boolean;
    public static final int ELEC_GenSw_0                                           = (PMDG_NGX_ID_OFFSET + 93); // boolean;
    public static final int ELEC_GenSw_1                                           = (PMDG_NGX_ID_OFFSET + 94); // boolean;
    public static final int ELEC_APUGenSw_0                                        = (PMDG_NGX_ID_OFFSET + 95); // boolean;
    public static final int ELEC_APUGenSw_1                                        = (PMDG_NGX_ID_OFFSET + 96); // boolean;
    public static final int ELEC_annunTRANSFER_BUS_OFF_0                           = (PMDG_NGX_ID_OFFSET + 97); // boolean;
    public static final int ELEC_annunTRANSFER_BUS_OFF_1                           = (PMDG_NGX_ID_OFFSET + 98); // boolean;
    public static final int ELEC_annunSOURCE_OFF_0                                 = (PMDG_NGX_ID_OFFSET + 99); // boolean;
    public static final int ELEC_annunSOURCE_OFF_1                                 = (PMDG_NGX_ID_OFFSET + 100); // boolean;
    public static final int ELEC_annunGEN_BUS_OFF_0                                = (PMDG_NGX_ID_OFFSET + 101); // boolean;
    public static final int ELEC_annunGEN_BUS_OFF_1                                = (PMDG_NGX_ID_OFFSET + 102); // boolean;
    public static final int ELEC_annunAPU_GEN_OFF_BUS                              = (PMDG_NGX_ID_OFFSET + 103); // boolean;

    public static final int APU_EGTNeedle                                          = (PMDG_NGX_ID_OFFSET + 104); // float; // Value;
    public static final int APU_annunMAINT                                         = (PMDG_NGX_ID_OFFSET + 105); // boolean;
    public static final int APU_annunLOW_OIL_PRESSURE                              = (PMDG_NGX_ID_OFFSET + 106); // boolean;
    public static final int APU_annunFAULT                                         = (PMDG_NGX_ID_OFFSET + 107); // boolean;
    public static final int APU_annunOVERSPEED                                     = (PMDG_NGX_ID_OFFSET + 108); // boolean;

    public static final int OH_WiperLSelector                                      = (PMDG_NGX_ID_OFFSET + 109); // uint8_t; // 0: PARK 1: INT 2: LOW 3:HIGH;
    public static final int OH_WiperRSelector                                      = (PMDG_NGX_ID_OFFSET + 110); // uint8_t; // 0: PARK 1: INT 2: LOW 3:HIGH;

    public static final int LTS_CircuitBreakerKnob                                 = (PMDG_NGX_ID_OFFSET + 111); // uint8_t; // Position 0...150;
    public static final int LTS_OvereadPanelKnob                                   = (PMDG_NGX_ID_OFFSET + 112); // uint8_t; // Position 0...150;

    public static final int AIR_EquipCoolingSupplyNORM                             = (PMDG_NGX_ID_OFFSET + 113); // boolean;
    public static final int AIR_EquipCoolingExhaustNORM                            = (PMDG_NGX_ID_OFFSET + 114); // boolean;
    public static final int AIR_annunEquipCoolingSupplyOFF                         = (PMDG_NGX_ID_OFFSET + 115); // boolean;
    public static final int AIR_annunEquipCoolingExhaustOFF                        = (PMDG_NGX_ID_OFFSET + 116); // boolean;

    public static final int LTS_annunEmerNOT_ARMED                                 = (PMDG_NGX_ID_OFFSET + 117); // boolean;
    public static final int LTS_EmerExitSelector                                   = (PMDG_NGX_ID_OFFSET + 118); // uint8_t; // 0: OFF 1: ARMED 2: ON;

    public static final int COMM_NoSmokingSelector                                 = (PMDG_NGX_ID_OFFSET + 119); // uint8_t; // 0: OFF 1: AUTO 2: ON;
    public static final int COMM_FastenBeltsSelector                               = (PMDG_NGX_ID_OFFSET + 120); // uint8_t; // 0: OFF 1: AUTO 2: ON;
    public static final int COMM_annunCALL                                         = (PMDG_NGX_ID_OFFSET + 121); // boolean;
    public static final int COMM_annunPA_IN_USE                                    = (PMDG_NGX_ID_OFFSET + 122); // boolean;

    public static final int ICE_annunOVERHEAT_0                                    = (PMDG_NGX_ID_OFFSET + 123); // boolean;
    public static final int ICE_annunOVERHEAT_1                                    = (PMDG_NGX_ID_OFFSET + 124); // boolean;
    public static final int ICE_annunOVERHEAT_2                                    = (PMDG_NGX_ID_OFFSET + 125); // boolean;
    public static final int ICE_annunOVERHEAT_3                                    = (PMDG_NGX_ID_OFFSET + 126); // boolean;
    public static final int ICE_annunON_0                                          = (PMDG_NGX_ID_OFFSET + 127); // boolean;
    public static final int ICE_annunON_1                                          = (PMDG_NGX_ID_OFFSET + 128); // boolean;
    public static final int ICE_annunON_2                                          = (PMDG_NGX_ID_OFFSET + 129); // boolean;
    public static final int ICE_annunON_3                                          = (PMDG_NGX_ID_OFFSET + 130); // boolean;
    public static final int ICE_WindowHeatSw_0                                     = (PMDG_NGX_ID_OFFSET + 131); // boolean;
    public static final int ICE_WindowHeatSw_1                                     = (PMDG_NGX_ID_OFFSET + 132); // boolean;
    public static final int ICE_WindowHeatSw_2                                     = (PMDG_NGX_ID_OFFSET + 133); // boolean;
    public static final int ICE_WindowHeatSw_3                                     = (PMDG_NGX_ID_OFFSET + 134); // boolean;
    public static final int ICE_annunCAPT_PITOT                                    = (PMDG_NGX_ID_OFFSET + 135); // boolean;
    public static final int ICE_annunL_ELEV_PITOT                                  = (PMDG_NGX_ID_OFFSET + 136); // boolean;
    public static final int ICE_annunL_ALPHA_VANE                                  = (PMDG_NGX_ID_OFFSET + 137); // boolean;
    public static final int ICE_annunL_TEMP_PROBE                                  = (PMDG_NGX_ID_OFFSET + 138); // boolean;
    public static final int ICE_annunFO_PITOT                                      = (PMDG_NGX_ID_OFFSET + 139); // boolean;
    public static final int ICE_annunR_ELEV_PITOT                                  = (PMDG_NGX_ID_OFFSET + 140); // boolean;
    public static final int ICE_annunR_ALPHA_VANE                                  = (PMDG_NGX_ID_OFFSET + 141); // boolean;
    public static final int ICE_annunAUX_PITOT                                     = (PMDG_NGX_ID_OFFSET + 142); // boolean;
    public static final int ICE_TestProbeHeatSw_0                                  = (PMDG_NGX_ID_OFFSET + 143); // boolean;
    public static final int ICE_TestProbeHeatSw_1                                  = (PMDG_NGX_ID_OFFSET + 144); // boolean;
    public static final int ICE_annunVALVE_OPEN_0                                  = (PMDG_NGX_ID_OFFSET + 145); // boolean;
    public static final int ICE_annunVALVE_OPEN_1                                  = (PMDG_NGX_ID_OFFSET + 146); // boolean;
    public static final int ICE_annunCOWL_ANTI_ICE_0                               = (PMDG_NGX_ID_OFFSET + 147); // boolean;
    public static final int ICE_annunCOWL_ANTI_ICE_1                               = (PMDG_NGX_ID_OFFSET + 148); // boolean;
    public static final int ICE_annunCOWL_VALVE_OPEN_0                             = (PMDG_NGX_ID_OFFSET + 149); // boolean;
    public static final int ICE_annunCOWL_VALVE_OPEN_1                             = (PMDG_NGX_ID_OFFSET + 150); // boolean;
    public static final int ICE_WingAntiIceSw                                      = (PMDG_NGX_ID_OFFSET + 151); // boolean;
    public static final int ICE_EngAntiIceSw_0                                     = (PMDG_NGX_ID_OFFSET + 152); // boolean;
    public static final int ICE_EngAntiIceSw_1                                     = (PMDG_NGX_ID_OFFSET + 153); // boolean;

    public static final int HYD_annunLOW_PRESS_eng_0                               = (PMDG_NGX_ID_OFFSET + 154); // boolean;
    public static final int HYD_annunLOW_PRESS_eng_1                               = (PMDG_NGX_ID_OFFSET + 155); // boolean;
    public static final int HYD_annunLOW_PRESS_elec_0                              = (PMDG_NGX_ID_OFFSET + 156); // boolean;
    public static final int HYD_annunLOW_PRESS_elec_1                              = (PMDG_NGX_ID_OFFSET + 157); // boolean;
    public static final int HYD_annunOVERHEAT_elec_0                               = (PMDG_NGX_ID_OFFSET + 158); // boolean;
    public static final int HYD_annunOVERHEAT_elec_1                               = (PMDG_NGX_ID_OFFSET + 159); // boolean;
    public static final int HYD_PumpSw_eng_0                                       = (PMDG_NGX_ID_OFFSET + 160); // boolean;
    public static final int HYD_PumpSw_eng_1                                       = (PMDG_NGX_ID_OFFSET + 161); // boolean;
    public static final int HYD_PumpSw_elec_0                                      = (PMDG_NGX_ID_OFFSET + 162); // boolean;
    public static final int HYD_PumpSw_elec_1                                      = (PMDG_NGX_ID_OFFSET + 163); // boolean;

    public static final int AIR_TempSourceSelector                                 = (PMDG_NGX_ID_OFFSET + 164); // uint8_t; // Positions 0..6;
    public static final int AIR_TrimAirSwitch                                      = (PMDG_NGX_ID_OFFSET + 165); // boolean;
    public static final int AIR_annunZoneTemp_0                                    = (PMDG_NGX_ID_OFFSET + 166); // boolean;
    public static final int AIR_annunZoneTemp_1                                    = (PMDG_NGX_ID_OFFSET + 167); // boolean;
    public static final int AIR_annunZoneTemp_2                                    = (PMDG_NGX_ID_OFFSET + 168); // boolean;
    public static final int AIR_annunDualBleed                                     = (PMDG_NGX_ID_OFFSET + 169); // boolean;
    public static final int AIR_annunRamDoorL                                      = (PMDG_NGX_ID_OFFSET + 170); // boolean;
    public static final int AIR_annunRamDoorR                                      = (PMDG_NGX_ID_OFFSET + 171); // boolean;
    public static final int AIR_RecircFanSwitch_0                                  = (PMDG_NGX_ID_OFFSET + 172); // boolean;
    public static final int AIR_RecircFanSwitch_1                                  = (PMDG_NGX_ID_OFFSET + 173); // boolean;
    public static final int AIR_PackSwitch_0                                       = (PMDG_NGX_ID_OFFSET + 174); // uint8_t; // 0=OFF 1=AUTO 2=HIGH;
    public static final int AIR_PackSwitch_1                                       = (PMDG_NGX_ID_OFFSET + 175); // uint8_t; // 0=OFF 1=AUTO 2=HIGH;
    public static final int AIR_BleedAirSwitch_0                                   = (PMDG_NGX_ID_OFFSET + 176); // boolean;
    public static final int AIR_BleedAirSwitch_1                                   = (PMDG_NGX_ID_OFFSET + 177); // boolean;
    public static final int AIR_APUBleedAirSwitch                                  = (PMDG_NGX_ID_OFFSET + 178); // boolean;
    public static final int AIR_IsolationValveSwitch                               = (PMDG_NGX_ID_OFFSET + 179); // boolean;
    public static final int AIR_annunPackTripOff_0                                 = (PMDG_NGX_ID_OFFSET + 180); // boolean;
    public static final int AIR_annunPackTripOff_1                                 = (PMDG_NGX_ID_OFFSET + 181); // boolean;
    public static final int AIR_annunWingBodyOverheat_0                            = (PMDG_NGX_ID_OFFSET + 182); // boolean;
    public static final int AIR_annunWingBodyOverheat_1                            = (PMDG_NGX_ID_OFFSET + 183); // boolean;
    public static final int AIR_annunBleedTripOff_0                                = (PMDG_NGX_ID_OFFSET + 184); // boolean;
    public static final int AIR_annunBleedTripOff_1                                = (PMDG_NGX_ID_OFFSET + 185); // boolean;
    public static final int AIR_FltAltWindow                                       = (PMDG_NGX_ID_OFFSET + 186); // uint16_t;
    public static final int AIR_LandAltWindow                                      = (PMDG_NGX_ID_OFFSET + 187); // uint16_t;
    public static final int AIR_OutflowValveSwitch                                 = (PMDG_NGX_ID_OFFSET + 188); // uint16_t; // 0=CLOSE 1=NEUTRAL 2=OPEN;
    public static final int AIR_PressurizationModeSelector                         = (PMDG_NGX_ID_OFFSET + 189); // uint16_t; // 0=AUTO 1=ALTN 2=MAN;

    public static final int LTS_LandingLtRetractableSw_0                           = (PMDG_NGX_ID_OFFSET + 190); // uint8_t; // 0: RETRACT 1: EXTEND 2: ON;
    public static final int LTS_LandingLtRetractableSw_1                           = (PMDG_NGX_ID_OFFSET + 191); // uint8_t; // 0: RETRACT 1: EXTEND 2: ON;
    public static final int LTS_LandingLtFixedSw_0                                 = (PMDG_NGX_ID_OFFSET + 192); // boolean;
    public static final int LTS_LandingLtFixedSw_1                                 = (PMDG_NGX_ID_OFFSET + 193); // boolean;
    public static final int LTS_RunwayTurnoffSw_0                                  = (PMDG_NGX_ID_OFFSET + 194); // boolean;
    public static final int LTS_RunwayTurnoffSw_1                                  = (PMDG_NGX_ID_OFFSET + 195); // boolean;
    public static final int LTS_TaxiSw                                             = (PMDG_NGX_ID_OFFSET + 196); // boolean;

    public static final int APU_Selector                                           = (PMDG_NGX_ID_OFFSET + 197); // uint8_t; // 0: OFF 1: ON 2: START;

    public static final int ENG_StartSelector_0                                    = (PMDG_NGX_ID_OFFSET + 198); // uint8_t; // 0: GRD 1: OFF 2: CONT 3: FLT;
    public static final int ENG_StartSelector_1                                    = (PMDG_NGX_ID_OFFSET + 199); // uint8_t; // 0: GRD 1: OFF 2: CONT 3: FLT;
    public static final int ENG_IgnitionSelector                                   = (PMDG_NGX_ID_OFFSET + 200); // uint8_t; // 0: IGN L 1: BOTH 2: IGN R;

    public static final int LTS_LogoSw                                             = (PMDG_NGX_ID_OFFSET + 201); // boolean;
    public static final int LTS_PositionSw                                         = (PMDG_NGX_ID_OFFSET + 202); // uint8_t; // 0: STEADY 1: OFF 2: STROBE&STEADY;
    public static final int LTS_AntiCollisionSw                                    = (PMDG_NGX_ID_OFFSET + 203); // boolean;
    public static final int LTS_WingSw                                             = (PMDG_NGX_ID_OFFSET + 204); // boolean;
    public static final int LTS_WheelWellSw                                        = (PMDG_NGX_ID_OFFSET + 205); // boolean;

    public static final int WARN_annunFIRE_WARN_0                                  = (PMDG_NGX_ID_OFFSET + 206); // boolean;
    public static final int WARN_annunFIRE_WARN_1                                  = (PMDG_NGX_ID_OFFSET + 207); // boolean;
    public static final int WARN_annunMASTER_CAUTION_0                             = (PMDG_NGX_ID_OFFSET + 208); // boolean;
    public static final int WARN_annunMASTER_CAUTION_1                             = (PMDG_NGX_ID_OFFSET + 209); // boolean;
    public static final int WARN_annunFLT_CONT                                     = (PMDG_NGX_ID_OFFSET + 210); // boolean;
    public static final int WARN_annunIRS                                          = (PMDG_NGX_ID_OFFSET + 211); // boolean;
    public static final int WARN_annunFUEL                                         = (PMDG_NGX_ID_OFFSET + 212); // boolean;
    public static final int WARN_annunELEC                                         = (PMDG_NGX_ID_OFFSET + 213); // boolean;
    public static final int WARN_annunAPU                                          = (PMDG_NGX_ID_OFFSET + 214); // boolean;
    public static final int WARN_annunOVHT_DET                                     = (PMDG_NGX_ID_OFFSET + 215); // boolean;
    public static final int WARN_annunANTI_ICE                                     = (PMDG_NGX_ID_OFFSET + 216); // boolean;
    public static final int WARN_annunHYD                                          = (PMDG_NGX_ID_OFFSET + 217); // boolean;
    public static final int WARN_annunDOORS                                        = (PMDG_NGX_ID_OFFSET + 218); // boolean;
    public static final int WARN_annunENG                                          = (PMDG_NGX_ID_OFFSET + 219); // boolean;
    public static final int WARN_annunOVERHEAD                                     = (PMDG_NGX_ID_OFFSET + 220); // boolean;
    public static final int WARN_annunAIR_COND                                     = (PMDG_NGX_ID_OFFSET + 221); // boolean;

    public static final int EFIS_MinsSelBARO_0                                     = (PMDG_NGX_ID_OFFSET + 222); // boolean;
    public static final int EFIS_MinsSelBARO_1                                     = (PMDG_NGX_ID_OFFSET + 223); // boolean;
    public static final int EFIS_BaroSelHPA_0                                      = (PMDG_NGX_ID_OFFSET + 224); // boolean;
    public static final int EFIS_BaroSelHPA_1                                      = (PMDG_NGX_ID_OFFSET + 225); // boolean;
    public static final int EFIS_VORADFSel1_0                                      = (PMDG_NGX_ID_OFFSET + 226); // uint8_t; // 0: VOR 1: OFF 2: ADF;
    public static final int EFIS_VORADFSel1_1                                      = (PMDG_NGX_ID_OFFSET + 227); // uint8_t; // 0: VOR 1: OFF 2: ADF;
    public static final int EFIS_VORADFSel2_0                                      = (PMDG_NGX_ID_OFFSET + 228); // uint8_t; // 0: VOR 1: OFF 2: ADF;
    public static final int EFIS_VORADFSel2_1                                      = (PMDG_NGX_ID_OFFSET + 229); // uint8_t; // 0: VOR 1: OFF 2: ADF;
    public static final int EFIS_ModeSel_0                                         = (PMDG_NGX_ID_OFFSET + 230); // uint8_t; // 0: APP 1: VOR 2: MAP 3: PLAn;
    public static final int EFIS_ModeSel_1                                         = (PMDG_NGX_ID_OFFSET + 231); // uint8_t; // 0: APP 1: VOR 2: MAP 3: PLAn;
    public static final int EFIS_RangeSel_0                                        = (PMDG_NGX_ID_OFFSET + 232); // uint8_t; // 0: 5 ... 7: 640;
    public static final int EFIS_RangeSel_1                                        = (PMDG_NGX_ID_OFFSET + 233); // uint8_t; // 0: 5 ... 7: 640;

    public static final int MCP_Course_0                                           = (PMDG_NGX_ID_OFFSET + 234); // uint16_t;
    public static final int MCP_Course_1                                           = (PMDG_NGX_ID_OFFSET + 235); // uint16_t;
    public static final int MCP_IASMach                                            = (PMDG_NGX_ID_OFFSET + 236); // float; // Mach if < 10.0;
    public static final int MCP_IASBlank                                           = (PMDG_NGX_ID_OFFSET + 237); // boolean;
    public static final int MCP_IASOverspeedFlash                                  = (PMDG_NGX_ID_OFFSET + 238); // boolean;
    public static final int MCP_IASUnderspeedFlash                                 = (PMDG_NGX_ID_OFFSET + 239); // boolean;
    public static final int MCP_Heading                                            = (PMDG_NGX_ID_OFFSET + 240); // uint16_t;
    public static final int MCP_Altitude                                           = (PMDG_NGX_ID_OFFSET + 241); // uint16_t;
    public static final int MCP_VertSpeed                                          = (PMDG_NGX_ID_OFFSET + 242); // int16_t;
    public static final int MCP_VertSpeedBlank                                     = (PMDG_NGX_ID_OFFSET + 243); // boolean;
    public static final int MCP_FDSw_0                                             = (PMDG_NGX_ID_OFFSET + 244); // boolean;
    public static final int MCP_FDSw_1                                             = (PMDG_NGX_ID_OFFSET + 245); // boolean;
    public static final int MCP_ATArmSw                                            = (PMDG_NGX_ID_OFFSET + 246); // boolean;
    public static final int MCP_BankLimitSel                                       = (PMDG_NGX_ID_OFFSET + 247); // uint8_t; // 0: 10 ... 4: 30;
    public static final int MCP_DisengageBar                                       = (PMDG_NGX_ID_OFFSET + 248); // boolean;
    public static final int MCP_annunFD_0                                          = (PMDG_NGX_ID_OFFSET + 249); // boolean;
    public static final int MCP_annunFD_1                                          = (PMDG_NGX_ID_OFFSET + 250); // boolean;
    public static final int MCP_annunATArm                                         = (PMDG_NGX_ID_OFFSET + 251); // boolean;
    public static final int MCP_annunN1                                            = (PMDG_NGX_ID_OFFSET + 252); // boolean;
    public static final int MCP_annunSPEED                                         = (PMDG_NGX_ID_OFFSET + 253); // boolean;
    public static final int MCP_annunVNAV                                          = (PMDG_NGX_ID_OFFSET + 254); // boolean;
    public static final int MCP_annunLVL_CHG                                       = (PMDG_NGX_ID_OFFSET + 255); // boolean;
    public static final int MCP_annunHDG_SEL                                       = (PMDG_NGX_ID_OFFSET + 256); // boolean;
    public static final int MCP_annunLNAV                                          = (PMDG_NGX_ID_OFFSET + 257); // boolean;
    public static final int MCP_annunVOR_LOC                                       = (PMDG_NGX_ID_OFFSET + 258); // boolean;
    public static final int MCP_annunAPP                                           = (PMDG_NGX_ID_OFFSET + 259); // boolean;
    public static final int MCP_annunALT_HOLD                                      = (PMDG_NGX_ID_OFFSET + 260); // boolean;
    public static final int MCP_annunVS                                            = (PMDG_NGX_ID_OFFSET + 261); // boolean;
    public static final int MCP_annunCMD_A                                         = (PMDG_NGX_ID_OFFSET + 262); // boolean;
    public static final int MCP_annunCWS_A                                         = (PMDG_NGX_ID_OFFSET + 263); // boolean;
    public static final int MCP_annunCMD_B                                         = (PMDG_NGX_ID_OFFSET + 264); // boolean;
    public static final int MCP_annunCWS_B                                         = (PMDG_NGX_ID_OFFSET + 265); // boolean;

    public static final int MAIN_NoseWheelSteeringSwNORM                           = (PMDG_NGX_ID_OFFSET + 266); // boolean; // false: ALT;
    public static final int MAIN_annunBELOW_GS_0                                   = (PMDG_NGX_ID_OFFSET + 267); // boolean;
    public static final int MAIN_annunBELOW_GS_1                                   = (PMDG_NGX_ID_OFFSET + 268); // boolean;
    public static final int MAIN_MainPanelDUSel_0                                  = (PMDG_NGX_ID_OFFSET + 269); // uint8_t; // 0: OUTBD PFD ... 4 MFD for Capt; reverse sequence for FO;
    public static final int MAIN_MainPanelDUSel_1                                  = (PMDG_NGX_ID_OFFSET + 270); // uint8_t; // 0: OUTBD PFD ... 4 MFD for Capt; reverse sequence for FO;
    public static final int MAIN_LowerDUSel_0                                      = (PMDG_NGX_ID_OFFSET + 271); // uint8_t; // 0: ENG PRI ... 2 ND for Capt; reverse sequence for FO;
    public static final int MAIN_LowerDUSel_1                                      = (PMDG_NGX_ID_OFFSET + 272); // uint8_t; // 0: ENG PRI ... 2 ND for Capt; reverse sequence for FO;
    public static final int MAIN_annunAP_0                                         = (PMDG_NGX_ID_OFFSET + 273); // boolean;
    public static final int MAIN_annunAP_1                                         = (PMDG_NGX_ID_OFFSET + 274); // boolean;
    public static final int MAIN_annunAT_0                                         = (PMDG_NGX_ID_OFFSET + 275); // boolean;
    public static final int MAIN_annunAT_1                                         = (PMDG_NGX_ID_OFFSET + 276); // boolean;
    public static final int MAIN_annunFMC_0                                        = (PMDG_NGX_ID_OFFSET + 277); // boolean;
    public static final int MAIN_annunFMC_1                                        = (PMDG_NGX_ID_OFFSET + 278); // boolean;
    public static final int MAIN_DisengageTestSelector_0                           = (PMDG_NGX_ID_OFFSET + 279); // uint8_t; // 0: 1 1: OFF 2: 2;
    public static final int MAIN_DisengageTestSelector_1                           = (PMDG_NGX_ID_OFFSET + 280); // uint8_t; // 0: 1 1: OFF 2: 2;
    public static final int MAIN_annunSPEEDBRAKE_ARMED                             = (PMDG_NGX_ID_OFFSET + 281); // boolean;
    public static final int MAIN_annunSPEEDBRAKE_DO_NOT_ARM                        = (PMDG_NGX_ID_OFFSET + 282); // boolean;
    public static final int MAIN_annunSPEEDBRAKE_EXTENDED                          = (PMDG_NGX_ID_OFFSET + 283); // boolean;
    public static final int MAIN_annunSTAB_OUT_OF_TRIM                             = (PMDG_NGX_ID_OFFSET + 284); // boolean;
    public static final int MAIN_LightsSelector                                    = (PMDG_NGX_ID_OFFSET + 285); // uint8_t; // 0: TEST 1: BRT 2: DIM;
    public static final int MAIN_RMISelector1_VOR                                  = (PMDG_NGX_ID_OFFSET + 286); // boolean;
    public static final int MAIN_RMISelector2_VOR                                  = (PMDG_NGX_ID_OFFSET + 287); // boolean;
    public static final int MAIN_N1SetSelector                                     = (PMDG_NGX_ID_OFFSET + 288); // uint8_t; // 0: 2 1: 1 2: AUTO 3: BOTH;
    public static final int MAIN_SpdRefSelector                                    = (PMDG_NGX_ID_OFFSET + 289); // uint8_t; // 0: SET 1: AUTO 2: V1 3: VR 4: WT 5: VREF 6: Bug;
    public static final int MAIN_FuelFlowSelector                                  = (PMDG_NGX_ID_OFFSET + 290); // uint8_t; // 0: RESET 1: RATE 2: USED;
    public static final int MAIN_AutobrakeSelector                                 = (PMDG_NGX_ID_OFFSET + 291); // uint8_t; // 0: RTO 1: OFF ... 5: MAX;
    public static final int MAIN_annunANTI_SKID_INOP                               = (PMDG_NGX_ID_OFFSET + 292); // boolean;
    public static final int MAIN_annunAUTO_BRAKE_DISARM                            = (PMDG_NGX_ID_OFFSET + 293); // boolean;
    public static final int MAIN_annunLE_FLAPS_TRANSIT                             = (PMDG_NGX_ID_OFFSET + 294); // boolean;
    public static final int MAIN_annunLE_FLAPS_EXT                                 = (PMDG_NGX_ID_OFFSET + 295); // boolean;
    public static final int MAIN_TEFlapsNeedle_0                                   = (PMDG_NGX_ID_OFFSET + 296); // float; // Value;
    public static final int MAIN_TEFlapsNeedle_1                                   = (PMDG_NGX_ID_OFFSET + 297); // float; // Value;
    public static final int MAIN_annunGEAR_transit_0                               = (PMDG_NGX_ID_OFFSET + 298); // boolean;
    public static final int MAIN_annunGEAR_transit_1                               = (PMDG_NGX_ID_OFFSET + 299); // boolean;
    public static final int MAIN_annunGEAR_transit_2                               = (PMDG_NGX_ID_OFFSET + 300); // boolean;
    public static final int MAIN_annunGEAR_locked_0                                = (PMDG_NGX_ID_OFFSET + 301); // boolean;
    public static final int MAIN_annunGEAR_locked_1                                = (PMDG_NGX_ID_OFFSET + 302); // boolean;
    public static final int MAIN_annunGEAR_locked_2                                = (PMDG_NGX_ID_OFFSET + 303); // boolean;
    public static final int MAIN_GearLever                                         = (PMDG_NGX_ID_OFFSET + 304); // uint8_t; // 0: UP 1: OFF 2: DOWN;
    public static final int MAIN_BrakePressNeedle                                  = (PMDG_NGX_ID_OFFSET + 305); // float; // Value;

    public static final int HGS_annun_AIII                                         = (PMDG_NGX_ID_OFFSET + 306); // boolean;
    public static final int HGS_annun_NO_AIII                                      = (PMDG_NGX_ID_OFFSET + 307); // boolean;
    public static final int HGS_annun_FLARE                                        = (PMDG_NGX_ID_OFFSET + 308); // boolean;
    public static final int HGS_annun_RO                                           = (PMDG_NGX_ID_OFFSET + 309); // boolean;
    public static final int HGS_annun_RO_CTN                                       = (PMDG_NGX_ID_OFFSET + 310); // boolean;
    public static final int HGS_annun_RO_ARM                                       = (PMDG_NGX_ID_OFFSET + 311); // boolean;
    public static final int HGS_annun_TO                                           = (PMDG_NGX_ID_OFFSET + 312); // boolean;
    public static final int HGS_annun_TO_CTN                                       = (PMDG_NGX_ID_OFFSET + 313); // boolean;
    public static final int HGS_annun_APCH                                         = (PMDG_NGX_ID_OFFSET + 314); // boolean;
    public static final int HGS_annun_TO_WARN                                      = (PMDG_NGX_ID_OFFSET + 315); // boolean;
    public static final int HGS_annun_Bar                                          = (PMDG_NGX_ID_OFFSET + 316); // boolean;
    public static final int HGS_annun_FAIL                                         = (PMDG_NGX_ID_OFFSET + 317); // boolean;

    public static final int LTS_MainPanelKnob_0                                    = (PMDG_NGX_ID_OFFSET + 318); // uint8_t; // Position 0...150;
    public static final int LTS_MainPanelKnob_1                                    = (PMDG_NGX_ID_OFFSET + 319); // uint8_t; // Position 0...150;
    public static final int LTS_BackgroundKnob                                     = (PMDG_NGX_ID_OFFSET + 320); // uint8_t; // Position 0...150;
    public static final int LTS_AFDSFloodKnob                                      = (PMDG_NGX_ID_OFFSET + 321); // uint8_t; // Position 0...150;
    public static final int LTS_OutbdDUBrtKnob_0                                   = (PMDG_NGX_ID_OFFSET + 322); // uint8_t; // Position 0...127;
    public static final int LTS_OutbdDUBrtKnob_1                                   = (PMDG_NGX_ID_OFFSET + 323); // uint8_t; // Position 0...127;
    public static final int LTS_InbdDUBrtKnob_0                                    = (PMDG_NGX_ID_OFFSET + 324); // uint8_t; // Position 0...127;
    public static final int LTS_InbdDUBrtKnob_1                                    = (PMDG_NGX_ID_OFFSET + 325); // uint8_t; // Position 0...127;
    public static final int LTS_InbdDUMapBrtKnob_0                                 = (PMDG_NGX_ID_OFFSET + 326); // uint8_t; // Position 0...127;
    public static final int LTS_InbdDUMapBrtKnob_1                                 = (PMDG_NGX_ID_OFFSET + 327); // uint8_t; // Position 0...127;
    public static final int LTS_UpperDUBrtKnob                                     = (PMDG_NGX_ID_OFFSET + 328); // uint8_t; // Position 0...127;
    public static final int LTS_LowerDUBrtKnob                                     = (PMDG_NGX_ID_OFFSET + 329); // uint8_t; // Position 0...127;
    public static final int LTS_LowerDUMapBrtKnob                                  = (PMDG_NGX_ID_OFFSET + 330); // uint8_t; // Position 0...127;

    public static final int GPWS_annunINOP                                         = (PMDG_NGX_ID_OFFSET + 331); // boolean;
    public static final int GPWS_FlapInhibitSw_NORM                                = (PMDG_NGX_ID_OFFSET + 332); // boolean;
    public static final int GPWS_GearInhibitSw_NORM                                = (PMDG_NGX_ID_OFFSET + 333); // boolean;
    public static final int GPWS_TerrInhibitSw_NORM                                = (PMDG_NGX_ID_OFFSET + 334); // boolean;

    public static final int CDU_annunEXEC_0                                        = (PMDG_NGX_ID_OFFSET + 335); // boolean;
    public static final int CDU_annunEXEC_1                                        = (PMDG_NGX_ID_OFFSET + 336); // boolean;
    public static final int CDU_annunCALL_0                                        = (PMDG_NGX_ID_OFFSET + 337); // boolean;
    public static final int CDU_annunCALL_1                                        = (PMDG_NGX_ID_OFFSET + 338); // boolean;
    public static final int CDU_annunFAIL_0                                        = (PMDG_NGX_ID_OFFSET + 339); // boolean;
    public static final int CDU_annunFAIL_1                                        = (PMDG_NGX_ID_OFFSET + 340); // boolean;
    public static final int CDU_annunMSG_0                                         = (PMDG_NGX_ID_OFFSET + 341); // boolean;
    public static final int CDU_annunMSG_1                                         = (PMDG_NGX_ID_OFFSET + 342); // boolean;
    public static final int CDU_annunOFST_0                                        = (PMDG_NGX_ID_OFFSET + 343); // boolean;
    public static final int CDU_annunOFST_1                                        = (PMDG_NGX_ID_OFFSET + 344); // boolean;
    public static final int CDU_BrtKnob_0                                          = (PMDG_NGX_ID_OFFSET + 345); // uint8_t; // Position 0...127;
    public static final int CDU_BrtKnob_1                                          = (PMDG_NGX_ID_OFFSET + 346); // uint8_t; // Position 0...127;

    public static final int TRIM_StabTrimMainElecSw_NORMAL                         = (PMDG_NGX_ID_OFFSET + 347); // boolean;
    public static final int TRIM_StabTrimAutoPilotSw_NORMAL                        = (PMDG_NGX_ID_OFFSET + 348); // boolean;

    public static final int PED_annunParkingBrake                                  = (PMDG_NGX_ID_OFFSET + 349); // boolean;

    public static final int FIRE_OvhtDetSw_0                                       = (PMDG_NGX_ID_OFFSET + 350); // uint8_t; // 0: A 1: NORMAL 2: B;
    public static final int FIRE_OvhtDetSw_1                                       = (PMDG_NGX_ID_OFFSET + 351); // uint8_t; // 0: A 1: NORMAL 2: B;
    public static final int FIRE_annunENG_OVERHEAT_0                               = (PMDG_NGX_ID_OFFSET + 352); // boolean;
    public static final int FIRE_annunENG_OVERHEAT_1                               = (PMDG_NGX_ID_OFFSET + 353); // boolean;
    public static final int FIRE_DetTestSw                                         = (PMDG_NGX_ID_OFFSET + 354); // uint8_t; // 0: FAULT/INOP 1: neutral 2: OVHT/FIRE;
    public static final int FIRE_HandlePos_0                                       = (PMDG_NGX_ID_OFFSET + 355); // uint8_t; // 0: In 1: Blocked 2: Out 3: Turned Left 4: Turned right;
    public static final int FIRE_HandlePos_1                                       = (PMDG_NGX_ID_OFFSET + 356); // uint8_t; // 0: In 1: Blocked 2: Out 3: Turned Left 4: Turned right;
    public static final int FIRE_HandlePos_2                                       = (PMDG_NGX_ID_OFFSET + 357); // uint8_t; // 0: In 1: Blocked 2: Out 3: Turned Left 4: Turned right;
    public static final int FIRE_HandleIlluminated_0                               = (PMDG_NGX_ID_OFFSET + 358); // boolean;
    public static final int FIRE_HandleIlluminated_1                               = (PMDG_NGX_ID_OFFSET + 359); // boolean;
    public static final int FIRE_HandleIlluminated_2                               = (PMDG_NGX_ID_OFFSET + 360); // boolean;
    public static final int FIRE_annunWHEEL_WELL                                   = (PMDG_NGX_ID_OFFSET + 361); // boolean;
    public static final int FIRE_annunFAULT                                        = (PMDG_NGX_ID_OFFSET + 362); // boolean;
    public static final int FIRE_annunAPU_DET_INOP                                 = (PMDG_NGX_ID_OFFSET + 363); // boolean;
    public static final int FIRE_annunAPU_BOTTLE_DISCHARGE                         = (PMDG_NGX_ID_OFFSET + 364); // boolean;
    public static final int FIRE_annunBOTTLE_DISCHARGE_0                           = (PMDG_NGX_ID_OFFSET + 365); // boolean;
    public static final int FIRE_annunBOTTLE_DISCHARGE_1                           = (PMDG_NGX_ID_OFFSET + 366); // boolean;
    public static final int FIRE_ExtinguisherTestSw                                = (PMDG_NGX_ID_OFFSET + 367); // uint8_t; // 0: 1 1: neutral 2: 2;
    public static final int FIRE_annunExtinguisherTest_0                           = (PMDG_NGX_ID_OFFSET + 368); // boolean; // Left, Right, APU;
    public static final int FIRE_annunExtinguisherTest_1                           = (PMDG_NGX_ID_OFFSET + 369); // boolean; // Left, Right, APU;
    public static final int FIRE_annunExtinguisherTest_2                           = (PMDG_NGX_ID_OFFSET + 370); // boolean; // Left, Right, APU;

    public static final int CARGO_annunExtTest_0                                   = (PMDG_NGX_ID_OFFSET + 371); // boolean; // Fwd, Aft;
    public static final int CARGO_annunExtTest_1                                   = (PMDG_NGX_ID_OFFSET + 372); // boolean; // Fwd, Aft;
    public static final int CARGO_DetSelect_0                                      = (PMDG_NGX_ID_OFFSET + 373); // uint8_t; // 0: A 1: ORM 2: B;
    public static final int CARGO_DetSelect_1                                      = (PMDG_NGX_ID_OFFSET + 374); // uint8_t; // 0: A 1: ORM 2: B;
    public static final int CARGO_ArmedSw_0                                        = (PMDG_NGX_ID_OFFSET + 375); // boolean;
    public static final int CARGO_ArmedSw_1                                        = (PMDG_NGX_ID_OFFSET + 376); // boolean;
    public static final int CARGO_annunFWD                                         = (PMDG_NGX_ID_OFFSET + 377); // boolean;
    public static final int CARGO_annunAFT                                         = (PMDG_NGX_ID_OFFSET + 378); // boolean;
    public static final int CARGO_annunDETECTOR_FAULT                              = (PMDG_NGX_ID_OFFSET + 379); // boolean;
    public static final int CARGO_annunDISCH                                       = (PMDG_NGX_ID_OFFSET + 380); // boolean;

    public static final int HGS_annunRWY                                           = (PMDG_NGX_ID_OFFSET + 381); // boolean;
    public static final int HGS_annunGS                                            = (PMDG_NGX_ID_OFFSET + 382); // boolean;
    public static final int HGS_annunFAULT                                         = (PMDG_NGX_ID_OFFSET + 383); // boolean;
    public static final int HGS_annunCLR                                           = (PMDG_NGX_ID_OFFSET + 384); // boolean;

    public static final int XPDR_XpndrSelector_1                                   = (PMDG_NGX_ID_OFFSET + 385); // boolean; // false: 1 true: 2;
    public static final int XPDR_AltSourceSel_1                                    = (PMDG_NGX_ID_OFFSET + 386); // boolean; // false: 1 true: 2;
    public static final int XPDR_ModeSel                                           = (PMDG_NGX_ID_OFFSET + 387); // uint8_t; // 0: STBY 1: ALT RPTG OFF ... 4: TA/RA;
    public static final int XPDR_annunFAIL                                         = (PMDG_NGX_ID_OFFSET + 388); // boolean;

    public static final int LTS_PedFloodKnob                                       = (PMDG_NGX_ID_OFFSET + 389); // uint8_t; // Position 0...150;
    public static final int LTS_PedPanelKnob                                       = (PMDG_NGX_ID_OFFSET + 390); // uint8_t; // Position 0...150;

    public static final int TRIM_StabTrimSw_NORMAL                                 = (PMDG_NGX_ID_OFFSET + 391); // boolean;

    public static final int PED_annunLOCK_FAIL                                     = (PMDG_NGX_ID_OFFSET + 392); // boolean;
    public static final int PED_annunAUTO_UNLK                                     = (PMDG_NGX_ID_OFFSET + 393); // boolean;
    public static final int PED_FltDkDoorSel                                       = (PMDG_NGX_ID_OFFSET + 394); // uint8_t; // 0: UNLKD 1 AUTO pushed in 2: AUTO 3: DENY;

    public static final int ENG_StartValve_0                                       = (PMDG_NGX_ID_OFFSET + 395); // boolean; // true: valve open;
    public static final int ENG_StartValve_1                                       = (PMDG_NGX_ID_OFFSET + 396); // boolean; // true: valve open;

    public static final int AIR_DuctPress_0                                        = (PMDG_NGX_ID_OFFSET + 397); // float; // PSI;
    public static final int AIR_DuctPress_1                                        = (PMDG_NGX_ID_OFFSET + 398); // float; // PSI;

    public static final int COMM_Attend_PressCount                                 = (PMDG_NGX_ID_OFFSET + 399); // uint8_t; // incremented with each button press;
    public static final int COMM_GrdCall_PressCount                                = (PMDG_NGX_ID_OFFSET + 400); // uint8_t; // incremented with each button press;
    public static final int COMM_SelectedMic_0                                     = (PMDG_NGX_ID_OFFSET + 401); // uint8_t; // array: 0=capt, 1=F/O, 2=observer.;
    public static final int COMM_SelectedMic_1                                     = (PMDG_NGX_ID_OFFSET + 402); // uint8_t; // array: 0=capt, 1=F/O, 2=observer.;
    public static final int COMM_SelectedMic_2                                     = (PMDG_NGX_ID_OFFSET + 403); // uint8_t; // array: 0=capt, 1=F/O, 2=observer.;

    public static final int FUEL_QtyCenter                                         = (PMDG_NGX_ID_OFFSET + 404); // float; // LBS;
    public static final int FUEL_QtyLeft                                           = (PMDG_NGX_ID_OFFSET + 405); // float; // LBS;
    public static final int FUEL_QtyRight                                          = (PMDG_NGX_ID_OFFSET + 406); // float; // LBS;

    public static final int IRS_aligned                                            = (PMDG_NGX_ID_OFFSET + 407); // boolean; // at least one IRU is aligned;

    public static final int AircraftModel                                          = (PMDG_NGX_ID_OFFSET + 408); // uint8_t; // 1: -600 2: -700 3: -700WL 4: -800 5: -800WL 6: -900 7: -900ER;
    public static final int WeightInKg                                             = (PMDG_NGX_ID_OFFSET + 409); // boolean; // false: LBS true: KG;

    public static final int GPWS_V1CallEnabled                                     = (PMDG_NGX_ID_OFFSET + 410); // boolean; // GPWS V1 callout option enabled;

    public static final int GroundConnAvailable                                    = (PMDG_NGX_ID_OFFSET + 411); // boolean; // can connect/disconnect ground air/electrics;

    public static final int FMC_TakeoffFlaps                                       = (PMDG_NGX_ID_OFFSET + 412); // uint8_t; // degrees, 0 if not set;
    public static final int FMC_V1                                                 = (PMDG_NGX_ID_OFFSET + 413); // uint8_t; // knots, 0 if not set;
    public static final int FMC_VR                                                 = (PMDG_NGX_ID_OFFSET + 414); // uint8_t; // knots, 0 if not set;
    public static final int FMC_V2                                                 = (PMDG_NGX_ID_OFFSET + 415); // uint8_t; // knots, 0 if not set;
    public static final int FMC_LandingFlaps                                       = (PMDG_NGX_ID_OFFSET + 416); // uint8_t; // degrees, 0 if not set;
    public static final int FMC_LandingVREF                                        = (PMDG_NGX_ID_OFFSET + 417); // uint8_t; // knots, 0 if not set;
    public static final int FMC_CruiseAlt                                          = (PMDG_NGX_ID_OFFSET + 418); // uint16_t; // ft, 0 if not set;
    public static final int FMC_LandingAltitude                                    = (PMDG_NGX_ID_OFFSET + 419); // int16_t; // ft; -32767 if not available;
    public static final int FMC_TransitionAlt                                      = (PMDG_NGX_ID_OFFSET + 420); // uint16_t; // ft;
    public static final int FMC_TransitionLevel                                    = (PMDG_NGX_ID_OFFSET + 421); // uint16_t; // ft;
    public static final int FMC_PerfInputComplete                                  = (PMDG_NGX_ID_OFFSET + 422); // boolean;
    public static final int FMC_DistanceToTOD                                      = (PMDG_NGX_ID_OFFSET + 423); // float; // nm; 0.0 if passed, negative if n/a;
    public static final int FMC_DistanceToDest                                     = (PMDG_NGX_ID_OFFSET + 424); // float; // nm; negative if n/a;
    public static final int FMC_flightNumber                                       = (PMDG_NGX_ID_OFFSET + 425); // char;

    // New from service SP2

    public static final int COMM_ReceiverSwitches_0                                = (PMDG_NGX_ID_OFFSET + 426); // Bit flags for selector receivers (see ACP_SEL_RECV_VHF1 etc): [0]=Capt, [1]=FO, [2]=Overhead;
    public static final int COMM_ReceiverSwitches_1                                = (PMDG_NGX_ID_OFFSET + 427); // Bit flags for selector receivers (see ACP_SEL_RECV_VHF1 etc): [0]=Capt, [1]=FO, [2]=Overhead;
    public static final int COMM_ReceiverSwitches_2                                = (PMDG_NGX_ID_OFFSET + 428); // Bit flags for selector receivers (see ACP_SEL_RECV_VHF1 etc): [0]=Capt, [1]=FO, [2]=Overhead;
    public static final int MAIN_annunAP_Amber_0                                   = (PMDG_NGX_ID_OFFSET + 429); // Amber color;
    public static final int MAIN_annunAP_Amber_1                                   = (PMDG_NGX_ID_OFFSET + 430); // Amber color;
    public static final int MAIN_annunAT_Amber_0                                   = (PMDG_NGX_ID_OFFSET + 431); // Amber color;
    public static final int MAIN_annunAT_Amber_1                                   = (PMDG_NGX_ID_OFFSET + 432); // Amber color;
    public static final int ICE_WindowHeatTestSw                                   = (PMDG_NGX_ID_OFFSET + 433); // 0: OVHT 1: Neutral 2: PWR TEST;
    public static final int DOOR_annunFWD_ENTRY                                    = (PMDG_NGX_ID_OFFSET + 434);
    public static final int DOOR_annunFWD_SERVICE                                  = (PMDG_NGX_ID_OFFSET + 435);
    public static final int DOOR_annunAIRSTAIR                                     = (PMDG_NGX_ID_OFFSET + 436);
    public static final int DOOR_annunLEFT_FWD_OVERWING                            = (PMDG_NGX_ID_OFFSET + 437);
    public static final int DOOR_annunRIGHT_FWD_OVERWING                           = (PMDG_NGX_ID_OFFSET + 438);
    public static final int DOOR_annunFWD_CARGO                                    = (PMDG_NGX_ID_OFFSET + 439);
    public static final int DOOR_annunEQUIP                                        = (PMDG_NGX_ID_OFFSET + 440);
    public static final int DOOR_annunLEFT_AFT_OVERWING                            = (PMDG_NGX_ID_OFFSET + 441);
    public static final int DOOR_annunRIGHT_AFT_OVERWING                           = (PMDG_NGX_ID_OFFSET + 442);
    public static final int DOOR_annunAFT_CARGO                                    = (PMDG_NGX_ID_OFFSET + 443);
    public static final int DOOR_annunAFT_ENTRY                                    = (PMDG_NGX_ID_OFFSET + 444);
    public static final int DOOR_annunAFT_SERVICE                                  = (PMDG_NGX_ID_OFFSET + 445);
    public static final int AIR_annunAUTO_FAIL                                     = (PMDG_NGX_ID_OFFSET + 446);
    public static final int AIR_annunOFFSCHED_DESCENT                              = (PMDG_NGX_ID_OFFSET + 447);
    public static final int AIR_annunALTN                                          = (PMDG_NGX_ID_OFFSET + 448);
    public static final int AIR_annunMANUAL                                        = (PMDG_NGX_ID_OFFSET + 449);
    public static final int AIR_CabinAltNeedle                                     = (PMDG_NGX_ID_OFFSET + 440); // Value - ft;
    public static final int AIR_CabinDPNeedle                                      = (PMDG_NGX_ID_OFFSET + 451); // Value - PSI;
    public static final int AIR_CabinVSNeedle                                      = (PMDG_NGX_ID_OFFSET + 452); // Value - ft/min;
    public static final int AIR_CabinValveNeedle                                   = (PMDG_NGX_ID_OFFSET + 453); // Value - 0 (closed) .. 1 (open);
    public static final int AIR_TemperatureNeedle                                  = (PMDG_NGX_ID_OFFSET + 454); // Value - degrees C;
    public static final int AIR_DuctPressNeedle_0                                  = (PMDG_NGX_ID_OFFSET + 455); // Value - degrees C;
    public static final int AIR_DuctPressNeedle_1                                  = (PMDG_NGX_ID_OFFSET + 456); // Value - degrees C;
    public static final int ELEC_MeterDisplayTop                                   = (PMDG_NGX_ID_OFFSET + 457); // Top line of the display: 3 groups of 4 digits (or symbols) + terminating zero (max 13 chars);
    public static final int ELEC_MeterDisplayBottom                                = (PMDG_NGX_ID_OFFSET + 458); // Bottom line of the display (max 13 chars);
    public static final int IRS_DisplayLeft                                        = (PMDG_NGX_ID_OFFSET + 459); // Left display string, zero terminated (max 7 chars);
    public static final int IRS_DisplayRight                                       = (PMDG_NGX_ID_OFFSET + 460); // Right display string, zero terminated (max 8 chars);
    public static final int IRS_DisplayShowsDots                                   = (PMDG_NGX_ID_OFFSET + 461); // True if the degrees and decimal dot symbols are shown on the IRS display;

}
