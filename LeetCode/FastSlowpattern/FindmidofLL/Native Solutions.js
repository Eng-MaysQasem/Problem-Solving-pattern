/*876. Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Summary: Create a new node and link it to the array
    addFirst(val) {
        // Create a new node
        var NewNode = new Node(val);
        // Check if the list is empty
        if (this.head == null) {
            // If empty, set the head to the new node
            this.head = NewNode;
        } else {
            // If not empty, link the new node to the current head
            NewNode.next = this.head;
            this.head = NewNode;
        }
    }
    //o(n)
     middleNode(head) {
        var current = head;
        var length = 0;
    
        while (current != null) {
            current = current.next;
            length++;
        }
    
        var mid = head;
        for (var j = 0; j < Math.floor(length / 2); j++) {
            mid = mid.next;
        }
    
        return mid.value;
    }
    
    
    

    addLast(val) {
        // Create an instance of the node
        var NewNode = new Node(val);
        // Check if the list is empty
        if (this.head == null) {
            // If empty, set the head to the new node
            this.head = NewNode;
        } else {
            // Start from the head to traverse the list
            var current = this.head;
            while (current.next != null) {
                // Keep moving until you reach the last element
                current = current.next;
            }
            // After the loop, set the last element's next to the new node
            current.next = NewNode;
        }
    }

    // Traverse the list and print each node
    traverse() {
        var current = this.head;
        // As long as there are nodes, print them
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    //

    delFirst() {
        if (this.head == null) {
            console.log("Already empty");
        } else {
            // Set the head to the next node (Best Practice: nullify the old head manually)
            var temp = this.head;
            this.head = this.head.next;
            temp = null;
        }
    }

    delLast() {
        if (this.head == null) {
            console.log("Already empty");
        } else {
            var current = this.head;
            // Move until you reach the second-to-last node
            while (current.next.next != null) {
                current = current.next;
            }
            var tmp = current.next; // Last element
            current.next = null;
            tmp = null;
        }
    }

    addAtPos(pos, val) {
        if (pos <= 0) {
            console.log("Not valid");
        } else {
            // Create a new node
            var NewNode = new Node(val);
            var current = this.head;
            // Use a for loop to stop at the position before where you want to insert
            for (var k = 0; k < pos - 1; k++) {
                current = current.next;
            }
            NewNode.next = current.next;
            current.next = NewNode;
        }
    }

    DelAtPos(pos) {
        var current = this.head;
        // Use a for loop to stop at the position before where you want to delete
        for (var k = 0; k < pos - 1; k++) {
            current = current.next;
        }
        var temp = current.next;
        current.next = current.next.next;
        temp = null;
    }

    reverse() {
        var current = this.head;
        var previous = null; // The node before the head points to null
        var nextNode;
        // As long as there are nodes
        while (current) {
            // Store the next node in a variable so we don't lose it
            nextNode = current.next;
            // Reverse the link
            current.next = previous;
            previous = current;
            current = nextNode;
        }
        this.head = previous;
    }
}

// Testing the code
var list1 = new LinkedList();
// Test adding elements using the addFirst method
list1.addFirst(1);
list1.addFirst(2);
list1.addFirst(3);
// Print the list using the traverse method
list1.traverse(); // Output: 3 2 1
console.log("************");
console.log(list1.middleNode());
