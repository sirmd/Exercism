//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  var gs = new Date(date.getTime() + Math.pow(10,12));
  return gs; 
};
