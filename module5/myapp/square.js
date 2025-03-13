function square(a) {
    return a * a;
   }

function squareRoot(number) {
    if (typeof number === 'string'){
        throw Error('Parameter must be a number!');
    }

return Math.sqrt(number) 
}



module.exports = {
    square,
    squareRoot,
   };

