import Node from "./node.js";

class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.listSize = 0;
  }

  // Add node to end of list
  append(value) {
    const node = new Node(value);

    if (this.listSize == 0) {
      this.headNode = node;
      this.tailNode = node;
      this.listSize++;
    } else if (this.listSize == 1) {
      this.headNode.nextNode = node;
      this.tailNode = node;
      this.listSize++;
    } else {
      this.tailNode.nextNode = node;
      this.tailNode = node;
      this.listSize++;
    }
  }

  prepend(value) {
    if (this.listSize == 0) {
      const node = new Node(value, null);

      this.headNode = node;
      this.tailNode = node;
      this.listSize++;
    } else if (this.listSize >= 1) {
      const node = new Node(value, this.headNode);

      this.headNode = node;
      this.listSize++;
    }
  }

  size() {
    return this.listSize;
  }

  head() {
    return this.headNode.value;
  }

  tail() {
    return this.tailNode.value;
  }

  at(index) {
    if (index + 1 > this.listSize) {
      return "Index out of bounds";
    }

    let count = 0,
      currNode = this.headNode;

    while (count !== index) {
      currNode = currNode.nextNode;
      count++;
    }
    return currNode;
  }

  pop() {
    this.tailNode = this.at(this.listSize - 2);
    this.tailNode.nextNode = null;
    this.listSize--;
  }

  contains(value) {
    let currNode = this.headNode;

    while (currNode.value !== value && currNode.nextNode !== null) {
      currNode = currNode.nextNode;
    }
    return currNode.value === value ? true : false;
  }

  find(value) {
    let count = 0,
      currNode = this.headNode;

    while (currNode.value !== value && currNode.nextNode !== null) {
      currNode = currNode.nextNode;
      count++;
    }
    return currNode.value === value ? count : -1;
  }

  toString() {
    let listString = "",
      currNode = this.headNode,
      count = 1;

    while (count <= this.listSize) {
      listString += `( ${currNode.value} ) -> `;
      currNode = currNode.nextNode;
      count++;
    }
    return (listString += "null");
  }
}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.insertAt(0));
