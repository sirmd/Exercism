using System;

public static class Hamming
{
    public static int Distance(string firstStrand, string secondStrand)
    {
        int differences = 0;
        if (firstStrand.Length != secondStrand.Length)
        {
            throw new ArgumentException("The first and second strands must have the same length.");
        }

        if (firstStrand.Equals(secondStrand))
        {
            return 0;
        }

        for (int i = 0; i < firstStrand.Length; i++)
        {
            string f = firstStrand.Substring(i, 1);
            string s = secondStrand.Substring(i, 1);
            if (!f.Equals(s))
            {
                differences++;
            }

            // Verify the rest of the strands, if they are equal, return the current found differences.
            int nextPos = i < firstStrand.Length ? i + 1 : firstStrand.Length;
            f = firstStrand.Substring(nextPos);
            s = secondStrand.Substring(nextPos);
            if ( f.Equals(s))
            {
                return differences;
            }
        }

        return differences;

    }
}