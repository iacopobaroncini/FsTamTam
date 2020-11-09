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



#include <FsTamTam.h>


//
// ToggleSwitch 
//


ToggleSwitch::ToggleSwitch(uint8_t digitalPin) : FsTamTamSmartInput() {
    pinMode(pin = digitalPin, INPUT_PULLUP);
}


void ToggleSwitch::update() {
    setValue(!digitalRead(pin));
}


//
// ToggleSwitch3Position
//


ToggleSwitch3Position::ToggleSwitch3Position(uint8_t digitalPinUpper, uint8_t digitalPinLower) : FsTamTamSmartInput() {
    pinMode(pinUpper = digitalPinUpper, INPUT_PULLUP);
    pinMode(pinLower = digitalPinLower, INPUT_PULLUP);
}


void ToggleSwitch3Position::update() {
    int16_t pos = 1;
    if (!digitalRead(pinUpper)) 
        pos = 0;
    else
    if (!digitalRead(pinLower))
        pos = 2;
    setValue(pos);
}


//
// Potentiometer
//


Potentiometer::Potentiometer(uint8_t analogPin, int16_t valueChangeTolerance) : FsTamTamSmartInput() {
    setup(analogPin, 0, 1023, 0, 1023, valueChangeTolerance);
}


Potentiometer::Potentiometer(uint8_t analogPin, int16_t value0, int16_t value1, int16_t valueChangeTolerance) : FsTamTamSmartInput() {
    setup(analogPin, 0, 1023, value0, value1, valueChangeTolerance);
}


Potentiometer::Potentiometer(uint8_t analogPin, int16_t adc0, int16_t adc1, int16_t value0, int16_t value1, int16_t valueChangeTolerance) : FsTamTamSmartInput() {
    setup(analogPin, adc0, adc1, value0, value1, valueChangeTolerance);
}


void Potentiometer::setup(uint8_t analogPin, int16_t adc0, int16_t adc1, int16_t value0, int16_t value1, int16_t valueChangeTolerance) {
    pinMode(pin = analogPin, INPUT);
    if (adc0 == adc1) {
        m = n = 0.0f;
        minA = 0;
        maxA = 1023;
        valueChangeTolerance = 0;
    } else {
        m = 1.0f * (value1 - value0) / (adc1 - adc0);
        n = 1.0f * value0 - m * adc0;
        minA = min(adc0, adc1);
        maxA = max(adc0, adc1);
        int16_t d = maxA - minA;
        changeTolerance = max(0, valueChangeTolerance);
        changeTolerance = min(d, changeTolerance);
    }
}


void Potentiometer::update() {
    int16_t a = analogRead(pin);
    a = max(a, minA);
    a = min(a, maxA);
    int16_t nv = round(m * a + n); 
    int16_t tmp = value - nv;
    if (assigned && abs(tmp) <= changeTolerance) return;
    setValue(nv);
}
