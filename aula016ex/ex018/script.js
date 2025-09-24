let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

//Verifica se o número é válido (de 1 a 100)
function isNumero(n){
    if (Number(n) >= 1 && Number(n)<=100){
        return true
    } else{
        return false
    }
}

//Verifica se o número já está na lista (se estiver retorna -1)
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

//botão adicionar
function adicionar(){
    //Se for número válido (chama a função) e NÃO estiver na lista (chama a função)
        if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        //O que vai ser adicionado a lista
        item.text = `Valor ${num.value} adicionado.`
        //Adiciona à lista
        lista.appendChild(item)
        //Ao adicionar mais números apaga o resultado do botão finalizar
        res.innerHTML = ''
    } else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    //Apaga o que foi digitado e puxa pra caixa de texto dnv
    num.value = ''
    num.focus()
}

//botão finalizar
function finalizar(){
    //Se o botão tiver vazio (tamanho 0)
    if(valores.length == 0){
        window.alert('Adicione ao menos um valor!')
    }else{
        //pra faculitar nas operações
        let tot = valores.length             

        //Início dos textos de resultado
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo são ${tot} números cadastrados </p>`

        //declara as variáveis
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        //pos é a posição do número dentro do array
        for(let pos in valores){
            
            //se o próximo valor foi mais alto que o anterior, esse passa a ser o maior
            if(valores[pos] > maior)
                maior = valores[pos]
            //Se o próximo valor for mais baixo que o anterior, esse passa a ser menor
            if(valores[pos] < menor)
                menor = valores[pos]
            //Soma cada novo valor que chega
            soma+= valores[pos]
        }
        //ADICIONA novos parágrafos
        res.innerHTML += `<p>O maior é ${maior}</p>`
        res.innerHTML += `<p>O menor é ${menor}</p>`
        res.innerHTML += `<p>A Soma de todos é ${soma}</p>`

        //Calcula a média
        let media = 0
        media = soma/tot
        
        res.innerHTML += `<p>O valor da média entre esses números é ${media}</p>`


    }
}

