checkSpeed(73);

function checkSpeed(speed) {
    let accessSpeed = speed - 70;
    let speedPoints = Math.floor(accessSpeed / 5);

    if (speedPoints > 12) return console.log("License suspended");
    if (speed <= 74) return console.log("OK");
    if (speed > 70) return console.log("Points: " + speedPoints);
}


/**let arr = [
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
console.log("Result is: " + res);**/