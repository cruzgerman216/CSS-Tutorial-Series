function a(x, y) {
  this.x = x;
  this.y = y;
  return this.x + this.y;
}

function identify() {
  return this.name.toUpperCase();
}
function speak() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}
var me = {
  name: "Kyle"
};
var you = {
  name: "Reader"
};

identify.call(me); // KYLE
identify.call(you); // READER
speak.call(me); // Hello, I'm KYLE
speak.call(you); // Hello, I'm READER

function identify2(content) {
  return content.name.toUpperCase();
}

function speak2(content) {
  var greeting = "Hey, my name is " + identify2(content);
  console.log(greeting);
}

speak2({ name: "German Cruz" });

//Create a global variable foo function and foo.count are both different. because foo function used this, it doesn't mean it can use count
function foo(num) {
  console.log("foo: " + num);
  this.count++;
}

foo.count = 0;

var i;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}

console.log(foo.count);

//Developers create another object to hold the count property but it does not solve the confusion of this

function foo2(num) {
  console.log("foo: " + num);

  data.count++;
}

var data = { count: 0 };

var i;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo2(i);
  }
}
console.log(data.count);

//Lexical scope -
