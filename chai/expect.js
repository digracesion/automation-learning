const chai = require('chai');

const expect = chai.expect;

// #1: equality
//let a=1, b=2;

//Test that an error should be thrown since both values are not equal
//expect(a).to.be.equals(b, "a and b are not equal");

let a =1, b=1;
expect(a).to.be.equals(b, "a and b are equal");

//#2: Objects
function myObject(){
    return{
        a: 100,
        b: "hello"
    }
};

x = new myObject();
y = new myObject();
expect(x).to.be.an('object');
//expect(x).to.be.equals(y, "x and y are not equal");
//expect(x).to.be.deep.equals(y);
expect(x).to.be.an('object').and.to.be.deep.equals(y);

//#3: arrays
let numbers = [1, 2, 3, 0];
expect(numbers).to.be.an('array').that.includes(3);