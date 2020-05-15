using NUnit.Framework;
using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var sut = new GradeSchool();
            sut.Add("Franklin", 5);
            sut.Add("Bradley", 5);
            sut.Add("Jeff", 1);
            Console.WriteLine(sut.Grade(5));
            
        }
    }
}
