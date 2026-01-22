// control flow statements in Javascript

// IF-Else statement (if, if else, if else-if else)
// if (condition) {} --> condition true hoy to {} code run 
if (12 < 13) {
    console.log (true);
}

if (15<13) {
    console.log (true);
}

if (!12) {
    console.log ("number");
}

if (!0)  {
    console.log ("number");
}



// if-else statement
if (12 < 13) {
    console.log (true);
} else {
    console.log (false);
}

if (15<13) {
    console.log (true);
}else  {
    console.log (false);
}

if (!12) {
    console.log ("number");
}else {
    console.log ("not a number");
}

if (!0)  {
    console.log ("number");
}else {
    console.log ("not a number");
}



let loggedin = true;
let admin = false;
if (loggedin && admin) {
    console.log("welcome to home");
}else if (loggedin) {
    console.log("welcome user");
}else {
    console.log ("go to login page");
}

// switch case statement
switch ("blackfriday") // value --> case value sathe match karshe ane code run thase

 {
    case "first50":
        console.log("50% off 0n first order");
        break;
    case "BOGO":
        console.log("buy one get one");
       break;
       case "blackfriday":
        console.log("it's black friday sale - get at rs. 50");
        break;
        default:
            console.log("offer not vaild");  
 }

 // Early return pattern
 function score(value){
    if (value > 90){
        return "value is more than 90";
    } else if (value < 80) {
        return "value is less than 80";
    }else if (value < 70){
        return"value is less than 70";
    } else if (value < 60){
        return "value is less than 60";
    } else {
        return "value is less than 60";
    }
 }
  score(100);
  // console. log (score(100))

  function score1(value){
    if (value > 90) return "value is more than 90";
    else if (value < 80) return "value is less than 80";
    else if (value < 70) return "value is less than 70";
    else if (value < 60) return "value is less than 60";
    else return "value is less than 60";
  }

  function score2(value){
    if (value > 60) return "value is more than 60";
    else if (value < 70) return "value is less than 70";
    else if (value < 80) return "value is less than 80";
    else if (value < 90) return "value is less than 90";
    else return "value is less than 90";
  }

  function score3(value){
    if (value > 100) return "value is more than 100";
    else if (value > 110) return "value is less than 110";
    else if (value > 120) return "value is less than 120";
    else if (value > 130) return "value is less than 130";
    else return "value is less than 60";
  }


//Example 1 
let x = 2;
switch(x){
    case 2:
    console.log("Two");
    break;
    case 3:
    console.log("Three");
    break;
}


//Example 2
function getGrade(score){
if ( score > 90 && score < 100) return "A+";
else if (score > 80 && score < 89) return "A";
else if (score > 70 && score < 79) return "B";
else if (score > 60 && score < 69) return "C";
else if (score > 33 && score < 59) return "D";
else if (score > 0 && score < 32) return "Fail";
}


//Example 3 
function rps(user, computer){
  if (user === "rock" && computer === "scissor") return "user wins";
  if (user === "scissor" && computer === "paper") return "user wins";
  if (user === "paper" && computer === "rock") return "user wins";
  if (user === "paper" && computer === "scissor") return "computer wins";
  if (user === "scissor" && computer === "rock") return "computer wins";
  if (user === "paper" && computer === "scissor") return "computer wins"
  else return "tie";
}

