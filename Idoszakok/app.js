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

function vegeredmeny(){
    let honap
    let evszak
    let honapIn= document.getElementById("honapIn");
    let honapBtn= document.getElementById("honapBtn");
    let eredmenyHon=document.getElementById("eredmenyHon");
    let eredmenyEvsz=document.getElementById("eredmenyEvsz");
    let clear=document.getElementById("clear");
    switch(Number(honapIn.value)){
        case 1:
            honap="Január"
            evszak="Tél"
            break
        case 2:
            honap="Február"
            evszak="Tél"
            break
        case 3:
            honap="Március"
            evszak="Tavasz"
            break
        case 4:
            honap="Április"
            evszak="Tavasz"
            break
        case 5:
            honap="Május"
            evszak="Tavasz"
            break
        case 6:
            honap="Június"
            evszak="Tavasz"
            break
        case 7:
            honap="Július"
            evszak="Nyár"
            break
        case 8:
            honap="Augusztus"
            evszak="Nyár"
            break
        case 9:
            honap="Szeptember"
            evszak="Ősz"
            break
        case 10:
            honap="Október"
            evszak="Ősz"
            break
        case 11:
            honap="November"
            evszak="Ősz"
            break
        case 12:
            honap="December"
            evszak="Tél"
            break
        default:
            honap="Ismeretlen"
            evszak="Ismeretlen"
    }
    eredmenyHon.innerText=honap
    eredmenyEvsz.innerText=evszak
}