'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(getRandomInt(0, 1000));
}

function bubbleSort(arr) {
  // Your code here
  const ret = Array.from(arr)
  let swapped
  do {
    swapped = false
    for (let i = 1; i < ret.length; i++) {
      if (ret[i - 1] > ret[i]) {
        [ret[i], ret[i - 1]] = [ret[i] - 1, ret[i]]
        swapped = true
      }
    }
  } while (swapped);
  return ret;
}

function mergeSort(arr) {
  // Your code here
  /* if list is 0 or 1 its already sorted
  divide unsorted list into two sublists half of the size
  sort each sublist recursively by reapplying the mergeSortmerge the two sublists into one sorted list*/
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);
  return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;


}


function binarySearch(arr, item) {
  // Your code here
  /* compare value to median
  if not equal then split array and check the next half
  repeat until value is found */
  
}

// Tests

if (typeof describe === 'function') {

  function comparator(a, b) {
    if (Number(a) < Number(b)) return -1;
    if (Number(a) > Number(b)) return 1;
    return 0;
  }

  describe('#bubbleSort()', () => {
    it('should sort array', () => {
      const sorted = bubbleSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#mergeSort()', () => {
    it('should sort array', () => {
      const sorted = mergeSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#binarySearch()', () => {
    it('should return the index of given item if sorted array contains it', () => {
      const idx = binarySearch([1, 2, 3, 4], 3);
      assert.equal(idx, 2);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });

} else {

  console.log('Run the tests!')

}
