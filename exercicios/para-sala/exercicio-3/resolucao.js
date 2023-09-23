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
    employee.benefits = [];


    employee.raiseSalary = function raiseSalary(percent){
        this.salary += this.salary*(percent/100);
        return this.salary;
    }


    employee.addBenefits = function addBenefits(benefit){
        this.benefits.push(benefit);
        console.log(`O benefício ${benefit} foi adicionado ao funcionário`);
    }


    // fazer validacao se não for encontrado benefício
    // employee.removeBenefits = function removeBenefits(benefit){
    //     for (let i = 0; i < this.benefits.length; i++) {        
    //         if(this.benefits[i] = benefit){
    //             this.benefits.splice(i, 1);
    //             console.log(`O benefíco ${benefit} foi removido`);
    //             break;
    //         }  
    //     }  
    // }

    function removeBenefits(benefit) {
        let index = this.benefits.indexOf(benefit);
    
        if(index !== -1) {
            this.benefits.splice(index,1)
            console.log(`O benefíco ${benefit} foi removido`)
        } else {
            console.log(`O benefício ${benefit} não é um benefício válido`)
        }
    }

    employee.listBenefits = function listBenefits(){
        // this.benefits.forEach(element => {
        //     console.log(element);
        // });
        console.log(`Os benefícios desse funcionário são ${this.benefits}`);

    }

    return employee;
}

// employee1 = Employee('gabrielly', 'freire', 1000.0);
// employee2 = Employee('maria', 'joana', 1500.0);


module.exports = {Employee}