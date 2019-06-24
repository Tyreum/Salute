function load(){
    var data = new Date()
    var dia = data.getDay()
    var img = window.document.getElementById('imgjs')

    switch(dia){
        case 0:
            txtp.innerHTML = 'CALABRESA'
            img.src = 'calabresa.png'
            break
        case 1:
            txtp.innerHTML = 'PORTUGUESA'
            img.src = 'portuguesa.png'
            break
        case 2:
            txtp.innerHTML = 'MARGHERITA'
            img.src = 'margherita.png'
            break
        case 3:
            txtp.innerHTML = 'QUATRO QUEIJOS'
            img.src = '4queijos.png'
            break
        case 4:
            txtp.innerHTML = 'FRANGO COM CATUPIRY'
            img.src = 'frangocatuppiri.png'
            break
        case 5:
            txtp.innerHTML = 'PEPPERONI'
            img.src = 'pepperoni.png'
            break
        case 6:
            txtp.innerHTML = 'MUSSARELA'
            img.src = 'mussarela.png'
            break
    }
}