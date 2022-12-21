/*
Nth Fibonacci
The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.

Important note: the Fibonacci sequence is often defined with its first two numbers as F0 = 0 and F1 = 1. For the purpose of this question, the first Fibonacci number is F0; therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc..

Sample Input #1
n = 2
Sample Output #1
1 // 0, 1
Sample Input #2
n = 6
Sample Output #2
5 // 0, 1, 1, 2, 3, 5
*/

// Recursive Approach

function getNthFib(n) {
  // Write your code here.
  const fibSeries = {
    1: 0,
    2: 1
  };

  function recursiveFibNumber(n) {
    if (fibSeries.hasOwnProperty(n)) {
      return fibSeries[n];
    } else {
      const secondPreviousNum = recursiveFibNumber(n-2);
      storeInMem(secondPreviousNum, n-2);
      const previousNum = recursiveFibNumber(n-1);
      storeInMem(previousNum, n-1);
      
      return previousNum + secondPreviousNum;
    }
  }

  function storeInMem(value, number) {
    if (!fibSeries.hasOwnProperty(n)) {
      fibSeries[number] = value;
      delete fibSeries[number - 2];
    }
    return;
  }
  return recursiveFibNumber(n);
}

// Do not edit the line below.
exports.getNthFib = getNthFib;

// Iterative Approach
function getNthFib(n) {
  // Write your code here.
  let fibSeries = [0, 1];
  if (n == 1) {
    return fibSeries[0];
  } else if (n == 2) {
    return fibSeries[1];
  } else {
    fibCounter = 2;
    while (fibCounter < n) {
      const next = fibSeries[0] + fibSeries[1];
      fibSeries.shift();
      fibSeries.push(next);
      ++fibCounter;
    }
    return fibSeries[1];
  }
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
