
let a = 0;
let b = 0;
let allresult = 0;
let result = 0;

const box = document.getElementById("demo");

const inputbox = document.getElementById("text1")

const button1 = document.getElementById("bt1");
button1.addEventListener("click", mybutton1);
function mybutton1(){  
    inputbox.value +="1";  
}

const button2 = document.getElementById("bt2");
button2.addEventListener("click", mybutton2);
function mybutton2(){
    inputbox.value +="2";
    
}

const button3 = document.getElementById("bt3");
button3.addEventListener("click", mybutton3);

function mybutton3(){
    inputbox.value += "3";  
}


const button4 = document.getElementById("bt4");
button4.addEventListener("click", mybutton4);
function mybutton4(){
    inputbox.value +="4";
    
}


const button5 = document.getElementById("bt5");
button5.addEventListener("click", mybutton5);
function mybutton5(){
    inputbox.value +="5";
    
}


const button6 = document.getElementById("bt6");
button6.addEventListener("click", mybutton6);
function mybutton6(){
    inputbox.value +="6";
    
}


const button7 = document.getElementById("bt7");
button7.addEventListener("click", mybutton7);
function mybutton7(){
    inputbox.value +="7";
    
}


const button8 = document.getElementById("bt8");
button8.addEventListener("click", mybutton8);
function mybutton8(){
    inputbox.value +="8";
    
}


const button9 = document.getElementById("bt9");
button9.addEventListener("click", mybutton9);
function mybutton9(){
    inputbox.value +="9";
    
}


const button0 = document.getElementById("bt0");
button0.addEventListener("click", mybutton0);
function mybutton0(){
    inputbox.value +="0";
    
}

const buttonadd = document.getElementById("add");
buttonadd.addEventListener("click", mybuttonadd);

function mybuttonadd(){
    inputbox.value +="+";
}


const multi = document.getElementById("mul");
multi.addEventListener("click", mybuttonmul);
function mybuttonmul(){
    inputbox.value +="*";
    
}


const buttonsub = document.getElementById("sub");
buttonsub.addEventListener("click", mybuttonsub)
function mybuttonsub(){
    inputbox.value +="-";
    
}


const buttondiv = document.getElementById("div");
buttondiv.addEventListener("click", mybuttondiv);
function mybuttondiv(){
    inputbox.value +="/";
    
}


const buttoncle = document.getElementById("cle");
buttoncle.addEventListener("click", mybuttoncle);
function mybuttoncle(){
    inputbox.value =" ";
    allresult = 0;
    
}




const buttonequal = document.getElementById("equal");
buttonequal.addEventListener("click", mybuttonequal);

function mybuttonequal(){ 
    if(inputbox.value == ''){
        try{
            if(inputbox.value == "") throw "empty"   
        } 
        catch(err){
            inputbox.value = err 
        } 
    }

    else{
        try{
            inputbox.value = eval(inputbox.value);     
        } 
        catch(error){
            inputbox.value = "error"
        }
    }

    result = parseFloat(eval(inputbox.value)); 
    inputbox.value +="=";
    inputbox.value = " ";
    allresult = 0;
    inputbox.value = result;
    
}




