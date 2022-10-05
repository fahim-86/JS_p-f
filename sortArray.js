//Function to sort array data

const names = [
    'Zack',
    'Bob',
    'Sally',
    'Fahim',
]

// sort comparing 'a' with 'b' using localeCompare() function
names.sort((a, b) => {
    return -a.localeCompare(b);
    //for descending order make first parameter negative "-a"
})

console.log(names);