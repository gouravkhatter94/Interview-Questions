/*
Given a binary tree calculate sum of its all node's depth.

Ex: 
tree =    1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
 /   \
8     9


Sum = 16
*/




function nodeDepths(root) {
  // Write your code here.
  function recursiveCalculate(node, depth) {
    let nodeLeftSum = 0;
    let nodeRightSum = 0;
    if (node.left) {
      nodeLeftSum = recursiveCalculate(node.left, depth + 1);
    }
    if (node.right) {
      nodeRightSum = recursiveCalculate(node.right, depth + 1);
    }

    return nodeLeftSum + nodeRightSum + depth;
  }

  return recursiveCalculate(root, 0);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
