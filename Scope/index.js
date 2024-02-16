// Scope- defines where a variable can be accessed within a code
// block- multiple lines added where javascript expects a single line. combines multiple javascript statements in a group; like a function {}

// Example 1
var a = 10;
function checkScope() {
  // it should be able to access this varible due to lexical environment
  console.log(a);
  var b = 11;
  function insideScope() {
    // it access both due to scope chain- chain of lexical environments
    console.log(a, b);
  }
  insideScope();
}
checkScope();

// Example 2
// using let/const
// let and const are not available with window/ not present globally

let x = 5;
function check() {
  // still accessed due to lexical scope- scope chain
  console.log(x);
}

check();

// Example 3- let /const are hoisted? yes; but we get reference error in temporal dead zone
//console.log("p  initialization= ", p);
let p;
// will output undefined
console.log("p before initialization= ", p);
// temporal dead zone- from hoiting to initialization
p = 3;
console.log("p after   initialization= ", p);

// Example 4- block scope; const/let are block scopred whereas var is not
{
  // this is a valid block
  var a1 = 1;
  let a2 = 2;
  const a3 = 3;
}

console.log(a1);
// a2 is not defined- Reference error
// console.log(a2);

//Example 5- Shadowing
var b1 = 10;
{
  var b1 = 11;
  console.log("shdowed value b1= ", b1);
}

let c1 = 12;
{
  let c1 = 17;
  console.log("c1= ", c1);
}

const c2 = 90;
{
  const c2 = 80;
  console.log("c2= ", c2);
}
// shadowing works inside function as well
const c3 = 18;
function test() {
  const c3 = 40;
  console.log(c3);
}
test();

// Illegal shadowing- variable declared with let/const cannot be redeclared as var inside a block
// let c4 = 1;
// {
//   var c4 = 9;
//   console.log(c4);
// }
