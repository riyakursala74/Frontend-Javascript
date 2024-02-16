// Function remembers it environment; function grouped with its lexical environment is a closure
function a() {
  var x = 90;
  function b() {
    // it has access to x here due to lexical scope
    console.log(x);
  }
  return b;
}

var r = a();
// r is pointing to b, returned from a- b will still have access to x due to closure
r();

// Example 2- change value after returning
function c() {
  var y = 10;
  function d() {
    // still prints 11 as it contains a reference to y not a copy
    console.log(y);
  }
  y = 11;
  return d;
}
var q = c()();

// Example of closure with let
function e() {
  let z = 9;
  function f() {
    // prints 13
    console.log(z);
  }
  z = 13;
  return f;
}
e()();

// Advantage of closure
// 1. Data hiding and encapsulation
// 2. Function constructor/ state retention- counter exacmple- 2 counter with same function

// Disadvantage
// 1. over consumption of memory
// 2. memory leaks

// Example of data hiding
// limit use of global variable
let counter = 0;
increaseCounter = () => {
  console.log("counter increased= ", ++counter);
};
decreaseCounter = () => {
  console.log("counter increased= ", --counter);
};
increaseCounter();
increaseCounter();
decreaseCounter();
// works fine but anyone can modify counter here
counter = 9;
console.log("current value= ", counter);

// use of closure to prevent unintentional modification
function count() {
  let counter1 = 0;
  increaseCounter = () => {
    console.log("counter increased= ", ++counter1);
  };
  decreaseCounter = () => {
    console.log("counter decreased= ", --counter1);
  };
  return { increaseCounter, decreaseCounter };
}

let c5 = count();
console.log(c5);
c5.decreaseCounter();
counter1 = 9;
console.log("current value= ", counter1);
// still show 2
// c5();
