// Write a function `reverseString` that takes a string as input and returns the reverse of that string.

// **Example:**
// ```javascript
// const input = "hello";
// const output = reverseString(input);
// console.log(output); // "olleh"
//solution
 const input='hello'
 const reverseString=(str)=>{
  let reverse="";
  for(i=str.length-1;i>=0;i--){
    reverse+=str[i];
  }
  console.log(reverse)
 }
 
 console.log(reverseString(input))
