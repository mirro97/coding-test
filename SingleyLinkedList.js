class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // 포인터
  }

  find(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    console.log(currentNode);
    return currentNode;
  }

  // 맨 끝에 데이터 삽입
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // 중간에 데이터 삽입
  insert(node, value) {
    const newNode = new Node(value);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currentNode = this.head;
    let display = "[";
    while (currentNode !== null) {
      display += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }
    display = display.substr(0, display.length - 2);
    display += "]";
    console.log(display);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(12);
linkedList.append(63);
linkedList.append(89);
linkedList.append(39);
linkedList.append(40);
linkedList.find(12);

linkedList.display();
linkedList.remove(89);
linkedList.display();
