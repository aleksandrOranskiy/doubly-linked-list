const Node = require('./node');

class LinkedList {
    constructor() {
        head = new Node();
        tail = new Node();
    }

    append(data) {

        newElement = new Node(data);

        if (isEmpty()) {
            head = tail = newElement;
        } else if (head.next === null) {
            tail = newElement;
            tail.prev = head;
            head.next = tail;
        } else {
            tail.next = newElement;
            newElement.prev = tail;
            tail = newElement;
        }

        ++idx;
    }

    head() {return head;}

    tail() {return tail;}

    at(index) {

        if (index > idx || index < 0) {

            alert("List doesn't include this index");
            return -1;

        } else {

        temp = head;

        for (var i = 0; i < index; ++i) {
            temp = temp.next;
        }

        return temp.data;
        }
    }

    insertAt(index, data) {

        if (index > idx || index < 0) {

            alert("List doesn't include this index");
            return -1;

        } else {

        temp = head;

        for (var i = 0; i < index; ++i) {
            temp = temp.next;
        }

        newElement = new Node(data, temp.prev, temp);
        ++idx;
        temp.prev.next = newElement;
        temp.prev = newElement;

        }

    }

    isEmpty() {return (idx===0);}

    clear() {

        while (head.next !== null) {

            temp = head.next;
            delete head;
            head = temp;
        }

        delete head;
    }

    deleteAt(index) {

        if (index > idx || index < 0) {

            alert("List doesn't include this index");
            return -1;
        }

        temp = head;

        if (index === 0) {

            temp = head.next;
            delete head;
            head = temp;

        } else if (index === idx) {

            temp = tail.prev;
            delete tail;
            tail = temp;

        } else {

            for (var i = 0; i < index; ++i) {
                temp = temp.next;
            }

            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
            delete temp;

        }

        return 0;        
    }

    reverse() {

        temp = head;

        while (temp.next !== null) {

            temp = temp.next;
            tempRef = temp.next;
            temp.next = temp.prev;
            temp.prev = tempRef;

        }

        head.prev = head.next;
        head.next = null;

        tail.next = tail.prev;
        tail.prev = null;

        temp = head;
        head = tail;
        tail = temp;

    }

    indexOf(data) {

        temp = head;
        for (var i = 0; i < idx; ++i) {

            if (temp.data === data) {
               return i;
            } else if ((temp.data !== data) && (i === idx - 1)) {
                alert("List doesn't contain this data");
                return -1;
            } else {
                 temp = temp.next;
            }
            
        }


    }
}

module.exports = LinkedList;
