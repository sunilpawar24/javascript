<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>

<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>

<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>

<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>

<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>


data type to types 
1. primitive data types
2. non primitive data types

1. primitive data types
e.x.
let a = 25
let b = a
types = "string, number, boolern, null, undefined, symbol , bright"
. string ("" , '' , ``)
. null = object

2. non primitive data types
types = [], {}, ()




<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
</div>
 
<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
</div>
 
<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
</div>
 
<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
</div>
 
<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
</div>
 
<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
</div>
 
<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
</div>
 
<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
</div>
 
<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
</div>
 
<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
</div>
 
<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
</div>
 
<div>
<h1>Example 11:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
</div>
 
<div>
<h1>Example 11:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
</div>
 
<div>
<h1>Example 11:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
</div>
 
<div>
<h1>Example 12:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p></p>
</div>


// do while loop 
// do {} while (end);
// start
// do {
// code
// change}
// while(end);
// let j = 12; // start
// do {
//     console.log("do while loop:" , j); // code
//     j++; // change (condition)
//     }  while (j < 20); // while check after executing code block (end)

// let z = 15; // start
// do{
//     console.log("do while loop error:", z); // code
//  } z++; // change (condition)
// why:

// // break
//  for (let k = 1; k <= 201; k++) {
//     console.log("loop with break", k);
//     if (k === 24){
//         break;
//     }
//  }

//  for (let k = 15; k <= 201; k++){
//     console.log("loop with break 2", k);
//     if (k <= "24"){
//         break;
//     }
//  }


// for (let m = 0; m <= 201; m++) {
//   if (m >= 24) {
//     break;
//   }
//   console.log("loop with break 3", m);
// }

// continue
//  for (let a = 1; a <= 10; a++){
//     if (a === 50){
//         continue;
//     }
//     console.log(a);
//  }

//  for (let a = 1; a <=10; a++){
//     if (a <= 5){
//         continue;
//     }
//     console.log("loop that skip numbers", a);
//  }

//  Example 1
// for (let B = 1; B <=10; B++){   (1 thi lai 10 sudhi line ma ank lavva)
//     if (B < 11)
//         console.log ("loop start", B);
// }

// Example 2
// for (let C = 10; C >= 1; C--){   (10 thi lai 1 sudhi aetle ke return ma ank lavva)
//         console.log ("loop start 2", C);
//     }

// Example 3
// for(let i=1; i<=20; i++) (only bekki sankya lavva mate)
// if(i%2 ===0){
// console.log(i);
// }

// Example 4
// let i = 1;
// while (i <= 15) {  (1 thi 15 sudhi aekki sankhya lavva)
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

// example 5
// for(let i=1; i<=20; i++){   (table (ghadiya) lavva mate)
//     console.log(`6 x ${i} = ${6*i}`);
// }

// // example 6
// let sum = 0;   (sarvalo karva mate)
// for(let i=1; i<=10; i++){
//     // let sum =0;
//     sum = sum + i;
//     // console.log(sum);
// }
// console.log(sum);

// // example 7 
for(let i=1; i <= numl; i++){
    if(i%2 ===0){
        console.log(i, " is even");
    }else{
        console.log(i, " is odd");
    }
}