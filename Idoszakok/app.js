/*
Készíts programot, amely bekér egy hónapszámot (1-12)!

A program:

Tárolja a hónapok adatait egy tömbben, amely objektumokat tartalmaz.
Egy függvény segítségével keresse meg a hónap adatait.
A függvény adja vissza:
a hónap nevét,
az évszakot,
a hónap napjainak számát.
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

//1. feladatresz
const honapok=[
    {szam:1,honap:"Január",evszak:"Tél",napokSzama:31},
    {szam:2,honap:"Február",evszak:"Tél",napokSzama:28},
    {szam:3,honap:"Március",evszak:"Tavasz",napokSzama:31},
    {szam:4,honap:"Április",evszak:"Tavasz",napokSzama:30},
    {szam:5,honap:"Május",evszak:"Tavasz",napokSzama:31},
    {szam:6,honap:"Június",evszak:"Tavasz",napokSzama:30},
    {szam:7,honap:"Július",evszak:"Nyár",napokSzama:31},
    {szam:8,honap:"Augusztus",evszak:"Nyár",napokSzama:31},
    {szam:9,honap:"Szeptember",evszak:"Ősz",napokSzama:30},
    {szam:10,honap:"Október",evszak:"Ősz",napokSzama:31},
    {szam:11,honap:"November",evszak:"Ősz",napokSzama:30},
    {szam:12,honap:"December",evszak:"Tél",napokSzama:31}
]



