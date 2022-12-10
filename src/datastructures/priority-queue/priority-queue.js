class PriorityQueue {
  constructor() {
    // Initialize the values array
  }

  enqueue(value, priority) {
    // Add the value and priority to the values array
    // Sort the values array by priority
  }

  dequeue() {
    // Remove and return the object with the lowest priority from the values array
  }

  sort() {
    // Sort the values array by priority in ascending order
  }

  isEmpty() {
  }

  peek() {
  }

  size() {
  }
}

// example usage
const queue = new PriorityQueue();
queue.enqueue('A', 1);
queue.enqueue('B', 2);
queue.enqueue('C', 0);
const dequeuedValue = queue.dequeue(); // dequeuedValue = { value: 'C', priority: 0 }
const peekedValue = queue.peek();     // peekedValue = { value: 'A', priority: 1 }
const queueSize = queue.size();       // queueSize = 2
