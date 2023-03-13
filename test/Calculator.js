//load chai assertion library
const chai = require("chai");
const expect = chai.expect;
const asserttype = require('chai-asserttype');
chai.use(asserttype);

//load node.js assertion library
const assert = require("assert");


//load calculator code
var Calculator = require("../Calculator");
var calc = new Calculator();

describe("Calculator Tests",function(){
 
  it("add: Adds 1 and 2",function(){
    expect(calc.add(1,2)).to.be.equal(3);
  });

  it("Add allows on parameter",function(){
    expect(calc.add(1,2)).to.be.equal(3);
  });
  
   it("Add Allows no parameters",function(){
     expect(calc.add()).to.be.equal(0);
   });
  
   it("Add turns strings to zeros",function(){
    expect(calc.add("frog","toad")).to.be.equal(0);
   });

  it("Subtract: Six - Three",function(){
    expect(calc.subtract(6,3)).to.be.equal(3);
  });

  it("multiply: Three times seven",function(){
    expect(calc.multiply(7,3)).to.be.equal(21);
  });

  it("divide: Four divided two",function(){
    expect(calc.divide(4,2)).to.be.equal(2);
  });
});
