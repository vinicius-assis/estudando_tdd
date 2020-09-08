import { expect } from 'chai'
import reverse from './reverse'

it('reverse should be a function', () => {
  expect(reverse).to.be.a('function')
})

it('reverse([]) should return []', () => {
  expect(reverse([])).to.be.deep.equal([])
})

it('reverse([1]) should return []', () => {
  expect(reverse([1])).to.be.deep.equal([1])
})

it('reverse([1, 2, 3]) should return [3, 2, 1]', () => {
  expect(reverse([1, 2, 3])).to.be.deep.equal([3, 2, 1])
})

it('reverse([3, 2, 1]) should return [1, 2, 3]', () => {
  expect(reverse([3, 2, 1])).to.be.deep.equal([1, 2, 3])
})

it('revese([4, 5, 6]) should return [6, 5, 4]', () => {
  expect(reverse([4, 5, 6])).to.be.deep.equal([6, 5, 4])
})