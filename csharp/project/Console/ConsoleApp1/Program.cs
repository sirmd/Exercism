using NUnit.Framework;
using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            var sut = new Clock(1, -4820);
            var sut2 = new Clock(16, 40);
            Console.WriteLine(sut.ToString());

            if (sut2.Equals(sut))
            {
                Console.WriteLine("true");
            }
            else
            {
                Console.WriteLine("false");
            }

        }
    }
}
