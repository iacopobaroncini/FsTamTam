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


#include <FsTamTamCduScreenData.h>


static bool cduPowered              = false;
static uint8_t cduRowCount          = 0;
static uint8_t cduColIdx            = 0;
static char *cduData                = NULL;
static char *cduEndData             = NULL;
static int cduDataLen               = 0;
static PmdgNgxCduCell cduRow[24];
static uint8_t cduColor             = 0;
static uint8_t cduFlags             = 0;

__FsTamTamCduScreenData FsTamTamCduScreenData;



static bool cduScreenDataDecodeNextRow() {
    int n;
    int pos = 0;
    char ch;
    char hex[3] = { '0', '0', 0 };
    if (cduRowCount >= 14) return false;
    for (int i = 0; i < 24; i++) {
        cduRow[i].asciiCode = (uint8_t) ' ';
        cduRow[i].color = 0;
        cduRow[i].flags = 0;
    }
    while (cduData < cduEndData && pos < 24) {
        ch = *(cduData++);
        switch (ch) {
            case 't': // text (len < 10)
            case 'u': // text (len >= 10)
                n = *(cduData++) - '0';
                if (ch == 'u')
                    n = n * 10 + (*(cduData++) - '0');
                for (int i = 0; i < n; i++) {
                    cduRow[pos].asciiCode = (uint8_t) *(cduData++);
                    cduRow[pos].color = cduColor;
                    cduRow[pos++].flags = cduFlags;
                }
                break;
            case 'a': // spaces (len < 10)
            case 'b': // spaces (len >= 10)
                n = *(cduData++) - '0';
                if (ch == 'b')
                    n = n * 10 + (*(cduData++) - '0');
                for (int i = 0; i < n; i++) {
                    cduRow[pos].asciiCode = (uint8_t) ' ';
                    cduRow[pos].color = cduColor;
                    cduRow[pos++].flags = cduFlags;
                }
                break;
            case 'c': // color
                cduColor = *(cduData++) - '0';
                break;
            case 'f': // flags
                cduFlags = *(cduData++) - '0';
                break;
            case 'x': // special code
                hex[0] = *(cduData++);
                hex[1] = *(cduData++);
                cduRow[pos].asciiCode = strtol(hex, NULL, 16);
                cduRow[pos].color = cduColor;
                cduRow[pos++].flags = cduFlags;
                break;
            default:
                return false;
                
        }
    }
    cduRowCount++;
    cduColIdx = 0;
    return true;
}


void __FsTamTamCduScreenData::init(char *codedString) {
    cduRowCount = cduColIdx = 0;
    cduData = codedString;
    cduDataLen = (int) strlen(cduData); 
    cduEndData = cduData + cduDataLen;
    cduPowered = cduDataLen > 1 && *cduData != '-';
    for (int i = 0; i < 24; i++) {
        cduRow[i].asciiCode = (uint8_t) ' ';
        cduRow[i].color = 0;
        cduRow[i].flags = 0;            
    }
}


PmdgNgxCduCell *__FsTamTamCduScreenData::nextCell() {
    if (!cduPowered) return NULL;
    if (cduColIdx >= 24) cduColIdx = 0;
    if (cduColIdx == 0 && !cduScreenDataDecodeNextRow()) return NULL;
    return &(cduRow[cduColIdx++]);
}


bool __FsTamTamCduScreenData::isPowered() {
    return cduPowered;
}


int __FsTamTamCduScreenData::length() {
    return cduDataLen;
}

