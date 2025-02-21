function validateStringArg(fn) {
    return function(...args) {
        for (const arg of args) {
        if (typeof arg !== 'string') {
            throw new Error('Argument must be a string');
        }
    }
        return fn(...args);
    };
}



function orderItems(itemName) { 
    return `Order placed for: ${itemName.join(', ')}`; 
} 

// create a decorated version of the original function 
const validatedOrderItem = validateStringArg(orderItems); 
 
try {
    console.log(validatedOrderItems('Apple Watch', 'iPhone', 'MacBook')); // should run the function
    console.log(validatedOrderItems('Apple Watch', 123, 'MacBook')); // should throw an error
} catch (error) {
    console.error(error.message);
}