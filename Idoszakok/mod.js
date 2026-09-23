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

document.getElementById("modositas").style.visibility = "hidden";
document.getElementById("ujUnnep").style.visibility = "hidden";
document.getElementById("modHonapIn").style.visibility = "hidden"; 
document.getElementById("modHonapTxt").style.visibility = "hidden";

let Start = () => {
    const eredmeny = document.getElementById("eredmeny");
    const honapInput = document.getElementById("honapIn").value.trim();

    try {
        const honapRegex = /^(?:[1-9]|1[0-2])$/;

        if (!honapRegex.test(honapInput)) {
            throw new Error("A hónapszámnak 1 és 12 közé kell esnie!");
        }

        const honapIn = Number(honapInput);
        const adatok = Honapkereses(honapIn);

        eredmeny.textContent =
            `Hónap: ${adatok.honap} | Évszak: ${adatok.evszak} | Napok száma: ${adatok.napokSzama} | Ünnep: ${adatok.unnep}`;

    } catch (error) {
        eredmeny.textContent = `Hiba: ${error.message}`;
    }

    document.getElementById("modositas").style.visibility = "visible";
    document.getElementById("ujUnnep").style.visibility = "visible";
    document.getElementById("modHonapIn").style.visibility = "visible";
    document.getElementById("modHonapTxt").style.visibility = "visible";
};

let modStart = () => {
    const kiIras = document.getElementById("kiIras");
    const modHonapInput = document.getElementById("modHonapIn").value.trim();
    const ujUnnep = document.getElementById("ujUnnep").value.trim();

    try {
        const honapRegex = /^(?:[1-9]|1[0-2])$/;

        if (!honapRegex.test(modHonapInput)) {
            throw new Error("A módosítandó hónap számának 1 és 12 közé kell esnie!");
        }

        if (ujUnnep === "") {
            throw new Error("Az ünnep név mező nem lehet üres!");
        }

        const honapIn = Number(modHonapInput);
        const adatok = Honapkereses(honapIn);


        adatok.unnep = ujUnnep;

        kiIras.textContent = `Sikeres módosítás! Hónap: ${adatok.honap} Évszak: ${adatok.evszak} | Napok száma: ${adatok.napokSzama} | Új ünnep: ${adatok.unnep}`;
    } catch (error) {
        kiIras.textContent = `Hiba: ${error.message}`;
    }
};