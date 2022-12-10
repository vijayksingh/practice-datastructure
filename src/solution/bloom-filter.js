class BloomFilter {
  constructor(size) {
    this.size = size;
    this.bitArray = new Array(size);
    this.bitArray.fill(0);
    this.hashFunctions = [
      (key) => {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
          hash += key.charCodeAt(i);
        }
        return hash % this.size;
      },
      (key) => {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
          hash = (hash + key.charCodeAt(i)) % this.size;
          hash = (hash * 31) % this.size;
        }
        return hash;
      },
      (key) => {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
          hash = (hash * 33) ^ key.charCodeAt(i);
        }
        return Math.abs(hash % this.size);
      }
    ];
  }
  
  add(key) {
    if (typeof value !== 'string') {
      throw new Error('Value must be a string');
    }
    for (const hashFunction of this.hashFunctions) {
      const index = hashFunction(key);
      this.bitArray[index] = 1;
    }
  }
  
  mayContain(key) {
    if (typeof value !== 'string') {
      throw new Error('Value must be a string');
    }
    for (const hashFunction of this.hashFunctions) {
      const index = hashFunction(key);
      if (this.bitArray[index] === 0) {
        return false;
      }
    }
    return true;
  }

  remove(key) {
    if (typeof value !== 'string') {
      throw new Error('Value must be a string');
    }
    for (const hashFunction of this.hashFunctions) {
      const index = hashFunction(key);
      this.bitArray[index] = 0;
    }
  }
}

// Example usage:

// Add the strings "apple", "banana", and "orange" to the bloom filter and check if they are contained in it:

const bloomFilter = new BloomFilter(100);
bloomFilter.add("apple");
bloomFilter.add("banana");
blomFilter.add("orange");
console.log(bloomFilter.mayContain("apple"));  // true
console.log(bloomFilter.mayContain("banana")); // true
console.log(bloomFilter.mayContain("orange")); // true

// Check if the strings "pear" and "grape" are contained in the bloom filter, even though they were not added to it:
console.log(bloomFilter.mayContain("pear"));   // false
console.log(bloomFilter.mayContain("grape"));  // false
