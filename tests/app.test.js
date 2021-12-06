import { loadTodoFromApi } from "../src/todo.service.js";
import { displayTodos } from "../src/app.js";

jest.mock("../src/todo.service");

test("it displays todo items from API", async () => {
  document.body.innerHTML = `
    <main></main>
  `;

  loadTodoFromApi.mockResolvedValue([
    { id: 1, text: "MOCK_TODO", done: false },
    { id: 2, text: "MOCK_TODO_2", done: true },
  ]);

  await displayTodos();

  expect(document.querySelector("main ul")).not.toBeNull();
  expect(document.querySelectorAll("ul li").length).toBe(2);
  expect(document.querySelector("ul li").textContent).toContain("MOCK_TODO");
  expect(document.querySelector("ul li:nth-child(2)").textContent).toContain("MOCK_TODO_2");
});
