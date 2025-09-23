function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    //SE o ano estiver vazio          OU ano maior que atual
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO - Data Inválida')
    }else{
        //verifica qual caixa foi marcada
        var fsex = document.getElementsByName('radsex')
        //calcular a idade
        var idade = ano - Number(fano.value)
        var genero = ''

        //Prepara para atribuir as respectivas fotos
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //Se masculino ou feminino
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade<12){
                img.setAttribute('src','meninocrianca.png')
            }else if (idade<18){
                img.setAttribute('src','meninojovem.png')
            }else if (idade < 60){
                img.setAttribute('src','homemadulto.png')
            }else{
                img.setAttribute('src','senhor.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade<12){
                img.setAttribute('src','meninacrianca.png')
            }else if (idade<18){
                img.setAttribute('src','meninajovem.png')
            }else if (idade < 60){
                img.setAttribute('src','mulheradulta.png')
            }else{
                img.setAttribute('src','senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos.`
        res.appendChild(img)
    }
}