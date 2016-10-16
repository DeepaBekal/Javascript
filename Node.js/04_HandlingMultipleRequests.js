function placeRequest(requestNo){
    console.log('Request number: '+requestNo);

    prepareDeliver(function(){
        console.log('Request ready:'+requestNo);
    })
}

function prepareDeliver(callback){
    setTimeout(callback, 5000);
}

placeRequest(1);
placeRequest(2);
placeRequest(3);
placeRequest(4);
placeRequest(5);