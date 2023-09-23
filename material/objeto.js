// forma de criar o objeto 1:
//let animal = {
//     type: 'cachorro',
//     name: 'Aslam',
//     age: 3,
//     hobbies: ['brincar', 'lati pra moro', 'comer'],
//     'can I have': true,
//     eat: funcion eat(){
//        console.log(`O animal chamado ${this.name} está comendo`);
//      }
// }

// forma de criar o objeto 2:

let animal = {}

animal.type = 'chachorro';
animal.name = 'Aslam';
animal.age = 3;
animal.hobbies = ['brincar', 'lati pra moro', 'comer'];
animal["can I have"] = true;
animal.eat = function eat(){
    console.log(`O animal chamado ${this.name} está comendo`);
}//pode criar no objeto a funcao ou passar uma funcao já existente.

// como acessar um objeto
console.log(animal.name);//quando tenta acessar propriedades que não existe returna underfine

animal.eat()
