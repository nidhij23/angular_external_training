/**
 * CallBack-->Dont call me now,call me now,delayed
 * callback has to be associated with an event whihc will call the program later and push it into the queue
 * 
 */

var add = (x, y) => {
    x = x || 0; //these logical opeartors are used to avoid using imperative if-else statements
    y = y || 0; //Logical OR
    return x + y;
};

console.log(`the result is ${add(10, 20)}`);//passing 2 arguments
console.log(`the result is ${add(10)}`); //passing only 1 argument makes the otehr argument be recognsed as undefined which gives NaN as result

//Caching in browsers uses Logical OR,,if object exists then use it else create new object

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ES6 defines default parameter
var add2=(x=1,y=1)=>{
    return x+y;
    
}
console.log(`The result is ${add2(10)}`);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Boiler Plater code-->Code that is required by the program to run but need not be written by the developer

