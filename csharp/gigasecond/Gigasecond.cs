using System;

public static class Gigasecond
{
    public static DateTime Add(DateTime moment)
    {
        double gigaSecond = Math.Pow(10.0, 9.0);
        Console.WriteLine(gigaSecond);
        DateTime gigaMoment = moment.AddSeconds(gigaSecond);
        return gigaMoment;
    }
}