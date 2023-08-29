//Time of Day Greeting
//Write a function greetTimeOfDay that takes the current hour as input (in 24-hour format) and prints a greeting based on the time of day: "Good morning" for hours 6-11, "Good afternoon" for hours 12-17, and "Good evening" for hours 18-23.

const hours=new Date().getHours();
if(hours<12){
    console.log('goodmorning'); 
}else if(hours<18){
    console.log('good afternoon');
}else{
    console.log('good evng');
}
console.log(hours);