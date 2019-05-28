let { expect } = require('chai'),
  should = require('chai').should(),
  _ = require('lodash')

const { alwaysTrue, legitString } = require('./index')

describe('#mocha basics', () => {
  it('true should be true', () => {
    true.should.be.true
  })

  // it('true should be true', () => {
  //   true.should.be.false
  // })

  it('I expect true to be true', () => {
    expect(true).to.be.true
  })
})

describe('#alwaysTrue', () => {
  it('alwaysTrue should always return ture', () => {
    alwaysTrue().should.be.true
  })

  it('I expect alwaysTrue always return true', () => {
    expect(alwaysTrue()).to.be.true
  })

  it('should not be false', () => {
    alwaysTrue().should.not.be.false
  })

  it('I expect alwaysTrue will not return false', () => {
    expect(alwaysTrue()).to.not.be.false
  })
})

describe('#legitString', () => {
  it('cow should be a string', () => {
    legitString('cow').should.be.true
  })

  it('"" should not be a string', () => {
    expect(legitString('')).to.be.false
  })

  it('undefined should not be a string', () => {
    expect(legitString(undefined)).to.be.false
  })

  it('null should not be a string', () => {
    expect(legitString(null)).to.be.false
  })
})
