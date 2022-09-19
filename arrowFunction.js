let book = {
    title: "The Book",
    related: ["The tower, king is returning", { title: "Inside array" }],
    showRelated: function () {
        this.related.forEach((relatedBooks) => {
            console.log(`Title: ${this.title}`);
            console.log(`Related: ${this.related}`);
            console.log(`Related Books: ${relatedBooks}`);
        })
    }
}

book.showRelated();