function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('ERRO digite um número válido')
    } else{
        let n = Number(num.value)

        let c = 1

        //limpar os dados de antes
        tab.innerHTML= ''
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            tab.appendChild(item)
            c++
        }
    }
}