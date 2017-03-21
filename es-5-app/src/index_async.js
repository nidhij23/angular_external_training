/*Asynchronous Programming
Javascript runtime-->in every browser 
Runtime representation of any function is frame as it is pushed to stack

3 sections of any Program:
    1.Stack
    2.Heap
    3.Program Data(PD)

In Javascript--> Event Loop and Event Queue(for Concurrency)
Event works of queue pattern

Event Loop->Is a daemon program
Event Queue->

Synchronous pattern->Once a function is called,it is pushed into the stack immediately
Asynchronous pattern->function is not immediately pushed to the stack,they live in a queue and it will be pushed into the stack when a paricular event will be called(Event Driven Programming)

Types of Events

 1.UI Events -->Mouse Events ,Keyboard Events,Touch Events
 2.Timer Events -->setTimeout, SetInterval
 3.IO Events --> Network IO/Sockets -ajax

*/
var sayGreet=greet=>{
    //syn
    greet();//During run-time the process is pushed into stack--Stack Frame
}
sayGreet(()=>console.log('Greetings')); //async-->the function is pushed onto the event queue by the event loop in case of the occurence of event
/*Behaviour of function during run-time

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var sayGreet2=greet=>{
    //async
    //greet is pushed to the event Queue---Listening---afer 5000ms---event is triggered--event loop --push into event stack --Stack Frame

    setTimeout(()=>greet(),5000);
    setTimeout(()=>greet(),10000);

}
sayGreet2(()=>console.log('Greetings'));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * CallBAck Hell-When the asynchronous functions are not managed ,so Promises design pattern was developed
 */


