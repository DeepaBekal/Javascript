function player(){
    this.name ='';
    this.points=50;
    this.givePoint=function givePoint(toPlayer){
        toPlayer.points += 2;
        console.log(this.name+' gave 2 points to '+toPlayer.name);
    }
}

var  jerry = new player();
var tom = new player();
jerry.name = 'jerry';
tom.name ='tom';

jerry.givePoint(tom);

player.prototype.lostPoints=function lostPoints(){
    this.points -= 5;
    console.log(this.name+' lost 5 points & has '+this.points+' points');
}

jerry.lostPoints();

player.prototype.perks = 10;

console.log(tom.perks);
console.log(jerry.perks);