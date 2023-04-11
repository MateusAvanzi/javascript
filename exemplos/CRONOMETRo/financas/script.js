let R = [];
let D = [];
let Res = document.getElementById('res');

function adicionarD() {

    // Obter valores dos campos de entrada

    let Aliment = document.getElementById('Alimentação')
    let Transp = document.getElementById('Transporte')
    let Saude = document.getElementById('Saude')
    let Lazer = document.getElementById('Lazer')

    


    if (Aliment.value <= 0 || Transp.value <= 0 || Saude.value <= 0 || Lazer.value <= 0) {
        window.alert('[ERRO] Digite todos os valores')
        return;
    } else {

        let A = Number(Aliment.value)
        let T = Number(Transp.value)
        let S = Number(Saude.value)
        let L = Number(Lazer.value)
        

        Res.innerHTML = ''
        D = A + T + S + L
        exibirDespesas()
        

    // Limpar os campos de entrada
    Aliment.value = '';
    Transp.value = '';
    Saude.value = '';
    Lazer.value = '';




    }


}




function adicionarR() {

    // Obter valores dos campos de entrada
    let Salario = document.getElementById("txtsalario")
    let Renda = document.getElementById("txtrenda")
    let Investimentos = document.getElementById("txtinvestimentos")

    if (Salario.value <= 0 || Renda.value <= 0 || Investimentos.value <= 0) {
        window.alert('[ERRO] Digite todos os valores')
        return;



    } else {
       let S = Number(Salario.value)
       let E = Number(Renda.value)
       let I = Number(Investimentos.value)

      

        Res.innerHTML = ''
        R = S + E + I
        exibirLucroOuPrejuizo()

        Salario.value = ''
        Renda.value = ''
        Investimentos.value = ''

    }


 

}

function gerar() {
    if (R > D) {
        Res.innerHTML += `Você teve um Lucro de ${formatarValor(R - D)}`
    } else {
        Res.innerHTML += `Você teve um Prejuízo de ${formatarValor(D - R)}`
    }
}

function exibirDespesas() {
    Res.innerHTML = `Despesas: ${formatarValor(D)} <br>`
}

function exibirLucroOuPrejuizo() {
    Res.innerHTML = `Lucro: ${formatarValor(R)} <br>`
}

function formatarValor(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',')
}

function limparTela() {
    Res.innerHTML = ''
}




