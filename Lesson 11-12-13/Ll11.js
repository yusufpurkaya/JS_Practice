
document.writeln("Operators types");
/*

=      assigment operator
+
-
*
/
%
++
--
**

*/


console.log(("+ operator ")+(7+5));
let a=13;
let b=14;
let isim="toplayamaz ";
console.log(a+b);
console.log(isim+a+b);  // toplayamaz 1314
console.log(isim+(a+b)); // toplayamaz 27


// - * 

console.log(a*b);  // 182
console.log(a-b);  // -1

console.log(a/b);   // 0.9285714285714286
let result=(a+b)/2;
console.log(result);  // 13.5

//   %

console.log(102%5);  // 2

//   ++  --

console.log(a); // 13
a++;
console.log(a);  // 14

// **   2.2.2= 2**3

console.log(5**3);  // 125
console.log(a**b);  // 11112006825558016


console.log( "Assigment Operators ");
// assigment operators

/*

=
==
===
+=
-=
*=
/=
%=
**=


*/



console.log(5=="5");  //! true
console.log(5==="5"); //! false
 
let sayi=5;   // 5

sayi=sayi+2;  // 7
console.log(sayi);

sayi +=2; // 9
console.log(sayi);

sayi -=4; // 5
console.log(sayi);

sayi *=5; // 25
console.log(sayi);

sayi /=5; // 5
console.log(sayi); // 5

// logical operators

/*

&&  :and
||  :or
!   :not


*/

let number1=12;
let number2=22
let number22=22;

console.log(number1==122&&number2==22); // false
console.log(number1==122 || number2==111);  // false
console.log((5>3) && (7<2));    // false


