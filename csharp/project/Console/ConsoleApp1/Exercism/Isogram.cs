using System;
using System.Collections.Generic;
using System.Linq;

public static class Isogram
{
    public static bool IsIsogram(string word)
    {

        return 0 ==  word
                    .ToLower()
                    .Where(Char.IsLetter)
                    .GroupBy(w => w)
                    .ToDictionary(w => w.Key, w => w.Count())
                    .Where(w=>w.Value > 1).ToList().Count;
        

    }
}
