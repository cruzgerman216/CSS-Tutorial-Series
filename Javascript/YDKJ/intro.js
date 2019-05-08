//ydkj
//What this book lacks (examples and practice problems)
//code -> source code, saved in text file, syntax,
// statements, operators number of expressions(2, a, b*2) make up a statement

var b = 2;
var a = b * 2;
//console.log(a);

//if c does not contain a value then the result is NaN
var c;
a = c * 2;
//console.log(a);

//How do these program statements tell the computer what to do? page 4 get's really complicated
//executed(running the program) --> interpreter or compilier translate the code you write into commands a computer can understand
//translation of commands starts from the top to the bottom of the program which is called interpreting
//for other languages, translation is done ahead of time which is called compiling the code,
//javascript compiles its program?? or is an interpreted languaged?

//outputting to a console
//console.log("I'm in the console");

var con = {
  logging(a) {
    //  console.log(a);
  },
  cheese: "burger"
};

con.logging("hey now");

//operators *, / =, +, -
//console.log("5" - -(-"1"));

//Values & Types
// numbers, strings, booleans and literals("test string")
//converting between types
var a = 42;
var b = Number("a");
//console.log("99.99" == 99.99); //true
//console.log("99.99" === 99.99); //false

//code comments

//variables -> javascript is dynamic typing meaning variables can hold values of any type without any type
//enforcement. C++ for example, requires you specify what type of variable, int, double, string, char, ect

//constants

//blocks - by wraping one or more statements inside a curly-brace pair
//block statements do not need semicolons

{
  //i'm inside a block
  //me too
}

//conditionals
//if
var bank_balance = 302.13;
var amount = 99.99;

if (bank_balance > amount) {
  bank_balance -= amount;
  // console.log("Your bank balance is now " + "$" + String(bank_balance));
}

//mixes a situation with keywords like ifs, loops, variables (may be a little confusing) pg 34
//Loops
var i = 0;
while (i < 9) {
  i++;
  //console.log(i);
}

do {
  i++;
} while (i > 10);
//difference between while and do, is that while tests the conditional first and do while does not.
//if the condition is false, the next iteration will not run and will "loop out"

//a break will stop the loop

while (true) {
  if (true) {
    // console.log("stop the loop");
    break;
  }
}

//for loop
for (let i = 0; i < 4; i++) {
  //  console.log(i);
}

//functions
function printAmount() {
  // console.log("Function");
}

printAmount();

//scope or lexical scope (something i need a review on)
//NOTE: vague analogies of phones with code pg 38
//javascript, each function gets its own scope
//only code inside that function can access that function's scoped variables

function one() {
  // this `a` only belongs to the `one()` function
  var a = 1;
  // console.log(a);
}
function two() {
  // this `a` only belongs to the `two()` function
  var a = 2;
  // console.log(a);
}
one(); // 1
two(); // 2

//a scope within a scope
function outer() {
  var a = 1;
  function inner() {
    var b = 2;
    // we can access both `a` and `b` here
    // console.log(a + b); // 3
  }
  inner();
  // we can only access `a` here
  // console.log(a); // 1
}
outer();
//Lexical scope rules say that code in one scope can access variables of
//either that scope or any scope outside of it.

//reinforcing practice page 40 is a plus, was a good exercise
