const RESULT = document.getElementById('result'),
  NOW = new Date(),
  DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  CURRENT_DAY = DAY_NAMES[NOW.getDay()],
  CURRENT_HOUR = NOW.getHours(),
  ANSWER = Math.floor(Math.random() * 5),
  ANSWERS = [
    [
      'Ainda não! Produtividade até 12h, depois tá livre.',
      'Calma, segura até 12h que já já você pode.',
      'Falta pouco, já já pode.',
      'Quase lá, só mais um pouco.',
      'Já são 12h? Então não pode.'
    ],
    [
      'Já pode! Quem fez, fez.',
      'Ainda aqui depois das 12h? Já pode sextar!',
      'Sextou! Já pode.',
      'Já pode! Bom final de semana!',
      'Já deu 12h? Então deve!'
    ],
    [
      'Tá atrasado, o pessoal já sextou faz tempo!',
      'Agora só na próxima sexta-feira.',
      'Ainda aqui? Perdeu o dia de sextar.',
      'Atrasado pra esse sextou, adiantado pro próximo.',
      'Agora já é sabadou, ou domingou?'
    ],
    [
      'Ainda não! Só na sexta-feira 12h.',
      'Calma, falta pouco.',
      'Ainda tá longe, segura a ansiedade.',
      'Mais tarde, agora vai trabalhar.',
      'Já? Claro que não!'
    ]
  ];

let message = ANSWERS[3][ANSWER];

if (CURRENT_DAY === 'Friday') {
  message = CURRENT_HOUR < 12 ? ANSWERS[0][ANSWER] : ANSWERS[1][ANSWER];
  
} else if (CURRENT_DAY === 'Saturday' || CURRENT_DAY === 'Sunday') {
  message = ANSWERS[2][ANSWER];
}

RESULT.innerHTML = message;
