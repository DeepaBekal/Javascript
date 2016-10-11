/*Global variables*/
var operand1 = "";
var operand2 = "";
var operator = "";
var result = 0;

/*function to check and assign Operand1 and Operand2*/
function operandPressed(el){
	var a = el;
	var elText = el.innerText;
	if(operator == ""){
		operand1 += elText;
		updateLabel(operand1);
	}
	else {
		operand2 += elText;
		updateLabel( operand1 + operator + operand2);
	}
}

/*function to check for operator*/
function operatorPressed(opr){
	var op = opr.innerText;	
	if(op == "+"){
		operator = op;
		updateLabel(operand1 + operator);
	}
	else if(op == "-"){
		operator = op;
		updateLabel(operand1 + operator);
	}
	else if(op == "x"){
		operator = op;
		updateLabel(operand1 + operator);
	}
	else if(op == "/"){
		operator = op;
		updateLabel(operand1 + operator);
	}
}

/*function to calculate the result*/
function equals(){
	if(operator == "+"){
		result = parseInt(operand1) + parseInt(operand2);
		updateLabel( operand1 + operator + operand2 + " = ");
		document.getElementById("calInpt").value = result;
		clearGlobal();
	}
	else if(operator == "-"){
		result = parseInt(operand1) - parseInt(operand2);
		updateLabel( operand1 + operator + operand2 + " = ");
		document.getElementById("calInpt").value = result;
		clearGlobal();
	}
	else if(operator == "x"){
		result = parseInt(operand1) * parseInt(operand2);
		updateLabel( operand1 + operator + operand2 + " = ");
		document.getElementById("calInpt").value = result;
		clearGlobal();
	}
	else if(operator == "/"){
		result = parseInt(operand1) / parseInt(operand2);
		updateLabel( operand1 + operator + operand2 + " = ");
		document.getElementById("calInpt").value = result;
		clearGlobal();
	}
}

/*function to clear global variables after every result calculation*/
function clearGlobal(){
	operand1 = "";
	operand2 = "";
	operator = "";
}

/*function to clear output screen of calculator*/
function clearScreen(){	
	result = 0;
	updateLabel(0);
	document.getElementById("calInpt").value = 0;
}

/*function to display input data and result*/
function updateLabel(str){
	document.getElementById("displayLbl").innerText = str;

}
