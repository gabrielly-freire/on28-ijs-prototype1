const parent = {
    name: 'maria',
    age: 50,
    heritage: 'brasileira'
}

const child = Object.create(parent);
child.name = 'luara',
child.age = 28;

console.log(parent)