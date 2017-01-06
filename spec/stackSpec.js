import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe.only('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('isEmpty()', () => {
    it('returns true if the stack is empty', () => {
      const testEmpty = new Stack()

      expect(testEmpty.isEmpty()).to.equal(true)
    })

    it('returns false if the stack is not empty', () => {
      const testEmpty = new Stack()
      testEmpty.push("foo")

      expect(testEmpty.isEmpty()).to.equal(false)
    })
  })

  context('length()', () => {
    it('returns the number of elements in the stack', () => {
      const testLength = new Stack()
      testLength.push("foo")
      testLength.push("bar")

      expect(testLength.length()).to.equal(2)
    })
  })

  context('peek()', () => {
    it('returns the top element in the stack', () => {
      const testPeek = new Stack()
      testPeek.push("foo")
      testPeek.push("bar")

      expect(testPeek.peek()).to.equal("bar")
    })

    it('returns null if the stack is empty', () => {
      const testPeek = new Stack()

      expect(testPeek.peek()).to.equal(null)
    })
  })

  context('pop()', () => {
    it('returns and removes the top element in the stack', () => {
      const testPop = new Stack()
      testPop.push("foo")
      testPop.push("bar")

      expect(testPop.pop()).to.equal("bar")
    })

    it('returns null if the stack is empty', () => {
      const testPop = new Stack()

      expect(testPop.pop()).to.equal(null)
    })
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const testPush = new Stack()

      expect(() => testPush.push('foo'))
        .to.alter(() => testPush.length(), { from: 0, to: 1 })
    })
  })
})
