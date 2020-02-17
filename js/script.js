var nome = prompt("Qual'è il tuo nome?")
var cognome = prompt('Qual\'è il tuo cognome?')
var colorePreferito = prompt('Qual\'è il tuo colore preferito?')
document.getElementById('info-utente1').innerHTML = nome + cognome + colorePreferito + 20;

var data = new Date();
var annoCorrente = data.getFullYear();
document.getElementById('info-utente2').innerHTML = nome + cognome + colorePreferito + annoCorrente;
document.getElementById('info-utente3').innerHTML = nome + ' ' + cognome + ' ' + colorePreferito + ' ' + annoCorrente;
