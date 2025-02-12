let car = { 
    make: "Porsche", 
    model: '911', 
    year: 1964, 
     
        description() { 
            console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); 
        } 
    }; 
     
    car.description(); //works 
     
    setTimeout(car.description.bind(car), 1200); // using bind it copies original object to the function


let clonedCar = {...car, year: 2020};



console.log(car);
console.log(clonedCar);


//c. it retains the values of the original array. the new array is a different reference

let clonedCar2 = {...car, model: 1911};

console.log(clonedCar2); // setTimeout is nested within the array so it retains the values known to it locally