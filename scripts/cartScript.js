const cartEmpty = document.querySelector(".body-container-empty");
const cartFill = document.querySelector(".body-container-fill");
const header = document.querySelector(".shopContainer")

let totalPrice = 0;



// Функция для обновления корзины
function updateCart() {
    // Получаем текущие элементы из localStorage
    const itemsStorage = JSON.parse(localStorage.getItem("cart") || "[]");
    // Обнуляем корзину перед добавлением элементов
    cartFill.innerHTML = "";
    // Обнуляем общую стоимость
    totalPrice = 0;

    // Если корзина не пуста
    if (itemsStorage.length) {
        cartEmpty.style.display = "none"; // Скрыть элемент cartEmpty
        const newDiv = document.createElement('div');
        newDiv.classList.add('block');

        itemsStorage.forEach(element => {
            const {titte, V, cost} = element;
            totalPrice += parseFloat(cost);

            const newItem = document.createElement("div");
            newItem.classList.add("fill-div");
            newItem.innerHTML = `<h2 class='titte'>${titte}</h2><h2 class='V'>${V}</h2><p class='cost'>${cost} BYN</p><button class="button-delete">Удалить</button>`;
            
            newItem.querySelector(".button-delete").addEventListener("click", () => {
                // Удаление товара из localStorage
                const updatedCart = itemsStorage.filter(item => {
                    return (
                        item.titte !== titte ||
                        item.V !== V ||
                        item.cost !== cost
                    );
                });
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                // После удаления товара из localStorage
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                updateCartCounter(); // Добавить эту строку для обновления счетчика


                // Обновление корзины
                updateCart();
            });
            
            newDiv.appendChild(newItem);
            cartFill.appendChild(newDiv);
        });
        
    
        const form = document.createElement("div");
        form.classList.add("form");
        form.innerHTML = `<h2 class='titte-form'>Оформление заказа</h2><p class='total-cost'>Общая стоимость: ${totalPrice} BYN.</p><div class='pay'><p class='pay-metod'>Метод оплаты:</p><label for="toggleSwitch1">Наличные</label>
        <label class="switch">
        <input type="checkbox" id="toggleSwitch1" class="toggle-switch" required><span class="slider"></span></label>
        <label for="toggleSwitch2">Карта</label><label class="switch"><input type="checkbox" id="toggleSwitch2" class="toggle-switch"><span class="slider"></span></label></div><label for="addressInput">Адрес:</label>
        <input type="text" id="addressInput" name="address" placeholder="Введите ваш адрес" required><label for="phoneInput">Телефон:</label>
        <input type="tel" id="phoneInput" name="phone" placeholder="Введите ваш номер телефона" required><button class="button-delete" id="button-okeys">Оформить заказ!</button>
        `;
        cartFill.appendChild(form);
    } else {
        // Если корзина пуста, отображаем элемент cartEmpty
        cartEmpty.style.display = "flex";
    }
}

// Вызываем функцию обновления корзины при загрузке страницы
updateCart();

function updateCartCounter() {
  const itemsStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const cartCounter = document.getElementById("cartCounter");
  if (cartCounter) {
      cartCounter.textContent = itemsStorage.length.toString();
  }
}




const toggleSwitches = document.querySelectorAll('.toggle-switch');

toggleSwitches.forEach(toggleSwitch => {
  toggleSwitch.addEventListener('change', function() {
    // Если текущий переключатель включен, выключаем все остальные переключатели
    if (this.checked) {
      toggleSwitches.forEach(otherSwitch => {
        if (otherSwitch !== this) {
          otherSwitch.checked = false;
        }
      });
    }
  });
});


    const redirectButton = document.getElementById("reverseToCatalog");
    redirectButton.addEventListener("click", function() {
        window.location.href = "http://127.0.0.1:5500/html/catalog.html";
    });

    
  
    window.onload = updateCartCounter;
``