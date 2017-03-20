

//return 
function getName(){
    return "Nidhi";
}
 var getAge=function(){
     return 35;
}
//call
console.log(`${getName()}`);
console.log(`${getAge()}`);

var getStockQuote=()=>10; //value can be returned without any return keyword;
console.log(`${getStockQuote()}`);

var getStockQuote2=()=>{
    console.log("multiple lines"); //in case multiple lines are used in the function the return keyword will have to be explicitly used
    return 10; 
}
console.log(`Returned ${getStockQuote2()}`); 

var returnSame =stockvalue=>stockvalue; // return the same value as passed
console.log(`returned same value ${returnSame(10)}`);