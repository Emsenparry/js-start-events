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
console.log("Weeeee cow!");
cowInput.style.backgroundColor = "green"
}
else{
    console.log("no cow!!");
    cowInput.style.backgroundColor = "red"
}
}

function evaluatePig(){

if(pigInput.value == "gris"){
    console.log("Weeeee pig!");
    pigInput.style.backgroundColor = "green"
    }
    else{
        console.log("no pig!!");
        pigInput.style.backgroundColor = "red" 
    }

}

function evaluateAll(){

if(cowInput.value == "ko"){
    console.log("Weeeee cow!");
    }
    else{
        console.log("no cow!!");
        cowInput.style.backgroundColor = "red"
    }

if(pigInput.value == "gris"){
    console.log("Weeeee pig!");
    }
    else{
        console.log("no pig!!");
        pigInput.style.backgroundColor = "red"
    }

if(mooseInput.value == "elg"){
    console.log("Weeeee!");
    mooseInput.style.backgroundColor = "green"
    }
    else{
        console.log("error!!");
        mooseInput.style.backgroundColor = "red"
    }
}

// Functions ------------------------------------------------------------