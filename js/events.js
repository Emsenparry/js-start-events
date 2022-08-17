// Input fields from form, made into variables.
const cowInput = document.getElementById('cow');
const pigInput = document.getElementById('pig');
const mooseInput = document.getElementById('moose');

// Validate buttons
const validatePig = document.getElementById('evaluatePig');
const validateAll = document.getElementById('evaluateForm');

// Event listeners
cowInput.addEventListener("keyup", evaluateCow); 
validatePig.addEventListener("click", evaluatePig); 
validateAll.addEventListener("click", evaluateAll); 


// Functions ------------------------------------------------------------
function evaluateCow(){

if(cowInput.value == "ko"){
console.log("Weeeee cow! uwu");
cowInput.style.backgroundColor = "green"
}
else{
    console.log("no cow!!");
    cowInput.style.backgroundColor = "red"
}
}

function evaluatePig(){

if(pigInput.value == "gris"){
    console.log("Weeeee pig! uwu");
    pigInput.style.backgroundColor = "green"
    }
    else{
        console.log("no pig!!");
        pigInput.style.backgroundColor = "red" 
    }

}

function evaluateAll(){

if(cowInput.value == "ko"){
    console.log("Weeeee cow! uwu");
    }
    else{
        console.log("no cow!!");
    }

if(pigInput.value == "gris"){
    console.log("Weeeee pig! uwu");
    }
    else{
        console.log("no pig!!");
    }

if(mooseInput.value == "elg"){
    console.log("Weeeee! uwu");
    mooseInput.style.backgroundColor = "green"
    }
    else{
        console.log("error!!");
        mooseInput.style.backgroundColor = "red"
    }
}

// Functions ------------------------------------------------------------