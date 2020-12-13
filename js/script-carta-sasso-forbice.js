//creo le variabili che conterranno i miei valori
var question;
var carta;
var sasso;
var forbice;
var congeda;
//definisco il contenuto della variabile "nome"

question = prompt ('carta, sasso o forbice?');
if (question === 'carta'){
  carta = prompt ('forbice!! ahahah dai riprova');
}
if (question === 'forbice'){
  forbice = prompt ('sasso!.... non piangere dai');
}
if (question === 'sasso'){
  sasso = prompt ('carta!! mi sa che non vincerai facilmente');
}

question = prompt ('carta, sasso o forbice?');
if (question === 'carta'){
  carta = prompt ('forbice!! ahahah volevi fregarmi');
}
if (question === 'forbice'){
  forbice = prompt ('sasso!.... non piangere dai');
}
if (question === 'sasso'){
  sasso = prompt ('carta!! mi sa che non vincerai facilmente');
}

question = prompt ('carta, sasso o forbice?');
if (question === 'carta'){
  carta = prompt ('forbice!! ahahah');
}
if (question === 'forbice'){
  forbice = prompt ('sasso!.... non piangere dai');
}
if (question === 'sasso'){
  sasso = prompt ('carta!! mi sa che non vincerai facilmente');
}

congeda = prompt ('vabbè basta mi sono scocciato...ciao')

document.getElementById('result').innerHTML = 'per sportività non t\'importuno'
