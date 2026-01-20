//Data types:
// Two types of data 
// 1. primitive data types
// copy --> real velue 
let a = 25;
let b = a;
//types : string, number, boolern, null, undefined, symbol , bright
// string : 
// '' - single quoutes
// " " - dobule quoutes 
// `` - backticks
let d = "name"
d = 'username'
d = `firstname`

// number :
let e = 12 ;
e = 12.25 ;
e = -25 ;

// boolean :
let f = true;
f = false;

//null:
// you give a value
let g = null;

// undefined:
// you don't give a value, by defualt value
let h; 
// symbol :
// unique immutable value
let u1 = Symbol ("uid")
let u2 = Symbol ("uid")
// check u1===u2
let obj = { uid: 1, name: "test", email : "test@test.com"}
let u3 = "uid";
let u4 = Symbol("uid");
// obj[u3] - "001";
// bigint :
// cheak range of number , number. max_safe_integer
let number = 9007199254740991;
number = number + 6;
let num2 = 900719925470991n;
num2 + 4n;

// 2. non primitive data types (Reference data types) {},[], ()
// copy --> give refrence of parent
let temp_d = [1, 2, 3];
let temp_e = temp_d;
// types : arrays [], objercts {}, functions ()
let temp_array = ["user1", "user2", "user3"];
let temp_obj = { name: "test" , age: 9, phone_number : 558998554 };
let profiles = [
    { name:"test1", age: 10 , phone_number : 989805256447  },
    { name:"test2", age: 15 , phone_number : 989805256447  },
    { name:"test3", age: 9 , phone_number : 989805256447  },
] ;
function name (params) {}

//dynamic typing 
let u_name = "username";
u_name = 123;
u_name = {};
// javascript --> typescript

// typeof quirks
// typeof 12
// check type of variable use --> ex. typeof NaN, typeof null, 1 + "1", 1 == "1", 1==="1"
// why typeof NaN --> number
//NaN is a failed number oprations that why that type is number
// ex. "hello" - 5 --> NaN 

// type coeration 
// "5" + 1 // + --> value add and coeration(mix)
// "5" - 1 

// Truthy vs Falsy values
// 0, false, "" , null, undefined , NaN, document.all, -- false
// ex. !!0 -- check value is true and false
// ex. if(null){}, js convert it into false
// ex. if(-1){}, js convert it into true
// all --> true
