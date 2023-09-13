function calcular() {
    var data = new Date()
    var anoatual = data.getFullYear()

    var ano = document.querySelector('input#ano')
    var sex = document.getElementsByName('sex')
    var res = document.querySelector('p#msg')
    if (ano.value.length == 0 || Number(ano.value) > anoatual || Number(ano.value) <= 0) {
        res.innerHTML = `[ERRO] Verifique os dados e tente novamente`
    } else {
        var idade = anoatual - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
            if (sex [0].checked) {
            genero = 'um Homem'
                if (idade >= 0 && idade <= 12) {
                    img.setAttribute('src','./media/criancam.png')
                    //criança
                } else if (idade > 12 && idade < 60) {
                    img.setAttribute('src', './media/adultom.png')
                    //jovem
                } else {
                    img.setAttribute('src', './media/idosom.png')
                    //idoso
                }
            } else if (sex [1].checked) {
            genero = 'uma Mulher'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', './media/criancaf.png')
                //criança
            } else if (idade > 12 && idade < 60) {
                img.setAttribute('src', './media/adultof.png')
                //jovem
            } else {
                img.setAttribute('src', './media/idosof.png')
                //idoso
            }
            }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}