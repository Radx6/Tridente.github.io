const items = document.querySelectorAll(".item");
const grandTotal = document.getElementById("grandTotal");

function updateTotal(){

let total = 0;

items.forEach(item => {

const price = parseInt(item.dataset.price);
const type = item.dataset.type;

const qtyInput = item.querySelector(".qty");
const itemTotal = item.querySelector(".itemTotal");

let qty = parseInt(qtyInput.value) || 0;

if(type === "weapon" && qty > 20){
qty = 20;
qtyInput.value = 20;
}

const itemPrice = qty * price;

itemTotal.innerText = itemPrice + "$";

total += itemPrice;

});

grandTotal.innerText = total + "$";

}

document.querySelectorAll(".qty").forEach(input=>{
input.addEventListener("input", updateTotal);
});
