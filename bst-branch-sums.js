/*
bst-branch-sums
Write a function that takes in a Binary Tree and returns a list of its branch
  sums ordered from leftmost branch sum to rightmost branch sum.
  A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
  branch is a path of nodes in a tree that starts at the root node and ends at
  any leaf node.
  Each BinaryTree node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
None /null.
Sample Input

 tree=     1
        /     \
       2       3
     /   \    /  \
    4     5  6    7
  /   \  /
 8    9 10

Sample Output [15, 16, 18, 10, 11]
*/

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  function recursiveSum(node, sum) {
    let resultArr = [];

    if (node.left == null && node.right == null) {
      return [sum + node.value];
    } else {
      if (node.left != null) {
        const leftArr = recursiveSum(node.left, sum + node.value);
        resultArr = [...leftArr];
      }

      if (node.right != null) {
        const rightArr = recursiveSum(node.right, sum + node.value);
        resultArr = [...resultArr, ...rightArr];
      }

      return resultArr;
    }
  
    return resultArr;
  }
  if(root !== null) {
    return recursiveSum(root, 0);  
  } else {
    return [];
  }
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
