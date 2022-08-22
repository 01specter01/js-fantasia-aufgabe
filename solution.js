// Es ist Montag. Du bist nach einem großartigen Wochenende zurück im Büro, aber dort erwartet dich eine schlechte Nachricht: Fantasia ist krank und die Deadline des Projekts rückt immer näher! Sie hat dir drei Funktionen überlassen, die Benennung ist aber nicht wirklich hilfreich und du musst nun herausfinden, ob und wie sie benutzt werden können.
// - Teste die Funktionen
// - Finde heraus, was sie tun und vor allem: wie sie es tun
// - Schreibe Kommentare in den Code
// - Finde passende Namen für Variablen
// - Bonus: Bestimme die Komplexität der Funktionen
// - Bonus: Gibt es Unterschiede, wenn bestimmte Argumente übergeben werden?
function functionA(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            const a = array[j];
            const b = array[j + 1];
            if (a < b) {
                array[j] = b;
                array[j + 1] = a;
            }
        }
    }

    return array;
}
console.log(functionA(["1", "2", "3", "4", "5", "6", "7", "8", "9"]));

//array von a wird mit array von b berglichen wenn a gerößer dann return array richtiger reinfolge.
//wörter und nummern werden sortiert wenn b größer a wird groß zu klein angezeigt.
function functionB(array) {
    let x;
    for (let i = 0; i < array.length - 1; i++) {
        x = i;
        for (let j = i; j < array.length; j++) {
            if (array[x] > array[j]) {
                x = j;
            }
        }
        if (i !== x) {
            const a = array[i];
            const b = array[x];
            array[i] = b;
            array[x] = a;
        }
    }
    return array;
}
console.log(
    functionB(["Max", "Monika", "Anton", "Anna", "Hubertus", "Hans-Peter"])
);
// function sortziert array es zeigt zuerst

function functionC(array) {
    let x;
    for (let i = 1; i < array.length; i++) {
        let j = i;
        x = array[i];
        while (j > 0 && array[j - 1] < x) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = x;
    }
    return array;
}
console.log(
    functionC(["Max", "Monika", "Anton", "Anna", "Hubertus", "Hans-Peter"])
);
//
