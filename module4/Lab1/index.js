function pullInputs() {
    const num1 = parseFloat(document.getElementById('input1').value); //value of input from box1
    const num2 = parseFloat(document.getElementById('input2').value); //value of input from box2
    const result = [num1, num2] //declare result variable
    
    return result; //result should be used in operator functions
    
    // return [num1, num2];
}

function add() {    
    const [num1, num2] = pullInputs();    
    document.getElementById('result').innerText = `${num1 + num2}`;
}

function subtract() {
    const [num1, num2] = pullInputs();
    document.getElementById('result').innerText = `${num1 - num2}`;
}

function multiply() {
    const [num1, num2] = pullInputs();
    document.getElementById('result').innerText = `${num1 * num2}`;
}

function divide() {
    const [num1, num2] = pullInputs();
    document.getElementById('result').innerText = `${num1 / num2}`;
}

// function random() {
//     const num1 = document.getElementById('input1').innerText;
//     num1 = Math.ceil(Math.random()*(1 + 154898554352));
    
// }

function calculate() {
    const chosenoperator = document.querySelector('input[name="operator"]:checked').value;
        switch (chosenoperator) {
            case "+":
                add();
                break;
            case "-":
                subtract();
                break;
            case "*":
                multiply();
                break;
            case "/":
                divide();
                break;
            default:
                document.getElementById('result').innerText = 'Please Select an Operation'
                break;
        }
}

function clearCalculator() {
    document.getElementById('input1').innerText = 'Enter Number Here';
    document.getElementById('input2').innerText = 'Enter Number Here';
    document.getElementById('result').innerText = 'Results';

}