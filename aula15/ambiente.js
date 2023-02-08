let num = [5,8,4]
/* acrescenta um número
num[3] = 6

adiciona um número na última posição
num.push(7)

 quantidade de elementos, comprimento do vetor
num.length 

 coloca em ordem crescente
num.sort() 

 num.indexOf() - mostra a posição do valor    */

num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1 ) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}

