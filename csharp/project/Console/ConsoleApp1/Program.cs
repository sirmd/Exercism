using NUnit.Framework;
using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Pangram.IsPangram("\"Five quacking Zephyrs jolt my wax bed.\""));
            Console.WriteLine(Pangram.IsPangram("7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog"));

        }
    }
}
