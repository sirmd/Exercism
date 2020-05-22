export class GradeSchool {
  constructor() {
    this._roster = {};

  }
  roster = () => JSON.parse(JSON.stringify(this._roster));
  grade = (grade) => [...(this._roster[grade] || [])];

  add = (student, grade) => {
    this._roster[grade] = this._roster[grade] || [];
    this._roster[grade].push(student);
    this._roster[grade].sort();
      
    }
  }


