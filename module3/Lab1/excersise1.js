// What are the results of these expresssions? (answer first, then use console.log() to check)




// "" + 1 + 0   // + concatenates strings so 1 + 0 as a string comes to 10
// "" - 1 + 0   // - operator is for mathmatical expressions, cannot subract 1 from nothing. so result is -1+0= -1
// true + false // 1 + 0 = 1
// !true        // !  is an iverse operator. changing true to false
// 6 / "3"      // 6 is a numeric value converting the string to a number 6/3 = 2
// "2" * "3"    // two numeric values results in normal mathmatical operations = 6
// 4 + 5 + "px" // 4 + 5 = 9 which is concatenated with px resulting in 9px
// "$" + 4 + 5  // + operator concatenates so $45 since it begins as a string
// "4" - 2      // 2
// "4px" - 2    // NaN cannot subtract two from a string
// " -9 " + 5   //
// " -9 " - 5
// null + 1
// undefined + 1
// undefined == null
// undefined === null
// " \t \n" - 2

console.log("" + 1 + 0); //10
console.log("" - 1 + 0) //-1
console.log(true + false) //1
console.log(!true) // false
console.log(6 / "3") // 2
console.log("2" * "3") //6
console.log(4 + 5 + "px") // 9px
console.log("$" + 4 + 5) // $45
console.log("4" - 2) // 2
console.log("4px" - 2) // NaN
console.log(" -9 " + 5) //-95
console.log(" -9 " - 5) //-14
console.log(null + 1) //1
console.log(undefined + 1) //NaN
console.log(undefined == null) //true
console.log(undefined === null) //false
console.log(" \t \n" - 2) //-2