/* 

INSTRUCTIONS

A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the pattern is: "add 3 to the previous term".

In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".

Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.

*/

// My Solution

function sumOfN(n) {
    let sequence = []
    // Sets our count to be positive no matter the input
    let j = (n < 0) ? -n : n
    // Iterates through n times (positive equivalent)
    for (let i = 0; i <= j; i++){
      let nextElement = i, count = i
      // Sets next element to the sum of its position and backwards
      while (count > 0){
        nextElement += count-1
        --count
      }
      // Adds next element to array
      sequence.push(nextElement) 
    }
    // If n is negative, set all elements to negative except for 0th element
    if (n < 0){
      sequence = sequence.map(elem => -elem)
      sequence[0] = 0
    }
    return sequence
}

/*

Other Solutions:

function sumOfN(n) {
  var array = [];
  array[0] = 0;
  for (var i = 1; i < Math.abs(n)+1; i++) {
    if (n > 0) array[i] = array[i-1]+i;
    else array[i] = array[i-1]-i;
  }
  return array;
};

function sumOfN(n) {
  for (var i = 0, list = []; i <= Math.abs(n); i++) {
    list.push((list[i - 1] || 0) + i * (n < 0 ? -1 : 1))
  }
  
  return list
}

*/