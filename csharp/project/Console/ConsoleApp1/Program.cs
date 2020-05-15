using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            Robot robot = new Robot();
            Console.WriteLine(robot.Name);
            Console.WriteLine(robot.Name);

            Robot robot2 = new Robot();
            Console.WriteLine(robot2.Name);

            robot.Reset();
            Console.WriteLine(robot.Name);
        }
    }
}
