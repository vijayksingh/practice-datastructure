// Reference : https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/

// Date  : 2021-08-24
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySumAprroach1 = function (nums, k) {
  if (nums.length < k) return 0;

  let sum = 0;
  let maxSum = 0;
  let set = new Set();

  let i = 0,
    j = 0;
  while (j <= nums.length) {
    // i pointer will shrink the window
    if (j - i === k) {
      // Calculate the max sum till now
      maxSum = Math.max(sum, maxSum);

      // Shrink the window
      sum -= nums[i];
      set.delete(nums[i]);
      i++;
    }

    if (j > nums.length) break;
    // Reset
    if (set.has(nums[j])) {
      while(set.has(nums[j])) {
        sum -= nums[i];
        set.delete(nums[i]);
        i++;
      }
    }

    // j pointer will expand the window
    if (j - i < k) {
      set.add(nums[j]);
      sum = Math.max(sum, sum + nums[j]);
      j++;
    }
  }

  while(i )
  return maxSum;
};

let maximumSubarraySum = function (nums, k) { 
}

console.log(maximumSubarraySum(
  [3,2,3,1]
  , 3));
