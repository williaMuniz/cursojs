function mudar() {
    var msg = window.document.querySelector('div#titulo')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = './media/manha.png'
        document.body.style.background = '#e1b578'
    } else if (hora > 12 && hora < 18) {
        document.body.style.background = '#fd5c01'
        img.src = './media/tarde.png'
    } else {
        document.body.style.background = '#033266'
        img.src = './media/noite.png'
    }
}

