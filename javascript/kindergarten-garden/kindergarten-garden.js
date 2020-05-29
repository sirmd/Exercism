const STUDENTS = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fred",
  "Ginny",
  "Harriet",
  "Ileana",
  "Joseph",
  "Kincaid",
  "Larry"
];

const PLANTS = {
  'V': 'violets',
  'R': 'radishes',
  'G': 'grass',
  'C': 'clover'
};
export class Garden {

  constructor(diagram = '', students = STUDENTS) {
    var garden = diagram.split('\n');
    students.sort().forEach((student, index) =>
      this[student.toLowerCase()] = [
        garden[0][index * 2], 
        garden[0][index * 2 + 1], 
        garden[1][index * 2], 
        garden[1][index * 2 + 1]
      ].map(p => PLANTS[p])
    );
  }

}
