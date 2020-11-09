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


#ifndef _H_PMDG_NGX_MOUSE_FLAGS
#define _H_PMDG_NGX_MOUSE_FLAGS


#define MOUSE_FLAG_RIGHTSINGLE                              0x80000000
#define MOUSE_FLAG_MIDDLESINGLE                             0x40000000
#define MOUSE_FLAG_LEFTSINGLE                               0x20000000
#define MOUSE_FLAG_RIGHTDOUBLE                              0x10000000
#define MOUSE_FLAG_MIDDLEDOUBLE                             0x08000000
#define MOUSE_FLAG_LEFTDOUBLE                               0x04000000
#define MOUSE_FLAG_RIGHTDRAG                                0x02000000
#define MOUSE_FLAG_MIDDLEDRAG                               0x01000000
#define MOUSE_FLAG_LEFTDRAG                                 0x00800000
#define MOUSE_FLAG_MOVE                                     0x00400000
#define MOUSE_FLAG_DOWN_REPEAT                              0x00200000
#define MOUSE_FLAG_RIGHTRELEASE                             0x00080000
#define MOUSE_FLAG_MIDDLERELEASE                            0x00040000
#define MOUSE_FLAG_LEFTRELEASE                              0x00020000
#define MOUSE_FLAG_WHEEL_FLIP                               0x00010000	// invert direction of mouse wheel
#define MOUSE_FLAG_WHEEL_SKIP                               0x00008000	// look at next 2 rect for mouse wheel commands
#define MOUSE_FLAG_WHEEL_UP                                 0x00004000
#define MOUSE_FLAG_WHEEL_DOWN                               0x00002000
#define MOUSE_FLAG_NONE                                     0x00000000


#endif