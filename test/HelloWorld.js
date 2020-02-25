const helloWorld = require('../src/HelloWorld')
const chai = require('chai')

describe("Hello World", () => {
    it("should return 'Hello World'", () => {
        chai.assert.strictEqual(helloWorld(), "Hello World")
    })
})