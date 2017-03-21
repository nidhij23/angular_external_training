///Object Augmention

///Object can be dynamic
//new property can be added to a object during runtime in form of new variable or function


/**
 * $scope  in Angular 1 is a variable /meta object is use dto augment data
 * $scope.username=something is adding a new property to the existing object
 * 
 * Every javascript object is a key-value map
 */




function Employee() {

    var salary = 1000; //usng var inside a class makes that variable as private
    this.id = 1;
    this.name = "Nidhi";
    this.location = "Noida";
    this.address=new Address();

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
    function Address(){
        this.sector="135";
    }

}
var employee = new Employee();

console.log(`Id: ${employee.id}`);
console.log(`Name: ${employee.name}`);
console.log(`Location: ${employee.getLocation()}`);
console.log(`Salary is ${employee.salary}`);
console.log(`Calculated tax is ${employee.calculateTax}`);
console.log(`Sector is ${employee.address.sector}`);

//augmenting a new property
employee.age=35;
employee.name="Neha";
console.log(`Age is ${employee.age}`);
console.log(`Name is ${employee.name}`);

//add or update formula
//Js engine checks if there already exists that property..if not ,creates the new property else updates the property

// !! Go and find the below
//how to prevent augmentation of object in javascript? 
//how to delete properties and how to iterate properties in Javascript
