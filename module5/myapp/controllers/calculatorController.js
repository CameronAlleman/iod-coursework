const Calculator = 
require('../libraries/Calculator');
 let myCalc = new Calculator()
 
 

 


const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.add(number1,number2)
    // let sum = number1 + number2 
    console.log(sum) 
    res.status(200)
    res.json({result:sum}) 
}
// const mockRes = {
//     status: () => {},
//     json: () => {},
// }

const subtractNumbers = (req, res) => {
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let subtract = myCalc.subtract(number1,number2)
    // let subtract = number1 - number2
    console.log(subtract)
    res.status(200)
    res.json({result:subtract})
    }
const multiplyNumbers = (req, res) => {
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let multiply = myCalc.multiply(number1,number2)
    // let multiply = number1 * number2
    console.log(multiply)
    res.status(200)
    res.json({result:multiply})
    }
const divideNumbers = (req, res) => {
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let divide = myCalc.divide(number1,number2)
    // let divide = number1 / number2
    console.log(divide)
    res.status(200)
    res.json({result:divide})
    }
   


 module.exports = { //expects an object that is exported from this file
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
 }
