const Heap = require('./heap');

test('insert() adds a new value to the heap', () => {
  const heap = new Heap();
  heap.insert(10);
  heap.insert(5);
  heap.insert(15);
  expect(heap.values).toEqual([10, 5, 15]);
});

test('remove() removes and returns the root value from the heap', () => {
  const heap = new Heap();
  heap.insert(10);
  heap.insert(5);
  heap.insert(15);
  const minValue = heap.remove();
  expect(minValue).toBe(5);
  expect(heap.values).toEqual([10, 15]);
});

test('sort() sorts the values in the heap', () => {
  const heap = new Heap();
  heap.insert(10);
  heap.insert(5);
  heap.insert(15);
  heap.sort();
  expect(heap.values).toEqual([5, 10, 15]);
});


test('isEmpty() returns true if the heap is empty, and false otherwise', () => {
  const heap = new Heap();
  expect(heap.isEmpty()).toBe(true);
  heap.insert(10);
  expect(heap.isEmpty()).toBe(false);
});

test('peek() returns the root value in the heap without removing it', () => {
  const heap = new Heap();
  heap.insert(10);
  heap.insert(5);
  heap.insert(15);
  const maxValue = heap.peek();
  expect(maxValue).toBe(15);
  expect(heap.values).toEqual([10, 5, 15]);
});
