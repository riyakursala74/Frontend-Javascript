// Initial line to hold debugger and check the values of variable before code execution
// will not throw a referncce error, as this variable is hoisted during memory generation phase
console.log(a);
// It should print the code of function as funstion is also hoisted
console.log(b);
// will throw reference error as it is not defined in the entire code
// console.log(c);
// calling b before function; can access as function was hoisted
b();
console.log("Hello");
var a = 2;
console.log(a);
console.log(window.a); //same value as window is the global object
console.log(this.a);
function b() {
  console.log("Im a function");
}

// cannot call before initialization
// s();
// arrow function behave as an object; not hoisted
var s = () => {
  console.log("arrow function");
};
