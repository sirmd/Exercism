using NUnit.Framework;
using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            var sut = new Allergies(509);
            Console.WriteLine(sut.IsAllergicTo(Allergen.Peanuts));

            
            sut = new Allergies(3);
            Console.WriteLine(sut.IsAllergicTo(Allergen.Eggs));

        }
    }
}
