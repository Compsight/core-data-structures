'use strict'

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

export default class Stack {
  constructor() {
    this.top = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  length() {
    return this.size
  }

  peek() {
    return this.size === 0
      ? null
      : this.top.data
  }

  pop() {
    const current = this.top
    return this.size === 0
      ? null
      :(this.top = current.next,
        this.size--,
        current.data)
  }

  push(value) {
    this.top = new Node(value, this.top)
    this.size++
  }

}
