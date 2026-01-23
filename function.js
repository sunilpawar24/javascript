// function
// what --> function is a block of code that performs a specific task.
// why --> to avoid code repetition and to make code modular and reusable.
// how --> function keyword,name, parameters, body, return statement

//type of function:
// function name (params) {} --> function declaration 
function abc() {}
// let fnc = function () {} --> function expression
let fnc = function () {};
// let fnc = () => {} --> arrow fiunction --> fat arrow function
let fnc1 = () => {};

function tempcart(){
    console.log("adding product");
}
tempcart();
tempcart();
tempcart();

// parameters vs arguments
// parameters are the names listed in the function definition (params --> () ni ander lakheli values)
// arguments are the real values passed to the function (args --> function call karti () ni ander lakheli (pass) kareli values)

function cartBtn(product) { // product -- parms 
    console.log("adding", product, "to cart");
 }
 cartBtn("dell leptop"); // dell leptop -- args
 cartBtn("apple 16");
 cartBtn("ps 5");

 function cartBtn_price(product, price) {
    console.log("adding", product, "to cart with", price);
 } 
 cartBtn_price("dell laptop", 50000);
 cartBtn_price("apple 16", 56000);
 cartBtn_price("ps 5", 60000);

 // convert into arrow funtion
 // let fnc = () => {}
let fnc_arrow = (product, price) => {
    console.log("adding", product, "to cart with", price)
};
fnc_arrow("dell laptop", 50000);
 fnc_arrow("apple 16", 56000);
 fnc_arrow("ps 5", 60000);