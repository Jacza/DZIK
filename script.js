const p1 = document.querySelector('#p1');
const wynik = document.querySelector('#wynik');
const button = document.querySelector('#b1');

let liczba = 1;
let tekst = "Liczba: ";
let dzik = false;
let czas = 1000;
let intervalDzik = setInterval(Dzik, czas);

button.addEventListener("click", () => {
    dzik = true;
});

function Czy7(l) {
    let dlug = l.toString().length;
    let tym = 0;
    for(let i = 0; i < dlug; i++) {
        tym = l % 10;
        if(tym == 7) {
            return true;
        }
        l = l / 10;
    }
}

function Dzik() {
    if((liczba % 7==0 || Czy7(liczba)) && dzik == false) {
        wynik.textContent = "Przegrałes: nie wybrałeś przycisku";
        clearInterval(intervalDzik);
        return;
    }
    else if (!(liczba % 7==0 || Czy7(liczba)) && dzik == true){
        wynik.textContent = "Przegrałeś: wybrałeś przycisk w złym momencie";
        clearInterval(intervalDzik);
        return;
    }
    dzik = false;
    liczba++;
    p1.textContent = tekst + liczba;
    if(liczba % 10 == 0) {
        czas = czas - 500;
        clearInterval(intervalDzik);
        intervalDzik = setInterval(Dzik, czas);
    }
}