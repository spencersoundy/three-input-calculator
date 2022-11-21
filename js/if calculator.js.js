function equal(){

    number1 = document.getElementById("firstNumber").value;
    number2 = document.getElementById("secondNumber").value;
    operator = document.getElementById("operator").value;
   


    if (operator == '+') {
        document.getElementById("result").innerHTML = +number1 + +number2;

    }
    else if (operator == '-') {
        document.getElementById("result").innerHTML = number1 - number2;
    }
    else if (operator == '*') {
        document.getElementById("result").innerHTML = number1 * number2;
    }
    else {
        document.getElementById("result").innerHTML = number1 / number2;
    }
}



// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);




