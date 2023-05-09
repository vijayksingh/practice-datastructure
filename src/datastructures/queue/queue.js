function Queue(items = []) {
  this.items = items

  // adds an element to the end of the queue
  this.enqueue = function(item) {
    // implementation goes here
    this.items.push(item)
  };

  // removes an element from the front of the queue
  this.dequeue = function() {
    // implementation goes here
    return this.items.shift()
  };

  // returns the element at the front of the queue
  this.front = function() {
    // implementation goes here
    return this.items[0]
  };

  // returns true if the queue is empty, false otherwise
  this.isEmpty = function() {
    // implementation goes here
    return this.items.length === 0
  };

  // returns the number of elements in the queue
  this.size = function() {
    // implementation goes here
    return this.items.length
  };

  // clears the queue
  this.clear = function() {
    // implementation goes here
    this.items = []
  };
}


// EXAMPLE USAGE:
// create a new queue
var queue = new Queue();

// add some elements to the queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// check the size of the queue
console.log((queue.size)); // output: 3

// check the front element of the queue
console.log(queue.front()); // output: 1

// remove an element from the queue
console.log(queue.dequeue()); // output: 1

// check the size of the queue
console.log(queue.size()); // output: 2

// clear the queue
queue.clear();

// check if the queue is empty
console.log(queue.isEmpty()); // output: true

// export the Queue class
module.exports = Queue;