// Node class
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // LinkedList class
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Append function to add new nodes
    append(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    // Print function to print out the list
    print() {
      let current = this.head;
      const result = [];
      while (current !== null) {
        result.push(current.value);
        current = current.next;
      }
      console.log(result.join(" -> "));
    }
  }
  
  // Instantiate the LinkedList and append items
  const list = new LinkedList();
  list.append("data structures-array");
  list.append("variable type-integer");
  list.append("sorting algorithm-bubble sort");
  
  // Print the list
  list.print();
  