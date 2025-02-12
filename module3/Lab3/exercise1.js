function makeCounter(startFrom = 0, incrementBy = 1) { 
    let currentCount = startFrom; 
    let increment = incrementBy;
 
    return function() { 
        currentCount += increment; 
        console.log(currentCount) 
        return currentCount; 
    }; 
} 
 
let counter1 = makeCounter(); 
 
counter1(); // 1 
counter1(); // 2

let counter2 = makeCounter(10, 4);

counter2();  //stays independent from counter 1
counter2();



 