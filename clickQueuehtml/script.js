//"event.target" - returns html part of the clicked portion
const numberOfTiles = document.querySelectorAll(".tile").length; //will return the number of element exist for the given classname OR document.getElementsByClassname('tile')
// console.log(numberOfTiles.length); // it will return 0 if 'defer' isn't use for JS load

const clickdTile = [];
document.addEventListener('click', function () {
    // console.log(event);
    // console.log(event.target);
    if (!event.target.classList.contains('tile')) return; //only add the div that has specific class
    if (clickdTile.includes(event.target)) return; //repeat click will not add
    event.target.classList.add('selected'); //add 'selected' class on clicked element
    clickdTile.push(event.target);

    if (clickdTile.length >= numberOfTiles) {
        const interval = setInterval(() => {
            const delTile = clickdTile.shift(); //deletes first element of array
            delTile.classList.remove('selected');
            if (clickdTile == 0) {
                clearInterval(interval);
            }
        }, 1000);
    }
})