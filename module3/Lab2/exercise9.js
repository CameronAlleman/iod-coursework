let salaries = { 
    "Timothy" : 35000, 
    "David" : 25000, 
    "Mary" : 55000, 
    "Christina" : 75000, 
    "James" : 43000 
    };

function sumSalaries(salaries) {
    let total = 0;
    for(let salary of Object.values(salaries)) {
        total += salary;
    }
    return total
}
console.log(sumSalaries(salaries));

function topEarner (salaries) {
    let maxSalary = 0;
    let topsalaryName = '';
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary){
            maxSalary = salary;
            topsalaryName = name;
        }
    }
    return topsalaryName;
}

console.log(topEarner(salaries));