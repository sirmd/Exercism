using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var test = NucleotideCount.Count("");
            test = NucleotideCount.Count("GGGGGGG");
            test = NucleotideCount.Count("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC");
        }
    }
}
