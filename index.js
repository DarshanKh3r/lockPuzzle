
let data = ['4', '6', '0', '4', '9', '2', '0', '8', '4', '5', '1', '6', '5', '6', '8'];
let dataLines = ['One number is correct and in the right place', 'One number is correct but in the wrong place', 'Two numbers are correct but in the wrong place', 'Nothing is correct', 'One number is correct but in the wrong place'];

var answer1 = "8";
var answer2 = "2";
var answer3 = "0";

document.addEventListener('DOMContentLoaded',()=>{
    setElements();
});

function setElements(){
    var buttonDisplay = document.getElementById("buttonDisplay");

    let code = buttonDisplay.innerHTML;
    console.log(code);

    var count = 0;
    for(var i=1;i<=5;i++){
        let temp = `
        <section class="Section-${i} common">
        <input type="button" value=${data[count]} onclick="inputHandler(${data[count]})">
        <input type="button" value=${data[count+1]} onclick="inputHandler(${data[count+1]})">
        <input type="button" value=${data[count+2]} onclick="inputHandler(${data[count+2]})">
        <label for="">${dataLines[i-1]}</label>
        </section>`
        count += 3
        code += temp;
    }
    buttonDisplay.innerHTML = code;
}

// onClick functions for display
function myFunction()
{
    document.querySelector("#input1").innerHTML = ''
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    var message = document.getElementById("message");

    if (input1 == '')
    {
        message.textContent = "please enter a number1";
        message.style.color = "orange";
    }
    else if (input2 == '')
    {
        message.textContent = "please enter a number2";
        message.style.color = "orange";
    }
    else if (input3 == '')
    {
        message.textContent = "please enter a number3";
        message.style.color = "orange";
    }
    else
    {
        checkAnswer(input1,input2,input3);
    }
}
function checkAnswer(input1,input2,input3){
    var message = document.getElementById("message");
    if(answer1 == input1 && answer2 == input2 && answer3 == input3)
    {
        message.textContent = "Correct Answer!"; 
        message.style.color = "Green";
    }
    else
    {
        message.textContent = "Wrong Answer!, Try Again!"; 
        message.style.color = "Red";
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
   var message = document.getElementById("message");

    input1.value = '';
    input2.value = '';
    input3.value = '';
    message.textContent = 'Enter Answer';
    message.style.color = "Black";
}

// answer = 820 concate with input strings 
//answer correct or not correct