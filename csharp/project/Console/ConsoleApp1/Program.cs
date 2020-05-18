using NUnit.Framework;
using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(RotationalCipher.Rotate("Let's eat, Grandma!", 21));
            Console.WriteLine("Gzo'n zvo, Bmviyhv!");
            Console.WriteLine(RotationalCipher.Rotate("Gur dhvpx oebja sbk whzcf bire gur ynml qbt.", 13));


        }
    }
}
