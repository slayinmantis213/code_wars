/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
         */
        this.left = null;
        /** @type {BSTNode|null} */
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        /**
           * Just like the head of a linked list, this is the start of our tree which
           * branches downward from here.
           *
           * @type {BSTNode|null}
           */
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    min(current = this.root) {
        if (this.isEmpty()) {
            return current;
        }
        let min = this.root.data;
        let runner = this.root;
        while (runner) {
            if (runner.data < min) {
                min = runner.data;
            }
            runner = runner.left;
        }
        return min;
    }


    minRecursive(current = this.root) {
        if (current.left == null) {
            return current.data;
        }
        else {
            return this.minRecursive(current.left);
        }
    }


    max(current = this.root) {
        if (this.isEmpty()) {
            return current;
        }
        let max = this.root.data;
        let runner = this.root;
        while (runner) {
            if (runner.data > max) {
                max = runner.data;
            }
            runner = runner.right;
        }
        return max;
    }

    maxRecursive(current = this.root) {
        if (current.right == null) {
            return current.data;
        }
        else {
            return this.maxRecursive(current.right);
        }
    }

    contains(searchVal) {
        let current = this.root;

        while (current) {
            if (current.data === searchVal) {
                return true;
            }

            if (searchVal > current.data) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
        return false;
    }
    containsRecursive(searchVal, current = this.root) {
        if (current === null) return false;
        if (current.data === searchVal) return true;
        return searchVal < current.data
            ? this.containsRecursive(searchVal, current.left)
            : this.containsRecursive(searchVal, current.right);
    }

    range(startNode = this.root) {
        return !startNode ? null : this.max(startNode) - this.min(startNode);
    }

    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);
console.log(threeLevelTree.min());
console.log(threeLevelTree.max());
console.log(threeLevelTree.minRecursive());
console.log(threeLevelTree.maxRecursive());
/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
// const fullTree = new BinarySearchTree();
// fullTree
//   .insert(25)
//   .insert(15)
//   .insert(10)
//   .insert(22)
//   .insert(4)
//   .insert(12)
//   .insert(18)
//   .insert(24)
//   .insert(50)
//   .insert(35)
//   .insert(70)
//   .insert(31)
//   .insert(44)
//   .insert(66)
//   .insert(90);