
function deliverHotChocolate(){
    console.log('Hot Chocolate delivered');
}

function hotChocolateRecipe() {
    console.log('Recipe is a secret');
}

/*only deliverHotChocolate function can only be called from app.js*/
module.exports.hotChocolateOut = deliverHotChocolate();