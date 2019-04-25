// CODE here for your Lambda Classes

//Person Class
class Person {
    constructor(info) {
        //Props
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
        }
        //Methods
        speak() {
            return `Hello my name is ${this.name}, I am from ${this.location}.`;
        }
}

const taylor = new Person({
    name: 'Taylor',
    age: 24,
    location: 'Atlanta',
    gender: 'Female'
});

const ian = new Person({
    name: 'Ian',
    age: 31,
    location: 'Atlanta',
    gender: 'Male'
});

const xavier = new Person({
    name: 'Xavier',
    age: 18,
    location: 'Stone Mountain',
    gender: 'Male'
});

console.log(taylor.speak());
console.log(ian.speak());
console.log(xavier.speak());