var text = "Lorem ipsum dolor sit amet, Tom consectetur adipiscing elit, sed do eiusmod tempor Tom incididunt ut labore et dolore magna aliqua Tom.";
var myName ="Tom";
var hits=[];
for(var i=0;i<=text.length;i++){
    if(text[i]==="T"){
            for(var j=i;j<myName.length+i;j++){
                hits.push(text[j]);
            }
        }
}
if(hits.length===0){
    console.log("Your name wasn't found!");
}
else{
    console.log(hits);
}