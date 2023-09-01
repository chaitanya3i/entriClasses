function lepyear(year){
    if(year%4==0 && year%100!=0){
       return "this is lleap";
}else if(year%400==0){
return "this is lleap";
}else{
 return false;
}
}
const lean=lepyear(2016);
console.log(lean);
