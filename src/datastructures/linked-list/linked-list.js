// Use this Node structure to implement a linked list.
function Node(value, next) {
  this.value = value;
  this.next = next;
}

function LinkedList() {

  // adds a new node with the given value to the end of the list
  this.add = function(value) {
    // implementation goes here
  };

  // removes the first node with the given value from the list
  this.remove = function(value) {
    // implementation goes here
  };

  // returns the first node with the given value from the list
  this.find = function(value) {
    // implementation goes here
  };

  // returns the index of the first node with the given value in the list
  this.indexOf = function(value) {
    // implementation goes here
  };

  // returns the number of nodes in the list
  this.length = function() {
    // implementation goes here
  };

  // returns the value of the node at the given index
  this.elementAt = function(index) {
    // implementation goes here
  };

  // returns a string representation of the list
  this.toString = function() {
    // implementation goes here
  };
}

// Example usage:
const list = new LinkedList();

// add some nodes to the list
list.add(1);
list.add(2);
list.add(3);
list.add(4);

// remove a node from the list
list.remove(3);

// find a node in the list
const node = list.find(2);
console.log(node.value); // output: 2

// find the index of a node in the list
const index = list.indexOf(4);
console.log(index); // output: 2

// get the length of the list
const length = list.length();
console.log(length); // output: 3

// get the value of a node at a given index in the list
const value = list.elementAt(1);
console.log(value); // output: 4

// convert the list to a string
console.log(list.toString()); // output: 1,2,4

// export the LinkedList class
module.exports = LinkedList;