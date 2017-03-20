//function ca be assigned a value and that value can be used for invocation

//function declaration

//Function declaration flavors

//flavour1
function sayHello() {
    console.log('Hello');
}
//invoke function
sayHello();






//flavour2
/**
 * Function can be assignec to variable- fucntion as literal 
 * that variable can be called as a funcntio later
 */

//2.1
function sayHi() {
    console.log("Hi");
}
var hi = sayHi;
hi();

//2.2
var greet = function sayGreet() {
    console.log("Greet");//if fucntion is displayed in oneline,it is called as inline function
}
greet();

//2.3
var welcome = function () {  //differnt from 2.2 because of absence of name as the name had no meaning and output is same,also called anonymous function
    console.log("Welcome");
}
welcome();

