/*
Scopo del gioco:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina
nomecognomecolorepreferito20
nomecognomecolorepreferito2020
nome;cognome;colorepreferito;2020
nome;cognome;colorepreferito;20
*/

var nome = prompt("Qual'è il tuo nome?")    // con prompt chiedo nome all'utente
var cognome = prompt('Qual\'è il tuo cognome?')     // con prompt chiedo cognome
var colorePreferito = prompt('Qual\'è il tuo colore preferito?')        // con prompt chiedo colore preferito
document.getElementById('info-utente1').innerHTML = nome + cognome + colorePreferito + 20;      // inserisco nome, cognome e colore preferito + 20 all'id 'info-utente1'

var data = new Date();
var annoCorrente = data.getFullYear();
document.getElementById('info-utente2').innerHTML = nome + cognome + colorePreferito + annoCorrente;    // utilizzo la variabile annoCorrente per inserire l'anno corrente
document.getElementById('info-utente3').innerHTML = nome + ';' + cognome + ';' + colorePreferito + ';' + annoCorrente;
document.getElementById('info-utente4').innerHTML = nome + ';' + cognome + ';' + colorePreferito + ';' + (annoCorrente - 2000); // per ottenere il numero 20, prendo l'anno corrente e sottraggo 2000
