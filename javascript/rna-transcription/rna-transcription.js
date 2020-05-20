//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dnaSequence = '') => {
  return dnaSequence.split('').map(letter => dnaToRna[letter]).join('')
};


export const dnaToRna = { 
  "G": "C", 
  "C": "G", 
  "T": "A", 
  "A": "U" };