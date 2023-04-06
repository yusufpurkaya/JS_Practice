// Var - Let - Const

/*

Var-Let-Const name = value;

*/

// var ile tanımlanan her variables function scope dur. 
// ! fakat globalde tanımlarsan da global olur
// yani bunu nerede tanımlarsanız tanımlayın function scope erisim olur.
// normalde function da tanımlanan function da kullanılır ok 
// ve block da tanımlanan o block da erisilebilir fakat block icinde var ile tanımlarsanız buna
// function da da erisebilirsiniz
function plus(){
var a=10;
if (true) {
    var b= "selam naber";
}

console.log(b);
}
plus();

// var cok ram de cok fazla yer kaplar let-const bu yuzden cıktı.


var a=5;
var a=10;
console.log(a);
// ! let and const ise block scope özelliğine sahiptir

// let a=20;  a zaten tanımlandı bi daha tanımlayamazsın

let c=20;
console.log(c);  // bu sekilde ok
// fakat 
// let c= 30;  hata verir cunku c de zaten bi degisken tanımlandı
c= 30; // bu olur ok
console.log(c);

// fakat c nin ataması globalde yapıldı peki funtion da kullanılabilir mi ? 
if(true){
    console.log(c);
}

// bu konuya tekrar bi bak cunku globalde tanımlanan let ve var a function seviyeden erisilebiliyorsa 
// farkı ne ki  ( fakat function da tanımlana let e globalden erisilemez ok var da ayni sekilde degil mi)

// const  & let farkı

/*
cons yani constant sabit değer 
 sonradan degismez
*/
/*   
// hata verir
const d=45;
d=50;
*/


// variable degilde obje olusturalım
const obje={
username :"yusuf emre",
password : 1234
}
console.log("*")
console.log(obje);

// ve

console.log("* *")
username="yusuf emre purkaya";
console.log(obje);
//fakat obje uzerinden setledik aslında 
obje.username="yusuf emre purkaya";

console.log("***")
console.log(obje);


