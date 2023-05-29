// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const itemElement = document.querySelectorAll(".dropdown-item");

for (const newItem of itemElement) {
  newItem.classList.add("superdown-item");
}

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btnItem = document.querySelector(".btn");

if (btnItem.classList.contains("btn-secondary")) {
  btnItem.classList.remove("btn-secondary");
  btnItem.classList.add("btn-secondary");
}

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menuItem = document.querySelector(".menu");

menuItem.classList.remove("dropdown-menu");

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`;

const divElement = document.querySelector(".btn");
divElement.insertAdjacentHTML("beforeBegin", '<a href ="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const btnmenuItem = (document.getElementById("dropdownMenuButton").id =
  "superDropDown");

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const menudropdownItem = document.querySelector(".menu");
menudropdownItem.setAttribute("data-dd", 3);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const btndropdownItem = document.querySelector(".dropdown-toggle");
btndropdownItem.removeAttribute("type");
