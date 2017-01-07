'use strict'

class Node {
  constructor(follows, data, priority, proceeds) {
    this.after = follows
    this.info = data
    this.priority = priority
    this.before = proceeds
  }
}

class priorityQueue {
  constructor() {
    this.head = null
    this.tail = null
    this.count = 0
  }
}

  enqueue(value, num) {// adds an element with priority (number) to the back of the queue.
    let behind = this.tail
    let inFront = null
    const element = new Node(behind, value, num, inFront)
    this.count === 0
      ?(this.tail = element,
        this.head = element)
      :(while (num > behind.priority) {
          behind = behind.after
          inFront = behind.after
        },
        inFront.before = element
        element.after = inFront
        element.before = behind
        behind.after = element
  }
  
  pQueue.front()               // returns the front element (highest priority) in queue or null if the queue is empty.
  pQueue.back()                // returns the back element (lowest priority) in the queue or null if the queue is empty.
  pQueue.dequeue()             // returns and removes the front element in the queue or null if the queue is empty.
  pQueue.isEmpty()             // returns true if the queue is empty or false if not.
  pQueue.length()              // returns the number of elements in the queue.
