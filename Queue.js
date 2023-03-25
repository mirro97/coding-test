/**
 * First In First Out - 선입선출의 개념을 가진 선형 자료구조
 * 선형 큐와 환형 큐가 존재한다
 */

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0; // 큐의 맨 앞
    this.rear = 0; // 큐의 맨 뒤
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
    console.log("인큐 결과: ", this.queue);
  }

  dequeue() {
    delete this.queue[this.front];
    this.front++;
    console.log("디큐 결과: ", this.queue);
  }

  peek() {
    console.log("맨 앞의 값: ", this.queue[this.front]);
  }

  size() {
    console.log("현재 큐의 크기: ", this.rear - this.front);
  }
}

const queue = new Queue();
queue.enqueue(98);
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(234);
queue.enqueue(75);
queue.dequeue();
queue.peek();
queue.size();
