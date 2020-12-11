//creo le variabili che conterranno i miei valori

var nome;
var cognome;
var colorePrefe;
var anno;
var risultatoPsw;
//definisco il contenuto della variabile "nome"

nome = prompt ('Come ti chiami?');
console.log('l\'utente si chiama: ' + nome);

//definisco il contenuto della variabile "cognome"

cognome = prompt ('Ciao ' + nome + ' Qual\'è il tuo cognome?');
console.log('il cognome dell\'utente è: ' + cognome);

//definisco il contenuto della variabile "colorePrefe" (colore preferito)

colorePrefe = prompt ('Molto bene ' + nome + ' ' + cognome + ' conosciamoci meglio... Qual\'è il tuo colore preferito?');
console.log('il colore preferito di ' + nome + ' ' + cognome + ' è ' + colorePrefe);

//definisco il contenuto della variabile "anno" (darà l'anno corrente)

anno = new Date().getFullYear();
console.log('verifica anno corrente: ' + anno);

/* definisco il contenuto della variabile "risultatoPsw" e lo "stampo" sul foglio HTML
*/

document.getElementById('result').innerHTML = 'la tua password: ' + nome + cognome + colorePrefe + anno;

console.log('risultato password visualizzata: ' + nome + cognome + colorePrefe + anno);
