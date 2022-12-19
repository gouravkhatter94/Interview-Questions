// Given a Node class having name and children. The children array shows child of the name node.
// implement a depthFirstSearch in the method which takes an empty array and return a depth first traverse of the Nodes.
/* input 
graph = A
     /  |  \
    B   C   D
   / \     / \
  E   F   G   H
     / \   \
    I   J   K
Output = ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]
*/

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name);
    if(this.children.length) {
      for (let child of this.children) {
        child.depthFirstSearch(array);
      }
    }
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
