
// console.log(ucFirstLetters("los angeles") ) //Los Angeles

function ufFirstLetters(inputstring) {
    let words= inputstring.split(" ");
    for (i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);

    }
    return words.join(" ");
}
console.log(ufFirstLetters("los angeles"));
console.log(ufFirstLetters("san antonio"));
console.log(ufFirstLetters("cinco de mayo"));
console.log(ufFirstLetters("the bear went through the woods"))