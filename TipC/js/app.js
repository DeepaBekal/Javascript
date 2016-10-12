/*Global variables*/
var billAmount = "";
var tipPercentInp = "";
var result = 0;

/*function to assign input data to billAmount*/
function inputBillAmount(el){
	var elText = el.innerText;
	if(tipPercentInp == ""){
		billAmount += elText;
		updateLabel(billAmount);
	}
}

/*function to check for tipPercentInp*/
function tipPercent(pc){
	var percent = pc.innerText;	
	if(percent == "18%"){
		tipPercentInp = 18;
		updateLabel(billAmount +" $ Total Bill "+tipPercentInp + "% Tip");
		result = parseFloat(billAmount) * (parseFloat(tipPercentInp)/100);
		document.getElementById("calInpt").value = result;
		tipPercentInp = "";
	}
	else if(percent == "20%"){
		tipPercentInp = 20;
		updateLabel(billAmount +" $ Total Bill "+tipPercentInp + "% Tip");
		result = parseFloat(billAmount) * (parseFloat(tipPercentInp)/100);
		document.getElementById("calInpt").value = result;
		tipPercentInp = ""
	}
	else if(percent == "25%"){
		tipPercentInp = 25;
		updateLabel(billAmount +" $ Total Bill "+tipPercentInp + "% Tip");
		result = parseFloat(billAmount) * (parseFloat(tipPercentInp)/100);
		document.getElementById("calInpt").value = result;
		tipPercentInp = ""
	}
}

/*function to clear global variables after every result calculation*/
function clearGlobal(){
	billAmount = "";
	tipPercentInp = "";
	result = 0;
}

/*function to clear output screen of calculator*/
function clearScreen(){	
	clearGlobal();
	updateLabel(0);
	document.getElementById("calInpt").value = 0;
}

/*function to display input data and result*/
function updateLabel(str){
	document.getElementById("displayLbl").innerText = str;

}
