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
        this.favSubjects.forEach(function(subject){
            console.log(subject);
        });
        //return this.favSubjects;
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

//Project Manager Class
class ProjectManager extends Instructor {
    constructor (PMinfo) {
        super(PMinfo);
        this.gradClassName = PMinfo.gradClassName;
        this.favInstructor = PMinfo.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}


// Project Managers
const link = new ProjectManager({
    name: 'Link',
    age: 9000,
    location: 'Hyrule',
    gender: 'Male',
    specialty: 'Heroism',
    favLanguage: 'Sheikah',
    catchPhrase: "...", // Link doesn't talk
    gradClassName: 'Monopoly',
    favInstructor: ian
});

const zelda = new ProjectManager({
    name: 'Zelda',
    age: 9000,
    location: 'Hyrule',
    gender: 'Female',
    specialty: 'Princessery',
    favLanguage: 'Sheikah',
    catchPhrase: "It's dangerous to go alone, take this!",
    gradClassName: 'Stargazing 101',
    favInstructor: taylor
});

const ganon = new ProjectManager({
    name: 'Ganondorf',
    age: 4500,
    location: 'Lowrule',
    gender: 'Male',
    specialty: 'Villainy',
    favLanguage: 'Sheikah',
    catchPhrase: "I will cover the world in Darkness",
    gradClassName: 'Web FT 1',
    favInstructor: xavier
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

// --- PM Testing
console.log(link.standUp('Web PT 99'));
console.log(ganon.debugsCode(carl, 'Astronomy'));
console.log(zelda.standUp('Help!'));
*/

