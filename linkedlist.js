'use strict'
const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addelement(element) {
        let newNode = new Node(element);
       
        let cur;
        if (!this.head) {   
            this.head = newNode;//this.head = new Node (70){element = 70 , next = null}
        }
        else {
            cur = this.head;
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
        this.size++

    }

    addelementAt(element, index) {
        if (index < 0 || index > this.size)
            return 'sorry enter valid index';
        else {
            let newNode = new Node(element);
            if (index == 0) {
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                let prev,cur = this.head, count = 0;
                while (count < index) {
                    count++;
                    prev = cur;
                    cur = cur.next;

                }
                prev.next = newNode;
                newNode.next = cur;
            }
            this.size++
        }
    }
    removeFrom(index) {
        if (index < 0 || index > this.size)
            return 'sorry enter valid index';
        else {
            if (index == 0)
                this.head = this.head.next;
            else {
                let cur = this.head, prev, count = 0;
                while (count < index) {
                    count++;
                    prev = cur;
                    cur = cur.next;
                }
                cur = cur.next;
                prev.next = cur;
            }
            this.size--;
        }

    }

    removeElement(element) {
        let cur = this.head, prev;

        if (this.head.element == element) {
            this.head = this.head.next;
            this.size--;
        }
        else {
            while (cur.next) {
                prev = cur;
                cur = cur.next;
                if (cur.element == element) {
                    cur = cur.next;
                    prev.next = cur;
                    this.size--;
                }

            }
        }
    }
    indexOf(element) {
        let cur = this.head, index = 0;
        while (cur.next) {
            index++;
            if (cur.element == element)
                return index;
            else {
                cur = cur.next;
            }
        }
        return false
    }
    
    isEmpty() {
        return this.size == 0;
    }

    sizeList(){
        return this.size
    }

    printList(){
        let cur=this.head,str=""
        while(cur)
        {str=str+cur.element + " ";
        cur=cur.next}
      return str
    }
}

const add = new LinkedList();
console.log(add.isEmpty());
add.addelement(70);
add.addelement(80);
add.addelement(90);
console.log('list===========>',add.printList());
console.log(add);
add.addelementAt(10, 1)
// console.log(add.addelementAt(9));

console.log('===>', add);
console.log('===>', add.head.next.next);
// add.removeFrom(2);
// console.log(add);
// add.removeElement(-1);
// console.log(add);
console.log('hhiiii',add.indexOf(10));
console.log(add.isEmpty());
console.log(add.sizeList());
console.log('list===========>',add.printList());