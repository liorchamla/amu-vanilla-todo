const API_URL = "https://ubrnopsjlvwleakngnmr.supabase.co/rest/v1/todos";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODE5MjQ4MSwiZXhwIjoxOTUzNzY4NDgxfQ.3JdQW11rNZNpvcehhwFVaofXL2agE5LDn_3O4BvSAHw";

export const loadTodoFromApi = () => {
  return fetch(API_URL, {
    headers: {
      apiKey: API_KEY,
    },
  }).then((response) => response.json());
};

export const toggleComplete = (id, done) => {
  return fetch(API_URL + "?id=eq." + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      apiKey: API_KEY,
      Prefer: "return=representation",
    },
    body: JSON.stringify({ done: done }),
  });
};

export const saveTodoToApi = (item) => {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      apiKey: API_KEY,
      Prefer: "return=representation",
    },
  }).then((response) => response.json());
};
