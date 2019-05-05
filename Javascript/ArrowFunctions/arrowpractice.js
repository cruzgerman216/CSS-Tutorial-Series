//Arrow functions do not have their own this or arguments
//Arrow functions are anonymous, which means they are not named
//1. this means it is harder to debug(you will not know what name is the function)
//2. no self-referencing If your function needs to have a self-reference
//at any point (e.g. recursion, event handler that needs to unbind), it will not work.

//Pros to using arrow functions
//1. You don't need to bind to this
//The arrow function, this  is lexically bound It means that it uses this from the code that contains the arrow function.
//
//Write an es5 function
var x = function(x, y) {
  return x + y;
};
console.log(x(1, 2));

//Write an es6 functino
const t = (x, y) => {
  let i = x - y;
  return i;
};
console.log(t(1, 2));

//Write an implicit return, an implicit return allows you to return the value without having to use the return keyword
//because it's only 1 statement
const imp = (a = "test", b = "cheese") => a + " " + b;
console.log(imp());

//return an object
const obj = () => ({ object: "hey i'm an object" });
console.log(obj().object);

//return an object with a parameter

const para = x => ({ object: x });
console.log(para("inside para").object);

var cheese = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};
cheese.counter();
