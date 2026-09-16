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
    { honap: "Január", evszak: "Tél", napokSzama: 31 },
    { honap: "Február", evszak: "Tél", napokSzama: 28 },
    { honap: "Március", evszak: "Tavasz", napokSzama: 31 },
    { honap: "Április", evszak: "Tavasz", napokSzama: 30 },
    { honap: "Május", evszak: "Tavasz", napokSzama: 31 },
    { honap: "Június", evszak: "Nyár", napokSzama: 30 },
    { honap: "Július", evszak: "Nyár", napokSzama: 31 },
    { honap: "Augusztus", evszak: "Nyár", napokSzama: 31 },
    { honap: "Szeptember", evszak: "Ősz", napokSzama: 30 },
    { honap: "Október", evszak: "Ősz", napokSzama: 31 },
    { honap: "November", evszak: "Ősz", napokSzama: 30 },
    { honap: "December", evszak: "Tél", napokSzama: 31 }
];

let Honapkereses = () => {
    try {
        let honapIn = Number(document.getElementById("honapIn").value);
        if (isNaN(honapIn)) {
            throw new Error("Nem számot adtál meg!");
        }

        honapIn = Number(honapIn);

        if (honapIn < 1 || honapIn > 12) {
            throw new Error("A hónapszámnak 1 és 12 közé kell esnie!");
        }

        let honap = honapok[honapIn - 1];

        console.log("Hónap:", honap.honap);
        console.log("Évszak:", honap.evszak);
        console.log("Napok száma:", honap.napokSzama);

    } catch (error) {
        console.error("Hiba:", error.message);
    }
};

Honapkereses(honapIn);


