// Array#bubbleSort
Array.prototype.bubblesort = function() {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        sorted = false
      }
    }
  }

  return this;
}

arr = [1,3,7,4,2,5];
arr.bubblesort();

// String#substrings

String.prototype.substrings = function() {
  let substrings = []
  
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      // console.log(`${this.substring(i)}`)
      substrings.push(this.substring(i, j))
    }
  }
  
  return substrings;
};

"cats".substrings // c, ca, cat, cats, a, at, ats, t, ts, s