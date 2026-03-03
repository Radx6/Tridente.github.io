document.getElementById("zatwierdzKoszyk").addEventListener("click", function () {

    let produkty = [];
    let tresc = "ZAMÓWIENIE\n\n";
    let suma = 0;

    document.querySelectorAll(".ilosc").forEach(input => {
        let ilosc = parseInt(input.value) || 0;

        if (ilosc > 0) {
            let nazwa = input.dataset.nazwa;
            let cena = parseFloat(input.dataset.cena);
            let wartosc = ilosc * cena;

            suma += wartosc;

            produkty.push({
                nazwa: nazwa,
                cena: cena,
                ilosc: ilosc
            });

            tresc += nazwa + "\n";
            tresc += "Ilość: " + ilosc + "\n";
            tresc += "Cena za sztukę: " + cena + "$\n";
            tresc += "Wartość: " + wartosc + "$\n\n";
        }
    });

    if (produkty.length === 0) {
        alert("Koszyk jest pusty.");
        return;
    }

    tresc += "---------------------\n";
    tresc += "SUMA: " + suma + "$";

    // zapis do localStorage
    localStorage.setItem("koszyk", JSON.stringify(produkty));

    // generowanie pliku
    const blob = new Blob([tresc], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "zamowienie.txt";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // opóźnienie 1 sekundy przed przejściem na koszyk.html
    setTimeout(() => {
        window.location.href = "koszyk.html";
    }, 1000);
});
