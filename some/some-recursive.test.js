import { expect } from 'chai'
import some from './some-recursive'

it('some should be a function', () => {
  expect(some).to.be.a('function')
})

it('some([], (item) => item) should return False', () => {
  expect(some([], (item) => item)).to.not.be.ok
})

it('some([1, 2], (item) => item) should return True', () => {
  expect(some([1, 2], (item) => item)).to.be.ok
})

it('some([1, 2, 3], (item, index) => index % 2 === 0) should return True', () => {
  expect(some([1, 2, 3], (item, index) => index % 2 === 0)).to.be.ok
})

it('some([1, 3, 5], (item) => item % 2 === 0) should return False', () => {
  expect(some([1, 3, 5], (item) => item % 2 === 0 )).to.not.be.ok
})