//Vetor e seus valores guardados
let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)
//Exibir um valor específico
console.log(`O primeiro número é ${num[0]}`)

//Adicionar um valor em posição específica
num[3]=9
//Adicionar um valor no final
num.push(89)

console.log(`Nosso vetor é o ${num}`)

//num.length é o tamanho do Array
console.log(`O vetor tem ${num.length} posições`)

//num.sort() organiza os números na ordem certa
console.log(`Os números em sequência são: ${num.sort()}`)

//num.indexOf(7) vai mostrar em qual posição do array tem o valor 7 (caminho contrário) 
let pos = num.indexOf(8)
console.log(pos)