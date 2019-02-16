const pg = require("./orm");

const recipesRepository = {
  getAllRecipes: function() {
    const sql = `
      SELECT title,
             description
        FROM recipe
       WHERE public = true;`;
    return pg.query(sql);
  },

  createRecipe: function(recipe) {
    const sql = `
      INSERT INTO recipe (
                    title,
                    description, 
                    public
                  )
           VALUES (
                    $1, 
                    $2,
                    $3
                  )
        RETURNING id;`;

    const values = [recipe.title, recipe.description, recipe.public];

    return pg.query(sql, values);
  }
};

module.exports = recipesRepository;
