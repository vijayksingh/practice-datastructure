const Map = require('./map'); // import the Map class

test('map is empty when created', () => {
  const map = new Map();
  expect(map.isEmpty()).toBe(true);
});

test('map size is correct', () => {
  const map = new Map();
  expect(map.size()).toBe(0);
  map.set('a', 1);
  expect(map.size()).toBe(1);
  map.set('b', 2);
  expect(map.size()).toBe(2);
  map.delete('b');
  expect(map.size()).toBe(1);
});

test('map methods work correctly', () => {
  const map = new Map();
  expect(map.isEmpty()).toBe(true);
  expect(map.get('a')).toBe(undefined);
  expect(map.delete('a')).toBe(undefined);
  expect(map.has('a')).toBe(false);
  map.set('a', 1);
  map.set('b', 2);
  expect(map.get('a')).toBe(1);
  expect(map.delete('a')).toBe(1);
  expect(map.has('a')).toBe(false);
  expect(map.get('b')).toBe(2);
  expect(map.delete('b')).toBe(2);
  expect(map.has('b')).toBe(false);
  map.clear();
  expect(map.isEmpty()).toBe(true);
});

test('map can be used with different data types', () => {
  const map = new Map();
  map.set('a', 1);
  map.set(true, 'hello');
  map.set(3.14, [1, 2, 3]);
  expect(map.get('a')).toBe(1);
  expect(map.get(true)).toBe('hello');
  expect(map.get(3.14)).toEqual([1, 2, 3]);
});

test('map methods can be called multiple times', () => {
  const map = new Map();
  expect(map.isEmpty()).toBe(true);
  expect(map.isEmpty()).toBe(true);
  expect(map.isEmpty()).toBe(true);
  map.set('a', 1);
  map.set('b', 2);
  expect(map.size()).toBe(2);
  expect(map.size()).toBe(2);
  expect(map.size()).toBe(2);
  map.clear();
  expect(map.isEmpty()).toBe(true);
  expect(map.isEmpty()).toBe(true);
  expect(map.isEmpty()).toBe(true);
});


test('map can be used to count the frequency of elements in an array', () => {
  const map = new Map();
  const array = [1, 2, 3, 2, 1];
  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      map.set(array[i], map.get(array[i]) + 1);
    } else {
      map.set(array[i], 1);
    }
  }
  expect(map.get(1)).toBe(2);
  expect(map.get(2)).toBe(2);
  expect(map.get(3)).toBe(1);
});

test('map can be used to store and retrieve objects', () => {
  const map = new Map();
  map.set('a', { x: 1, y: 2 });
  map.set('b', { x: 3, y: 4 });
  expect(map.get('a')).toEqual({ x: 1, y: 2 });
  expect(map.get('b')).toEqual({ x: 3, y: 4 });
});
