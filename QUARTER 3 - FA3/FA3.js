function getRandomNumber() {
    return Math.ceil(Math.random() * 20);
}

var n1 = getRandomNumber();
var n2 = getRandomNumber();
var n3 = getRandomNumber();

document.getElementById("charmander").innerText = n1;
document.getElementById("squirtle").innerText = n2;
document.getElementById("bulbasaur").innerText = n3;

var maxNum = Math.max(n1, n2, n3);
var chosen = "";
if (n1 === maxNum) {
    chosen = "Charmander";
}

if (n2 === maxNum) {
    if (chosen.length > 0) {
        chosen = chosen.concat(", Squirtle");
    } else {
        chosen = "Squirtle";
    }
}
if (n3 === maxNum) {
    if (chosen.length > 0) {
        chosen = chosen.concat(", Bulbasaur");
    } else {
        chosen = "Bulbasaur";
    }
}

document.getElementById("most-chosen").innerText = chosen.concat(" (", maxNum, ")");

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var rivalLetter = n1 <= 26 ? alphabet[n1 - 1] : "Z";
document.getElementById("rival-letter").innerText = rivalLetter;

var totalMinutes = n2 * n3;
var hours = Math.floor(totalMinutes/60);
var minutes = totalMinutes % 60; 

document.getElementById("battle-time").innerText = totalMinutes + " minutes " + "(" + hours + " hours " + minutes + " minutes.)";
