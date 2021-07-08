
export class LinkedList {
  constructor() {
    this.head = {};
    this.tail = {};
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  firstNode = () => this.head.next;
  lastNode = () => this.tail.prev;
  count = () => [...this.nodes()].length;

  *nodes() {
    for (let node = this.firstNode(); node !== this.tail; node = node.next) {
      yield node;
    }
  }
  
  del = (node) => {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    return node.data
  }

  insert = (data, node) => {
    const next = node.next;
    node.next = next.prev = { data, node, next };
  }

  find = (data) => {
    for (const node of this.nodes()) {
      if (node.data === data) return node;
    }
  }

  delete = (data) => {
    const node = this.find(data);
    if (node) this.del(node);
  }

  push = (data) => this.insert(data, this.lastNode());

  pop = () => this.del(this.lastNode());

  shift = () => this.del(this.firstNode());

  unshift = (data) => this.insert(data, this.head);

}
