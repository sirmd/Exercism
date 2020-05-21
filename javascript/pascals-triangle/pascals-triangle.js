export const rows = (rowAmount) => {
  var result = [];

  for (let row = 0; row < rowAmount; row++) {
    var rowArray = [];
    for (let col = 0; col < (row + 1); col++) {
      var leftValue = col == 0 ? 0 : result[row - 1][col - 1];
      var indexValue = (row < 1 ? 1 : result[row - 1][col]);
      indexValue = indexValue === undefined ? 0 : indexValue;

      rowArray[col] = leftValue + indexValue;

    }

    result.push(rowArray);
  }

  return result;
};
