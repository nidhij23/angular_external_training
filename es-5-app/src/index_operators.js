//Operators

function testPlus() {
    var x = 10, y = 20;
    var result = x + y;
    console.log(`The result is${result}`); //addition
    var price = '$' + 100;
    console.log(`The result is ${price}`);//concantenation

    //conversion -- string to number
    var cResult = +"10" * "2";
    console.log(`The result is ${cResult}`)
    var wrongResult = +"test" * +"2";
    console.log("The wring result", wrongResult);
    var wrongResult1 = parseInt("test") * 10;
    console.log("The result is", wrongResult1);
    var cResult1 = parseInt(10) * 10;
    console.log("The result is", cResult1)
}



function testEqual() {
    var x = 10;
    var y = 20;
    var result = x === y;
    console.log(`the result is ${result}`);
}

function testAndOr() {
    var x = true;
    var y = false;
    var rAnd = x && y;
    console.log(rAnd);
    var rOr=x ||y;
    console.log('The Or result',rOr);

    var r = "nidhi" && 10;
    var name;
    console.log(`the && result is `, r);//important one 
    var orResult=name ||'nidhi';
    console.log("the result",orResult);
    if(name) console.log('hi')
    else console.log("hello");

}
testPlus();
testEqual();
testAndOr();