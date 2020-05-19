//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (...params) => {
  var result = "";
  for (let index = 0; index < params[0].length; index++) {
    result += COLORS.indexOf(params[0][index]);
    console.log(params[0][index]);
    
  }

  return parseInt(result.substring(0,2));
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];