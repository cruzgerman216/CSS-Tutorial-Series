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

//equality
// == === != !==
// ! means not
//fun fact your can do this console.log(!!!!!true);
// == checks for value equality with coercion allowed
// === checks for value equality without allowing coercion (often strict equality)

//pg 53 talks about es5 which is a bit outdated

//inequality
//< > <= >=
// 3 < 4
// "barr" < "foo"
var a = 41;
var b = "42";
var c = "43";
a < b; // true
b < c; // true
// if a < c are strings, they are made lexicographically (alphabetically like a dictionary)

var a = 42;
var b = "foo";
a < b; // false
a > b; // false
a == b; // false
// a number being compared to NaN value will always be false, NaN is neither greater than nor less than any other value

//Variables
// a-z, A-Z, $, or _ can be identifers and then plus numerals if you like
// js keywords such as for, in, if ect are reserved words as well as true, null, false

//function scopes

//you use the var keyword to declare a variable that will belong to the current function scope or global scope if at the top level outside of any function
//hoisting
//Wherever a var appears inside a scope, that declaration is taken to belong to the entire scope and accessible everywhere throughout.
var a = 2;
foo(); // works because `foo()`
// declaration is "hoisted"
function foo() {
  a = 3;
  console.log(a); // 3
  var a; // declaration is "hoisted"
  // to the top of `foo()`
}
console.log(a); // 2

//Nested Scopes
function foo() {
  var a = 1;
  function bar() {
    var b = 2;
    function baz() {
      var c = 3;
      console.log(a, b, c); // 1 2 3
    }
    baz();
    console.log(a, b); // 1 2
  }
  bar();
  console.log(a); // 1
}
foo();
// you won't be able to access c outside of baz
function foo() {
  a = 1; // `a` not formally declared
}
foo();
a; // 1--oops, auto global variable

//let with nested scopes
function foo() {
  var a = 1;
  if (a >= 1) {
    let b = 2;
    while (b < 5) {
      let c = b * 2;
      b++;
      console.log(a + c);
    }
  }
}
foo();
// 5 7 9

//conditionals
if (a == 2) {
  // do something
} else if (a == 10) {
  // do another thing
} else if (a == 42) {
  // do yet another thing
} else {
  // fallback to here
}

//switch statement
switch (a) {
  case 2:
    // do something
    break;
  case 10:
    // do another thing
    break;
  case 42:
    // do yet another thing
    break;
  default:
  // fallback to here
}

//ternary operator
var a = 42;
var b = a > 41 ? "hello" : "world";
// similar to:
// if (a > 41) {
// b = "hello";
// }
// else {
// b = "world";
// }

//Strict Mode - tightens up the rules for certain behaviors
function foo() {
  "use strict";
  // this code is strict mode
  function bar() {
    // this code is strict mode
  }
}
// this code is not strict mode

("use strict");
function foo() {
  // this code is strict mode
  function bar() {
    // this code is strict mode
  }
}
// this code is strict mode

function foo() {
  "use strict"; // turn on strict mode
  //d = 1; // `var` missing, ReferenceError
}
foo();

//if you turn on strict mode in your code, and you get errors, or code starts behving buggy, your temptation
//might be to avoid strict mode but that instinct would be a bad idea to indulge. if strict mode causes issues in your program, it's almost certainly a sign
//that you have things in your program you should fix.

//Functions as Values pg61
function foo() {
  // ..
}
//foo is a variable in the outer enclosing scope that's given a reference to the functio nbeing declared
//such that function itself is a value, just like 42 or [1,2,3] would be
//not only can have an argument(parameter) to a function but itself can be a value assigned to variables or passed to or returned from other functions.
//a function value should be thought of as an expression
var foo = function() {
  //foo is set to a function that is called anonymous because it has no name
  // ..
};
foo();
var x = function bar() {
  //named functions are generally more preferable, but anonymous functions are also very common
  // ..
  console.log("test");
};
x();

//Imemediately Invoked Function Expressions (IIFEs)
//another way to execute a function
(function IIFE() {
  console.log("Hello!");
})();
//the outer () is just a nuance of js grammer needed to prevent it from being treated as a normal function declaration
//the (); at the end of the function is what actually executes the function expression
function foo() {}
// `foo` function reference expression,
// then `()` executes it
foo();
// `IIFE` function expression,
// then `()` executes it
(function IIFE() {})();
//functions create variable scope, using an IIFE in this fashion is often used to declare variables
//that won't affect the surrounding code

var a = 42;
(function IIFE() {
  var a = 10;
  console.log(a); // 10
})();
console.log(a); // 42
//iifes can have return values
var x = (function IIFE() {
  return 42;
})();
x; // 42

//Closure
//You can think of closure as a way to “remember” and continue to
//access a function’s scope (its variables) even once the function has
//finished running.
function makeAdder(x) {
  // parameter `x` is an inner variable
  // inner function `add()` uses `x`, so
  // it has a "closure" over it
  function add(y) {
    return y + x;
  }
  return add;
}

//so add() gets returned to the outer makeAdd and is able to remeber whatever x was passed into makeadder
// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder(1);
// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder(10);
plusOne(3); // 4 <-- 1 + 3
plusOne(41); // 42 <-- 1 + 41
plusTen(13); // 23 <-- 10 + 13
//when we call madeAdder(1) we get back a reference to its inner add(..) that remembers x as 1. We call this function
//ference plusOne(..)

//Modules
//Modules let you define private implementation details(variables, functions) that are hidden from the
//outside world, as well as a public API that is accessible from the outside
function User() {
  var username, password;
  function doLogin(user, pw) {
    username = user;
    password = pw;
    // do the rest of the login work
  }
  var publicAPI = {
    login: doLogin
  };
  return publicAPI;
}
// create a `User` module instance
var fred = User();
fred.login("fred", "12Battery34!");
//the User() function serves as an outer scope that holds variables username and password
//the inner scope of doLogin() holds private variables that cannot be accessed from the outside world.
//user() isa function , not a class to be instantiated, so ti's just called normally,
//using new would be inappropriate and actually waste resources
//NOTE: beginners would not know what new is
//executing User() creates an instance of the User module-a whole new scope is created
//thus a whole new copy of each of these inner variables/functions
//inner doLogin() function has a closure over username and password, meaning it will have access to them
//public API is an object with one property/method on it, login, which is a reference to the inner doLogin() function
//when we return publicAPI from User(), it becomes the instance we call fred

//The function finishes executing and you would think the variables go away but they do not because there's
//a closure in the login() function keeping them alive.
//when we call fred.loing(..) it will have access to username and password

//this identifier
//if af unction has a this reference inside it, that this reference usually poitns to an object
//but which object itp oints to depends on how tt he function was called
//this does not refer to the function itself

function e() {
  console.log(this.bar);
}
var bar = "global";

e();
var obj1 = {
  bar: "obj1",
  foo: foo,
  e: e
};
console.log(obj1.e());
var obj2 = {
  bar: "obj2"
};
// --------
foo(); // "global"
obj1.foo(); // "obj1"
foo.call(obj2); // "obj2"
new foo(); // undefined
// these are four rules for how this gets set, and they're shown in those last four lines of that snippet

//foo() ends up setting this to the global object in non-strict mode - in stric mode it would be undefined
//obj1.foo() sets this to the obj1 object
//foo.call(obj2) sets this to the obj2 object
//new foo() sets this to a brand new empty object
//Note: confused this for me

//Prototypes
//when you reference a property on an object
//if that property doesn't exist, javscript will automatically use that object's internal prototype reference to
//find another object to look for the property on
var foo = {
  a: 42
};
// create `bar` and link it to `foo`
var bar = Object.create(foo);
bar.b = "hello world";
bar.b; // "hello world"
bar.a; // 42 <-- delegated to `foo`
//a doesn't exist on the bar object but because bar is prototyped-linked to foo, it falls back to a on the
//foo object where it's found

//Polyfilling
//taking the definition of a newer feature and producing a piece of code that's equivalent to the
//behavior, but is able to urn in older JS environments
