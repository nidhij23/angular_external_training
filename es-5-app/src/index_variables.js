//variables and types

//function declaration
function testVariable() {
    var id = 10; //number
    var name = "Nidhi";
    var location = 'Noida';
    var skill = `Angular 2.0`; //es 6 style
    var isWorking = true;
    var salary;
    var totalSalary = salary * 10;
    var avgSalary=1000/0;
    console.log('Name' + name); //es 5
    console.log("Id", id); //es 6
    console.log(`You are from ${location}`); //es 6
    console.log(`You are working ${isWorking}`)
    console.log("skills are",skill);


    console.log(`Salary: ${salary}`); //undefined
    console.log(`Total Salary is ${totalSalary}`) //NaN
    console.log(`Average salary ${avgSalary}`) //infinity
}

//function invocation
testVariable();