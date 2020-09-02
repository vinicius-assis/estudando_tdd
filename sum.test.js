import { expect } from 'chai'
import sum from './sum'

it('sum should be a function', () => {
  expect(sum).to.be.a('function')
})

it('sum(1, 2) should return 3', () => {
  expect(sum(1, 2)).to.be.equal(3)
})

it('sum(2, 2) should return 4', () => {
  expect(sum(2, 2)).to.be.equal(4)
})

it('sum(3, 4) should return 7', () => {
  expect(sum(3, 4)).to.be.equal(7)
})