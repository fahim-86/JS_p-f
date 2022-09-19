const button = document.querySelector("button");

button.addEventListener("click", () => {
    Notification.requestPermission().then(param => {
        if (param === "granted") {
            const notification = new Notification("New notification", {
                body: "This is a test new notification",
                data: { hello: "Worlds" }
            });
            console.log(notification);
        }
    });


    // console.log(e);
})