// display count using global variable
let count = 0;
function buttonClicked() {
  console.log("button clicked", ++count);
}

document.getElementById("button1").addEventListener("click", buttonClicked);
// add code inside it will call only when dom is rendered
// window.onload = () => {
//   console.log("called when window is loaded");
// };

// maintain data encapsulation, counter cannot be altered from elsewhere
function wrapCounter() {
  let counter = 0;
  function clicked() {
    console.log("button clicked= ", ++counter);
  }
  document.getElementById("button1").addEventListener("click", clicked);
}
wrapCounter();
