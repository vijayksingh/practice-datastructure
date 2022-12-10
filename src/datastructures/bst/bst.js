function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.add = function(value) {
  // implementation goes here
}

BinarySearchTree.prototype.contains = function(value) {
  // implementation goes here
}

BinarySearchTree.prototype.remove = function(value) {
  // implementation goes here
}

BinarySearchTree.prototype.findMin = function() {
  // implementation goes here
}

BinarySearchTree.prototype.findMax = function() {
  // implementation goes here
}

BinarySearchTree.prototype.inOrder = function() {
  // implementation goes here
}

BinarySearchTree.prototype.preOrder = function() {
  // implementation goes here
}

BinarySearchTree.prototype.postOrder = function() {
  // implementation goes here
}


// EXAMPLE USAGE:
const tree = new BinarySearchTree();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(2);
tree.add(7);
tree.add(12);
tree.add(20);

console.log(tree.contains(5));  // true
console.log(tree.contains(22)); // false

tree.remove(15);
console.log(tree.contains(15)); // false

console.log(tree.findMin()); // 2
console.log(tree.findMax()); // 20

console.log(tree.inOrder());  // [2, 5, 7, 10, 12, 20]
console.log(tree.preOrder()); // [10, 5, 2, 7, 15, 12, 20]
console.log(tree.postOrder()); // [2, 7, 5, 12, 20, 15, 10]
