const fakeFetch = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 6000)
})

const timer = timeout => new Promise((_resolve, reject) => setTimeout(() => reject(new Error("Time limit exceeded!")), timeout))

Promise.race([fakeFetch(), timer(7000)])
    .then(() => console.log("Successful within time limit"))
    .catch(console.error);