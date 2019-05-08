//list of concepts to be discussed later in the books pg44
var a;
typeof a; // "undefined"
a = "hello world";
typeof a; // "string"
a = 42;
typeof a; // "number"
a = true;
typeof a; // "boolean"
a = null;
typeof a; // "object"--weird, bug
a = undefined;
typeof a; // "undefined"
a = { b: "c" };
typeof a; // "object"

//Objects
var obj = {
  a: "hello world",
  b: 42,
  c: true
};
//dot notation
obj.a; // "hello world"
obj.b; // 42
obj.c; // true
//bracket notation
obj["a"]; // "hello world"
obj["b"]; // 42
obj["c"]; // true

//unique way how to access the object
var obj = {
  a: "hello world",
  b: 42
};
var b = "a";
obj[b]; // "hello world" or obj["a"]
obj["b"]; // 42

//Array is an object subtype
var arr = ["hello world", 42, true];
arr[0]; // "hello world"
arr[1]; // 42
arr[2]; // true
arr.length; // 3
typeof arr; // "object"

//functions - the other object subtype
function foo() {
  return 42;
}
foo.bar = "hello world";
typeof foo; // "function"
typeof foo(); // "number"
typeof foo.bar; // "string"

//built-in type methods
var a = "hello world";
var b = 3.14159;
a.length; // 11
a.toUpperCase(); // "HELLO WORLD"
b.toFixed(4); // "3.1416"
//A string value can be wrapped by a String object, a number can be
//wrapped by a Number object, and a boolean can be wrapped by a
//Boolean object allowing these built-in type methods

//Coercion comes in two forms-> explicit and implicit
//explicit coercion - a converstion from one type to another will occur
var a = "42";
var b = Number(a);
a; // "42"
b; // 42--the number!

//implicit coercion is when the type conversion can happen as more of a nonobvious side effect of some other opertaion
var a = "42";
var b = a * 1; // "42" implicitly coerced to 42 here
a; // "42"
b; // 42--the number!

//truthy and falsy
//when a non-boolean value is coerced to a boolean, is it true or false?
//falsy
// -  ""(empty string)
// - 0, -9, NaN(invalid number)
// - null, undefined
// - false

//any number that is not on the falsy list is a truth
// - "hello"
// - 42
// - true
// [ ], [1,"2",3] (arrays)
// {}, {a:43} (objects)
//function foo() {..} (functions)

if ("" == false) {
  console.log("it's false");
}
