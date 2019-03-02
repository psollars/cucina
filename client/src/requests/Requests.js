const API_V1 = "/api/v1";

export async function fetchRecipeById(id) {
  const request = new Request(`${API_V1}/recipe/${id}`, {
    method: "GET"
  });

  return await fetch(request).then(response => response.json());
}

export async function fetchAllRecipes() {
  const request = new Request(`${API_V1}/recipes`, {
    method: "GET"
  });

  return await fetch(request).then(response => response.json());
}
