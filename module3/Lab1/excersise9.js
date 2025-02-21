// Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = teamSports;  //declare variable

moreSports.push('golf', 'tennis'); //add more sports into array
moreSports.unshift('Cricket');   //move cricket to front of array
           //should result in [ 'Cricket', 'Hockey', 'Cricket', 'Volleyball', 'golf', 'tennis' ]


let dog2 = dog1;

dog2 = {name: 'Fido', breed: 'Labrador'};



let cat2 = cat1;

cat2.name = 'Tabby';

let Cat2Independent = {...cat1};  //using a spread preserves the original value 
Cat2Independent.name= 'Mittens';

let moreSportsIndependent = [...teamSports]; //using a spread preserves the original value and then pushing new values leaves it unchanged
moreSportsIndependent.push('golf');
moreSportsIndependent.unshift('golf');




console.log(cat2);
console.log(dog2);
console.log(moreSports);
console.log(moreSportsIndependent)
console.log(Cat2Independent)

console.log(teamSports); 
console.log(dog1);
console.log(cat1);
