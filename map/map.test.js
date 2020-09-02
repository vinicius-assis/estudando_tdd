import { expect } from 'chai'
import map from './map'

it('map should be a function', () => {
  expect(map).to.be.a('function')
})

it('map([1, 2], (item) => item) should return [1, 2]', () => {
  expect(map([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('map([2, 3], (item) => item) should return [2, 3]', () => {
  expect(map([2, 3], (item) => item)).to.be.deep.equal([2, 3])
})

it('map([4, 5], (item) => item + 1) should return [5, 6]', () => {
  expect(map([4, 5], (item) => item + 1)).to.be.deep.equal([5, 6])
})

it('map([5, 6], (item) => item * 5) should return [25, 30]', () => {
  expect(map([5, 6], (item) => item * 5)).to.be.deep.equal([25, 30])
})

it('map() should return []', () => {
  expect(map()).to.be.deep.equal([])
})

it('map([1, 2], (item, index) => index) should return [0, 1]', () => {
  expect(map([1, 2], (item, index) => index)).to.be.deep.equal([0, 1])
})

it('map([3, 4], (item, index, array) => array) should return [[3, 4], [3, 4]]', () => {
  expect(map([3, 4], (item, index, array) => array)).to.be.deep.equal([[3, 4], [3, 4]])
})

it('map(1) should return a TypeError', () => {
  let error

  try {
    map(1)
  } catch (e) {
    error = e
  }

  expect(error.name).to.be.equal('TypeError')
})

it('map(1) shoudl throw a TypeError with message "The first parameter must be a array."', () => {
  let error

  try {
    map(1)
  } catch (e) {
    error = e
  }

  expect(error.message).to.be.equal('The first parameter must be a array.')
})

it('map([1, 2], "function") should throw a TypeError', () => {
  let error

  try {
    map([1, 2], "function")
  } catch (e) {
    error = e
  }

  expect(error.name).to.be.equal('TypeError')
})

it('map([1, 2], "function") should throw a TypeError', () => {
  let error

  try {
    map([1, 2], "function")
  } catch (e) {
    error = e
  }

  expect(error.message).to.be.equal('The second parameter must be a function')
})