// Decimal number operations in JavaScript can lead to unexpected results, as in the 
// following: 
// let twentyCents = 0.20 
// let tenCents = 0.10 
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)  
// // 0.2 + 0.1 = 0.30000000000000004 
// We can sometimes avoid this using the toFixed function to force the number of decimal 
// places as below, but it’s not always useful: 
// let fixedTwenty = twentyCents.toFixed(2); 
// let fixedTen = tenCents.toFixed(2); 
// console.log(fixedTwenty + fixedTen) //why is this not working?

// let fixedTwenty = twentyCents.toFixed(2); 
// let fixedTen = tenCents.toFixed(2); 
// console.log(fixedTwenty + fixedTen) //why is this not working?

//  (a) the result of the code is 0.200.10, the strings are being concatenated instead of added together
// to make it work
// let twentyCents = 0.20
// let tenCents = 0.10
// let result = twentyCents + tenCents
// let roundedresult = result.toFixed(2);

function currencyAddition(float1, float2) {
    total = float1 + float2;
    return total.toFixed(2);
} 
console.log(currencyAddition(.20,.65))

function currencyOperation(float1, float2, operation) {
    let result;
        if (operation === '+'){
        result = float1 + float2;
        }else if (operation === '-'){
        result = float1 - float2;
        }else if (operation === "*"){
        result = float1 * float2;
        }else if (operation === "/"){
        result = float1 / float2;
    }
    return parseFloat(result.toFixed(10));
}

console.log(currencyOperation(2,4,"*"))
console.log(currencyOperation(3,6,"+"))
console.log(currencyOperation(3,6,"-"))
console.log(currencyOperation(5,3,"/"))