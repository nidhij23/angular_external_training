/**
 * ES 6 style pattern of object creation
 * 
 */

class Employee {
    id = 1;
    //name = 'Nidhi';
    calculateSalary(){
        return 1000;
    }
    constructor(){
        this.name="nidhi";
    }
}

var employee=new Employee();
console.log(`Id : ${employee.id}`);
console.log(`Name : ${employee.name}`);
console.log(`Salary is ${employee.calculateSalary()}`);