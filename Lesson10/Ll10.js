// TODO Data types
/*

        Primitives
1-String
2-Number
3-Boolean
4-Null
5-Undefined
    Referance
6-Object
7-Function


*/
document.writeln("primitive and referance data types");



console.log("**********  1 String   **********")
let isim="Yusuf";
console.log(isim);
console.log(typeof isim);



console.log("**********  2 numbers   **********");
let sayi=10;
console.log(sayi);
console.log(typeof sayi);
let number2=10.77;
console.log("number 2 = "+number2+ "dir");



console.log("**********  3 boolean   **********");
console.log(5>3);
let bool=5>3;
let digit3=8;
console.log(bool);
console.log(digit3==19);

console.log("**********  4 null  **********");
let nullableva=null;
console.log(nullableva);
nullableva=45;
console.log(nullableva);
console.log("type : " +typeof nullableva);

console.log("**********  5 undefined  **********");
let rrsad;
console.log(rrsad);


console.log("**********  6 object  **********");
// object creation
let abc={

};

console.log(abc);
console.log("type : " +typeof abc);

let abc2={
isim:"yusuf",
soyisim:"purkaya",
age:33,
isItWoman:false
};
console.log(abc2);
console.log("type : " +typeof abc2);

console.log("**********  6 object  dizi **********");
let dizi=[1,2,3,"dizi"];
console.log(dizi);
console.log(typeof dizi);


console.log("**********  7 function  **********");

let func=function(){
    console.log("i created a new function ");
}
console.log(typeof func);
func();

