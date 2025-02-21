
// Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.


function getGreeting(name) {  //function decleration
    return 'Hello ' + name + '!';}

const getGreeting = function(name) {   //function expression
    return 'Hello ' + name + '!';
}

const getGreeting = (name) => { //arrow function
    return 'Hello' + name + "!";
}
    
console.log(getGreeting('Bob'));