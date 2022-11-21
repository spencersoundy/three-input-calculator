function equal(){

        number1 = document.getElementById("firstNumber").value;
        number2 = document.getElementById("secondNumber").value;
        operator = document.getElementById("operator").value;
       
        switch(operator){
            case '+':
    
                document.getElementById("result").innerHTML = +number1 + +number2;
                break;
                case '-':
                    document.getElementById("result").innerHTML = number1 - number2;
                    break;
            case '*':
                document.getElementById("result").innerHTML = number1 * number2;
                break;
            case '/':
                document.getElementById("result").innerHTML = number1 / number2;
                break;
        }
    }




