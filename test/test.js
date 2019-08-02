'use strict'
const expect = require('chai').expect
const { Jsadd } = require('../dist/index.js')

describe('Jsadd', () => {
    it('结果：200', () => {
        expect(Jsadd(100, 100)).to.deep.equal(200)
    })
})
