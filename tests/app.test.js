import { loadTodoFromApi } from "../src/todo.service.js";
import { displayTodos } from "../src/app.js";

jest.mock("../src/todo.service");

test("it displays todo items from API", async () => {
  document.body.innerHTML = `
    <main></main>
  `;

  loadTodoFromApi.mockResolvedValue([
    { id: 1, text: "MOCK_TODO", done: false },
  ]);

  await displayTodos();

  expect(document.querySelector("main ul")).not.toBeNull();
  expect(document.querySelectorAll("ul li").length).toBe(1);
  expect(document.querySelector("ul li").textContent).toContain("MOCK_TODO");
});
