// const pQueue = new PriorityQueue()
// pQueue.enqueue("pizza", 100) // adds an element with priority (number) to the back of the queue.
// pQueue.front()               // returns the front element (highest priority) in queue or null if the queue is empty.
// pQueue.back()                // returns the back element (lowest priority) in the queue or null if the queue is empty.
// pQueue.dequeue()             // returns and removes the front element in the queue or null if the queue is empty.
// pQueue.isEmpty()             // returns true if the queue is empty or false if not.
// pQueue.length()              // returns the number of elements in the queue.
'use strict'

import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priorityQueue'

chai.use(chaiChange)

describe.only('PriorityQueue', () => {
  it('exists', () =>  {
    expect (PriorityQueue).to.be.a('function')
  })

  context("back()", () => {
    it("returns the back element (lowest priority) in the queue" () => {
      const testBack = new PriorityQueue()
      testBack.enqueue("lowest priority",3)
      testBack.enqueue("highest priority",5)

      expect(testBack.back()).to.equal("lowestPriority")
    })

    it("returns null if the queue is empty" () => {
      const testBack = new PriorityQueue()

      expect(testBack.back()).to.equal(null)
    })
  })

  context("dequeue()", () => {
    it("returns and removes the front element in the queue" () => {
      const testDequeue = new PriorityQueue()
      testDequeue.enqueue("lowestPriority",1)

      expect(testDequeue.dequeue()).to.equal("lowestPriority")
    })

    it("returns and removes the front element in the queue" () => {
      const testDequeue = new PriorityQueue()

      expect(testDequeue.dequeue()).to.equal(null)
    })
  })

  context("enqueue()", () => {
    it("returns the back element in the queue with priority", () => {
      const testEnqueue = new PriorityQueue()
      testEnqueue.enqueue(100)
      testEnqueue.enqueue(100)

      expect(testEnqueue.enqueue()).to.equal.("enqueue")
    })

    it("returns null if the queue is empty", () => {
      const testEnqueue = new PriorityQueue()

      expect(testEnqueue.back()).to.equal(null)
    })
  })

  context("front()", () => {
    it("returns the front element (highest priority) in queue or null if the queue is empty" () => {
      const testFront = new PriorityQueue()
      testFront.enqueue("highest priority",5)
      testFront.enqueue("lowest priority",2)

      expect(testFront.front()).to.equal("highest priority")
    })

    it("returns null if the queue is empty" () => {
      const testFront = new PriorityQueue()

      expect(testFront.front()).to.equal(null)
    })
  })

  context("isEmpty()") () => {
    it("returns true if the queue is empty or false if not" () => {
      const testIsEmpty = new PriorityQueue()

      expect(testIsEmpty.isEmpty()).to.equal(true)
    })

    it("returns false if queue is not empty" () => {
      const testIsEmpty = new PriorityQueue()
      testIsEmpty.enqueue("car", 1)

      expect(testIsEmpty.isEmpty()).to.equal(false)
    })
  })

  context("length()")  () => {
    it("returns the number of elements in the queue" () => {
      const testLength = new PriorityQueue()

      expect(testLength.length()).to.equal(0)
    })
  })
})
