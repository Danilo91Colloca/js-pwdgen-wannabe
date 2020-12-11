//creo le variabili che conterranno i miei valori

var nome;
var cognome;
var colorePrefe;
var anno;
var risultatoPsw;

//definisco il contenuto della variabile "nome"

nome = prompt ('Rispondi alle mie domande per creare una password impenetrabile!!! Come ti chiami?');
console.log('il tizio si chiama ' + nome);

//definisco il contenuto della variabile "cognome"

cognome = prompt ('Ciao ' + nome + ' Qual\'è il tuo cognome?');
console.log('il cognome del tizio è ' + cognome);

//definisco il contenuto della variabile "colorePrefe" (colore preferito)

colorePrefe = prompt ('Molto bene ' + nome + ' ' + cognome + ' conosciamoci meglio... Qual\'è il tuo colore preferito?');
console.log('il colore preferito di ' + nome + ' ' + cognome + ' è ' + colorePrefe);

//definisco il contenuto della variabile "anno" (darà l'anno corrente)

anno = new Date().getFullYear();

/* definisco il contenuto della variabile "risultatoPsw" e lo "stampo" sul foglio HTML
*/

document.getElementById('result').innerHTML = 'grazie alle informazioni che mi hai fornito ho creato la password più sicura del mondo per te : ' + nome + cognome + colorePrefe + anno + ' ...credici &#128586;';
