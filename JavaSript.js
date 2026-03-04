document.getElementById("zatwierdzKoszyk").addEventListener("click", function () {

    let produkty = [];
    let suma = 0;

    document.querySelectorAll(".ilosc").forEach(input => {
        let ilosc = parseInt(input.value) || 0;

        if (ilosc > 0) {
            let nazwa = input.dataset.nazwa;
            let cena = parseFloat(input.dataset.cena);
            let wartosc = ilosc * cena;
            suma += wartosc;

            produkty.push({ nazwa, cena, ilosc });
        }
    });

    if (produkty.length === 0) {
        alert("Koszyk jest pusty.");
        return;
    }

    // przygotowanie treści zamówienia
let tresc = "ZAMÓWIENIE\n\n";
produkty.forEach(p => {
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
.then(function(response) {
    alert("Zamówienie wysłane!");
    window.location.href = "koszyk.html";
})
.catch(function(error) {
    alert("Błąd wysyłki: " + JSON.stringify(error));
});


