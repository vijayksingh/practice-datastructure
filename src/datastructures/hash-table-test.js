// create a new hash table
const phoneBook = new HashTable(10);

// test the add() method
test('add() adds an entry to the hash table', () => {
  phoneBook.add('John Doe', '123-456-7890');
  expect(phoneBook.contains('John Doe')).toBe(true);
});

// test the contains() method
test('contains() returns true if an entry exists in the hash table', () => {
  expect(phoneBook.contains('John Doe')).toBe(true);
});
test('contains() returns false if an entry does not exist in the hash table', () => {
  expect(phoneBook.contains('Jane Smith')).toBe(false);
});

// test the get() method
test('get() returns the value of an entry in the hash table', () => {
  expect(phoneBook.get('John Doe')).toBe('123-456-7890');
});
test('get() returns undefined if an entry does not exist in the hash table', () => {
  expect(phoneBook.get('Jane Smith')).toBe(undefined);
});

// test the update() method
test('update() updates the value of an entry in the hash table', () => {
  phoneBook.update('John Doe', '456-789-0123');
  expect(phoneBook.get('John Doe')).toBe('456-789-0123');
});

// test the remove() method
test('remove() removes an entry from the hash table', () => {
  phoneBook.remove('John Doe');
  expect(phoneBook.contains('John Doe')).toBe(false);
});
