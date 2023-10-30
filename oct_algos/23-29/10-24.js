
class ListNode {
    /**
     * Constructs a new Node instance. Executed when the 'new' keyword is used.
     * @param {any} data The data to be added into this new instance of a Node.
     *    The data can be anything, just like an array can contain strings,
     *    numbers, objects, etc.
     * @returns {ListNode} A new Node instance is returned automatically without
     *    having to be explicitly written (implicit return).
     */
    constructor(data) {
      this.data = data;
      /**
       * This property is used to link this node to whichever node is next
       * in the list. By default, this new node is not linked to any other
       * nodes, so the setting / updating of this property will happen sometime
       * after this node is created.
       *
       * @type {ListNode|null}
       */
      this.next = null;
    }
  }
  
  /**
   * This class keeps track of the start (head) of the list and to store all the
   * functionality (methods) that each list should have.
   */
  class SinglyLinkedList {
    /**
     * Constructs a new instance of an empty linked list that inherits all the
     * methods.
     * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
     *    returned without having to explicitly write "return".
     */
    constructor() {
      /** @type {ListNode|null} */
        this.head = null;
        }

        
    
        isEmpty() {
        return this.head === null;
        }

    insertAtBack(data) {
        if (this.isEmpty()) {
            this.head = new ListNode(data);
            return this;
        }
    
        let runner = this.head;
        while (runner.next) {
            runner = runner.next;
        }
        runner.next = new ListNode(data);
        return this;
        }
    
    insertAtBackRecursive(data, runner = this.head) {
        if (this.head === null) {
            this.head = new ListNode(data);
            return this;
        }
        if (runner.next === null) {
            runner.next = new ListNode(data);
            return this;
        }
        return this.insertAtBackRecursive(data, runner.next);
    }

    // ******************************************* Work Here

    insertAtFront(data) {
        let temp = this.head
        this.head = new ListNode(data);
        this.head.next = temp;
        return this;
    }

    removeHead() {
        this.head = this.head.next
        return this
    }

    average() {
        let runner = this.head;
        let sum = 0;
        let count = 0;
        while (runner) {
            sum += runner.data;
            count ++;
            runner = runner.next;
        }
        return sum / count;
    }

  removeBack() {
    if(this.isEmpty()){
      return null;
    }
    let runner = this.head;
    let temp;
    while(runner.next){
      if(!runner.next.next){
        temp = runner.next.data;
        runner.next = null;
      }else{
        runner = runner.next;
      }
    }
    return temp;
  }

  contains(val) {
    if(this.isEmpty()){
      return false;
    }
    let runner = this.head;
    while(runner.next){
      if(runner.data === val){
        return true;
      }else{
        runner = runner.next;
      }
    }
    return false;
  }

  containsRecursive(val, runner = this.head) {
    if (!runner) {
        return false;
    }

    if (runner.data === val) {
        return true;
    }

    return this.containsRecursive(val, runner.next);
}

  // EXTRA

  recursiveMax(runner = this.head, maxNode = this.head) {
    if(runner.data > maxNode.data){
      maxNode = runner;
    }
    if(!runner.next){
      return maxNode ? maxNode.data : null;
    }
    return this.recursiveMax(runner.next, maxNode);
  }

    // ******************************************* END of Work

    insertAtBackMany(vals) {
      for (const item of vals) {
        this.insertAtBack(item);
      }
      return this;
    }

    toArr() {
      const arr = [];
      let runner = this.head;
  
      while (runner) {
        arr.push(runner.data);
        runner = runner.next;
      }
      return arr;
    }
  }
  
  /******************************************************************* 

  */
  const emptyList = new SinglyLinkedList();
  
  // const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
  // const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
  // const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
  // const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
  const unorderedList = new SinglyLinkedList().insertAtBackMany([
    -5, -10, 4, -3, 6, 1, -7, -2,
  ]);

  console.log(unorderedList.removeBack());
  console.log(unorderedList.toArr());
  console.log(unorderedList.contains(-10));
  console.log(unorderedList.contains(10));
  console.log(unorderedList.containsRecursive(-10));
  console.log(unorderedList.recursiveMax());
  
  
  /* node 4 connects to node 1, back to head */
  // const perfectLoopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
  // perfectLoopList.head.next.next.next = perfectLoopList.head;
  
  /* node 4 connects to node 2 */
  // const loopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
  // loopList.head.next.next.next = loopList.head.next;
  
  // const sortedDupeList = new SinglyLinkedList().insertAtBackMany([
  //   1, 1, 1, 2, 3, 3, 4, 5, 5,
  // ]);
  
  // Print your list like so:
  // console.log(firstThreeList.toArr());