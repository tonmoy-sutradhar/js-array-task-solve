//  Checking if it's an Array
// **Instructions:**
// 1. Create different variables, each containing either an array or a non-array value.
// 2. Now use isArray to check if each variable is an array.
// 3. Print a message to the console indicating whether each variable is an array or not.

let phone = ["Vivo", "Iphone", "Asus", "LG", "Nokia", "BlackDimond"];
// let mobile = "GenZ";
let mobile = ["apple", "orange"];
let isArray = true;

// console.log(phone + " " + mobile);

if (phone == isArray && mobile == isArray) {
  // console.log("This variable is an array");
} else {
  // console.log("This variable is not an array");
}

// ---------------------------------------------------------------->>

// Step 1: Create different variables
let phones = ["Vivo", "Iphone", "Asus", "LG", "Nokia", "BlackDimond"];
let str = "Tonmoy sutradhar";
// let str = ["tonmoy", "meghla", "nondini", "asha"];

if (Array.isArray(phones)) {
  console.log("Phones is an array variable.");
} else {
  console.log("Phones is NOT an array variable.");
}

if (Array.isArray(str)) {
  console.log("str is an array variable.");
} else {
  console.log("str is NOT an array variable.");
}
