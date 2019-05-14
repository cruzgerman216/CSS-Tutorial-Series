//chapter 1
//What is scope?
//state - the ability to store values and pull values out of variables is what gives a programe state

//Where do those variables get stored?
//How does our program find them when it needs them?

//A set of rules for storing variables in some location and findign those variables at a later time which is called scope
// how and where do these scope rules get set?

//compiler theory
// javascript a compiled language
// in a traditional compile-language process, a chunk of your psource code, your program, will go through three steps before it
// 1. tokenizing/Lexing
//Breaking up a string of characters into meaningful chunks called token
// var a = 2;
//will be broken up into var, a, =, 2, and ;
//white space may or may not be persisted as a token depending on whether it's meaningful.

//parsing
//takinga stream of tokens and turning it into a tree of nested elements, this is called AST (abstract syntax tree)
// the tree for var a = 2; might start with a top-level node called VariableDeclaration, with a child node called
//identifier(whose value is a) and another child called AssignmentExpression which itself has a NumericLiteral (who's value is 2)

//Code-Generation
//The process of taking an AST and turning it into executable code
//in a simple way, the AST for var a = 2; is turned into machine instructions to actually create a variable called a (including reserving memory) and then store a value in a
//
