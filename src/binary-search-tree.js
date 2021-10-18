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

  remove(data) {
    this.data = removeItemData(this.data, data);

    function removeItemData(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeItemData(node.left, data);
        return node;
      }

      if (data > node.data) {
        node.right = removeItemData(node.right, data);
        return node;
      }

      if (data === node.data) {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;

        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = removeItemData(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.data) {
      return;
    }

    let node = this.data;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.data) {
      return null;
    }

    let node = this.data;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
};
