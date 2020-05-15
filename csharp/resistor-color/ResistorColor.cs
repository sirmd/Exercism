using System;
using System.Linq;
using System.Collections.Generic;

public static class ResistorColor
{
    private static Dictionary<string, int> resistor = new Dictionary<string, int>();
    static ResistorColor()
        {
        resistor["black"] = 0;
        resistor["brown"] = 1;
        resistor["red"] = 2;
        resistor["orange"] = 3;
        resistor["yellow"] = 4;
        resistor["green"] = 5;
        resistor["blue"] = 6;
        resistor["violet"] = 7;
        resistor["grey"] = 8;
        resistor["white"] = 9;
    }
    public static int ColorCode(string color)
    {
        return resistor[color];
    }

    public static string[] Colors()
    {
        return resistor.Keys.ToArray();
    }
}