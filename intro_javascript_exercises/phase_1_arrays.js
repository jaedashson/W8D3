// Array.prototype.uniq = function() {
// }
// working

// not working
// Array.prototype.uniq = () => {
// }    

// Array#uniq
Array.prototype.uniq = function() {

  function findUniq(arr) {
    // Iterate through elements of this
    let uniqArray = []; // Could this be within findUniq?
    for (let i = 0; i < arr.length; i++) {
      if (!uniqArray.includes(arr[i])) {
        uniqArray.push(arr[i]);
      }
    }
  
    return uniqArray;
  };

  
  return findUniq(this);
};

// Array#twoSum   [-1, 1, -2, 2, 3, 4] => [[0,1],[2,3]]

Array.prototype.twoSum = function() {

  function findPairs(arr) {
    let pairs = [];

    // nested loops
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          let pair = [i, j];
          pairs.push(pair);
        }
      }
    }
    
    return pairs;
  };

  return findPairs(this);
};

// Array#transpose
// [ [1,2],
//   [3,4],
//   [5,6] ]

// [ [1,3,5],
//   [2,4,6] ]

Array.prototype.transpose = function () {
  let transposed = [];

  for (let i = 0; i < this[0].length; i++) { // iterate through elements of each subarray
    let subArr = [];

    for (let j = 0; j < this.length; j++) { // iterate through subarrays
      subArr.push(this[j][i]);
    }
    transposed.push(subArr);
  }

  return transposed;
};