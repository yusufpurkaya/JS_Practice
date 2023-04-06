
// ? better comment 
// ! red comment
// todo orange

//   Scope
//  Global scope  süslü parantez içinde tanımlanmayan
//  Function Scope  function içinde tanımlananlar
//  Block Scope  fuction haricindeki süslü parantez içinde tanımlananlar

//!  Global scope
console.log(" Global scope a");
var a=10;  // global scope 



function method1(){
    console.log(" a  ="+a);
}

if(true){
    console.log(" a  ="+a);
}
method1();


//!  Function Scope
console.log(" function scope  b");


// function method2(){
//     var b= 15;
// console.log("a object is global scope and it is accessible from function =>  "+a);
// }
//console.log(" b  ="+method2());
// but i can access  console.log(b); because it is assigned inside a function


//!  Block Scope

// function dışındaki {} arasında tanımlananlar block scope dur.

// if (true) {
//     var a=5;
// }
// else{

// };
// do {
    
// } while (true){};

// for (let i= 0; i>5; i++) {
    
    
// }
