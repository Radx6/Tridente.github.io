document.getElementById("zatwierdzKoszyk").addEventListener("click", function () {

    let produkty = [];

    document.querySelectorAll(".ilosc").forEach(input => {
        let ilosc = parseInt(input.value) || 0;

        if (ilosc > 0) {
            produkty.push({
                nazwa: input.dataset.nazwa,
                cena: parseFloat(input.dataset.cena),
                ilosc: ilosc
            });
        }
    });

    if (produkty.length === 0) {
        alert("Koszyk jest pusty.");
        return;
    }

    localStorage.setItem("koszyk", JSON.stringify(produkty));
    window.location.href = "koszyk.html";
});
