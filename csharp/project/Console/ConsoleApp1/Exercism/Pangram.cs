using System;
using System.Collections.Generic;
using System.Linq;

public static class Pangram
{
    public static bool IsPangram(string input)
    {
        HashSet<char> alphabetSet = "abcdefghijklmnopqrstuvxzyw".ToHashSet();
        HashSet<char> inputLettersOnly = input.ToLower().Where(Char.IsLetter).ToHashSet();

        // Remove all letters from the alphabet HashSet that are also on the input.
        alphabetSet.ExceptWith(inputLettersOnly);
        
        return 0 == alphabetSet.Count();
        
    }
}
