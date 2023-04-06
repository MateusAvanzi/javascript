function gerar() {

    var Numero = document.getElementById('nNum')
    var tab = document.getElementById('seltab')
    var res = document.getElementById('res')

    if (Numero.value.length == 0) {
        window.alert('Digite um numero')
    } else {
        var N = Number(Numero.value)
        tab.innerHTML = ''
      

        for (c = 1; c <= 10; c++  ) {
            let res = window.document.createElement('option')
            res.text += (`${N} X ${c} = ${N*c} `)
            res.value = `tab${c}`
            tab.appendChild(res)
      
            

        }

    }

}