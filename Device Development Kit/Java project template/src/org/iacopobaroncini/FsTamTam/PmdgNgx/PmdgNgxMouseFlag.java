package org.iacopobaroncini.FsTamTam.PmdgNgx;

public class PmdgNgxMouseFlag {

    //
    // Data source: PMDG_NGX_SDK.h (SP2)
    //

    public static final int MOUSE_FLAG_RIGHTSINGLE                                 = 0x80000000;
    public static final int MOUSE_FLAG_MIDDLESINGLE                                = 0x40000000;
    public static final int MOUSE_FLAG_LEFTSINGLE                                  = 0x20000000;
    public static final int MOUSE_FLAG_RIGHTDOUBLE                                 = 0x10000000;
    public static final int MOUSE_FLAG_MIDDLEDOUBLE                                = 0x08000000;
    public static final int MOUSE_FLAG_LEFTDOUBLE                                  = 0x04000000;
    public static final int MOUSE_FLAG_RIGHTDRAG                                   = 0x02000000;
    public static final int MOUSE_FLAG_MIDDLEDRAG                                  = 0x01000000;
    public static final int MOUSE_FLAG_LEFTDRAG                                    = 0x00800000;
    public static final int MOUSE_FLAG_MOVE                                        = 0x00400000;
    public static final int MOUSE_FLAG_DOWN_REPEAT                                 = 0x00200000;
    public static final int MOUSE_FLAG_RIGHTRELEASE                                = 0x00080000;
    public static final int MOUSE_FLAG_MIDDLERELEASE                               = 0x00040000;
    public static final int MOUSE_FLAG_LEFTRELEASE                                 = 0x00020000;
    public static final int MOUSE_FLAG_WHEEL_FLIP                                  = 0x00010000; // invert direction of mouse wheel;
    public static final int MOUSE_FLAG_WHEEL_SKIP                                  = 0x00008000; // look at next 2 rect for mouse wheel commands;
    public static final int MOUSE_FLAG_WHEEL_UP                                    = 0x00004000;
    public static final int MOUSE_FLAG_WHEEL_DOWN                                  = 0x00002000;
    public static final int MOUSE_FLAG_NONE                                        = 0x00000000;

}
