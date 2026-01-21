// operators
// Arithmetic, compraison, logical, assignment, unary, ternary
// Arithmetic:
// +, -, /, *, **,  %
// + --> Add and concatenation
// ex. 1+2 --> add
//"user" + "name" --> concat
// 5 + "5" --> concat, 5+5 --> add
// -
// ex. 2 - 1
// /, *
// ex. 240/2, 25*2
// % (modulus) (sheshfal) (reminder)
// ex. 12%4
// ex. 9%2 --> 1
// ** (square)(exposination)
// ex. 2*3 --> 8

// comparison (ans: true, false)
// ==
// ex. 12 == 13 , 12 == "12" (don't check type, only check value, not strict comparison)
// ==
// ex. 12 === "12" (check type and value, strict comparasion)
// ! =
// ex. 12 ! = 13 (reverse of ==, not strict comparaison)
// ! ==
// ex. 12! == "12" (reverse of ===)
// >=
// ex. 22 >= 22
// <=
// ex. 13<= 13
// <
// ex. 12 < 13, 12 < 9, 22 < 22
// >
// ex. 12 > 13, 12 > 9, 13 > 13

// assignment
// =
// give a value, value assigment operator
// ex. let a = 12;
// +=
// ex. a += 3 ; (add value into old value and save it into a)
// -=
// ex. a -= 4; (subtract value into old value and save it into a)
// *=
// ex. a *= 2;
// /=
// ex. a /= 2;
// %=
// ex. a %= 2; (give remainder)

// logical
// && (and)
// ex. true && true --> true 12<13 && 14<15 --> true
// false && true --> false 12<10 && 14 < 15 --> false
// true && false --> false
// false && false --> false

// || (or)
// ex. true || true --> true
// false || true --> true
// true || false --> true
// false || false --> false

// ! (not)
// ex. ! true --> false
// ! false --> true
//  !12 --> false --> !!12 --> true

// unary oprator
// + - ! typeof ++ --
// +
// convert string to number
// ex. +"5" --> 5
// +"name" --> NaN
// "5" + 5 --> 55
// +"5" + 5 --> 10
// -
// ex. -5
// !
// ex. !12 --> false
// typeof
// ex. typeof "name" --> string
// ++
// ex. let a = 12
// a++ -->12 // post ex. a++ +a => 25
// ++a --> 13 // pre ex. a++ + a => 26
// --
// ex. let a = 3;
// a--
// a++

// Ternary
// ? :
// condition ? true thase to print thase : false thase to print thase
// let a = 12>13 ? console.log("true"): console. log ("false");

// typeof null --> object
// typeof [] --> object, let a =[]; a instanceof array--> true
// instanceof --> check type of reference data type // don't use typeof for reference data type
// typeof NaN --> number
// typeof --> premitive data type mate use karvo
// instanceof --> reference datatype mate use karvo

let temp = 100; // variable name --> temp, variable value --> 35
// if (condition // sharat --> true hoy){code run thay} --> sharat ke condition false(khoti) hoy to code run thase nahi
// jo if ni condition false(khoti) thay to else no code run thay
if (temp > 30) { //(temp > 30) temp 30 vadhare hoy, 35 > 30
  console.log("Hot day"); // aa line console ma print thase
} else {
  console.log("Pleasant day"); // jo if in condition khoti hoy to
}


let a = 10; // variable name --> a, variable value --> 10
if(a){
    console.log("Truthy value"); // jo code sacho hoi to aa value aavse
}else{
    console.log("Falsy value"); // jo code khoto hoy to aa value aavse 
}

let score = 90; // variable name --> score, variable value --> 78
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
// variable = condition (90 ke 90 thi vadhare score hoi) ? value (condition sachi hase to print thase) : value (condition khoti hase to print thase)
// let grade = score >= 90 ? "Pass" : "Fail";
console.log ("Grade:", grade);



