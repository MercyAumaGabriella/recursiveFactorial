const assert = require("chai").assert;
const app = require("../factorial");

describe("Testing a recursive Factorial function", function () {
  it("-1! = undefined", function () {
    let result = app(-1, 1);
    assert.equal(result, undefined);
  });

  it("3! = 6", function () {
    let result = app(3, 1);
    assert.equal(result, 6);
  });

  it("5! = 120", function () {
    let result = app(5, 1);
    assert.equal(result, 120);
  });

  it("10! = 3628800", function () {
    let result = app(10, 1);
    assert.equal(result, 3628800);
  });
});
