/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor and the empty methods below the constructor.
*/
class DoublyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}
/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        this.head = null;
        this.tail = this.head;
    }
  
    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {
        let temp = this.head;
        let newNode = new DoublyLinkedListNode(data);
        this.head = newNode;
        if(this.isEmpty()){
            this.tail = newNode
        }
        this.head.next = temp;
        return this;
    }
  
    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        let temp = this.tail;
        let newNode = new DoublyLinkedListNode(data);
        if(this.isEmpty()){
            this.tail = newNode;
            this.head = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail.previous = temp;
            this.tail = newNode;
        }
        return this;
    }
  
    // EXTRA
    /**
     * Removes the middle node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */
    removeMiddleNode() {}
  
    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
      return this.head === null;
    }
  
    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
      const vals = [];
      let runner = this.head;
  
      while (runner) {
        vals.push(runner.data);
        runner = runner.next;
      }
      return vals;
    }
  
    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBackMany(items = []) {
      items.forEach((item) => this.insertAtBack(item));
      return this;
    }
  }
  
  const emptyList = new DoublyLinkedList();
  /**************** Uncomment these test lists after insertAtBack is created. ****************/
  // const singleNodeList = new DoublyLinkedList().insertAtBack(1);
  // const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
  // const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
  // const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
//   const unorderedList = new DoublyLinkedList().insertAtBackMany([
//     -5,
//     -10,
//     4,
//     -3,
//     6,
//     1,
//     -7,
//     -2,
//   ]);
//   console.log(unorderedList.toArray())
//   console.log(emptyList.insertAtFront(3).toArray())
//   console.log(emptyList.insertAtFront(4).toArray())
//   console.log(emptyList.insertAtFront(5).toArray())
console.log(emptyList.insertAtBack(4).toArray())
console.log(emptyList.insertAtBack(3).toArray())
console.log(emptyList.insertAtBack(2).toArray())
console.log(emptyList.insertAtBack(1).toArray())