const today = new Date(); 
console.log('Current time is ' + today.toLocaleTimeString()) 
console.log(today.getHours() + ' hours have passed so far today') 

const totalMinutes = today.getHours() * 60 + today.getMinutes();
console.log(totalMinutes + ' minutes have passed so far today');

const totalSeconds = (today.getHours() * 60 + today.getMinutes()) * 60 + today.getSeconds();
console.log(totalSeconds + ' seconds have passed so far today');

const birthday = new Date('1992-12-12');

function ageCalculator(birthday) {
    const now = new Date();
    let years = now.getFullYear() - birthday.getFullYear();
    let months =   birthday.getMonth() - now.getMonth();
    let days =  birthday.getDate()-now.getDate();

    return `I am ${years} years, ${months} months, and ${days} days old`;
}

console.log(ageCalculator(birthday));


function daysInBetween(date1, date2) {
    const first = new Date(date1);
    const second = new Date(date2);
    const oneDay = 1000 * 60 * 60 * 24; //calculate ms to days
    const diffInTime = Math.abs(first - second);
    const diffInDay = Math.ceil(diffInTime / oneDay);

    return `There are days ${diffInDay} between ${first} and ${second}; `

}

console.log(daysInBetween('1992-12-12', '1989-12-23'));