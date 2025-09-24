function parimpar(n){
    if(n%2==0){
        return 'par'
    } else{
        return 'Impar'
    }
}
//Declara o retorno da função como variável e dá o número base
let res = parimpar(4)
//Imprime o retorno da função
console.log(res)