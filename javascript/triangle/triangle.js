//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.

export class Triangle {
  constructor(A, B, C) {
    this.sides = {A, B, C}
  }

  isEquilateral() {
    return (this.sides.A == this.sides.B && this.sides.A == this.sides.C && this.sides.A > 0) ? true : false;
  }

  isIsosceles() {
    var notInequality = true;
    if (this.sides.A == this.sides.B || this.sides.A == this.sides.C || this.sides.B == this.sides.C) {
      
      if (this.sides.A + this.sides.B < this.sides.C) {
        var notInequality = false;
      }
      if (this.sides.A + this.sides.C < this.sides.B) {
        var notInequality = false;
      }
      if (this.sides.C + this.sides.B < this.sides.A) {
        var notInequality = false;
      }
    }
    else
    {
      notInequality = false;
    }
    return notInequality;
  }

  isScalene() {
    var notInequality = true;

    if (this.sides.A != this.sides.B && this.sides.A != this.sides.C) {
      
      if (this.sides.A + this.sides.B < this.sides.C) {
        var notInequality = false;
      }
      if (this.sides.A + this.sides.C < this.sides.B) {
        var notInequality = false;
      }
      if (this.sides.C + this.sides.B < this.sides.A) {
        var notInequality = false;
      }
    }
    else
    {
      notInequality = false;
    }
    return notInequality;
  }
}
