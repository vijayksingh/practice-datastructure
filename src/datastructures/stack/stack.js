function Stack() {

  // adds an element to the top of the stack
  this.push = function(element) {
    // implementation goes here
  };

  // removes an element from the top of the stack
  this.pop = function() {
    // implementation goes here
  };

  // returns the element at the top of the stack
  this.top = function() {
    // implementation goes here
  };

  // returns true if the stack is empty, false otherwise
  this.isEmpty = function() {
    // implementation goes here
  };

  // returns the number of elements in the stack
  this.size = function() {
    // implementation goes here
  };

  // clears the stack
  this.clear = function() {
    // implementation goes here
  };
}

// create a new stack
var stack = new Stack();

// add some elements to the stack
stack.push(1);
stack.push(2);
stack.push(3);

// check the size of the stack
console.log(stack.size()); // output: 3

// check the top element of the stack
console.log(stack.top()); // output: 3

// remove an element from the stack
console.log(stack.pop()); // output: 3

// check the size of the stack
console.log(stack.size()); // output: 2

// clear the stack
stack.clear();

// check if the stack is empty
console.log(stack.isEmpty()); // output: true

// export the Stack class
module.exports = Stack;