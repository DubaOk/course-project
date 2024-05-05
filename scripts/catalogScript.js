const items = document.querySelectorAll(".AW-item")
window.onload = updateCartCounter;

items.forEach((element, inx) => {
  const button = element.childNodes[9]
  const titte = element.childNodes[3].innerText
  const V = element.childNodes[5].innerText
  const cost = element.childNodes[7].innerText

  button.addEventListener("click", () => {
    const itemsStorage = localStorage.getItem("cart") || "[]"
    const cart = JSON.parse(itemsStorage)
    const item = {titte, V, cost}
    localStorage.setItem("cart", JSON.stringify([...cart, item]))
    updateCartCounter();
  })
  
  

})
 
function updateCartCounter() {
  const itemsStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const cartCounter = document.getElementById("cartCounter");
  if (cartCounter) {
      cartCounter.textContent = itemsStorage.length.toString();
  }

 
}