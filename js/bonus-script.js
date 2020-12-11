//creo le variabili che conterranno i miei valori

var nome;
var cognome;
var colorePrefe;
var anno;
var risultatoPsw;
var età;
var annoNascita;
var risposta;

//definisco il contenuto della variabile "nome"

nome = prompt ('Come ti chiami?');

//definisco il contenuto della variabile "cognome"

cognome = prompt ('Ciao ' + nome + ' Qual\'è il tuo cognome?');

//definisco il contenuto della variabile "colorePrefe" (colore preferito)

colorePrefe = prompt ('Molto bene ' + nome + ' ' + cognome + ' conosciamoci meglio... Qual\'è il tuo colore preferito?');

//definisco il contenuto della variabile "anno" (darà l'anno corrente)

anno = new Date().getFullYear();
console.log('verifica anno corrente: ' + anno);

/* definisco il contenuto della variabile "risultatoPsw" e lo "stampo" sul foglio HTML
*/

document.getElementById('result').innerHTML = 'la tua password: ' + nome + cognome + colorePrefe + anno;

//dato il risultato avvio la possibilità di fare un gioco con l'utente

risultatoPsw = prompt ('la tua password: ' + nome + cognome + colorePrefe + anno + ' ' + 'ora ti andrebbe di fare un gioco?')


if(risultatoPsw === 'si') {
  età = prompt ('Fantastico! dimmi quanti anni hai e indovinerò l\'anno della tua nascita');
  annoNascita = prompt ('il tuo anno di nascita è: ' + (anno - età) + ' ho indovinato eeee??');
  if (annoNascita === 'si') {
    prompt ('lo sapevo grazie')

  } else {
    prompt ('non fare l\' imbroglione la matematica non è un opinione!')
  }

} else {
  prompt ('...ok non sei per niente simpatico..')
}
