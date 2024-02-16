// call apply and bind methods can be used for method/function sharing

const nameO = {
  fName: "Riya",
  lName: "K",
};

function printName(city, state) {
  console.log(this.fName, this.lName, city, state);
}

// call this function, nameO overrides the this context inside the function when called like this
printName.call(nameO, "jamshedpur", "jharkhand");

// apply is same as call, but takes array of other params
printName.apply(nameO, ["jamshedpur", "jharkhand"]);

// bind has same syntax as call but this returns a copy of function to be executed at a later stage
const boundFunction = printName.bind(nameO, "jamshedpur", "jharkhand");
boundFunction();
