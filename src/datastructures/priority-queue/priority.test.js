const PriorityQueue = require('./priority-queue');


test('enqueue() correctly adds values and priorities to the values array and sorts it by priority in ascending order', () => {
  const queue = new PriorityQueue();
  queue.enqueue('A', 1);
  queue.enqueue('B', 2);
  queue.enqueue('C', 0);
  expect(queue.values).toEqual([
    { value: 'C', priority: 0 },
    { value: 'A', priority: 1 },
    { value: 'B', priority: 2 }
  ]);
});

test('dequeue() correctly removes and returns the object with the lowest priority from the values array', () => {
  const queue = new PriorityQueue();
  queue.enqueue('A', 1);
  queue.enqueue('B', 2);
  queue.enqueue('C', 0);
  const dequeuedValue = queue.dequeue();
  expect(dequeuedValue).toEqual({ value: 'C', priority: 0 });
  expect(queue.values).toEqual([
    { value: 'A', priority: 1 },
    { value: 'B', priority: 2 }
  ]);
});

test('sort() correctly sorts the objects in the values array by their priority in ascending order', () => {
  const queue = new PriorityQueue();
  queue.enqueue('A', 1);
  queue.enqueue('B', 2);
  queue.enqueue('C', 0);
  queue.sort();
  expect(queue.values).toEqual([
    { value: 'C', priority: 0 },
    { value: 'A', priority: 1 },
    { value: 'B', priority: 2 }
  ]);
});

test('isEmpty() correctly returns true if the values array is empty, and false otherwise', () => {
  const queue = new PriorityQueue();
  expect(queue.isEmpty()).toBe(true);
  queue.enqueue('A', 1);
  expect(queue.isEmpty()).toBe(false);
});

test('peek() correctly returns the object with the lowest priority in the values array without removing it', () => {
  const queue = new PriorityQueue();
  queue.enqueue('A', 1);
  queue.enqueue('B', 2);
  queue.enqueue('C', 0);
  const peekedValue = queue.peek();
  expect(peekedValue).toEqual({ value: 'C', priority: 0 });
  expect(queue.values).toEqual([
    { value: 'C', priority: 0 },
    { value: 'A', priority: 1 },
    { value: 'B', priority: 2 }
  ]);
});
