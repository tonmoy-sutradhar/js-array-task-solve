// Checking Array Membership with ‘includes’
// **Instructions:**
// 1. Create an array of books containing different book.
// 2. Use the includes method to check if the array contains a javascript book.
// 3. Print a message to the console indicating whether the element is present in the array or not.

let books = [
  "Programming",
  "javascript",
  "English",
  "Math",
  "Chemistry",
  "Biology",
];
// includes diye array te kono specific kono element ace kina oita dekhe. for example: "javascript"
if (books.includes("javascript")) {
  console.log("This book are in array.");
} else {
  console.log("This book are not in array.");
}

console.log(books.indexOf("javascript")); //indexOf diye javascript book koto nmbr index e ace oita procas kore.
