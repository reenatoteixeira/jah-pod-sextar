const RESULT = document.getElementById('result'), ACTUAL_DATE = new Date(),
  DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  ACTUAL_DAY = DAY_NAMES[ACTUAL_DATE.getDay()], ACTUAL_HOUR = ACTUAL_DATE.getHours();

if (ACTUAL_DAY === 'Friday' && ACTUAL_HOUR < 12) {
  RESULT.innerHTML = 'Ainda não! Produtividade até 12h, depois tá livre.';
}

if (ACTUAL_DAY === 'Friday' && ACTUAL_HOUR >= 12) {
  RESULT.innerHTML = 'Já pode! Bom final de semana!';
}

if (ACTUAL_DAY === 'Saturday' || ACTUAL_DAY === 'Sunday') {
  RESULT.innerHTML = 'Tá atrasado, o pessoal já sextou faz tempo!';
}

if (ACTUAL_DAY !== 'Friday' && ACTUAL_DAY !== 'Saturday' && ACTUAL_DAY !== 'Sunday') {
  RESULT.innerHTML = 'Ainda não! Só na sexta-feira 12h.';
}
