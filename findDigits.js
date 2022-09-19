function findDigits(n) {
    return [...`${n}`].reduce((startPoint, restValue) => {
        console.log("Rest Value: " + restValue); //1st loop: 5, 2nd loop: 8, 3rd loop: 2
        console.log("Value of n: " + n); //1st loop: 582, 2nd loop: 582, 3rd loop: 582
        (n % restValue === 0) && startPoint++; //if the condition true only then the increment will work
        console.log("Start Point: " + startPoint); //1st loop: 0, 2nd loop: 0, 3rd loop: 1
        return startPoint;
    }, 0);
}

console.log(findDigits(582));