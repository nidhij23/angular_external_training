//let and const
/**
 * Scope:the visibility of variable
 * 1.Global
 * 2.Local
 * 3.Block
 * 4.Object
 * 
 */
var name="Nidhi";
function sayHello(){
    console.log(`Hello`,name);
}

function sayHi(){
    console.log(`hi`,name);
}
sayHi();
sayHello();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Implementing block scope
function display(myname){
    if(myname){
        var message='Welcome'+myname;
    }
    else return message;
}
console.log(`${display()}`);//this will result undefined and will result in hoisting

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function display2(myname){
    if(myname){
       // var message='Welcome'+myname;
       let message='Welcome'+myname;
    }
    else return message;
}
console.log(`${display2()}`);//this will not result undefined but throw an error..This prevents hoisting