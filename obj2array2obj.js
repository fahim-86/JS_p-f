const obj = {
    name: "Fahim",
    age: 35
}

console.log(Object.entries(obj));

//Each array should have two elements
const array = [
    ["name", "Fahim"],
    ["profession", "Software Engineer"],
    ["age", 35]
]

console.log(Object.fromEntries(array));