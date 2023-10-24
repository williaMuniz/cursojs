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