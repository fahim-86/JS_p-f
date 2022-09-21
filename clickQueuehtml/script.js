//"event.target" - returns html part of the clicked portion
const clickTile = [];
document.addEventListener('click', function () {
    // console.log(event);
    // console.log(event.target);
    if (!event.target.classList.contains('tile')) return; //only add the div that has specific class
    if (clickTile.includes(event.target)) return; //repeat click will not add
    event.target.classList.add('selected'); //add 'selected' class on clicked element
    clickTile.push(event.target);

    if (clickTile.length >= 9) {
        const interval = setInterval(() => {
            const delTile = clickTile.shift(); //deletes first element of array
            delTile.classList.remove('selected');
            if (clickTile == 0) {
                clearInterval(interval);
            }
        }, 1000);
    }
})