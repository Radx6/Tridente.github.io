function dodajDoKoszyka(){

let koszyk = [];

let wm29 = document.getElementById("wm29").value;
let bojowy = document.getElementById("bojowy").value;
let Vintage = document.getElementById("Vintage").value;
let P250 = document.getElementById("P250").value;
let APC = document.getElementById("APC").value;
let MM = document.getElementById("MM").value;

if(wm29 > 0){
koszyk.push({nazwa:"Pistolet WM 29", cena:25000, ilosc:wm29});
}

if(bojowy > 0){
koszyk.push({nazwa:"Pistolet Bojowy", cena:50000, ilosc:bojowy});
}

if(Vintage > 0){
koszyk.push({nazwa:"Vintage", cena:35000, ilosc:Vintage});
}

if(P250 > 0){
koszyk.push({nazwa:"P250", cena:35000, ilosc:P250});
}

if(Heavy > 0){
koszyk.push({nazwa:"Heavy", cena:70000, ilosc:Heavy});
}

if(APC > 0){
koszyk.push({nazwa:"APC", cena:18, ilosc:APC});
}

if(MM > 0){
koszyk.push({nazwa:"MM", cena:45, ilosc:MM});
}


localStorage.setItem("koszyk", JSON.stringify(koszyk));

alert("Dodano do koszyka");

}