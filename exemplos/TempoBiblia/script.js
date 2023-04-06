function calcular() {
  let Num = document.getElementById('txtnum');
  let Res = document.getElementById('res');

  let diasPorAno = 365;
  let capPorDia = 0;
  let diasTotal = 0;

  if (Num.value.length == 0 || Num.value <= 0) {
    window.alert('[ERRO] Valor inválido');
  } else {
    let N = Number(Num.value);

    if (N > 1328) {
      window.alert('[ERRO] O número de dias não pode ser maior que 1328.');
    } else {
      capPorDia = 1328 / N;

      Res.innerHTML = `Para o plano de leitura de ${N} dias, leia ${capPorDia.toFixed(0)} capítulos por dia.`;
    }
  }

  Num.value = '';
}

document.getElementById('btn-1ano').addEventListener('click', function() {
  document.getElementById('txtnum').value = 365;
  calcular();
});

document.getElementById('btn-180dias').addEventListener('click', function() {
  document.getElementById('txtnum').value = 180;
  calcular();
});

document.getElementById('btn-90dias').addEventListener('click', function() {
  document.getElementById('txtnum').value = 90;
  calcular();
});

document.getElementById('btn-2anos').addEventListener('click', function() {
  document.getElementById('txtnum').value = 730;
  calcular();
});