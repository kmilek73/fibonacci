let n = 0;

function fibon(n) {
    if (n < 1) {
        return 0;
    } else if (n >= 1 && n < 2) {
        return 1;
    } else if (n > 2) {
        let pierwsza = 1;
        let druga = 1;
        let wynik = 0;
        for (i = 2; i < n; i++) {
            wynik = pierwsza + druga;
            pierwsza = druga;
            druga = wynik;
        } return wynik;

    }

}

console.log('Moja Tablica zwróciła ' + fibon(15));  
