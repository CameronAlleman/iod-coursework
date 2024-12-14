const Sentiment = require('sentiment');

 const sentiment = new Sentiment();

 const result = sentiment.analyze('Dogs are awesome.');

 console.log(result);    // Score: -2, Comparative: -0.66

function sum(a, b){
  return a + b
}


function multiply(number1, number2) {
    return number1 * number2
}
const product = multiply(8, 5);

console.log(product)


const emptyScores = ["A+" , 95, "C-" , 55]  //this is an example of how to do an array


let mountains = ['Everest', 'Fuji', 'Nanga Parbat']; //array elements start at 0
console.log(mountains)[0]; // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat';


let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
 console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea' ]
 seas.push('Red Sea');
 console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]

 seas.unshift('Adriatic Sea'); //takes a lot longer, adds to front of list, takes longer to load 2 arrays
 console.log(seas); // [ 'Adriatic Sea', 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]

 let rivers = ['Mississippi', 'Amazon', 'Nile']; //how to remove from an array pop method
 let lastRiver = rivers.pop();
 console.log(lastRiver); // Nile
 console.log(rivers); // [ 'Mississippi', 'Amazon' ]

 let firstRiver = rivers.shift(); // remove element from beginning of an array
 console.log(firstRiver); // Mississippi
 console.log(rivers); // [ 'Amazon' 

 let volcanoes = [ 'Mount Vesuvius', 'Mount Etna', 'Mount Fuji' ];// finds the location of an element of an array
 let fujiIndex = volcanoes.indexOf('Mount Fuji');
 console.log(fujiIndex); // 2 (indexes start at 0)

 let numVolcanoes = volcanoes.length; // returns length of array elements
 console.log(numVolcanoes); // 3








