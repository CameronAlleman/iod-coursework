 //result of function should return a + b
 function sum(a, b) {
   let result = a + b;
   console.log (result)
   return result;
}

//test should return 6, if not it will error
if (sum(2,4) != 6) {error}

if (sum(0,2) != 2) {error}



function subtract(a, b) {
    let result2 = a - b;
    console.log (result2)
    return result2;
}
//test should return 4, if not it will error
if (subtract(8,4) !=4) {error}

function multiply(a, b) {
    let result3 = a * b;
    console.log(result3)
    return result3;
}

//test product should be 15
if (multiply(3,5) != 15) {error}

function divide(a, b) {
    let result4 = a / b;
    console.log(result4)
    return result4;
}

//test divide answer should be 5
if(divide(15,3) != 5) {error}


function Greet(name) {
    let result5 = "Hello" + name;
    console.log(result5);
    return result5;
}

//example
Greet("Cameron"); // Output: Hello Cameron








function hello(name) {
    let message = "Hello" + name;
    console.log(message);
}
hello("cameron");