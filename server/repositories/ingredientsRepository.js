const pg = require("./orm");

const ingredientsRepository = {
  getAllIngredients: function() {
    const sql = `SELECT * FROM ingredient;`;
    return pg.query(sql);
  },

  createIngredient: function(ingredient) {
    const sql = `INSERT INTO ingredient (
                              description, 
                              quantity,
                              unit,
                              optional,
                              recipe_id
                             )
                      VALUES (
                              $1, 
                              $2,
                              $3,
                              $4,
                              $5
                             );`;

    const values = [
      ingredient.description,
      ingredient.quantity,
      ingredient.unit,
      ingredient.optional,
      ingredient.recipeId
    ];

    return pg.query(sql, values);
  }
};

module.exports = ingredientsRepository;
