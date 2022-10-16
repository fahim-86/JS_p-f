const person = {
    "name": "Fahim",
    "surname": "Morshed"
}

// Save above JSON data in Browser local storage
let personAsString = JSON.stringify(person);
localStorage.setItem('person', personAsString);

// on a different page get person data from Local Storage
personAsString = localStorage.getItem('person');
const personAsObject = JSON.parse(personAsString);
console.log(personAsObject);