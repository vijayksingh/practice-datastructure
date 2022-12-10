const BinarySearchTree = require('./bst');

test('add() adds a new value to the tree', () => {
  const tree = new BinarySearchTree();
  tree.add(10);
  tree.add(5);
  tree.add(15);
  tree.add(2);
  tree.add(7);
  tree.add(12);
  tree.add(20);
  expect(tree.contains(10)).toBe(true);
  expect(tree.contains(5)).toBe(true);
  expect(tree.contains(15)).toBe(true);
  expect(tree.contains(2)).toBe(true);
  expect(tree.contains(7)).toBe(true);
  expect(tree.contains(12)).toBe(true);
  expect(tree.contains(20)).toBe(true);
});

test('contains() returns true if a value exists in the tree, and false otherwise', () => {
  const tree = new BinarySearchTree();
  tree.add(10);
  tree.add(5);
  tree.add(15);
  expect(tree.contains(10)).toBe(true);
  expect(tree.contains(5)).toBe(true);
  expect(tree.contains(15)).toBe(true);
  expect(tree.contains(20)).toBe(false);
});

test('remove() removes a value from the tree if it exists', () => {
  const tree = new BinarySearchTree();
  tree.add(10);
  tree.add(5);
  tree.add(15);
  tree.add(2);
  tree.add(7);
  tree.add(12);
  tree.add(20);
  tree.remove(15);
  expect(tree.contains(15)).toBe(false);
});

test('findMin() returns the minimum value in the tree', () => {
  const tree = new BinarySearchTree();
  tree.add(10);
  tree.add(5);
  tree.add(15);
  tree.add(2);
  tree.add(7);
  tree.add(12);
  tree.add(20);
  expect(tree.findMin()).toBe(2);
});

test('findMax() returns the maximum value in the tree', () => {
  const tree = new BinarySearchTree();
  tree.add(10);
  tree.add(5);
  tree.add(15);
  tree.add(2);
  tree.add(7);
  tree.add(12);
  tree.add(20);
  expect(tree.findMax()).toBe(20);
});

test('inOrder() returns an array of the values in the tree in sorted order', () => {
  const tree = new BinarySearchTree();
  tree.add(10);
  tree.add(5);
  tree.add(15);
  tree.add(2);
  tree.add(7);
  tree.add(12);
  tree.add(20);
  expect(tree.inOrder()).toEqual([2, 5, 7, 10, 12, 15, 20]);
});

test('preOrder() returns an array of the values in the tree in pre-order', () => {
  const tree = new BinarySearchTree();
  tree.add(10);
  tree.add(5);
  tree.add(15);
  tree.add(2);
  tree.add(7);
  tree.add(12);
  tree.add(20);
  expect(tree.preOrder()).toEqual([10, 5, 2, 7, 15, 12, 20]);
});

test('postOrder() returns an array of the values in the tree in post-order', () => {
  const tree = new BinarySearchTree();
  tree.add(10);
  tree.add(5);
  tree.add(15);
  tree.add(2);
  tree.add(7);
  tree.add(12);
  tree.add(20);
  expect(tree.postOrder()).toEqual([2, 7, 5, 12, 20, 15, 10]);
});
