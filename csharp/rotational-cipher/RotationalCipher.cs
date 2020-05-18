using System;

public static class RotationalCipher
{
    public static string Rotate(string text, int shiftKey)
    {
        int alphabetSize = 26;
        string result = "";

        foreach (char c in text)
        {
            int index = (int)c % 32;
            char newChar = c;
            if (Char.IsLetter(c))
            {
                if ((index + shiftKey) > alphabetSize)
                {
                    var newShiftKey = shiftKey - ((alphabetSize - index) + 1);

                    newChar = (char)('A' + newShiftKey);
                }
                else
                {
                    newChar += (char)shiftKey;
                }
            }
            result = Char.IsLower(c) ? result + Char.ToLower(newChar) : result + Char.ToUpper(newChar);
        }
        return result;
    }
}