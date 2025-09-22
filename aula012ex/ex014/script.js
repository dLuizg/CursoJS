function carregar() {
    //Nomeia as variáveis do html no js
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    //horário atual
    var data = new Date()
    var hora = data.getHours()
    //hora = 14
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 6 && hora <12){
        img.src = 'fotomanha.png'
        document.body.style.background= '#e2cd9f'
    }
    else if (hora > 12 && hora < 18){
        img.src = 'fototarde.png'
        document.body.style.background= '#b9846f'
    }
    else {
        img.src = 'fotonoite.png'
        document.body.style.background= '#515154'
    }
}
