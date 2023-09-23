const crypto = require('crypto');

function generateId(){
    const crypto = require('crypto');
    const id = crypto.randomUUID();

    return id;
}

function Employee(firstName, lastName, salary){
    let employee = {};

    employee.id = generateId();
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;

    employee.raiseSalary = function raiseSalary(percent){
        this.salary += this.salary*(percent/100);
        return this.salary;
    }

    return employee;
}

// employee1 = Employee('gabrielly', 'freire', 1000.0);
// employee2 = Employee('maria', 'joana', 1500.0);


module.exports = {Employee}