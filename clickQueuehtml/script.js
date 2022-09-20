//"event.target" - returns html part of the clicked portion
const clickTile = [];
document.addEventListener('click', function () {
    // console.log(event);
    // console.log(event.target);
    if (!event.target.classList.contains('tile')) return; //only add the div that has specific class
    event.target.classList.add('selected'); //add 'selected' class on clicked element
    clickTile.push(event.target);
    console.log(clickTile);
})