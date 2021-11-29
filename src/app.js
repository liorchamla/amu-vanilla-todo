import {
  loadTodoFromApi,
  toggleComplete,
  saveTodoToApi,
} from "./todo.service.js";

document.addEventListener("DOMContentLoaded", () => {
  loadTodoFromApi().then((items) => {
    items.forEach((item) => addTodo(item));
  });
});

const onClickCheckbox = (e) => {
  const inputId = e.target.id;
  const id = +inputId.split("-").pop();
  const isDone = e.target.checked;

  e.preventDefault();

  toggleComplete(id, isDone).then(() => {
    e.target.checked = isDone;
  });
};

const addTodo = (item) => {
  const container = document.querySelector("ul");

  container.insertAdjacentHTML(
    "beforeend",
    `
        <li>
            <label>
                <input type="checkbox" id="todo-${item.id}" ${
      item.done ? "checked" : ""
    } /> 
                ${item.text}
            </label>
        </li>
    `
  );

  document
    .querySelector("input#todo-" + item.id)
    .addEventListener("click", onClickCheckbox);
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector('input[name="todo-text"]');

  const item = {
    text: input.value,
    done: false,
  };

  saveTodoToApi(item).then((items) => {
    addTodo(items[0]);

    input.value = "";
    input.focus();
  });
});
