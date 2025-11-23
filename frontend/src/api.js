const API = "/api/items";

export const fetchItems = () => fetch(API).then(r => r.json());
export const createItem = (data) =>
  fetch(API, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  });

export const updateItem = (id, data) =>
  fetch(`${API}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  });

export const deleteItem = (id) =>
  fetch(`${API}/${id}`, { method: "DELETE" });

export const getItem = (id) =>
  fetch(`${API}/${id}`).then(r => r.json());
