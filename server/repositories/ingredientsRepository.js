const pg = require("./orm");

const ingredientsRepository = {
  getAllIngredients: function() {
    const sql = `
      SELECT * 
        FROM ingredient;`;

    return pg.query(sql);
  },

  createIngredient: function(recipeId, ingredient) {
    const sql = `
      INSERT INTO ingredient (
                    recipe_id,
                    description, 
                    quantity,
                    unit,
                    optional
                  )
           VALUES (
                    $1, 
                    $2,
                    $3,
                    $4,
                    $5
                  )
        RETURNING id;`;

    const values = [
      recipeId,
      ingredient.description,
      ingredient.quantity,
      ingredient.unit,
      ingredient.optional
    ];

    return pg.query(sql, values);
  }
};

module.exports = ingredientsRepository;
