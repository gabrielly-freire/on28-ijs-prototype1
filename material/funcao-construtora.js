function Animal(type, name, age){
    let animal = {}

    animal.type = type;
    animal.name = name;
    animal.age = age;

    animal.eat = function eat(){
        console.log(`O animal chamado ${this.name} está comendo`);
    }

    return animal;
}

const animal1 = Animal('cachorro', 'Aslam', 5);
console.log(animal1);
animal1.eat();

const animal2 = Animal('gato', 'pipoca', 2);
console.log(animal1);
animal2.eat();
