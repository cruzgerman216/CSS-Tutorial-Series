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
