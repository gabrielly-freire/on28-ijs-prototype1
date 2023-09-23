const crypto = require('crypto');

function generateId(){
    const crypto = require('crypto');
    const id = crypto.randomUUID();

    return id;
}

const employeeMethods = {
    raiseSalary: function raiseSalary(percent){
        this.salary += this.salary*(percent/100);
        return this.salary;
    },

    addBenefits: function addBenefits(benefit){
        this.benefits.push(benefit);
        console.log(`O benefício ${benefit} foi adicionado ao funcionário`);
    },

    removeBenefits: function removeBenefits(benefit) {
        let index = this.benefits.indexOf(benefit);
    
        if(index !== -1) {
            this.benefits.splice(index,1)
            console.log(`O benefíco ${benefit} foi removido`)
        } else {
            console.log(`O benefício ${benefit} não é um benefício válido`)
        }
    },

    listBenefits: function listBenefits(){
        // this.benefits.forEach(element => {
        //     console.log(element);
        // });
        console.log(`Os benefícios desse funcionário são ${this.benefits}`);
    }

}

function Employee(firstName, lastName, salary){
    let employee = {};

    employee.id = generateId();
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.benefits = [];


    employee.raiseSalary = employeeMethods.raiseSalary;
    employee.addBenefits = employeeMethods.addBenefits;
    employee.removeBenefits = employeeMethods.removeBenefits;
    employee.listBenefits = employeeMethods.listBenefits;

    return employee;
}

module.exports = {Employee}