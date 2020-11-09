package org.iacopobaroncini.FsTamTam;

import org.iacopobaroncini.FsTamTam.PmdgNgx.PmdgNgxCduCell;

public class FsTamTamCduScreenData {

    private static boolean cduPowered = false;
    private static int cduRowCount = 0;
    private static int cduColIdx = 0;
    private static String cduData = "";
    private static int cduDataIdx = 0;
    private static int cduDataLen = 0;
    private static PmdgNgxCduCell[] cduRow = new PmdgNgxCduCell[24];
    private static byte cduColor = 0;
    private static byte cduFlags = 0;

    static {
        for (int i = 0; i < 24; i++)
            cduRow[i] = new PmdgNgxCduCell();
    }

    public static void init(String codedString) {
        cduRowCount = cduColIdx = 0;
        cduData = codedString;
        cduDataIdx = 0;
        cduDataLen = cduData.length();
        cduPowered = cduDataLen > 1 || !(cduDataLen == 1 && cduData.equals("-"));
    }

    public static PmdgNgxCduCell nextCell() {
        if (!cduPowered) return null;
        if (cduColIdx >= 24) cduColIdx = 0;
        if (cduColIdx == 0 && !cduScreenDataDecodeNextRow()) return null;
        return cduRow[cduColIdx++];
    }

    public static boolean isPowered() {
        return cduPowered;
    }

    public static int length() {
        return cduDataLen;
    }

    private static boolean cduScreenDataDecodeNextRow() {
        int n;
        int pos = 0;
        char ch;
        String hex;
        if (cduRowCount >= 14) return false;
        for (int i = 0; i < 24; i++) {
            cduRow[i].asciiCode = (int) ' ';
            cduRow[i].color = 0;
            cduRow[i].flags = 0;
        }
        while (cduDataIdx < cduDataLen && pos < 24) {
            ch = getNextChar();
            switch (ch) {
                case 't': // text (len < 10)
                case 'u': // text (len >= 10)
                    n = getNextChar() - '0';
                    if (ch == 'u')
                        n = n * 10 + (getNextChar() - '0');
                    for (int i = 0; i < n; i++) {
                        cduRow[pos].asciiCode = (int) getNextChar();
                        cduRow[pos].color = cduColor;
                        cduRow[pos++].flags = cduFlags;
                    }
                    break;
                case 'a': // spaces (len < 10)
                case 'b': // spaces (len >= 10)
                    n = getNextChar() - '0';
                    if (ch == 'b')
                        n = n * 10 + (getNextChar() - '0');
                    for (int i = 0; i < n; i++) {
                        cduRow[pos].asciiCode = (int) ' ';
                        cduRow[pos].color = cduColor;
                        cduRow[pos++].flags = cduFlags;
                    }
                    break;
                case 'c': // color
                    cduColor = (byte) Integer.parseInt("" + getNextChar());
                    break;
                case 'f': // flags
                    cduFlags = (byte) Integer.parseInt("" + getNextChar());
                    break;
                case 'x': // special code
                    hex = "" + getNextChar();
                    hex += getNextChar();
                    cduRow[pos].asciiCode = Integer.parseInt(hex, 16);
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

    private static char getNextChar() {
        return cduData.charAt(cduDataIdx++);
    }

}
