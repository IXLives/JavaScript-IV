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

//Instructors
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


//Student Class
class Student extends Person{
    constructor(studInfo) {
        super(studInfo);
        this.previousBackground = studInfo.previousBackground;
        this.className = studInfo.className;
        this.favSubjects = studInfo.favSubjects;
    }

    listsSubjects(){
        // This feels wrong/too easy. Tried a .foreach() but it returned undefined
        // this.favSubjects.forEach(function(subject){
        //    return subject;
        // });
        return this.favSubjects;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

//Students
const neil = new Student ({
    name: 'Neil',
    age: 50,
    location: 'Observatory',
    gender: 'Male',
    previousBackground: 'Astronomer',
    className: 'WEB FT 1',
    favSubjects: ['HTML', 'CSS', 'JS']
});

const carl = new Student ({
    name: 'Carl',
    age: 70,
    location: 'Cosmos',
    gender: 'Male',
    previousBackground: 'SkyWalker',
    className: 'Stargazing 101',
    favSubjects: ['Astronomy', 'Astrology', 'Cosmology']
});

const bill = new Student ({
    name: 'Bill',
    age: 50,
    location: 'Microsoft',
    gender: 'Male',
    previousBackground: 'CEO',
    className: 'Monopoly',
    favSubjects: ['Programming', 'Hardware Design', 'Software Design']
});


/* 
// --- Instructor Testing / demo
console.log(taylor.demo('Semantic Markup'));
console.log(ian.demo('Intensive Programming'));
console.log(xavier.demo('Charlie Work.'));

// --- Instructor testing / grade
console.log(taylor.grade(neil, 'HTML'));
console.log(ian.grade(carl, 'Astronomy'));
console.log(xavier.grade(bill, 'Programming'));

// --- Student testing / listsSubjects
console.log(neil.listsSubjects());
console.log(carl.listsSubjects());
console.log(bill.listsSubjects());
// -- Student testing PRAssignment
console.log(neil.PRAssignment('HTML'));
console.log(carl.PRAssignment('Astronomy'));
console.log(bill.PRAssignment('Programming'));
// -- Student testing sprintChallenge
console.log(neil.sprintChallenge('HTML'));
console.log(carl.sprintChallenge('Astronomy'));
console.log(bill.sprintChallenge('Programming'));
*/
