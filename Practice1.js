var user = prompt("What comes to your mind when you see water body? SWIM or FISHING or CROCODILE").toUpperCase();
switch(user){
    case'SWIM':
        var swim = prompt("do you have a swimsuit? YES or NO" ).toUpperCase();
        var skill = prompt("do you know to swim? YES or NO" ).toUpperCase();
        if(swim==="YES"&&skill==="YES") console.log("Jump in!" );
        else if(swim==="YES"||skill==="NO") console.log("Learn to swim");
        else if(swim==="NO"||skill==="YES") console.log("get a suit");
        else console.log("useless!");
        break;
    case'FISHING':
        var fish = prompt("do you have a fishing net? YES or NO").toUpperCase();
        var skill = prompt("do you know fishing? YES or NO"     ).toUpperCase();
        if(fish==="YES"&&skill==="YES") console.log("catch them!");
        else if(fish==="YES"||skill==="NO") console.log("Learn fishing");
        else if(swim==="NO"||skill==="YES") console.log("get a  fishing net");
        else console.log("useless!");
        break;
        break; 
    case'CROCODILE':
        console.log("Run!");
        break;
    default:
        console.log("you are so boring");
    }