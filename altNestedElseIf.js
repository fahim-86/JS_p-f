const item = "Sandwich";

function getPrice() {
    if (item == "Burger") {
        console.log("Its a " + item);
    } else if (item == "Pizza") {
        console.log("Its a " + item);
    } else if (item == "Sandwich") {
        console.log("Its a " + item);
    } else if (item == "Juice") {
        console.log("Its a " + item);
    }
}

// getPrice();

const dataMap = {
    Burger: "Its a Burger",
    Pizza: "Its a Pizza",
    Sandwich: "Its a Sandwich",
    Juice: "Its a Juice"
}

function getPrice(item) {
    console.log(dataMap[item]);
}
getPrice("Pizza");