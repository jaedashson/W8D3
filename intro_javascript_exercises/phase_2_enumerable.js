// Array#myEach(callback)

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i])
  }
};

function printDoubler(num) {
  console.log(`${num * 2}`);
};

[1,2,3].myEach(printDoubler); // => [2,4,6]


// Array#myMap(callback)

Array.prototype.myMap = function(callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]))
  }

  return result;
}

function doubler(num) {
  return 2 * num;
}

[1,2,3].myMap(doubler); // => [2,4,6]
// [1,2,3].myMap(function(ele) { ele * 2} ) 

// Array#myReduce(callback[, initialValue])

Array.prototype.myReduce = function(callback, initialValue) {
  let startingIndex;
  let accumulator;
  
  if (initialValue === undefined) {
    accumulator = this[0]
    startingIndex = 1;
  } else {
    accumulator = initialValue;
    startingIndex = 0;
  }

  for (let i = startingIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }

  return accumulator;
};

function addition(num1, num2) {
  return num1 + num2;
};

[1,1,1,1].myReduce(addition); // => 4



// function dinerBreakfast() {
//   const foods = ["cheesy scrambled eggs"];

//   function order(newFood) { // this function declared same scope as `foods` array so it can close over the `foods` array
//     if (newFood) {
//       foods.push(`and ${newFood}`); // string interpolation used w/ ` + ${variableNeededToInterpolate} `
//       return `I'd like ${foods.join(" ")} please.`; // return value from the function that is returned from dinerBreakfast
//     }
//     return `I'd like ${foods} please.`; // return for fat arrow function declared in line 224
//   };
//   return order; // not invoked! returns reference to the function declared
// };

// const askForFood = dinerBreakfast();
// askForFood;
// askForFood("bacon");
// const orderFood = dinerBreakfast();