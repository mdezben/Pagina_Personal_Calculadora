function sumar(){
    var valor1=parseFloat(document.getElementById("v1").value)
    var valor2=parseFloat(document.getElementById("v2").value)
    var h3=document.getElementById("res")

if(isNaN(valor1)||isNaN(valor2)){
    if(isNaN(valor1)){
        h3.innerHTML="El valor 1 no es valido"
        document.getElementById("valor1").focus()
    }else{
        h3.innerHTML="El valor 2 no es valido"
        document.getElementById("valor2").focus()
    }
    return
}
    var resultado=valor1+valor2
    h3.innerHTML=resultado
}
function restar(){
    var valor1=parseFloat(document.getElementById("v1").value)
    var valor2=parseFloat(document.getElementById("v2").value)
    var h3=document.getElementById("res")

if(isNaN(valor1)||isNaN(valor2)){
    if(isNaN(valor1)){
        h3.innerHTML="El valor 1 no es valido"
        document.getElementById("valor1").focus()
    }else{
        h3.innerHTML="El valor 2 no es valido"
        document.getElementById("valor2").focus()
    }
    return
}
    var resultado=valor1-valor2
    h3.innerHTML=resultado
}
function multiplicar(){
    var valor1=parseFloat(document.getElementById("v1").value)
    var valor2=parseFloat(document.getElementById("v2").value)
    var h3=document.getElementById("res")

if(isNaN(valor1)||isNaN(valor2)){
    if(isNaN(valor1)){
        h3.innerHTML="El valor 1 no es valido"
        document.getElementById("valor1").focus()
    }else{
        h3.innerHTML="El valor 2 no es valido"
        document.getElementById("valor2").focus()
    }
    return
}
    var resultado=valor1*valor2
    h3.innerHTML=resultado
}
function dividir(){
    var valor1=parseFloat(document.getElementById("v1").value)
    var valor2=parseFloat(document.getElementById("v2").value)
    var h3=document.getElementById("res")

if(isNaN(valor1)||isNaN(valor2)){
    if(isNaN(valor1)){
        h3.innerHTML="El valor 1 no es valido"
        document.getElementById("valor1").focus()
    }else{
        h3.innerHTML="El valor 2 no es valido"
        document.getElementById("valor2").focus()
    }
    return
}
if(valor2==0){
    h3.innerHTML="0 no es un valor válido"
    document.getElementById("valor2").focus()
}else{
     var resultado=valor1/valor2
    h3.innerHTML=resultado
}
}