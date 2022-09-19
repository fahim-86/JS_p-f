const obj = {
    firstName: "",
    lastName: "",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    set name(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

obj.name = "Fahim Morshed";
console.log(obj);