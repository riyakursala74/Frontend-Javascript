//setTimeout uses a counter provided by the browser
// setTimeout uses closure to access the variables we require

setTimeout(() => {
  console.log("i will wait for 3 second and print");
}, 3000);

// print a number in each second
function a() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// a();

// print 1 to 10 in each second using var
// it will print same number as var will have refernce to i which is changed if used as let
// by passing i as a parameter to another function different reference of i is used
function b() {
  for (var i = 0; i <= 10; i++) {
    function c(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    c(i);
  }
}

b();
