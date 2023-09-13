function calcular() {
    let ini = document.querySelector('input#ini')
    let fim = document.querySelector('input#fim')
    let pass = document.querySelector('input#pass')
    let res = document.querySelector('p#res')
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pass.value)
    if (i == 0 && f == 0 && p == 0) {
        res.innerHTML = `Por favor, insira os valores nos campos para realizarmos a contagem.`
    } else if (i == 0 || f == 0 || p == 0){
        res.innerHTML = `[error] Um ou mais valores esta faltando`
    } else {
        



        
    }

}