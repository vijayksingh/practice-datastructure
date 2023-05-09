const LinkedList = require('./linked-list'); // import the LinkedList class

test('linked list is empty when created', () => {
  const list = new LinkedList();
  expect(list.isEmpty()).toBe(true);
});

test('linked list length is correct', () => {
  const list = new LinkedList();
  expect(list.length()).toBe(0);
  list.add(1);
  expect(list.length()).toBe(1);
  list.add(2);
  expect(list.length()).toBe(2);
  list.remove(1);
  expect(list.length()).toBe(1);
});

test('linked list methods work correctly', () => {
  const list = new LinkedList();
  expect(list.isEmpty()).toBe(true);
  expect(list.find(1)).toBe(null);
  expect(list.remove(1)).toBe(undefined);
  expect(list.indexOf(1)).toBe(-1);
  list.add(1);
  list.add(2);
  expect(list.find(1).value).toBe(1);
  expect(list.remove(1)).toBe(1);
  expect(list.indexOf(1)).toBe(-1);
  expect(list.find(2).value).toBe(2);
  expect(list.remove(2)).toBe(2);
  expect(list.indexOf(2)).toBe(-1);
});

test('linked list can be used with different data types', () => {
  const list = new LinkedList();
  list.add(1);
  list.add('hello');
  list.add([1, 2, 3]);
  list.add({ x: 1, y: 2 });
  expect(list.find(1).value).toBe(1);
  expect(list.find('hello').value).toBe('hello');
  expect(list.find([1, 2, 3]).value).toEqual([1, 2, 3]);
  expect(list.find({ x: 1, y: 2 }).value).toEqual({ x: 1, y: 2 });
});

test('linked list can be used to count the frequency of elements in an array', () => {
  const list = new LinkedList();
  const array = [1, 2, 3, 2, 1];
  for (let i = 0; i < array.length; i++) {
    list.add(array[i]);
  }
  expect(list.find(1).count).toBe(2);
  expect(list.find(2).count).toBe(2);
  expect(list.find(3).count).toBe(1);
});

test('linked list can be used to store and retrieve objects', () => {
  const list = new LinkedList();
  list.add({ x: 1, y: 2 });
  list.add({ x: 3, y: 4 });
  expect(list.find({ x: 1, y: 2 }).value).toEqual({ x: 1, y: 2 });
  expect(list.find({ x: 3, y: 4 }).value).toEqual({ x: 3, y: 4 });
});
