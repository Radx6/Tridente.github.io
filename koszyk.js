const checkoutBtn = document.getElementById("checkoutBtn")
const orderList = document.getElementById("orderList")

checkoutBtn.addEventListener("click", () => {

orderList.innerHTML = ""

let orderText = ""
let total = 0

document.querySelectorAll(".item").forEach(item => {

const name = item.querySelector(".itemName")?.innerText || item.innerText
const qty = parseInt(item.querySelector(".qty").value)
const price = parseInt(item.dataset.price)

if(qty > 0){

const itemTotal = qty * price
total += itemTotal

orderText += `${name} x${qty} = ${itemTotal}$<br>`

}

})

if(orderText === ""){
orderList.innerHTML = "Koszyk jest pusty"
return
}

orderList.innerHTML = orderText + "<br><b>Łączna cena: "+total+"$</b>"

})