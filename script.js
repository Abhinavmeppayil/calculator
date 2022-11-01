//display number in textbox
function displayNum(num){
    console.log(num);
    result.value+=num;
}


//2 clear textbox
function clearBox(){
    result.value="";
}

//evaluate expression
function evaluateExpression(){
    exp=result.value;
    output=eval(exp)
    result.value=output;
}

//remove last item from the textbox
function lastItem(){
    currentexp=result.value;
    result.value=currentexp.slice(0,-1);
}