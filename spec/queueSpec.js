import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe.only('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context("back()", () => {
    it("returns the back element in the queue", () => {
      const testBack = new Queue()
      testBack.enqueue("foo")
      testBack.enqueue("bar")

      expect(testBack.back()).to.equal("bar")
    })

    it("returns null if the queue is empty", () => {
      const testBack = new Queue()

      expect(testBack.back()).to.equal(null)
    })
  })

  context("dequeue()", () => {
    it("returns and removes the front element in the queue", () => {
      const testDequeue = new Queue()
      testDequeue.enqueue("foo")

      expect(testDequeue.dequeue()).to.equal("foo")
    })

    it("returns null if the queue is empty", () => {
      const testDequeue = new Queue()

      expect(testDequeue.dequeue()).to.equal(null)
    })
  })

  context("enqueue(\"foo\")", () => {
    it("adds an element to the back of the queue", () => {
      const testEnQueue = new Queue()
      // testEnQueue.enqueue("foo")

      expect(() => testEnQueue.enqueue("foo"))
        .to.alter(() => testEnQueue.length(), {from:0, to:1})
      expect(() => testEnQueue.enqueue("bar"))
        .to.alter(() => testEnQueue.back(), {from:"foo", to:"bar"})
      expect(testEnQueue.length()).to.equal(2)
    })
  })

  context("front()", () => {
    it("returns the front element in the queue", () => {
      const testFront = new Queue()
      testFront.enqueue("foo")
      testFront.enqueue("bar")

      expect(testFront.front()).to.equal("foo")
    })

    it("returns null if the queue is empty", () => {
      const testFront = new Queue()

      expect(testFront.front()).to.equal(null)
    })
  })

  context("length()", () => {
    it("returns the number of elements in the queue", () => {
      const testLength = new Queue()
      testLength.enqueue("foo")
      testLength.enqueue("bar")

      expect(testLength.length()).to.equal(2)
    })
  })
})
