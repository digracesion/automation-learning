const chai = require('chai');

const should = chai.should();

//#1
let a =1, b=1;
a.should.be.equals(b);

//#2: Objects
function myObject(){
    return{
        a: 100,
        b: "hello"
    }
};

x = new myObject();
y = new myObject();

x.should.be.deep.equals(y);
x.should.be.an('object').and.to.be.deep.equals(y);

//#3: Arrays
let numbers = [1, 2, 3, 0];
numbers.should.be.an('array').that.includes(3);

//#4: existence of a file
function writeToAFile(error){
    //normal scenario
    //error.should.not.exist();

    //given that the error is undefined
    should.not.exist(error);
    //extras
    //should.exist();
    //should.equal();
    //should.not.equal();
    //should.Throw();
    //should.not.Throw();
};
writeToAFile(undefined);
//writeToAFile(1);
