
function btnclick(){
    document.getElementById("box-colour").style.backgroundColor="blue";
    document.getElementById("text").textContent="get ready!!!";
    document.getElementById("text").style.color="white";
    document.getElementById("birdImage").style.display="block";
}
function clickto(){
    document.getElementById("name").textContent="4.0 Technologies";
    document.getElementById("name").style.color="maroon";
    document.getElementById("name").style.fontSize="30px";
    document.getElementById("name").style.fontFamily="system-ui";
}
// let a= "20" ;
// console.log(typeof(a));
// let b= parseInt(a)
// console.log(typeof(b));


let numberChange=document.getElementById("count");
function onDecrement(){
    let subtraction=numberChange.textContent;
    let difference=parseInt(subtraction)-1;
    numberChange.textContent=difference;
    if(difference==0){
        numberChange.style.color="black";
    }
    if (difference < 0){
        numberChange.style.color="red";
    }
    else if (sum>0){
        numberChange.style.color="green";
    }

    
}
function onReset(){
    let result=0;
    numberChange.textContent=result;
    numberChange.style.color="black"
    
}
function onIncrement(){
    let addition=numberChange.textContent;
    let sum=parseInt(addition)+1;
    numberChange.textContent=sum;
    if(sum==0){
        numberChange.style.color="black";
    }
    if (sum >0){
        numberChange.style.color="green";
    }
    else if(difference <0){
        numberChange.style.color="red";
    }
}

let gameResult=document.getElementById("gameResult");
let userInput=document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*100);
console.log(Math.random())
console.log(Math.random()*100)
console.log(randomNumber);

function checkOut(){
    let guess= parseInt(userInput.value);

    if (guess > randomNumber){
        gameResult.textContent="Too high , Try again";
        gameResult.style.backgroundColor="black"
        gameResult.style.color="white";
    }
    else if (guess < randomNumber){
        gameResult.textContent="Too Low , Try again";
        gameResult.style.backgroundColor="black"
        gameResult.style.color="white";
    }
    else if( guess=== randomNumber){
        gameResult.textContent="Congratulations, you got it right";
        gameResult.style.backgroundColor="green"
        gameResult.style.color="white";
    }
    else{
        gameResult.textContent="Provide valid Input";
        gameResult.style.backgroundColor="red";
        gameResult.style.color="white";
    }
}