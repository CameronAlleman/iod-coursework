// Which of the below are not giving the right answer? Why are they not correct? How can we fix them?


let three = "3"
let four = "4"
let thirty = "30"

what is the value of the following expressions?

let addition = three + four
//this equals 34, in order to fix the equation the strings would need to be converted to numbers first. the + sign concatenates strings

let multiplication = three * four
// equals 12
let division = three / four
// equals .75
let subtraction = three - four
//equals -1
let lessThan1 = three < four
//true
let lessThan2 = thirty < four
//false 30 < 4 is not true if you are comparing strings it would be correct. let lessThan2 = "three" < "four";