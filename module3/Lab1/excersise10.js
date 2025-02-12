// The following constructor function creates a new Person object with the given name and 
// age values. 
// a) Create a new person using the constructor function and store it in a variable 
// b) Create a second person using different name and age values and store it in a separate 
// variable 
// c) Print out the properties of each person object to the console  
// d) Rewrite the constructor function as a class called PersonClass and use it to create a 
// third person using different name and age values. Print it to the console as well. 
// e) Add a canDrive method to both the constructor function and the class that returns true 
// if the person is old enough to drive. 


function Person(name, age) { 

    this.name = name; 

    this.age = age; 

    this.human = true; 
}

let user1 = new Person('Joe Smith', 34);
console.log(user1);

let user2 = new Person('Bob Boudreaux', 47);
console.log(user2);

class PersonClass {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    canDrive() {
        return this.age >= 18
    }
}

let user3 = new PersonClass('Tom Thibodeaux', 12);

console.log(user3);
console.log(user3.canDrive());