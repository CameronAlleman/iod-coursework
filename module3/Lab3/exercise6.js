Function.prototype.delay = function(ms) {
    let func = this;
    return function(...args) {
        setTimeout(() => func.apply(this, arguments), ms);
    };
   
}



function multiply(a, b, c, d) { 
    console.log( a * b * c * d); 
} 


multiply.delay(500)(5, 5 , 6, 9); // prints 25 after 500 milliseconds

