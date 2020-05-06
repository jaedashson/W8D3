//range(start, end)

function range(start, end) {
  if (start === end) {
    return [end];
  }
  
  return [start].concat(range(start + 1, end));
};

range(1,5); // => [1, 2, 3, 4, 5]

// sumRec(arr) - receives an array of numbers and recursively sums them

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumRec(arr.slice(1, arr.length));
};

sumRec([1,1,1,1]); // => 4

// exponent(base, exp)- receives a base and exponent, returns the base raise to the power of the exponent (base ^ exp)

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp > 0) {
    return base * exponent(base, exp - 1);
  } else {
    return (1.0 / base) * exponent(base, exp + 1);
  }
};

exponent(2, 3); // => 8
exponent(2, -2); // => 0.25

// fibonacci(n) - receives an integer, n, and returns the first n Fibonacci numbers
index == 0
[0,1,1,2,3,5,8]

function fibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  }

  let prev_fibs = fibonacci(n - 1); 
  let pen_fib = prev_fibs[prev_fibs.length - 2]; // second to last from prev_fibs
  let ult_fib = prev_fibs[prev_fibs.length - 1];
  let new_fib = (pen_fib + ult_fib);
  let new_fibs = prev_fibs.concat([new_fib]); // just do this

//   // or
//   let new_fibs = prev_fibs;
//   new_fibs.push(new_fib);
  return new_fibs;
};

fibonacci(0); // => [0]
fibonacci(1); // => [0, 1]
fibonacci(2); // => [0, 1, 1]
fibonacci(3); // => [0, 1, 1, 2]
fibonacci(4); // => [0, 1, 1, 2, 3]


//deepDup(arr) - deep dup of an Array!
def deep_dup(arr)
  arr.map { |ele| ele.is_a?(Array) ? deep_dup(ele) : ele }
end

function deepDup(arr) {
  let dup = [];

  function deepDupHelper(ele) {
    if (Array.isArray(ele)) {
      return deepDup(ele);
    } else {
      return ele;
    }
  }

  for (i = 0; i < arr.length; i++) {
    dup.push(deepDupHelper(arr[i]));
  }

  return dup;
};

// deepDup([1,[2,3],[[4]],[[5],6]]) // => [1,2,3,4,5,6[]


// Ruby deep dup example
let robot_parts = [
  ["nuts", "bolts", "washers"],
  ["capacitors", "resistors", "inductors"]
];

let robot_parts = ["nuts", "bolts", "washers"];

let robot_parts_copy = deepDup(robot_parts);

//# shouldn't modify robot_parts
robot_parts_copy.push("LEDs")
robot_parts_copy[1].push("LEDs")
//# but it does
robot_parts[1] # => ["capacitors", "resistors", "inductors", "LEDs"]
