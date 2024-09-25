/*На 8 балів:
Підготувати властивість PI:3.14 у своєму власному об'єкті таким чином,
щоб її не можна було змінити або видалити. */
const obj = {
  PI: 3.14,
};
Object.defineProperty(obj, "PI", {
  writable: false,
});
// console.log(obj);
// obj.PI = 4;
// console.log(obj);

/*На 12 балів:
Попередні задання+
Створити інтерактивний список справ (To-Do List), де користувач може додавати нові справи та
відзначати виконані. Використовувати this для позначення конкретного елемента, який взаємодіє
з користувачем, а також document для роботи з елементами сторінки.
Інструкція:
Створи HTML-сторінку, яка містить:
Поле вводу для нової справи (інпут).
Кнопку "Додати справу".
Порожній список (тег <ul>) для відображення справ.
Написати JavaScript-код, який:
-Додає нову справу до списку після натискання на кнопку "Додати справу".
-Додає можливість відзначати справу як виконану. Коли користувач натискає на конкретну справу у списку,
ця справа перекреслюється (стиль text-decoration: line-through).
-Використовує this для доступу до конкретного елемента списку, на який користувач натиснув, щоб змінити його стиль.
Підказки:
Для додавання нової справи використовувати метод document.createElement() для створення нового <li>.
Щоб змінювати стилі, використовуй style.textDecoration або додати/змінити клас елемента.

Очікуваний результат:
Користувач вводить текст нової справи у поле вводу.
Після натискання на кнопку "Додати справу", нова справа додається до списку.
При натисканні на будь-яку справу у списку, ця справа позначається як виконана (перекреслюється).
Повторний клік на виконану справу прибирає перекреслення.

Це завдання демонструє, як використовувати this у контексті подій для доступу до конкретних елементів списку,
а також як працювати з елементами через document для динамічного оновлення веб-сторінки. */
//!Подключения
const task_inpt = document.querySelector("#task_inp");
const task_list = document.querySelector("#task_list");
const add_task_btn = document.querySelector("#add_task_btn");

add_task_btn.addEventListener("click", () => {
  const new_task = document.createElement("li");
  new_task.innerHTML = `${task_inpt.value}`;
  new_task.classList.add("list_element");
  task_list.insertAdjacentElement("beforeend", new_task);
  new_task.addEventListener("click", function () {
    if (this.classList.contains("task_cmpl")) {
      this.classList.remove("task_cmpl");
    } else {
      this.classList.add("task_cmpl");
    }
  });
});