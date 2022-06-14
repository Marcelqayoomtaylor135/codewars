/*
INSTRUCTIONS: 

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false


*/

// My Solution

/*
PLAN

First Thoughts:
    - while loop that checks boolean if still equal
    - iterate backwards through both array checking if each letter is equal
    - return boolean
*/

function stringEndsWith(str, ending){
    let equal = true
    let count = 0
    while(equal && count < ending.length){
        // Iterate backwards from the end of each string and check to see if the chars are equal  
        if (str.charAt((str.length-1)-count) != ending.charAt((ending.length-1)-count)){
            // Set equal to false and therefore end the loop
            equal = false
        }
        ++count
    }
    return equal
}


/*
OTHER SOLUTIONS:

function solution(str, ending){
  return str.endsWith(ending);
}
 
LMAOO

const solution = (str, ending) => str.endsWith(ending); 



*/

