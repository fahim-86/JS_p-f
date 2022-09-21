const c = [5, 2, 84, 5, 8, 6, 9, 6, 47, 58, 55];

//Array.map loops over all the elements in order and internally pushes the results into a new array. We just need to supply the transformation function
var squareNumbers = c.map(transFunc => transFunc * transFunc);
console.log(squareNumbers);

// Array.filter builds a new array of elements based on the given “validator” functions. if the “validator” function returns true, the element will be internally added to a new array.
var evenNumbers2 = c.filter(validatorFunc => validatorFunc % 2 == 0);
console.log(evenNumbers2);

//Array.reduce takes two arguments, one is the reduce function and second is the initial value which is called an accumulator. At the end of the last loop, accumulator becomes the final result.
var sum = c.reduce(((acc, num) => acc + num), 0);
console.log(sum);