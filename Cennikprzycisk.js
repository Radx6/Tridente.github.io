const checkoutBtn = document.getElementById("checkoutBtn")

checkoutBtn.addEventListener("click", () => {

let cart = []

document.querySelectorAll(".item").forEach(item => {

const name = item.querySelector(".itemName").innerText
const qty = parseInt(item.querySelector(".qty").value)
const price = parseInt(item.dataset.price)

if(qty > 0){

cart.push({
name:name,
qty:qty,
price:price
})

}

})

localStorage.setItem("cart", JSON.stringify(cart))

window.location.href = "koszyk.html"

})