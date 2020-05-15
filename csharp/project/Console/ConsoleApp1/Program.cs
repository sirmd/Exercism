using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var sut = new HighScores(new List<int> { 100, 0, 90, 30 });
            Console.WriteLine(sut.PersonalBest());

            var list = sut.PersonalTopThree();
        }
    }
}
