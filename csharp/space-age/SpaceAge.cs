using System;

public class SpaceAge
{
    public int seconds { get; set; }
    public int earthYearInSeconds { get; set; }
    public double mercuryEarthYears { get; set; }
    public double venusEarthYears { get; set; }
    public double marsEarthYears { get; set; }
    public double jupiterEarthYears { get; set; }
    public double saturnEarthYears { get; set; }
    public double uranusEarthYears { get; set; }
    public double neptuneEarthYears { get; set; }

    public SpaceAge(int _seconds)
    {
        this.seconds = _seconds;
        this.earthYearInSeconds = 31557600;
        this.mercuryEarthYears = 0.2408467;
        this.venusEarthYears = 0.61519726 ;
        this.marsEarthYears = 1.8808158 ;
        this.jupiterEarthYears = 11.862615 ;
        this.saturnEarthYears = 29.447498 ;
        this.uranusEarthYears = 84.016846 ;
        this.neptuneEarthYears = 164.79132 ;

    }

    public double OnEarth()
    {
        return (double) this.seconds/this.earthYearInSeconds;
    }

    public double OnMercury()
    {
        return (double) this.seconds/(this.earthYearInSeconds * this.mercuryEarthYears);
    }

    public double OnVenus()
    {
        return (double) this.seconds/(this.earthYearInSeconds * this.venusEarthYears);
    }

    public double OnMars()
    {
        return (double) this.seconds/(this.earthYearInSeconds * this.marsEarthYears);
    }

    public double OnJupiter()
    {
        return (double) this.seconds/(this.earthYearInSeconds * this.jupiterEarthYears);
    }

    public double OnSaturn()
    {
        return (double) this.seconds/(this.earthYearInSeconds * this.saturnEarthYears);
    }

    public double OnUranus()
    {
        return (double) this.seconds/(this.earthYearInSeconds * this.uranusEarthYears);
    }

    public double OnNeptune()
    {
        return (double) this.seconds/(this.earthYearInSeconds * this.neptuneEarthYears);
    }
}