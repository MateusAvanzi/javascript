function calcular() {
    let Alt = document.getElementById("txtAlt")
    let Peso = document.getElementById("txtPeso")
    let Res = document.getElementById("res")
    

    if (Alt.value.length == 0 || Peso.value.Length == 0) {
        window.alert('[ERRO] Informe seus dados')

    } 

    let A = Number(Alt.value)
    let P = Number(Peso.value)

    if (isNaN(A) || isNaN(P)) {
        window.alert('Altura e peso devem ser numeros')
        return;
    }

    if (A < 1 || A > 3) {
        window.alert('[ERRO] Altura deve estar entre 1 e 3 metros')
        return;
    }

    if (P < 30 || P > 300) {
        window.alert('[ERRO] Peso deve estar entre 30 e 300Kg')
        return;
    }
    
    
    
    
    else {
      

        Res.innerHTML = ''
        let R = P / (A * A)
        Res.innerHTML += (`IMC: ${R.toFixed(2)} <br>`)

        
    if (R > 0 && R < 18.5) {
        Res.innerHTML += ('Abaixo do Peso')

    }

    else if (R >= 18.5 && R <= 24.9) {
        Res.innerHTML += ('Peso ideal (Parabéns)')

    }

    else if (R >= 25 && R <= 29.9) {
        Res.innerHTML += ('Levemente acima do peso')

    }
    else if (R >= 30 && R < 34.9) {
        Res.innerHTML += ('Obesidade Grau I')

    }    else if (R >= 35 && R <= 39.9) {
        Res.innerHTML += ('Obesidade Grau II (severa)')

    }

    else {
        Res.innerHTML += ('Obesidade Grau III (mórbida)')


    }

    Alt.value = ''
    Peso.value = ''


}



    }
