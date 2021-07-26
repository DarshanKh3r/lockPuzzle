//First Comment
//Second Comment

var answer1 = "8";
var answer2 = "2";
var answer3 = "0";

function myFunction()
{
    document.querySelector("#input1").innerHTML = ''
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;

    if (input1 == '')
    {
        alert("please enter a number1")
    }
    else if (input2 == ''){
        alert("please enter a number2")
    }
    else if (input3 == ''){
        alert("please enter a number3")
    }
    else
    {
        checkAnswer(input1,input2,input3);
    }
}
function checkAnswer(input1,input2,input3){
    
    if(answer1 == input1 && answer2 == input2 && answer3 == input3)
    {
        alert("Correct Answer!"); 
    }
    else
    {
        alert("Wrong Answer, Try Again!");
    }

}

// inputHandler

function  inputHandler(i){

    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");

    if (input1.value == '')
    {
      input1.value = i;
    }
    else if (input2.value == ''){
        input2.value = i;
    }
    else if (input3.value == ''){
       input3.value = i;
    }
    
}

// to clear inputs
function clr()
{
   var input1 = document.getElementById("input1");
   var input2 = document.getElementById("input2");
   var input3 = document.getElementById("input3");
    input1.value = '';
    input2.value = '';
    input3.value = '';
}

// answer = 820 concate with input strings 
//answer correct or not correct