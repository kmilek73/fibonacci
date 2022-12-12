let n = 10;

function fibon(n) {
    if (n < 1) {
        console.log("Liczba 0 :", "0  dla ciągu fibonacciego");
    } else if (n >= 1 && n < 2) {
        console.log("Liczba 1 :", "1  dla ciągu fibonacciego");
    } else {
        console.log("Liczba 0 :", "0  dla ciągu fibonacciego");
        console.log("Liczba 1 :", "1  dla ciągu fibonacciego");
        let pierwsza = 0;
        let druga = 1;
        for (i = 2; i < n; i++) {
            let wynik = pierwsza + druga;
            pierwsza = druga;
            druga = wynik;
            console.log("Liczba", i, ":", wynik, " dla ciągu fibonacciego");

        }
    }

}
fibon(n);
