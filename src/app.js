const TODO_ITEMS = [
  { id: 1, text: "Faire les courses", done: false },
  { id: 2, text: "Aller chercher les enfants", done: true },
];

const addTodo = (item) => {
  const container = document.querySelector("ul");

  container.insertAdjacentHTML(
    "beforeend",
    `
        <li>
            <label>
                <input type="checkbox" id="${item.id}" ${
      item.done ? "checked" : ""
    } /> 
                ${item.text}
            </label>
        </li>
    `
  );
};

TODO_ITEMS.forEach((item) => addTodo(item));
