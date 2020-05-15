using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml;

public static class NucleotideCount
{
    

    public static IDictionary<char, int> Count(string sequence)
    {
        Dictionary<char, int> dict = new Dictionary<char, int>();
        dict['A'] = 0;
        dict['C'] = 0;
        dict['G'] = 0;
        dict['T'] = 0;
        foreach (char c in sequence)
        {
            if (dict.ContainsKey(c))
            {
                dict[c]++;
            }
            else
            {
                throw new ArgumentException("Invalida char in sequence");
            }
        }

        return dict;
    }
}