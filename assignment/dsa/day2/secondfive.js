//console.log(truncateText("This is a long sentence.", 10));
 // Output: "This is a..."
//console.log(truncateText("Short text.", 15)); 
// Output: "Short text."

let text= (('"This is a long sentence.",10'))
let newtruncatetext1=text.slice(0,10)+'..."';
console.log(newtruncatetext1);

let text1=(('"Short text.",15'));
let newtruncatetext2=text1.slice(0,13);
console.log(newtruncatetext2);
