function designPdfViewer(h, word) {
    let letterValues = [];
    let highestValue;
    for (let i = 0; i < word.length; i++) {
        letterValues.push(h[word.charCodeAt(i) - 97]);
    }
    highestValue = Math.max(...letterValues);
    // return highestValue * word.length;
    console.log(highestValue * word.length);
}

designPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], "zaba");