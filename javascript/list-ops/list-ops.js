
export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    this.values = [...this.values, ...list.values];

    return this;
  }

  concat(list) {
    return new List([...this.values, ...list.values].reduce((array, element) => {
      return (element instanceof List) ? [...array, ...element.values] : [...array, element];

    }, []));

  }

  filter(func) {
    return new List(this.values.filter(func));
  }

  map(func) {
    return new List(this.values.map(func));
  }

  length() {
    return this.values.length;
  }

  foldl(func, n) {
    return this.values.reduce(func, n);
  }

  foldr(func, n) {
    return this.values.reverse().reduce(func, n);
  }

  reverse() {
    return new List(this.values.reverse());
  }
}
