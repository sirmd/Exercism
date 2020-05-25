

const translation = [
  {
    codon: ({ sequence }) => ['AUG'].includes(sequence),
    protein: () => 'Methionine'
  },
  {
    codon: ({ sequence }) => ["UUU", "UUC"].includes(sequence),
    protein: () => 'Phenylalanine'
  },
  {
    codon: ({ sequence }) => ["UUA", "UUG"].includes(sequence),
    protein: () => 'Leucine'
  },
  {
    codon: ({ sequence }) => ["UCU", "UCC", "UCA", "UCG"].includes(sequence),
    protein: () => 'Serine'
  },
  {
    codon: ({ sequence }) => ["UAU", "UAC"].includes(sequence),
    protein: () => 'Tyrosine'
  },
  {
    codon: ({ sequence }) => ["UGU", "UGC"].includes(sequence),
    protein: () => 'Cysteine'
  },
  {
    codon: ({ sequence }) => ["UGG"].includes(sequence),
    protein: () => 'Tryptophan'
  },
  {
    codon: ({ sequence }) => ["UAA", "UAG", "UGA"].includes(sequence),
    protein: () => 'STOP'
  },
  {
    codon: () => true,
    protein: () => { throw new Error('Invalid codon') }
  },

]

export const translate = (rna = '') => {
  var proteins = rna.length == 0 ? [] : rna.match(/.{1,3}/g);
  var translations = [];

  proteins.forEach(sequence => {
    translations.push(
      translation
        .find(({ codon }) => codon({ sequence }))
        .protein());
  });
  if (translations.includes('STOP')) 
    translations.splice(translations.indexOf('STOP'), translations.length);;


  return translations;

};
