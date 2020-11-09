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


#ifndef _H_FSTAMTAM_SMART_INPUT
#define _H_FSTAMTAM_SMART_INPUT


/*

    Smart inputs:

        - ToggleSwitch
        - ToggleSwitch3Position
        - PushButton
        - Potentiometer
        - Selector (analog implementation)

*/


#include <FsTamTam.h>


//                 
//                 
// Toggle Switch
//                
//      

/* 
    For toggle switches in the following configuration

                                 /
                                /
    [digital input_pullup]-----*   *-----[GND]
    
    If open, value is 0
    If closed, value is 1
*/


class ToggleSwitch : public FsTamTamSmartInput {
    
    private:
    
        uint8_t pin;
        
    public:

        ToggleSwitch(
            uint8_t digitalPin
        );
    
        void update();

};


//                 
//                 
// Push BUtton         
//                 
//


using PushButton = ToggleSwitch;


//                 
//                 
// Toggle Switch 3-position         
//                 
//

/* 
    For toggle switches 3-position in the following configuration
    
                            +---+
    [digital input upper]---|   |/  (up)        value = 0
                    [GND]---|   |-- (middle)    value = 1
    [digital input lower]---|   |\  (down)      value = 2
                            +---+
*/


class ToggleSwitch3Position : public FsTamTamSmartInput {
    
    private:
    
        uint8_t pinUpper;
        uint8_t pinLower;
    
    public:
    
        ToggleSwitch3Position(
            uint8_t digitalPinUpper,
            uint8_t digitalPinLower
        );
        
        void update();
    
};


//                 
//                 
// Potentiometer         
//                 
//

/* 
    For any analog input...
    
    [analog input]---<
*/


class Potentiometer : public FsTamTamSmartInput {
    
    private:
    
        uint8_t pin;
        int16_t changeTolerance;
        int16_t minA;
        int16_t maxA;
        float m;
        float n;
    
        void setup(uint8_t analogPin, int16_t adc0, int16_t adc1, int16_t value0, int16_t value1, int16_t changeTolerance);
    
    public:
    
        Potentiometer(
            uint8_t analogPin, 
            int16_t valueChangeTolerance
        );

        Potentiometer(
            uint8_t analogPin,
            int16_t value0,
            int16_t value1, 
            int16_t valueChangeTolerance
        );

        Potentiometer(
            uint8_t analogPin,
            int16_t adc0,
            int16_t adc1,
            int16_t value0,
            int16_t value1,
            int16_t valueChangeTolerance
        );

        void update();
    
};


//                 
//                 
//  Selector         
//                 
//
// 

/* 
    For any selector in the followin configuration

             1         2                       N
    [GND]----X--[ R ]--X--[ R ]-- ... --[ R ]--X---[+5V]

                      \|/ (selector to 1, 2, ... N)
    [analog input]-----o
*/


class Selector : public Potentiometer {

    public:
    
        Selector(
            uint8_t analogPin,
            uint8_t valueFirstPos,
            uint8_t valueLastPos
        ) : Potentiometer(analogPin, valueFirstPos, valueLastPos, 0) {
            
        }
    
};


#endif
