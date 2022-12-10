const Queue = require('./queue'); // import the Queue class

test('queue is empty when created', () => {
  const queue = new Queue();
  expect(queue.isEmpty()).toBe(true);
});

test('queue size is correct', () => {
  const queue = new Queue();
  expect(queue.size()).toBe(0);
  queue.enqueue(1);
  expect(queue.size()).toBe(1);
  queue.enqueue(2);
  expect(queue.size()).toBe(2);
  queue.dequeue();
  expect(queue.size()).toBe(1);
});

test('queue methods work correctly', () => {
  const queue = new Queue();
  expect(queue.isEmpty()).toBe(true);
  expect(queue.front()).toBe(undefined);
  expect(queue.dequeue()).toBe(undefined);
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.front()).toBe(1);
  expect(queue.dequeue()).toBe(1);
  expect(queue.front()).toBe(2);
  queue.clear();
  expect(queue.isEmpty()).toBe(true);
});

test('queue can be cleared', () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.clear();
  expect(queue.isEmpty()).toBe(true);
  expect(queue.size()).toBe(0);
  expect(queue.front()).toBe(undefined);
  expect(queue.dequeue()).toBe(undefined);
});

test('queue elements are returned in the correct order', () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.dequeue()).toBe(1);
  expect(queue.dequeue()).toBe(2);
  expect(queue.dequeue()).toBe(3);
});

test('queue can be used with different data types', () => {
  const queue = new Queue();
  queue.enqueue('a');
  queue.enqueue(true);
  queue.enqueue(3.14);
  expect(queue.dequeue()).toBe('a');
  expect(queue.dequeue()).toBe(true);
  expect(queue.dequeue()).toBe(3.14);
});

test('queue methods can be called multiple times', () => {
  const queue = new Queue();
  expect(queue.isEmpty()).toBe(true);
  expect(queue.isEmpty()).toBe(true);
  expect(queue.isEmpty()).toBe(true);
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.size()).toBe(2);
  expect(queue.size()).toBe(2);
  expect(queue.size()).toBe(2);
  queue.clear();
  expect(queue.isEmpty()).toBe(true);
  expect(queue.isEmpty()).toBe(true);
  expect(queue.isEmpty()).toBe(true);
});
