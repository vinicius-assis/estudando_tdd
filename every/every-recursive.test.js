import { expect } from 'chai'
import every from './every-recursive'

it('every should be a function', () => {
  expect(every).to.be.a('function')
})

it('every([], (item) => item) should return true', () => {
  expect(every([], (item) => item)).to.be.ok
})

it('every([0, 2, 3], (item) => item > 5) should return false', () => {
  expect(every([0, 2, 3], (item) => item > 5)).to.not.be.ok
})

it('every([1, 2, 3], (item) => item) should return true', () => {
  expect(every([1, 2, 3], (item) => item)).to.be.ok
})

// it('every([1, 2, 3], (item, index) => index === item - 1) should return true', () => {
//   expect(every([1, 2, 3], (item, index) => index === item - 1)).to.be.ok
// })

// it('every([1, 2, 3], (item, index) => index === item) should return false', () => {
//   expect(every([1, 2, 3], (item, index) => index === item)).to.not.ok
// })

// it('every([1, 2, 3], (item, index, array) => array.length === 3) should return true', () => {
//   expect(every([1, 2, 3], (item, index, array) => array.length === 3)).to.be.ok
// })