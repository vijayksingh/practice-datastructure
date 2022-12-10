class Heap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    // Adds a new value to the heap
  }

  remove() {
    // Removes and returns the root value from the heap
  }

  sort() {
    // Sorts the values in the heap
  }

  isEmpty() {
    // Returns true if the heap is empty, and false otherwise
  }

  peek() {
    // Returns the root value in the heap without removing it
  }

  size() {
    // Returns the number of values in the heap
  }
}

// Example usage:
const heap = new Heap();
heap.insert(10);
heap.insert(5);
heap.insert(15);
const minValue = heap.remove(); // minValue = 5
const maxValue = heap.peek();   // maxValue = 15
const heapSize = heap.size();   // heapSize = 1
