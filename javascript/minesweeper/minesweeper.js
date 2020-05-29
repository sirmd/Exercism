const validations = (input) => {
  var emptyInput = input.length == 0 || input == null || input.join('').length == 0;
  var onlyMines = emptyInput ? false : input.join('').length == input.join('').replace(/[ ]/g, '').length;
  var onlySpaces = emptyInput ? false : input.join('').length == input.join('').replace(/[*]/g, '').length;

  return !(emptyInput || onlyMines || onlySpaces);

}

const getMinesAround = (params) => {

  var mine = '*';
  var rowStart = params.row > 0 ? -1 : 0;
  var rowEnd = params.input.length - 1 == params.row ? 0 : 1;
  var colStart = params.col > 0 ? -1 : 0;
  var colEnd = params.input[0].length - 1 == params.col ? 0 : 1;
  var count = 0;
  for (let r = rowStart; r <= rowEnd; r++) {

    var row = params.row + r;

    for (let c = colStart; c <= colEnd; c++) {
      var col = params.col + c;

      if (params.input[row][col] == mine) count++;

    }

  }

  return count == 0 ? ' ' : count;
}


export const annotate = (input) => {
  if (!validations(input)) return input;

  var output = [];

  for (let row = 0; row < input.length; row++) {
    var currentRow = input[row].split('');
    for (let col = 0; col < currentRow.length; col++) {
      if (currentRow[col] == ' ') {
        currentRow[col] = getMinesAround({ input: input, row: row, col: col });
      }
    }
    output.push(currentRow.join(''));
  }

  return output;

}
