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
    //o(n/2)
    returnmid(head){
        var slow = head;
        var fast = head;
    
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
    
        return slow;
    }
}