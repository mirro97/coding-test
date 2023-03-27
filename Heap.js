/**
 * - 우선순위가 높은 요소가 먼저 나가는(out) 특징
 * - 루트가 가장 큰 값이 되는 최대힙(Max Heap) 과 루트가 가장 작은 값이 되는 최소 힙(Min Heap)이 있다
 * - 자바스크립트는 직접 구현해야함
 * */

/**
 * 알고리즘
 * 1. 요소가 추가될 때 트리의 가장 마지막에 정점에 위치한다
 * 2. 추가 후 부모 정점보다 우선순위가 높다면 부모 정점과 순서를 바꾼다
 * 3. 해당 과정 반복 -> 우선순위가 높은 정점이 루트가 됨
 * O(log N) 의 시간 복잡도
 */

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }
}

const heap = new MaxHeap();

heap.push(23);
heap.push(83);
heap.push(13);
heap.push(94);
heap.push(72);
heap.pop();

console.log(heap.heap);
