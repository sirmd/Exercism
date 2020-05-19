//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//




export class Clock {
  constructor(hours, minutes = 0) {
    var totalMinutes = (((minutes + hours * 60) % 1440) + 1440) % 1440;
    this.hours = Math.floor(totalMinutes / 60);
    this.minutes = totalMinutes % 60;
  }

  toString() {
    return `${this.hours.toString().padStart(2, 0)}:${this.minutes.toString().padStart(2, 0)}`;
  }

  plus(minutesToAdd = 0) {
    return new Clock(this.hours, this.minutes + minutesToAdd);
  }

  minus(minutesToSubtract = 0) {
    return new Clock(this.hours, this.minutes - minutesToSubtract);
  }

  equals(clock) {
    return (clock.hours == this.hours &&
            clock.minutes == this.minutes);
  }
}
