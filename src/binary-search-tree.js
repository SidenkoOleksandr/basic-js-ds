const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

module.exports = class BinarySearchTree {
  root() {
    if (this.data == null) {
      return null;
    } else {
      return this.data;
    }
  }

  add(data) {
    this.data = addItemData(this.data, data);

    function addItemData(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (data === node.data) {
        return node;
      }

      if (data < node.data) {
        node.left = addItemData(node.left, data);
      } else {
        node.right = addItemData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchItemData(this.data, data);

    function searchItemData(node, data) {
      if (!node) {
        return false;
      }

      if (data === node.data) {
        return true;
      }

      if (data < node.data) {
        return searchItemData(node.left, data);
      } else {
        return searchItemData(node.right, data);
      }
    }
  }

  find(data) {
    return findItemData(this.data, data);

    function findItemData(node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        return node;
      }

      if (data < node.data) {
        return findItemData(node.left, data);
      } else {
        return findItemData(node.right, data);
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
};
