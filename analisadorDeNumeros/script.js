let num = document.querySelector('input#numero')
let lista = document.querySelector('select#sel')
let res = document.querySelector('div#res')
let valores = []

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) { //aciona duas funçoes abaixo
        valores.push(Number(num.value))
        let item = document.createElement('option') //estabelece uma variavel item, e associa a ela o elemento criado option
        item.text = `Valor ${num.value} adicionado` //adiciona texto a variavel item
        lista.appendChild(item) //o item vira um filho da lista
    }   else {
        window.alert('valor inválido ou ja encontrado na lista.')
    }
    num.value = '' //limpa o campo apos inserir o numero
    num.focus() //mantem a digitação no campo 
}

function isNumero(n) { //verifica se o n é maior que 1 e menor que 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){ //verifica se o numero ja existe na lista
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function finalizar(){
    if(valores.length == 0) { //verifica se o campo esta vazio de valores
        window.alert('Adicione valores antes de finalizar') 
    } else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`
    }
}
/*
let tot = valores.length: Isso declara uma variável chamada "tot" e a inicializa com o número de elementos no array "valores". Portanto, "tot" irá armazenar o tamanho do array.

let maior = valores[0]: Declara uma variável "maior" e a inicializa com o primeiro elemento do array "valores". Essa variável será usada para rastrear o maior valor no array.

let menor = valores[0]: Declara uma variável "menor" e a inicializa com o primeiro elemento do array "valores". Essa variável será usada para rastrear o menor valor no array.

let soma = 0: Declara uma variável "soma" e a inicializa com zero. Essa variável será usada para calcular a soma de todos os valores no array "valores".

let media = 0: Declara uma variável "media" e a inicializa com zero. Ela será usada para calcular a média dos valores no array.

O próximo bloco de código é um loop "for...in" que percorre todos os elementos do array "valores".

for(let pos in valores): Isso inicia um loop que passará por cada elemento do array.

soma += valores[pos]: A cada iteração do loop, o valor atual do elemento é somado à variável "soma", acumulando a soma de todos os valores.

if (valores[pos] > maior) maior = valores[pos]: Isso verifica se o valor atual do elemento é maior do que o valor atual armazenado em "maior" e, se for, atualiza "maior" com o novo valor.

if (valores[pos] < menor) menor = valores[pos]: Isso verifica se o valor atual do elemento é menor do que o valor atual armazenado em "menor" e, se for, atualiza "menor" com o novo valor.*/