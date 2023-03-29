// 재귀함수의 예시

// 1) 피보나치 수열
function Fibonacci(num) {
  if (num <= 2) {
    return 1;
  }
  return Fibonacci(num - 1) + Fibonacci(num - 2);
}

console.log(Fibonacci(7));

// 2) 트리 순회 알고리즘
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  // 전위 순회 : root -> left -> right
  preorder(currentNode) {
    console.log(currentNode.value);
    if (currentNode.left) this.preorder(currentNode.left);
    if (currentNode.right) this.preorder(currentNode.right);
  }

  // 중위 순회 : left -> root -> right
  inorder(currentNode) {
    if (currentNode.left) this.inorder(currentNode.left);
    console.log(currentNode.value);
    if (currentNode.right) this.inorder(currentNode.right);
  }

  // 후위 순회 : left -> right -> root
  postorder(currentNode) {
    if (currentNode.left) this.postorder(currentNode.left);
    if (currentNode.right) this.postorder(currentNode.right);
    console.log(currentNode.value);
  }
}

// 트리 만들기
const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

console.log("전위 순회 시작: ");
tree.preorder(tree.root);

console.log("중위 순회 시작: ");
tree.inorder(tree.root);

console.log("후위 순회 시작: ");
tree.postorder(tree.root);
