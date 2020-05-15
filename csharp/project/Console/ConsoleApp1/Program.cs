using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Hamming.Distance("", ""));
            Console.WriteLine(Hamming.Distance("A", "A"));
            Console.WriteLine(Hamming.Distance("G", "T"));
            Console.WriteLine(Hamming.Distance("GGACTGAAATCTG", "GGACTGAAATCTG"));
            Console.WriteLine(Hamming.Distance("GGACGGATTCTG", "AGGACGGATTCT"));
            Console.WriteLine(Hamming.Distance("AATG", "AAA"));
            Console.WriteLine(Hamming.Distance("ATA", "AGTG"));
            Console.WriteLine(Hamming.Distance("", "G"));
            Console.WriteLine(Hamming.Distance("G", ""));
        }
    }
}
