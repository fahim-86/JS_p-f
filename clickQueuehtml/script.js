//"event.target" - returns html part of the clicked portion
// const numberOfTiles = document.querySelectorAll(".tile");//will return the number of element exist for the given classname. Also, document.getElementsByClassname('tile') returns same but array.
// console.log(numberOfTiles.length); // it will return 0 if 'defer' isn't use for JS load
const section = document.getElementsByTagName('section')[0];
const tileNo = 2;
const numberOfTiles = tileNo ** 2;
const clickdTile = [];

for (let row = 0; row < tileNo; row++) {
    //this loop will create <div class="wrapper"></div>
    const wrapper = document.createElement("div"); //create div element
    wrapper.classList.add("wrapper"); //adding wrapper class to the element
    for (let col = 0; col < tileNo; col++) {
        //this will create <div class="tile"></div>
        const tile = document.createElement("div");
        tile.classList.add("tile");
        wrapper.appendChild(tile); //adding tile div as a child inside wrapper div
    }
    section.appendChild(wrapper); //adding wrapper div inside section as a child
}
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