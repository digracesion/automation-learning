const chai = require('chai');

const assert = chai.assert;

//#1: equality
let a =1, b=1;
assert.equal(a,b,"a and b are not equal");

//#2: Objects
function myObject(){
    return{
        a: 100,
        b: "hello"
    }
};

x = new myObject();
y = new myObject();

assert.deepEqual(x,y, "x and y are not equal");

//#3: Arrays
let numbers = [1, 2, 3, 0];
assert.isArray(numbers, "numbers is not an array");