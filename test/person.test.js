let { expect } = require('chai'),
  should = require('chai').should(),
  _ = require('lodash')

import { getPerson, Person } from '../src/person'

describe('#initial person condition', () => {
  it('initial person should be an object', () => {
    expect(_.isObject(getPerson())).to.be.true
  })

  it('armorBouns by default is 2 wearing leatherArmor', () => {
    const person = getPerson()
    person.armorBonus.should.equal(2)
  })
})

describe('#Person', () => {
  describe('#rollDice', () => {
    it('should return a finite number (not NaN nor Infinity)', () => {
      const number = Person.rollDice(1, 20)
      _.isFinite(number).should.be.true
    })

    it('in a 10000 times samples, there should be no 0 in result', () => {
      const samples = new Array(10000),
        rollDiceSamples = _.fill(samples, 0).map(() => Person.rollDice(1, 20))

      // console.log(rollDiceSamples)
      rollDiceSamples.filter(item => item === 0).length.should.equal(0)
    })
  })
})
