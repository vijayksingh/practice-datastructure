function HashTable() {
  this.size = 0;
  this.storage = [];

  // adds a new value to the hash table
  this.add = function(key, value) {};

  // removes the value with the given key from the hash table
  this.remove = function(key) {};

  // checks if the hash table contains a value with the given key 
  this.contain = function(key) {};

  // gets the value with the given key from the hash table
  this.get = function(key) {};

  // gets the number of values stored in the hash table
  this.length = function() {};

  // checks if the hash table is empty
  this.isEmpty = function() {};

  // converts the hash table to a string
  this.toString = function() {};
}

// Example usage:
// create a new hash table with 10 slots
const phoneBook = new HashTable(10);

// add a new entry to the hash table
phoneBook.add('John Doe', '123-456-7890');

// check if an entry exists in the hash table
console.log(phoneBook.contains('John Doe'));  // true
console.log(phoneBook.contains('Jane Smith'));  // false

// retrieve the value of an entry from the hash table
console.log(phoneBook.get('John Doe'));  // '123-456-7890'

// update the value of an entry in the hash table
phoneBook.update('John Doe', '456-789-0123');
console.log(phoneBook.get('John Doe'));  // '456-789-0123'

// remove an entry from the hash table
phoneBook.remove('John Doe');
console.log(phoneBook.contains('John Doe'));  // false
