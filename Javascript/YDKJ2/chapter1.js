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
//in a simple way, the AST for var a = 2; is turned into machine instructions to actually create a variable called a (including reserving memory)
//and then store a value in a
//JS has to be compiiled before it's executed (simplicity)
//NOTE: Compiler works like this but this is simplicity terms.soemthing that's not worth going over but worth mentioning i guess

//Understanding Scope
//var a = 2;
// engine  - responsible for start to finish compilation and execution of our javascript progarm
// compiler - one of engine's friends; handles all the dirty work of parsing and code-generation
// scope: another friend of engine; collects and maintains a look-up list of all decalred identifers(variables) and
//enforces a strict
// set of rules as to how these are accessible to current executing code

//NOTE: get's pretty technical at this point.....

//The first thing Compiler will do with this program is perform lexing to break it down into tokens, which it will then
//parse into a tree. But
//when Compiler gets to code generation, it will treat this program somewhat differently than perhaps assumed

//first the compiler decalres a variable in the current scope and second, when executing, engine looks up the varaible
//in scope and assigns it if found.

//Compiler Speak
//When the engine executes the code compiled produced for step 2 it looks up the variable a to see if it has been declared
//this look-up engine performs affects the outcome of the look-up
//look-up LHS and RHS (lefthand righthand) of an assignment operation
//LHS is when a variable appears on the lefthand side of an assigment operation and the RHS appears on the righthand side
//of an assignment operation
//"who's the target of the assignment(LHS) and "who's the source of the assignment(RHS)"

//engine/scope conversion
// engine and scope communicate with one another, the engine asks scope if scope knows LHS or RHS of the variables
//scope will know or not know

//nested scopes
//scopes are sometimes inside other scopes
//when a variable cannot be found in the scope, the engine will go fourth trough the outter scopes until the outmost a.k.a
//global scope is reach

//ERRORS
