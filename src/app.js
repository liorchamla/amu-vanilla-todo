document.addEventListener("DOMContentLoaded", () => {
  fetch("https://ubrnopsjlvwleakngnmr.supabase.co/rest/v1/todos", {
    headers: {
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODE5MjQ4MSwiZXhwIjoxOTUzNzY4NDgxfQ.3JdQW11rNZNpvcehhwFVaofXL2agE5LDn_3O4BvSAHw",
    },
  })
    .then((response) => response.json())
    .then((items) => {
      items.forEach((item) => addTodo(item));
    });
});

const onClickCheckbox = (e) => {
  const inputId = e.target.id;
  const id = +inputId.split("-").pop();
  const isDone = e.target.checked;

  e.preventDefault();

  fetch("https://ubrnopsjlvwleakngnmr.supabase.co/rest/v1/todos?id=eq." + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODE5MjQ4MSwiZXhwIjoxOTUzNzY4NDgxfQ.3JdQW11rNZNpvcehhwFVaofXL2agE5LDn_3O4BvSAHw",
      Prefer: "return=representation",
    },
    body: JSON.stringify({ done: isDone }),
  }).then(() => {
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

  fetch("https://ubrnopsjlvwleakngnmr.supabase.co/rest/v1/todos", {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODE5MjQ4MSwiZXhwIjoxOTUzNzY4NDgxfQ.3JdQW11rNZNpvcehhwFVaofXL2agE5LDn_3O4BvSAHw",
      Prefer: "return=representation",
    },
  })
    .then((response) => response.json())
    .then((items) => {
      addTodo(items[0]);

      input.value = "";
      input.focus();
    });
});
