//Object ORientation and javascript
/**
 * JS functional object oriented language
 * JS CLass free oopl
 * Objects are dynamic
 *  
 * 7 principles of Object Oriented Programming->
 *   1.Abstraction,
 *   2.Encapsulation,
 *   3.Hierarchy(has-a,is-a),
 *   4.Type Theory(Polymorphism)[Not supported in JS]
 *   5.Modularity(OSGA)
 *   6.Concurrency
 *   7.Persistency(Storage)
 
 * 2 states of existence in programs:Active State(Objects) & Passive State(Functions)
 * 
 * How to create Object?
 * -->Constructor Pattern -Functions
 * -->Literal Pattern
 * -->ES 6 style class pattern
 */


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//create object
//declare class

//Constructor Pattern--factory pattern
//normal fucntion standard -verb or verb+noun
function sayHello() {

}

//Class
function Employee() {//function has a dual role and a function can be used to act as a class as well by using the keyword "new"
    //data + methods
    //"this" is a hidden variable for every object which is implicit 

    var salary = 1000; //usng var inside a class makes that variable as private
    this.id = 1;
    this.name = "Nidhi";
    this.location = "Noida";

    //methods
    this.getLocation = function () {
        //console.log(`${this.location}`);
        return this.location;
    }
    var calculateTax = function () {
        return salary * 10 / 100;
    }
    this.getSalary = function () {
        return salary- calculateTax();
    }

}

//invoke
sayHello();//pushed into stack
//new sayHello();
//Employee();//pushed into stack in this case
var employee = new Employee(); //pushed into Heap


//Object Accessing
console.log(`Id: ${employee.id}`);
console.log(`Name: ${employee.name}`);
console.log(`Location: ${employee.getLocation()}`);
console.log(`Salary is ${employee.salary}`);
console.log(`Calculated tax is ${employee.calculateTax}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var employee2 = null;//null means no valid literal and it will give null reference can also help totrigger nulll reference exception
employee2 = new Employee();
employee2.id = 9999; //  "=" initialise setters internally

console.log(`Id: ${employee2.id}`);
console.log(`Name: ${employee2.name}`);
console.log(`Location: ${employee2.getLocation()}`);


employee2 = new Employee();
employee2.id = 8888; //  "=" initialise setters internally

console.log(`Id: ${employee2.id}`);
console.log(`Name: ${employee2.name}`);
console.log(`Location: ${employee2.getLocation()}`);

