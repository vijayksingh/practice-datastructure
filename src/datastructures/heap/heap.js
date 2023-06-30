class Heap {
  constructor() {
    this.elements = [];
  }

  add(element) {
    this.elements.push(element);
    this.heapifyUp();
  }

  pop() {
    const top = this.elements[0];
    const last = this.elements.pop()
    this.elements[0] = last;

    this.heapifyDown()
    return top;
  }

  heapifyUp() {
    let child = this.elements.length - 1;
    let parent = this.parent(child);

    while(parent > 0 && this.elements[parent] < this.elements[child]) {
      [this.elements[parent], this.elements[child]] = [this.elements[child], this.elements[parent]]
      child = parent;
      parent = this.parent(parent);
    }
  }

  heapifyDown() {
    let parent = 0;
    let left = this.leftChild(parent)
    let right = this.rightChild(parent);

    while(left < this.elements.length) {
      let largerChild = left;
      if (right < this.elements.length) {
        if(this.elements[right] > this.elements[left]) {
          largerChild = right
        }
      }

      // swapping and updating the index
      [this.elements[parent], this.elements[largerChild]] = [this.elements[largerChild], this.elements[parent]]
      parent = largerChild
      left = this.leftChild(parent)
      right = this.rightChild(parent)
    }
  }

  parent(i) {
    return Math.floor((i-1)/2)
  }

  leftChild(i) {
    return 2 * i + 1
  }

  rightChild(i) {
    return (2 * i) + 2
  }
}


const heap = new Heap()

heap.add(10)
heap.add(5)
heap.add(7)
heap.add(23)
heap.add(43)
heap.add(18)
heap.add(57)


console.log(heap.pop()) 

