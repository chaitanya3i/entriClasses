//Write a JavaScript function that hides email addresses to prevent unauthorized access. 
//Test Data :
//console.log(protect_email("robin_singh@example.com"));
//"robin...@example.com"

let email="robin_singh@gmail.com"
  let splitemail=email.split('@')
    let hideemail= email.slice(0,6)+'...@'+splitemail[1];
    console.log(hideemail);

