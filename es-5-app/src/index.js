//Component simulation--->how does the component works

function printEmployee(emp){
    console.log(emp.name);
}

function Employee(){
    this.name="Nidhi";
}

var employee=new Employee();
var employee2={name:'esha'};
printEmployee(employee);
printEmployee(employee2);
printEmployee({name:'Neha'});

function Component(config){
    console.log(config);
}

Component({template:'test'})
// //using const
// const pi=3.14;
// pi=4.5
// console.log(pi);



