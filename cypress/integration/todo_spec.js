/// <reference types="Cypress" />

describe("Todo App", () => {
  it("should show todo items", () => {
    cy.intercept("https://ubrnopsjlvwleakngnmr.supabase.co/rest/v1/todos?*", {
      fixture: "../fixtures/items.json",
    });

    cy.visit("http://localhost:8080")
      .get("h1")
      .should("contain.text", "Todo")
      .get("ul li")
      .should("have.length", 2);
  });

  it("should add a todo item on submit", () => {
    cy.intercept("https://ubrnopsjlvwleakngnmr.supabase.co/rest/v1/todos?*", {
      fixture: "../fixtures/items.json",
    }).as("GetTodos");

    cy.intercept(
      "POST",
      "https://ubrnopsjlvwleakngnmr.supabase.co/rest/v1/todos"
    ).as("PostTodo");

    cy.visit("http://localhost:8080")
      .wait("@GetTodos")
      .get("input[type=text]")
      .type("MOCK_TODO")
      .get("button")
      .click()
      .wait("@PostTodo")
      .get("ul li")
      .should("have.length", 3);
  });

  it("should toggle a todo item", () => {
    cy.intercept("https://ubrnopsjlvwleakngnmr.supabase.co/rest/v1/todos?*", {
      fixture: "../fixtures/items.json",
    }).as("GetTodos");

    cy.intercept(
      "PATCH",
      "https://ubrnopsjlvwleakngnmr.supabase.co/rest/v1/todos?*"
    ).as("PutTodo");

    cy.visit("http://localhost:8080")
      .wait("@GetTodos")
      .get("input[type=checkbox]")
      .first()
      .click()
      .wait("@PutTodo")
      .get("input[type=checkbox]")
      .first()
      .should("be.checked");
  });
});
