document.addEventListener("DOMContentLoaded", function () {

    const koszykBody = document.getElementById("koszykBody");
    const sumaElement = document.getElementById("suma");
    const zatwierdzBtn = document.getElementById("zatwierdz");

    let koszyk = JSON.parse(localStorage.getItem("koszyk")) || [];
    let suma = 0;

    // wyświetlanie produktów w tabeli
    koszyk.forEach(p => {
        let wartosc = p.cena * p.ilosc;
        suma += wartosc;

        let wiersz = document.createElement("tr");
        wiersz.innerHTML = `
            <td>${p.nazwa}</td>
            <td>${p.ilosc}</td>
            <td>${p.cena}$</td>
            <td>${wartosc}$</td>
        `;

        koszykBody.appendChild(wiersz);
    });

    sumaElement.textContent = "Suma: " + suma + "$";


    // kliknięcie zatwierdź
    zatwierdzBtn.addEventListener("click", function () {

        if (koszyk.length === 0) {
            alert("Koszyk jest pusty.");
            return;
        }

        let tresc = "ZAMÓWIENIE\n\n";

        koszyk.forEach(p => {
            tresc += p.nazwa + "\n";
            tresc += "Ilość: " + p.ilosc + "\n";
            tresc += "Cena za sztukę: " + p.cena + "$\n";
            tresc += "Wartość: " + (p.cena * p.ilosc) + "$\n\n";
        });

        tresc += "---------------------\n";
        tresc += "SUMA: " + suma + "$";

        emailjs.send("service_v83zb7j", "template_votmqwn", {
            tresc_zamowienia: tresc
        })
        .then(function () {
            alert("Zamówienie wysłane!");
            localStorage.removeItem("koszyk");
            window.location.href = "cennik.html";
        })
        .catch(function (error) {
            alert("Błąd wysyłki: " + JSON.stringify(error));
        });

    });

});
