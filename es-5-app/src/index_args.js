//Function args and 

function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello("Nidhi");

 var hello=function(name){
     console.log("Hello",name);
 }
 hello("Neha");

 var hi =(name)=>console.log(`Hello ${name}`); // one paramter in braces
 hi("esha");

 var hi2 = name=>console.log(`Hello ${name}`); //braces can be skipped in case there is only one paramter
 hi2("matthew");

 var multiLine= name=>{ //in case of multiple lines of function
     console.log("line 1");
     console.log("Line 2");
     console.log(`Hello ${name}`);
 }
 multiLine("Again Nidhi");

 var hello2 = (name1,name2)=>{
     console.log("hi",name1);
     console.log("hi",name2);

 }
 hello2("nidhi","neha");