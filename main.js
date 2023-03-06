

const buttonEvent=document.getElementById("submit");

buttonEvent.addEventListener("click",function(e){


    var numeroA = document.getElementById('numeroA')
    var numeroB = document.getElementById('numeroB')
    var numA = Number(numeroA.value)
    var numB = Number(numeroB.value)

        if (numB > numA) {
            alert("Formulário válido");
        }
        else {
            alert("Formulário inválido");
        }  
    })
    



    
    
    
    
    
    
    
    
    