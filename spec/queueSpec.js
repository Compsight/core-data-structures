import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe.only('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context("enqueue()", () => {
    it("adds an element to the back of the queue.", () => {
      const testEnQueue = new Queue()

      expect(() => testEnQueue.enqueue("foo"))
        .to.alter(() => testEnQueue.length(), {from:0, to:1})
    })
  })

  context("dequeue()", () => {
    it("returns and removes the front element in the queue or returns null if the queue is empty.", () => {
      const testDequeue = new Queue()
      testDequeue.enqueue("foo")

      expect(testDequeue.dequeue()).to.equal("foo")
    })
  })
})
