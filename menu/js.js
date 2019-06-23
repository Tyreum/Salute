function enviar() {
    var t1 = window.document.getElementById('txt1')
    var t2 = window.document.getElementById('txt2')
    var t3 = window.document.getElementById('txt3')
    var t4 = window.document.getElementById('txt4')
    var t5 = window.document.getElementById('txt5')
    var t6 = window.document.getElementById('txt6')
    var n1 = String(t1.value)
    var n2 = Number(t2.value)
    var n3 = String(t3.value)
    var n4 = Number(t4.value)
    var n5 = String(t5.value)
    var n6 = String(t6.value)
    var n7 = String(        )
    var pedido = window.document.getElementById('pedido')
    if(n1 != n7){
        if(n2 > 0){
            pedido.innerHTML = `Seu pedido está sendo preparado e será enviado para: <br> ${n1}, ${n2} ${n3} ${n5}.`
        }
    else{
        pedido.innerHTML = `Endereço inválido.`
    }
    }
    else{
        pedido.innerHTML = `Endereço inválido.`
    }
}

