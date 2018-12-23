/* eslint-disable no-undef */
import * as testPkg from '../../tests/util'
import sinon from 'sinon'

describe('HelloWorld.vue', () => {
  it('Should pass', () => {
    sinon.stub(testPkg, 'bar').returns(2)
    testPkg.bar() // ?
    expect(testPkg.bar()).to.be.equal(2)
  })
})
