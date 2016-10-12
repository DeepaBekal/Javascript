var friends={};
friends.bill={
    firstName: "Bill",
    lastName: "Rodes",
    number: "555",
    address:['NYC NYC NYC']
    };
friends.steve={
    firstName: "Steve",
    lastName: "Jibs",
    number: "777",
    address:['DC DC DC']
    };
    
var list = function(data){
    for(var a in data){
        console.log(a);
        }
    }
var search = function(name){
    for(var b in friends){
        if(friends[b].firstName === name){
            console.log(friends[b]);
            return friends[b];
            }
        }
    };
    
list(friends);
search("Steve");