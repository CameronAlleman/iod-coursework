const phoneBookABC = new Map() //an empty map to begin with 
        phoneBookABC.set('Annabelle', '0412312343');
        phoneBookABC.set('Barry', '0433221117') ;
        phoneBookABC.set('Caroline', '0455221182');


const phoneBookDEF = new Map()
        phoneBookDEF.set('Daniel', '1234567890');
        phoneBookDEF.set('Eve', '9876543210');
        phoneBookDEF.set('Frank', '7896543218');


 phoneBookABC.set('Caroline', '5679876542');

 console.log(phoneBookABC);
 console.log(phoneBookDEF);

function printPhoneBook(contacts) {
    contacts.forEach((phone, name) => {
        console.log(`${name} : ${phone}`);
    })
}

const phonebook = new Map([...phoneBookABC, ...phoneBookDEF]);
console.log(phonebook);