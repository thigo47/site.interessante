let i = {
    num1 : document.getElementById("txtnum"),
    sinal: document.getElementById("simbol"),
    num2 : document.getElementById("txtnum2"),
    res : document.getElementById("resp"),
}
function calcular(){
    if (i.num1.value == 0 || i.num2.value == 0) {
        window.alert("insira valores por favor")

    }else if (i.sinal.value != "-"  && i.sinal.value != "+" && i.sinal.value != "*" ) {
        window.alert("Insira um sinal valido por favor")
    }else{
        if (i.sinal.value == "+") {
            i.res.innerHTML = `${Number(i.num1.value) + Number(i.num2.value)}`
        } else if(i.sinal.value == "-"){
        i.res.innerHTML = `${Number(i.num1.value) -  Number(i.num2.value)}`
        }else if (i.sinal.value == "*" ){
            i.res.innerHTML = `${Number(i.num1.value) * Number(i.num2.value)}`
        }
    }
}