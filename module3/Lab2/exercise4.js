function camelCase(cssProp) {
    return cssProp.split('-').map((word, index) => {   //.map establishes that each word is indexed
        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)    // if 0 is true, return word : false, uppercase first letter then concatenate string back together
        }).join('');
      
}


console.log(camelCase('margin-left')) // marginLeft 
console.log(camelCase('background-image')) // backgroundImage 
console.log(camelCase('display')) // display



function camelCaseb(cssProp) {
    let words = cssProp.split("-");
    for( i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].splice(1)
    }
    words.join("")
}

console.log(camelCase('margin-right')) // marginRight 
console.log(camelCase('background-image')) // backgroundImage 
console.log(camelCase('display')) // display

function camelCasec(cssProp) {
    let words = cssProp.split("-");
    let result = words[0];
    for ( let word of words.slice(1)) {
        result += word.charAt(0).toUpperCase() + word.slice(1);
    }
    return result;
}

console.log(camelCase('margin-right')) // marginRight 
console.log(camelCase('background-image')) // backgroundImage 
console.log(camelCase('display')) // display
