function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    let res = document.getElementById('res')
    //Verificar se os dados estão faltando
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        res.innerHTML = 'Impossível contar!'
        window.alert('ERRO: Faltam dados!')

    } else{
        res.innerHTML = 'Contando: <br>'
        //torna tudo número
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        //Evita erros
        if(p<=0){
            window.alert('Passo inválido! considerando Passo 1')
            p=1
        }
        
        if(i<f){
            //Contagem crescente
            for(var c = i; c <= f; c+=p){
                res.innerHTML += ` ${c} \u{1F449}`
        }
        }else{
            //Contagem decrescente
            for(var c=i; c>=f; c-=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
    }res.innerHTML += `\u{1F3C1}`
}