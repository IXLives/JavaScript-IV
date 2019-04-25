// CODE here for your Lambda Classes

//Person Class
class Person {
    constructor(persInfo) {
        //Props
        this.name = persInfo.name;
        this.age = persInfo.age;
        this.location = persInfo.location;
        this.gender = persInfo.gender;
        }
        //Methods
        speak() {
            return `Hello my name is ${this.name}, I am from ${this.location}.`;
        }
}

/* --- Person class testing
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
*/


//Instructor Class
class Instructor extends Person{
    constructor(instrInfo){
        //Props
        super(instrInfo);
        this.specialty = instrInfo.specialty;
        this.favLanguage = instrInfo.favLanguage;
        this.catchPhrase = instrInfo.catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

const taylor = new Instructor({
    name: 'Taylor',
    age: 24,
    location: 'Atlanta',
    gender: 'Female',
    specialty: 'Semantic Styling',
    favLanguage: 'HTML',
    catchPhrase: "If it's well written, it's easy to read."
});

const ian = new Instructor({
    name: 'Ian',
    age: 31,
    location: 'Atlanta',
    gender: 'Male',
    specialty: 'Programming',
    favLanguage: 'JavaScript',
    catchPhrase: "I am one with the machine."
});

const xavier = new Instructor({
    name: 'Xavier',
    age: 18,
    location: 'Stone Mountain',
    gender: 'Male',
    specialty: 'Creative Solutions',
    favLanguage: 'English',
    catchPhrase: "Wildcard, baby!"
});

console.log(taylor.demo('Semantic Markup'));
console.log(ian.demo('Intensive Programming'));
console.log(xavier.demo('Charlie Work.'));