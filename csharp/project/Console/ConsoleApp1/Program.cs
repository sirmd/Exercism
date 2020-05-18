using NUnit.Framework;
using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var buffer = new CircularBuffer<int>(capacity: 1);
            //buffer.Read();

            buffer.Write(1);
            buffer.Read();
            buffer.Read();


        }
    }
}
