const input= document.getElementById("input");

function apendvalue(passval){
    input.value += passval;
}

function clearresult(){
    input.value = "";
}

function calculateresult(){
try {
    input.value = eval(input.value)
} catch (error) {
    input.value = "syntax error!"
}
}
