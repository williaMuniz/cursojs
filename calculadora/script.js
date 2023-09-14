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
    } else if (i == 0 || f == 0){
        res.innerHTML = `[error] Um ou mais valores esta faltando`
    } else {
        if (p <= 0) {
            window.alert('Passo Invalido! Considerando passo com valor 1')
            p = 1
        }
        if (i < f){ //contagem crescente
            for (let c=i; c<=f; c+=p) { //c+=p contador recebe ele mesmo mais o passo.
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else { //contagem regressiva
            for (let c=i; c>=f; c-=p) { // C recebe i, contador recebe ele msm e tira o passo
                res.innerHTML += ` ${c} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F3c1}`
    }
}