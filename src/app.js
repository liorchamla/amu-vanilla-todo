import {
  loadTodoFromApi,
  toggleComplete,
  saveTodoToApi,
  loadTodoItemFromApi,
} from "./todo.service.js";

const displayTodos = () => {
  document.querySelector("main").innerHTML = `
        <h2>La liste des tâches</h2>
        <ul></ul>
        <form>
          <input type="text" name="todo-text" placeholder="Ajouter une tâche" />
          <button>Ajouter</button>
        </form>
      `;

  loadTodoFromApi().then((items) => {
    items.forEach((item) => addTodo(item));
  });

  document.querySelector("form").addEventListener("submit", onSubmitForm);
};

const onSubmitForm = (e) => {
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
};

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
            <a href="#/${item.id}">ℹ️</a>
        </li>
    `
  );

  document
    .querySelector("input#todo-" + item.id)
    .addEventListener("click", onClickCheckbox);
};

const displayTodoDetails = (id) => {
  loadTodoItemFromApi(id).then((item) => {
    document.querySelector("main").innerHTML = `
              <h2>Détails de la tâche ${item.id}</h2>
              <p><strong>Texte :</strong> ${item.text}</p>
              <p><strong>Status : </strong> ${
                item.done ? "Complété" : "A faire"
              }</p>
              <a href="#/">Retour à la liste</a>
          `;
  });
};

window.onpopstate = (e) => {
  const route =
    window.location.hash !== "" ? window.location.hash.substr(1) : "/";

  if (route === "/") {
    displayTodos();
    return;
  }

  const todoId = +route.substr(1);

  displayTodoDetails(todoId);
};

document.addEventListener("DOMContentLoaded", () => {
  window.dispatchEvent(new PopStateEvent("popstate"));
});
