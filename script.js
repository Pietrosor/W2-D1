// SI PREFERISCE SCRIVERE JAVASCRIPT IN UN DIVERSO FILE
// PER NON APPESANTIRE HTML E TENERLO PULITO

// è collegato ad un file html con un tag <script>
// all'invio della pagina html, funzionera anche questo in js

console.log("Hello world")

// Il lavoro dello sviluppatore si basa sulla RISOLUZIONE
// tramite processi logici e algoritmi
// un algoritmo è una sequenza di passaggi per una risoluzione
// ogni algoritmo porta la STESSA SOLUZIONE

// VARIABILE
// una variabile è un contenitore per un valore
// serve a memorizzare un dato per uno step successivo nel nostro algoritmo
// le variabili in javascript si definiscono in keyword (let) la si chiama come si vuole senza spazi
// camelCase (per mettere più parole la prima in minuscolo poi in maiuscolo)
// let nomeFattoDaPiùParole
let myVariable //ho definito una variabile e chiamata myvariable, ora non ha valore
// per assegnare un valore in JS si usa =
myVariable = "farina"
// ora la parola farina è nella variabile myVariable

console.log(myVariable)

let box //creata la variabile box
// SERVE ASSEGNARGI UN VALORE
box = 100

console.log(box)

// la riga di creazione e assegnazione possono essere fatte insieme

let number = 150
console.log(number) //150

// il vaolre di una variabile può sempre essere modificato

number = 200
console.log(number) //200

let addition = 10
addition = addition + number
console.log(addition)

//  TIPI DI VARIABILI
// stringa --> farina, pietro, etc..
// numerico --> 100,234, etc...
// booleani --> true or false (senza ' o ")
// undefined --> valore di una variabile a cui non è stato assegnato valore (di solito un errore)
// null --> indica l'assenza di un valore (di proposito)

console.log(Array(16).join("lol" - 1) + "Batman")

// IN JAVASCRIPT è UNA PESSIMA ABITUDINE CAMBIARE IL NOME DI UNA VARIABILE (da stringa a numero.)

// COSTANTI
// questo è un valore che non può essere modificato
const pi = "3,14"
console.log(pi)

// pi = "45" // ERRORE che viene riportato in console
// console.log(pi)

// VALORI BOOLEANI
// esprimono veridicità o meno (TRUE OR FALSE)
let canYouDrive = true
let doYouSmoke = false

let num1 = 5
let num2 = 15
let num3 = 30
let num4 = 15

let bool1 = num1 < num2 //true
let bool2 = num3 === num4 //false

console.log(num1 < num2) //true
console.log(num2 < num1) //false
console.log(num4 <= num2) //true
console.log(num4 === num3) //false --> il triplo uguale è comparatore di uguaglianza, con il singolo si cambia il valore
console.log(100 == "100") //sconsigliato da usare i due uguali. Confondono i valori ma non il tipo

let carrello = 55
let data = "28/11/2025"

// METTIAMO CHE DEVONO VERIFICARSI ENTRAMBE PER FUNZIONARE

const blackFridaySale = carrello >= 50 && data === "28/11/2025"
// FALSE perchè vera solo una

let voto = 17
let firstName = "Mario"

// per passare l'esame devi avere almeno 18 oppure chiamarti Mario

const examIsPassed = voto >= 18 || (firstName = "Mario") // true

// || sta per 'or'
//  basta un true

const result = num1 === num3 // false
console.log(!result) // mettendo ! darà sempre il risultato opposto
