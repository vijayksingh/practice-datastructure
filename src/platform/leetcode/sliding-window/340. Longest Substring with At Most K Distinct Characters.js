var lengthOfLongestSubstringKDistinct = function(s, k) {
  if (s.length === 0) return 0;
  if (k === 0) return 0;

  let i = 0, j = 0;
  let map = new Map()


  let maxSize = 0;
  while(j <= s.length) {
      // Shrink when map is full
      if(map.size >= k && !map.has(s[j])) {
          maxSize = Math.max(maxSize, j-i)
          map.set(s[j], 1) // 3 
          while(map.size > k) {
              const freq = map.get(s[i])
              if (freq > 1) {
                  map.set(s[i], freq-1)
              } else {
                  map.delete(s[i])
              }
              i++;
          }
          j++
      // Expand
      } else {
          if (map.has(s[j])) {
              map.set(s[j], map.get(s[j]) + 1)
          } else {
              map.set(s[j], 1)
          }
          j++
      }
  }
  if (maxSize === 0) {
      return j-i
  } else {
      return maxSize
  }
};

console.log(lengthOfLongestSubstringKDistinct("aa", 1));