class CircularQueue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueu(value) {
    if (this.isFull()) {
      console.log("꽉찼음!");
      return;
    }
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize;
    this.size++;

    console.log("인큐 결과: ", this.queue);
  }

  dequeue() {
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.size--;

    console.log("디튜 결과: ", this.queue);
  }

  peek() {
    console.log("맨 앞의 값: ", this.queue[this.front]);
  }

  isFull() {
    return this.maxSize === this.size;
  }
}

const CQueue = new CircularQueue(4);
CQueue.enqueu(1);
CQueue.enqueu(73);
CQueue.enqueu(95);
CQueue.enqueu(25);
CQueue.peek();
CQueue.dequeue();
