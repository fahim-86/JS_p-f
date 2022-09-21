let arr = [
    {
        size: 4,
        girth: 3
    },
    {
        size: 5,
        girth: 3.5
    },
    {
        size: 6,
        girth: 4
    }
]

const res = arr.map(data => {
    console.log(data.size);
    if (data.grith == 3.5) return data.size;
});
console.log("Result is: " + res);