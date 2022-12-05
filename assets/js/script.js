
//funzione per inserire valori nel display
function insertValue(string) {
    document.getElementById('history').value += string;
}

//funzione per il calcolo

function calcola() {

    document.getElementById('display').value = eval(document.getElementById('history').value);
}


//funzione per il cancella tutto

function clearAll() {
    document.getElementById('display').value = '';
    document.getElementById('history').value = '';
}
//funziona per il cancella ultimo

function clearLast() {
    let input = document.getElementById("history");
    input.value = input.value.substring(0, input.value.length - 1);
}