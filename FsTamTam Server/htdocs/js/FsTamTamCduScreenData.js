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


let __cduPowered = false;
let __cduRowCount = 0;
let __cduColIdx = 0;
let __cduFlags = 0;
let __cduData = "";
let __cduDataIdx = 0;
let __cduDataLen = 0;
let __cduRow = null;
let __cduDataState = 0;
let __cduDataReductionMin = 100.0;
let __cduDataReductionMax = 0.0;


class FsTamTamCduScreenData {
    
    static init() {
        __cduRowCount = __cduColIdx = 0;
        __cduData = FsTamTam.simulationData.asText;
        __cduDataLen = __cduData.length;
        __cduPowered = __cduDataLen > 1 || !(__cduDataLen == 1 && __cduData.charAt(0) == '-');
        __cduPowered = __cduDataLen > 1 && __cduData;
        __cduDataIdx = 0;
        __cduColIdx = 0xff;
        __cduFlags = 0xff;
        if (__cduRow != null) return;
        __cduRow = new Array(24);
        for (var i = 0; i < 24; i++) {
            var ref = __cduRow[i] = new Object();
            ref.asciiCode = 32;
            ref.color = 0;
            ref.flags = 0;            
        }
    }

    static isPowered() {
        return __cduPowered;
    }

    static nextCell() {
        if (!FsTamTamCduScreenData.isPowered()) return null;
        if (__cduColIdx >= 24) __cduColIdx = 0;
        if (__cduColIdx == 0 && !cduScreenDataDecodeNextRow()) return null;
        return __cduRow[__cduColIdx++];
    }
    
    
    static length() {
        return (FsTamTamCduScreenData.isPowered()) ? __cduDataLen : 1;
    }
    
}


function cduScreenDataDecodeNextRow() {
    var i;
    var ref;
    var n;
    var pos = 0;
    var s;
    if (__cduRow == null || !__cduPowered || __cduRowCount >= 14) return false;
    for (var i = 0; i < 24; i++) {
        ref = __cduRow[i];
        ref.asciiCode = 32;
        ref.color = 0;
        ref.flags = 0;
    }
    while (__cduDataIdx < __cduDataLen && pos < 24) {
        ch = __cduData.charAt(__cduDataIdx++);
        switch (ch) {
            case 't': // text (len < 10)
            case 'u': // text (len >= 10)
                n = __cduData.charCodeAt(__cduDataIdx++) - 0x30;
                if (ch == 'u')
                    n = n * 10 + __cduData.charCodeAt(__cduDataIdx++) - 0x30;
                for (var i = 0; i < n; i++) {
                    ref = __cduRow[pos++];
                    ref.asciiCode = __cduData.charCodeAt(__cduDataIdx++);
                    ref.color = __cduColIdx;
                    ref.flags = __cduFlags;
                }
                break;
            case 'a': // spaces (len < 10)
            case 'b': // spaces (len >= 10)
                n = __cduData.charCodeAt(__cduDataIdx++) - 0x30;
                if (ch == 'b')
                    n = n * 10 + __cduData.charCodeAt(__cduDataIdx++) - 0x30;
                for (var i = 0; i < n; i++) {
                    ref = __cduRow[pos++];
                    ref.asciiCode = 32;
                    ref.color = __cduColIdx;
                    ref.flags = __cduFlags;
                }
                break;
            case 'c': // color
                __cduColIdx = __cduData.charCodeAt(__cduDataIdx++) - 0x30;
                break;
            case 'f': // flags
                __cduFlags = __cduData.charCodeAt(__cduDataIdx++) - 0x30;
                break;
            case 'x': // special code
                s  = __cduData.charAt(__cduDataIdx++);
                s += __cduData.charAt(__cduDataIdx++);
                ref = __cduRow[pos++];
                ref.asciiCode = parseInt(s, 16);
                ref.color = __cduColIdx;
                ref.flags = __cduFlags;
                break;
            default:
                return false;
        }
    }
    __cduRowCount++;
    __cduColIdx = 0;
    return true;
}


function FsTamTamCduTag(info) {
    var smallFont = (info.flags & 0x01) != 0;
    var reverse = (info.flags & 0x02) != 0;
    var dimmed = (info.flags & 0x04) != 0;
    var s = '<td class="';
    s += reverse ? "cduReverse" : ("cduColor" + info.color);
    if (smallFont) s += " cduSmallFont";
    if (dimmed) s += " cduDimmed";
    return s + '">';
}
