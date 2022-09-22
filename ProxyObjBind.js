const person = {
    age: 20,
    name: "Fahim"
}

const p = new Proxy(person, {
    set(target, key, value) {
        if (key === "age" && value < 0) {
            throw new Error('age must be positive');
        }
        target[key] = value;
    }
})

p.age = -15;
console.log(p.age);