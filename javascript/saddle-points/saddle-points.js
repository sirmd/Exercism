const transpose = matrix => matrix[0].map((r, c) => matrix.map(r => r[c]));


export const saddlePoints = (matrix) => {
  var result = [];
  var matrixSwapped = transpose(matrix);


  for (let row = 0; row < matrix.length; row++) {

    for (let col = 0; col < matrix[row].length; col++) {

      if (Math.max(...matrix[row]) == matrix[row][col] &&
        Math.max(...matrix[row]) == Math.min(...matrixSwapped[col])) {

        result.push({ row: row + 1, column: col + 1 });

      }

    }

  }

  return result;
};


