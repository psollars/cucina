const API_BASE_PATH = "http://localhost:5000/api/v1";

export async function fetchRecipeById(id) {
  const request = new Request(`${API_BASE_PATH}/recipe/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return await fetch(request).then(response => response.json());
}
