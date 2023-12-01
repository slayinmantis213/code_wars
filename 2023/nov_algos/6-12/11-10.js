/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
    constructor() {
        /**
         * 0th index not used, so null is a placeholder. Not using 0th index makes
         * calculating the left and right children's index cleaner.
         * This also effectively makes our array start at index 1.
         */
        this.heap = [null];
    }

    /**
 * @param {number} i
 */
    idxOfParent(i) {
        return Math.floor(i / 2);
    }

    /**
     * @param {number} i
     */
    idxOfLeftChild(i) {
        return i * 2;
    }

    /**
     * @param {number} i
     */
    idxOfRightChild(i) {
        return i * 2 + 1;
    }

    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top() {
        return this.heap[1] == undefined ? null : this.heap[1];
    }

    insert(num) {
        this.heap.push(num);
        let index = this.heap.length-1
        while(this.heap[this.idxOfParent(index)] > num)
        {
            let parentIdx = this.idxOfParent(index);//grab parent values
            let parent = this.heap[this.idxOfParent(index)];

            if(parent == null){
                break;
            }

            this.heap[parentIdx] = num;//swap values
            this.heap[index] = parent;

            index = parentIdx;//iterate index
        }
        return this.heap;
    }   

    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
            return;
        }

        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`
        );

        this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
}

const newHeap = new MinHeap()

newHeap.insert(7);
newHeap.insert(10);
newHeap.insert(3);
newHeap.insert(20);
newHeap.insert(15);
newHeap.insert(32);
newHeap.insert(69);
newHeap.insert(6);
newHeap.printHorizontalTree()

