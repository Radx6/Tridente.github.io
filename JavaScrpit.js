document.addEventListener("DOMContentLoaded", function () {
    const komorki = document.querySelectorAll("tbody td");
    const main = document.querySelector("main");

    // === KOSZYK ===
    const koszykBox = document.createElement("div");
    koszykBox.innerHTML = `
        <h2>🛒 Koszyk</h2>
        <table border="1" id="koszykTabela">
            <thead>
                <tr>
                    <th>Produkt</th>
                    <th>Ilość</th>
                    <th>Cena</th>
                    <th>Wartość</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
        <h3 id="suma">Suma: 0$</h3>
        <button id="wyczysc">Wyczyść wszystko</button>
        <hr>
    `;
    main.appendChild(koszykBox);

    // === PRALNIA ===
    const pralniaBox = document.createElement("div");
    pralniaBox.innerHTML = `
        <h2>💵 Pralnia</h2>
        <label>Kwota do prania:</label>
        <input type="number" id="kwotaPralnia" min="0" style="width:150px;">
        <h3 id="infoPralnia"></h3>
        <hr>
    `;
    main.appendChild(pralniaBox);

    const koszykTabela = document.querySelector("#koszykTabela tbody");
    const sumaBox = document.getElementById("suma");
    const infoPralnia = document.getElementById("infoPralnia");

    function formatuj(liczba) {
        return liczba.toLocaleString("pl-PL") + "$";
    }

    function aktualizujKoszyk() {
        koszykTabela.innerHTML = "";
        let suma = 0;

        document.querySelectorAll(".ilosc").forEach(input => {
            let ilosc = parseInt(input.value) || 0;
            let cena = parseFloat(input.dataset.cena);
            let nazwa = input.dataset.nazwa;

            if (ilosc > 0) {
                let wartosc = ilosc * cena;
                suma += wartosc;

                koszykTabela.innerHTML += `
                    <tr>
                        <td>${nazwa}</td>
                        <td>${ilosc}</td>
                        <td>${formatuj(cena)}</td>
                        <td>${formatuj(wartosc)}</td>
                    </tr>
                `;
            }
        });

        // === PRALNIA W KOSZYKU ===
        let kwotaPralnia = parseFloat(document.getElementById("kwotaPralnia").value) || 0;

        if (kwotaPralnia >= 10000 && kwotaPralnia <= 1000000) {
            let procent = kwotaPralnia <= 500000 ? 35 : 40;
            let prowizja = kwotaPralnia * (procent / 100);
            let doWyplaty = kwotaPralnia - prowizja;

            suma += doWyplaty;

            koszykTabela.innerHTML += `
                <tr style="background:#f0f0f0">
                    <td>Pralnia (${procent}%)</td>
                    <td>1</td>
                    <td>${formatuj(kwotaPralnia)}</td>
                    <td>${formatuj(doWyplaty)}</td>
                </tr>
            `;

            infoPralnia.innerText =
                "Prowizja: " + procent + "% | Otrzymasz: " + formatuj(doWyplaty);
        } else if (kwotaPralnia > 0) {
            infoPralnia.innerText = "Kwota poza zakresem (10 000 - 1 000 000)";
        } else {
            infoPralnia.innerText = "";
        }

        sumaBox.innerText = "Suma: " + formatuj(suma);
    }

    // === DODAWANIE ILOŚCI DO PRODUKTÓW ===
    komorki.forEach(td => {
        let tekst = td.innerText;
        let match = tekst.match(/(\d+)\$?$/);

        if (match) {
            let cena = parseFloat(match[1]);
            let nazwa = tekst.replace(/(\d+)\$?$/, "").trim();

            let br = document.createElement("br");
            let input = document.createElement("input");

            input.type = "number";
            input.min = "0";
            input.value = "0";
            input.classList.add("ilosc");
            input.dataset.cena = cena;
            input.dataset.nazwa = nazwa;
            input.style.width = "60px";

            input.addEventListener("input", aktualizujKoszyk);

            td.appendChild(br);
            td.appendChild(input);
        }
    });

    document.getElementById("kwotaPralnia")
        .addEventListener("input", aktualizujKoszyk);

    document.getElementById("wyczysc").addEventListener("click", function () {
        document.querySelectorAll(".ilosc").forEach(input => {
            input.value = 0;
        });
        document.getElementById("kwotaPralnia").value = "";
        aktualizujKoszyk();
    });
});