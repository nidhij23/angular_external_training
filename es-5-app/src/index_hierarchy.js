//Hierarchy

//has-a relationship
//is-a relationship

//has-relationship
function Employee() {

    var salary = 1000; //usng var inside a class makes that variable as private
    this.id = 1;
    this.name = "Nidhi";
    this.location = "Noida";
    this.address=new Address

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
console.log(`Calculated tax is ${employee.calculateTax}`);//private variables and functions cannot be accessed 
console.log(`Sector is ${employee.address.sector}`);


//IOC(Inversion of Control) will simplify this relationship

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// is-a relationship