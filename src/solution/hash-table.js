function HashTable() {
  this.size = 0;
  this.storage = [];

  // hash function to map the key to an array index
  const hash = function (key, size) {
    let hashedKey = 0;
    for (let i = 0; i < key.length; i++) {
      hashedKey += key.charCodeAt(i);
    }
    return hashedKey % size;
  };

  // adds a new value to the hash table
  this.add = function (key, value) {
    const index = hash(key, this.size);
    if (!this.storage[index]) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (!inserted) {
        this.storage[index].push([key, value]);
      }
    }
  };

  // removes the value with the given key from the hash table
  this.remove = function (key) {
    const index = hash(key, this.size);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  };

  // gets the value with the given key from the hash table
  this.get = function (key) {
    const index = hash(key, this.size);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      return this.storage[index][0][1];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  };

  // gets the number of values stored in the hash table
  this.length = function () {
    let count = 0;
    for (let i = 0; i < this.size; i++) {
      if (this.storage[i]) {
        for (let j = 0; j < this.storage[i].length; j++) {
          count++;
        }
      }
    }
    return count;
  };

  // checks if the hash table is empty
  this.isEmpty = function () {
    return this.length() === 0;
  };

  // converts the hash table to a string
  // converts the hash table to a string
  this.toString = function () {
    let str = "";
    for (let i = 0; i < this.size; i++) {
      if (this.storage[i]) {
        for (let j = 0; j < this.storage[i].length; j++) {
          str += this.storage[i][j][0] + ": " + this.storage[i][j][1] + ", ";
        }
      }
    }
    return str.substring(0, str.length - 2);
  };
}
