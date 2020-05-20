//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  var years = seconds /(EARTH_YEARS_IN_SECONDS * YEARS[planet]) ;
  return parseFloat(years.toFixed(2));
};

const YEARS = {
  "earth": 1,
  "mercury": 0.2408467,
  "venus": 0.61519726,
  "mars": 1.8808158,
  "jupiter": 11.862615,
  "saturn": 29.447498,
  "uranus": 84.016846,
  "neptune": 164.79132
}

const EARTH_YEARS_IN_SECONDS = 31557600;
