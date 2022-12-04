/* 
 Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you cannot  create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have
  multiple coins of the same value).


  For example, if you're given coins = [1, 2, 5]
, the minimum
  amount of change that you can't create is 4 . If you're given no
  coins, the minimum amount of change that you can't create is 1. 
  
  */
  
  function nonConstructibleChange(coins) {
  // Write your code here.
  let largest = 0;
  const coinsSort = coins.sort((a, b) => a-b);
  
  for(const no of coinsSort) {
    if (largest >= no || largest + 1 === no) {
      largest += no;
    } else {
      break;
    }
  }
  
  return largest + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
