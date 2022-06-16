/*
INSTRUCTIONS:

This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.

*/

// My Solution

function evensAndOdds(num){
    // Turns out toString takes a radix paramater which allows you to set the number base
    return num % 2 == 0 ? num.toString(2) : num.toString(16)
}



/* 

Other Solutions


function evensAndOdds(num){
    return (num&1) ? num.toString(16) : num.toString(2);
}


*/ 
