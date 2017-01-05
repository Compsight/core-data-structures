'use strict'

class Node {
  constructor(data, follows, proceeds) {
    this.follows = follows
    this.data = data
    this.proceeds = proceeds
  }
}

export default class Queue {
  constructor() {
    this.front = null
    this.end = null
    this.count = 0
  }

  dequeue() {
    const current = this.front
    return this.count === 0
      ?(current)
      :(this.front = current.proceeds,
        this.count--,
        current.data)
  }

  enqueue(person) {
    this.count === 0
      ?(this.front = new Node(person, this.front, this.end),
        this.count++)
      :(this.end = new Node(person, this.front, this.end))
  }

  isEmpty() {
    if (this.count === 0) {
      return true
    } else {
      return false
    }
  }

  length() {
    return this.count
  }
}
