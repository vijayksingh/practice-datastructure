const bloomFilter = new BloomFilter(100);

test('add() correctly stores values in the bit array using the hash functions', () => {
  bloomFilter.add('apple');
  bloomFilter.add('banana');
  bloomFilter.add('orange');
  expect(bloomFilter.bitArray[bloomFilter.hashFunctions[0]('apple')]).toBe(1);
  expect(bloomFilter.bitArray[bloomFilter.hashFunctions[1]('apple')]).toBe(1);
  expect(bloomFilter.bitArray[bloomFilter.hashFunctions[2]('apple')]).toBe(1);
  expect(bloomFilter.bitArray[bloomFilter.hashFunctions[0]('banana')]).toBe(1);
  expect(bloomFilter.bitArray[bloomFilter.hashFunctions[1]('banana')]).toBe(1);
  expect(bloomFilter.bitArray[bloomFilter.hashFunctions[2]('banana')]).toBe(1);
  expect(bloomFilter.bitArray[bloomFilter.hashFunctions[0]('orange')]).toBe(1);
  expect(bloomFilter.bitArray[bloomFilter.hashFunctions[1]('orange')]).toBe(1);
  expect(bloomFilter.bitArray[bloomFilter.hashFunctions[2]('orange')]).toBe(1);
});

test('mayContain() correctly checks if a value is contained in the bit array using the hash functions', () => {
  bloomFilter.add('apple');
  bloomFilter.add('banana');
  bloomFilter.add('orange');
  expect(bloomFilter.mayContain('apple')).toBe(true);
  expect(bloomFilter.mayContain('banana')).toBe(true);
  expect(bloomFilter.mayContain('orange')).toBe(true);
  expect(bloomFilter.mayContain('pear')).toBe(false);
  expect(bloomFilter.mayContain('grape')).toBe(false);
});

test('remove() correctly removes a value from the bit array using the hash functions', () => {
  bloomFilter.add('apple');
  bloomFilter.add('banana');
  bloomFilter.add('orange');
  bloomFilter.remove('banana');
  expect(bloomFilter.mayContain('banana')).toBe(false);
});

test('constructor() correctly initializes the size, bit array, and hash functions', () => {
  const bloomFilter = new BloomFilter(100);
  expect(bloomFilter.size).toBe(100);
  expect(bloomFilter.bitArray.length).toBe(100);
  expect(bloomFilter.hashFunctions.length).toBe(3);
});

test('add() correctly handles values with the same hash function outputs', () => {
  const bloomFilter = new BloomFilter(100);
  bloomFilter.add('apple');
  bloomFilter.add('banana');
  bloomFilter.add('orange');
  bloomFilter.add('pear');
  bloomFilter.add('grape');
  expect(bloomFilter.bitArray[bloomFilter.hashFunctions[0]('apple')]).toBe(1);
  expect(bloomFilter.bitArray[bloomFilter.hashFunctions[0]('banana')]).toBe(1);
  expect(bloomFilter.bitArray[bloomFilter.hashFunctions[0]('orange')]).toBe(1);
  expect(bloomFilter.bitArray[bloomFilter.hashFunctions[0]('pear')]).toBe(1);
  expect(bloomFilter.bitArray[bloomFilter.hashFunctions[0]('grape')]).toBe(1);
});

test('mayContain() correctly handles values with the same hash function outputs', () => {
  const bloomFilter = new BloomFilter(100);
  bloomFilter.add('apple');
  bloomFilter.add('banana');
  bloomFilter.add('orange');
  bloomFilter.add('pear');
  bloomFilter.add('grape');
  expect(bloomFilter.mayContain('apple')).toBe(true);
  expect(bloomFilter.mayContain('banana')).toBe(true);
  expect(bloomFilter.mayContain('orange')).toBe(true);
  expect(bloomFilter.mayContain('pear')).toBe(true);
  expect(bloomFilter.mayContain('grape')).toBe(true);
});

test('add() throws an error if the value is not a string', () => {
  expect(() => bloomFilter.add(1)).toThrow('Value must be a string');
  expect(() => bloomFilter.add({ key: 'value' })).toThrow('Value must be a string');
  expect(() => bloomFilter.add(['apple', 'banana', 'orange'])).toThrow('Value must be a string');
});

test('mayContain() throws an error if the value is not a string', () => {
  expect(() => bloomFilter.mayContain(1)).toThrow('Value must be a string');
  expect(() => bloomFilter.mayContain({ key: 'value' })).toThrow('Value must be a string');
  expect(() => bloomFilter.mayContain(['apple', 'banana', 'orange'])).toThrow('Value must be a string');
});
