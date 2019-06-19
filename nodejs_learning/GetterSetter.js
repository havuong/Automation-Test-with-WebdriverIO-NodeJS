class Person {

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let bob = new Person();
bob.name = 'bob';
console.log(bob.name);

bob.name = 'Teo'
console.log(bob.name);