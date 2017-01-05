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
    this.begin = null
    this.end = null
    this.count = 0
  }

  back() {
    return this.count === 0
      ? null
      : this.end.data
  }

  dequeue() {
    const next = this.begin
    return this.count === 0
      ? next
      :(this.begin = next.proceeds,
        this.count--,
        next.data)
  }

  enqueue(person) {
    this.count === 0
      ?(this.end = new Node(person, this.begin, this.end),
        this.begin = this.end,
        this.count++)
      :(this.end = new Node(person, this.begin, null),
        this.count++)
  }

  front() {
    return this.count === 0
      ? null
      : this.begin.data
  }

  isEmpty() {
    return this.count === 0
      ? true
      : false
  }

  length() {
    return this.count
  }
}
