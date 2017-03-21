//Literal pattern of object creation
/**
 * No classes--no functions--Only object --Singleton-
 * create,use,destroy
 */

var customer = { //object has been created here

    //adding properties to the object
    id: 1,
    name: "nidhi",
    location: 'Noida',
    order: {
        orderId: 234,
        orderQuantity: 100,
        product: {
            name: "Nexus"
        }
    },
    calculateInvoice: function () {
        return 1000;
    },
    calculateSalary: () => { return 500; }
};
//Access properties of object
console.log(`Id:${customer.id}`);
console.log(`name : ${customer.name}`);
console.log(`Location : ${customer.location}`);
console.log(`Invoice : ${customer.calculateInvoice()}`);
console.log(`Salary is ${customer.calculateSalary()}`);
console.log(`Order ID : ${customer.order.orderId}`);
console.log(`Product is :${customer.order.product.name}`);//has-a relationship


