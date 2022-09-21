//"event.target" - returns html part of the clicked portion
const numberOfTiles = document.querySelectorAll(".tile"); //will return the number of element exist for the given classname OR document.getElementsByClassname('tile')
console.log(numberOfTiles.length); // it will return 0 if 'defer' isn't use for JS load
const clickTile = [];
document.addEventListener('click', function () {
    // console.log(event);
    // console.log(event.target);
    if (!event.target.classList.contains('tile')) return; //only add the div that has specific class
    if (clickTile.includes(event.target)) return; //repeat click will not add
    event.target.classList.add('selected'); //add 'selected' class on clicked element
    clickTile.push(event.target);

    if (clickTile.length >= numberOfTiles.length) {
        const interval = setInterval(() => {
            const delTile = clickTile.shift(); //deletes first element of array
            delTile.classList.remove('selected');
            if (clickTile == 0) {
                clearInterval(interval);
            }
        }, 1000);
    }
})