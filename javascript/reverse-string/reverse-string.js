//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
  var reverse = "";
  for (let index = string.length; index >= 0; index--) {
    reverse += string.substring(index - 1,index);
    
  };
  return reverse;
};
