// Create a hidden property of an Object
const obj = {
    name: "Fahim",
    prof: "Software Engineer"
}

Object.defineProperty(obj, 'spec', {
    enumerable: false,
    value: "Always confused"
})
console.log(obj);