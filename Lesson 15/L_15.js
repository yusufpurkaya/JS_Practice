/*
Dialog Boxes

Alert
Prompt
Warn


*/

console.log(window);  // look window object 

// Alert

alert("this message will be shown as alert");




// Promt


// unassigned
prompt("write your name");
prompt("how old are you bro");
// let assign
let fatherName=prompt("write your father name");
let age=prompt("what is your your father age");
console.log(typeof fatherName+" is father name type" );
console.log(typeof age + " is age type");
console.log("because prompt return as string , dont forget");


// confirm

let selection=confirm("what is your selection bro ok or cancel ");
console.log(selection);
if(selection==true){
    console.log(" you select ok  and confirm value is " + selection);
}else{
    console.log(" you select cancel  and confirm value is " + selection);
}


