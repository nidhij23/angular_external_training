//Functional Programming

//!!Function is a literal!!

//Concurrency /Async Programming /Call Back
//Deadlock -->called as callback hell in javascript terminology

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function passed to another funtion as paramter

// function add(a,b){
//     return a+b;
// }

// add(10,10);

// var x=10,y=10;//variables initialised which will be used only once and memory is being wasted
// add(x,y);//parameters passed which can be reused


function sayGreet(greet) {
    greet(); //This function will not show anything unless we use the variable to invoke the function
}

//Call sayGreet

//pattern1
var greetMe = function () {
    console.log('Greetings!');
}
sayGreet(greetMe);

//pattern2  !!Mostly recommeded pattern!!
sayGreet(function () {
    console.log('New Greetings!'); //here function written directly in the other function as paramter instead of passing through variable
})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///Rewriting the above code using Arrow functions
var sayGreet2 = greet => greet();

//pattern1
var greetMe2 = () => console.log('Greetings again');
sayGreet2(greetMe2);

//pattern2
sayGreet2(() => console.log('New greetings again'));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//passing functions with paramteres as argument in another function
function sayGreet3(greet) {
    //greet("Nidhi");
    var result = greet("Nidhi");  //the other case when return statement 
    console.log(result);
}

var greetMe3 = function (name) {
    //console.log("Greetings",name);
    return 'Greetings ' + name;
}
sayGreet3(greetMe3);
sayGreet3(function (name) {
    return "New Greetings " + name;

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//passing functions as parametrs in case of arrow functions
var sayGreet4 = greet => greet('Nidhi');
var greetMe4 = name => console.log('Greetings2', name);

sayGreet4(greetMe4);
sayGreet4((name) => console.log('New Greetings2', name));


var sayGreet5 = greet => {
    var result = greet("nidhi2"); //displaying the result by returning the value
    console.log(result);
    console.log(greet("neha"));
}
var greetMe5 = name => 'Gretings ' + name;
sayGreet5(greetMe5);
sayGreet5(name => 'Greetings ' + name);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//use typeof to check the type of the paramter passed
//typeof returns data type in strng format
//typeof-- 'number' ,'string' ,'function'

// function sayGreet6(whom,greet){
//     if(typeof greet ==='funtion'){

//     }
//     else{}
// }
// var greetMe6 
