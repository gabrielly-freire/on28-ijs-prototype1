
let employee1 = {};
employee1.id = 2;
employee1.firstName = 'maria';
employee1.lastName = 'joana';
employee1.salary = 1500.0;
employee1.raiseSalary = function raiseSalary(percent){
    this.salary += this.salary*(percent/100);
    return this.salary;
}

let employee2 = {};
employee2.id = 1;
employee2.firstName = 'gabrielly';
employee2.lastName = 'freire';
employee2.salary = 1000.0;
employee2.raiseSalary = function raiseSalary(percent){
    this.salary += this.salary*(percent/100);
    return this.salary;
}

console.log(employee1.id);
console.log(employee1.firstName);
console.log(employee1.lastName);
console.log(employee1.salary);
console.log(employee1.raiseSalary(10));

console.log(employee2.id);
console.log(employee2.firstName);
console.log(employee2.lastName);
console.log(employee2.salary);
console.log(employee2.raiseSalary(15));
