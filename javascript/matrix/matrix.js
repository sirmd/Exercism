export class Matrix {
  constructor(string) {
    this.matrix = string.split("\n").map((row) => row.split(' ').map((n) => parseInt(n)));
  }

  get rows() {
    var result = this.matrix;
    return result;
  }

  get columns() {
    var result = this.matrix[0].map((cell, n) =>
      this.matrix.map((row) => row[n])
      );
    return result;
  }
}

