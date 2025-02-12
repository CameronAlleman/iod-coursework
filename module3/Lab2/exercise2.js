function truncate(str, max) {    //this function uses max length 
    if (str.length > max)
    return (str.slice(0,max) + ("..."))
}

console.log(truncate('This text will be truncated if it is too long', 25))  //returns 'This text will be truncat...'



function truncate(str, max, suffix = "...") {  // this function uses a suffix concatenation after max length
    if (str.length > max)

        return str.slice(0, max) + suffix;
}

console.log(truncate('This text will be truncated if it is too long', 25)) //returns 'This text will be truncat...'


function truncate(str, max) {    //function truncates and makes sure no partial words are included
    const words = str.split(" ");
    if (words.length > max);
    return words.slice(0,max).join(" ") + "...";
}

console.log(truncate('This text will be truncated if it is too long', 25)) //returns 'This text will be truncat...'
