function calcular() {
    let n1 = document.querySelector('input#n')
    let res = document.querySelector('select#tab')
    if (n1.value.length == 0) {
        alert('Por Favor, digite um numero!')
    } else {
        let n = Number(n1.value)
        let c = 1
        res.innerHTML = '' // zera o select para substituir por uma nova resposta
        while (c <= 10) {
            let item = document.createElement('option') //cria uma tag option dentro do select
            item.text = `${n} x ${c} = ${n*c}` //adiciona texto entre as duas tags criadas
            res.appendChild(item) //atribui uma tag filho, atribuiu a tag option criada ao select
            c++
        }
    }
}


// o chamado da função e o nome da função precisam estar identicos, JS é Case-sensitive, maiusculas e minusculas importam
// atributo size na tag select, cria 10 espaços para options