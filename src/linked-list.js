const Node = require('./node');

class LinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }


    append(data) {

        if (this.isEmpty()) {

            this._head = this._tail = new Node(data);

        } else if (this.length === 1) {

            this._tail = new Node(data);
            this._tail.prev = this._head;
            this._head.next = this._tail;

        } else {

            this._tail.next = new Node(data);
            this._tail.next.prev = this._tail;
            this._tail = this._tail.next;
        }

        ++this.length;

        return this;
    }

    head() {return this._head.data;}

    tail() {return this._tail.data;}

    at(index) {

        if (index > this.length || index < 0) {

            alert("List doesn't include this index");
            return -1;

        } else {

        var temp = this._head;

        for (var i = 0; i < index; ++i) {
            temp = temp.next;
        }

        return temp.data;
        }
    }

    insertAt(index, data) {

        if (index > this.length || index < 0) {

            alert("List doesn't include this index");
            return -1;

        } else {
            if (this.isEmpty()) {

                this._head = this._tail = new Node(data);

            } else {

                var temp = this._head;

                for (var i = 0; i < index; ++i) {
                    temp = temp.next;
                }

                var newElement = new Node(data, temp.prev, temp);
                ++this.length;
                temp.prev.next = newElement;
                temp.prev = newElement;

            }


        }

        return this;

    }

    isEmpty() {return (this.length === 0);}

    clear() {

        if (this.length !== 0) {
            this._head.data = null;
            this._tail.data = null;
            this.length = 0;
        }

        return this;
    }

    deleteAt(index) {

        if (index > this.length || index < 0) {

            alert("List doesn't include this index");
            return -1;
        }

        var temp = this._head;

        if (index === 0) {

            this._head = this._head.next;

        } else if (index === this.length) {

            this._tail.prev.next = null;
            this._tail = this._tail.prev;

        } else {

            for (var i = 0; i < index; ++i) {
                temp = temp.next;
            }

            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
            temp = null;

        }

        --this.length;

        return this;
    }

    reverse() {

        var length = this.length;
        for (var i = 0; i < length - 1; ++i) {
            if (i === 0) {

                this.append(this.at(i));

            } else {

                this.insertAt(this.length-i,this.at(i));
            }
        }

        for (var i = 0; i < length - 1; ++i) {
            this.deleteAt(0);
        }

        return this;
    }

    indexOf(data) {

        var temp = this._head;
        for (var i = 0; i < this.length; ++i) {

            if (temp.data === data) {
               return i;
            } else if ((temp.data !== data) && (i === this.length - 1)) {
                return -1;
            } else {
                 temp = temp.next;
            }
            
        }

    }
}


module.exports = LinkedList;
