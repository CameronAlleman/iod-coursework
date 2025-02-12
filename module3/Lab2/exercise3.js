const animals = ['Tiger', 'Giraffe'] 

animals.push('Lion', 'Elephant'); //part a add two animals to end of array

console.log(animals);

animals.unshift("Crocodile", "Buffalo"); // part b add two animals to beginning of array

console.log(animals);

animals.sort();// part c sort array alphabetically

console.log(animals);

animals.splice(2, 1, "Snake") // part d replaces elephant with snake
     

console.log(animals)

function findMatchingAnimals(beginsWith) {    // part e   find any array interation using the first letter regardless of case
   
    return animals.filter(animal =>animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
}
    
console.log(findMatchingAnimals('s'));
console.log(findMatchingAnimals("G"));
