using System;

public class Clock : IEquatable<Clock>
{
    public int hours { get; set; }
    public int minutes { get; set; }
    public Clock(int hours, int minutes)
    {
        var totalMinutes = hours * 60 + minutes;
        TimeSpan Time = TimeSpan.FromMinutes(totalMinutes >= 0 ? totalMinutes : 1440 - (-totalMinutes % 1440));
        this.hours = Time.Hours;
        this.minutes = Time.Minutes;
    }

    public Clock Add(int minutesToAdd)
    {
        TimeSpan currentTime = (new TimeSpan(hours, minutes, 0)).Add(new TimeSpan(0, minutesToAdd, 0));
        return new Clock(currentTime.Hours, currentTime.Minutes);
        
    }

    public Clock Subtract(int minutesToSubtract)
    {
        TimeSpan currentTime = (new TimeSpan(hours, minutes, 0)).Subtract(new TimeSpan(0, minutesToSubtract, 0));
        return new Clock(currentTime.Hours, currentTime.Minutes);
    }


    public override string ToString()
    {
        return new TimeSpan(hours, minutes, 0).ToString(@"hh\:mm");
    }

    public bool Equals(Clock other)
    {
        return (hours == other.hours && 
                minutes == other.minutes && 
                other != null);
        
    }
}
