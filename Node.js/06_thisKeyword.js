var apple = {
    fruitName : function () {
        console.log("Fruit name is apple");
        console.log(this === apple);
    }
};

apple.fruitName();

function citrus() {
    console.log('it is citrus fruit');
    console.log(this === global);
}

citrus();