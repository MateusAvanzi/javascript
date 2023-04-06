function contar() {


    let Ini = document.getElementById('nInicio')
    let Fim = document.getElementById('nFim')
    let Pass = document.getElementById('nPasso')
    let res = document.getElementById('res')

    if (Ini.value.length == 0 || Fim.value.length == 0 || Pass.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
        res.innerHTML('Impossivel contar')
    } else {
        res.innerHTML = 'Contando... <br>'
        var I = Number(Ini.value)
        var F = Number(Fim.value)
        var P = Number(Pass.value)

        if (P <= 0) {
            window.alert('Passo Invalido! Considerando Passo 1')
            P = 1
        }

        if (I < F) {
            //crescente
            for (let c = I; c <= F; c = c + P) {
                res.innerHTML += ` ${c} \u{1f449}`

            }
        } else {
            //contagem regressiva
            for (let c = I; c>= F; c = c - P) {
                res.innerHTML += ` ${c} \u{1f449}`
            }


        }
        res.innerHTML += `\u{1f3c1}`

    }

}

