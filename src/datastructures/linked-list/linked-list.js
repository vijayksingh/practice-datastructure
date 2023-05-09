// Use this Node structure to implement a linked list.
function Node(value, next) {
  this.value = value;
  this.next = next || null;
}


function LinkedList(node = undefined) {
  this.head = node;

  // adds a new node with the given value to the end of the list
  this.add = function(value) {
    const node = new Node(value)
    if (this.head) {
      console.log(this.head);
      let ptr = this.head;
      while(ptr.next)  {
        ptr = ptr.next
      }
      ptr.next = node
      return true;
    }
    // Linked list is empty
    this.head = node
    return true;
    // Linked list has some values
  };

  // removes the first node with the given value from the list
  this.remove = function(value) {
    // if linked list is empty
    if (!this.head) {
      console.log("Linked list is empty")
      return undefined
    }

    // if trying to delete head
    if (this.head.value = value) {
      this.head = this.head.next
      return true
    }

    // delete other than head
    let pre = this.head
    let current = this.head.next

    while(this.current) {
      if(this.current.value === value) {
        this.pre = this.current.next;
        return this.current.value;
      }

      this.pre = this.current
      this.current = this.current.next
    }

    console.log('Element not found')
    return undefined

  };

  // returns the first node with the given value from the list
  this.find = function(value) {
      if(!this.head) return undefined
      let ptr = this.head;
      while(this.ptr && this.ptr.value !== value) {
        this.ptr = this.ptr.next
      }

      // If not found ptr => null
      if (ptr) {
        return ptr.value
      }

      console.log('Item not found')
      return undefined;
  };

  // returns the index of the first node with the given value in the list
  this.indexOf = function(value) {
    // implementation goes here
    if(!this.head) return -1
    let index = 0;
    let ptr = this.head;
      while(this.ptr && this.ptr.value !== value) {
        this.ptr = this.ptr.next
        index++;
      }

      // If not found ptr => null
      if (ptr) {
        return index;
      }

      console.log('Item not found')
      return -1;
  };

  // returns the number of nodes in the list
  this.length = function() {
    if(!this.head) return 0

    let size = 0;
    let ptr = this.head;
      while(this.ptr && this.ptr.value !== value) {
        this.ptr = this.ptr.next
        size++;
      }

      // If not found ptr => null
      if (ptr) {
        return size + 1;
      }

      console.log('Item not found')
      return 0;
  };

  // returns the value of the node at the given index
  this.elementAt = function(index) {
    if(!this.head) return 0
    let size = index;
    let ptr = this.head;
      while(this.ptr && size > 0) {
        this.ptr = this.ptr.next
        size--;
      }

      // If not found ptr => null
      if (size > 0) {
        console.log('Out of bound')
        return undefined;
      }

      return this.ptr.value;
  };

  // returns a string representation of the list
  this.toString = function() {
    if(!this.head) return "";
    let result = ""
    let ptr = this.head;
      while(this.ptr) {
        result = result + String(this.ptr.value)
        this.ptr = this.ptr.next
      }

    return result;
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