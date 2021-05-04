// Сверстать страницу и подключить к ней файл со скриптом.
// На странице должны быть три текстовых параграфа, поле ввода и кнопка.
// Напишите скрипт, который будет выполнять следующие условия:
// 1.Кнопка скрыта, если в поле ввода нет значения.
// 2.При клике на кнопку добавляется новый параграф, содержащий текст из поля ввода.
// 3.*Если параграфов становится больше 5, первый из них удаляется.

export function createList(el) {
  el.innerHTML = `   
  <div>
    <form>
      <input class="userInput" placeholder="Paragraph text" required autofocus/>
      <button>Enter</button>
    </form>
  </div>
  <div class="history"></div>`;
  const input = el.querySelector("input");
  const button = el.querySelector("button");
  const history = document.querySelector(".history");

  const list = [];

  button.hidden = true;

  input.addEventListener("input", () => {
    if (input.value !== "") {
      button.hidden = false;
    }
  });

  button.addEventListener("click", () => {
    list.unshift(input.value);
    if (list.length > 5) {
      list.pop();
    }
    history.innerHTML = list.map((item) => `<p>${item}</p>`).join("");
    input.value = "";
    button.hidden = true;
  });
}

const element = document.createElement("div");
const body = document.querySelector("body");
body.insertAdjacentElement("afterbegin", element);
createList(element);
