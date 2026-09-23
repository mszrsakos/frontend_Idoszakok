/*
Készíts programot, amely bekér egy hónapszámot (1-12)!

A program:

//Tárolja a hónapok adatait egy tömbben, amely objektumokat tartalmaz.//

//Egy függvény segítségével keresse meg a hónap adatait.//

//A függvény adja vissza:
a hónap nevét,
az évszakot,
a hónap napjainak számát.//
Ha a felhasználó nem számot vagy nem megfelelő értéket ad meg, a program try-catch segítségével kezelje a hibát.
Az eredményt írja ki a konzolra.
Elvárt kimenetek
Példa 1
Adj meg egy hónapszámot (1-12): 4 Hónap: Április Évszak: Tavasz Napok száma: 30
Példa 2
Adj meg egy hónapszámot (1-12): 15 Hiba: A hónapszámnak 1 és 12 közé kell esnie!
Példa 3
Adj meg egy hónapszámot (1-12): alma Hiba: Nem számot adtál meg!


*/


let honapok = [
    { honap: "Január", evszak: "Tél", napokSzama: 31, unnep:"Nincs ünnep"},
    { honap: "Február", evszak: "Tél", napokSzama: 28, unnep:"Valentinnap" },
    { honap: "Március", evszak: "Tavasz", napokSzama: 31,unnep:"Nőnap" },
    { honap: "Április", evszak: "Tavasz", napokSzama: 30, unnep:"Húsvét" },
    { honap: "Május", evszak: "Tavasz", napokSzama: 31, unnep:"Nincs ünnep" },
    { honap: "Június", evszak: "Nyár", napokSzama: 30, unnep:"Nincs ünnep" },
    { honap: "Július", evszak: "Nyár", napokSzama: 31, unnep:"Nincs ünnep" },
    { honap: "Augusztus", evszak: "Nyár", napokSzama: 31, unnep:"Nincs ünnep" },
    { honap: "Szeptember", evszak: "Ősz", napokSzama: 30, unnep:"Nincs ünnep" },
    { honap: "Október", evszak: "Ősz", napokSzama: 31, unnep:"Halloween" },
    { honap: "November", evszak: "Ősz", napokSzama: 30, unnep:"Nincs ünnep" },
    { honap: "December", evszak: "Tél", napokSzama: 31, unnep:"Karácsony" }
];
function Honapkereses(honapIn) {
    return honapok[honapIn - 1];
};
let Start = () => {
    const eredmeny = document.getElementById("eredmeny");
    const honapInput = document.getElementById("honapIn").value.trim();

    try {
        if (honapInput === "") {
            throw new Error("Nem lehet üres a mező!");
        }

        let honapIn = Number(honapInput);

        if (isNaN(honapIn)) {
            throw new Error("Nem adhatsz meg betűket!");
        }
        const csakSzamRegex = /^\d+$/;

        if (!csakSzamRegex.test(honapInput)) {
            throw new Error("Nem adhatsz meg speciális karaktereket!");
        }
        if (!Number.isInteger(honapIn) || honapIn < 1 || honapIn > 12) {
            throw new Error("A hónapszámnak 1 és 12 közé kell esnie!");
        }

        const adatok = Honapkereses(honapIn);

        eredmeny.textContent =
            `Hónap: ${adatok.honap} | Évszak: ${adatok.evszak} | Napok száma: ${adatok.napokSzama}`;

    } catch (error) {
        eredmeny.textContent = `Hiba: ${error.message}`;
    }
};





