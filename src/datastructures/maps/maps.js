function Map() {

  // adds a key-value pair to the map
  this.set = function(key, value) {
    // implementation goes here
  };

  // returns the value associated with the given key
  this.get = function(key) {
    // implementation goes here
  };

  // removes the key-value pair with the given key
  this.delete = function(key) {
    // implementation goes here
  };

  // returns true if the map contains the given key, false otherwise
  this.has = function(key) {
    // implementation goes here
  };

  // returns an array of all the keys in the map
  this.keys = function() {
    // implementation goes here
  };

  // returns an array of all the values in the map
  this.values = function() {
    // implementation goes here
  };

  // returns the number of key-value pairs in the map
  this.size = function() {
    // implementation goes here
  };

  // clears the map
  this.clear = function() {
    // implementation goes here
  };
}


// EXAMPLE USAGE:
// create a new map
var map = new Map();

// add some key-value pairs to the map
map.set('John', '123-456-7890');
map.set('Jane', '987-654-3210');
map.set('Bob', '456-789-1230');

// retrieve a value from the map
console.log(map.get('Jane')); // output: 987-654-3210

// remove a key-value pair from the map
map.delete('Bob');

// check if a key is present in the map
console.log(map.has('Bob')); // output: false

/*
In this example, we create a map and add three key-value pairs to it. 
Then we use the get() method to retrieve the value associated with a given key, 
and the delete() method to remove a key-value pair from the map. 
We also use the has() method to check if a given key is present in the map.
*/

// export the Map class
module.exports = Map;