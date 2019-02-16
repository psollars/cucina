const pg = require("./orm");

const instructionsRepository = {
  retrieveInstructionsByRecipeId: function(recipeId) {
    const sql = `
      SELECT id,
             sort_order AS order,
             instruction
        FROM instruction
       WHERE recipe_id = $1;`;

    const values = [recipeId];

    return pg.query(sql, values);
  },

  createInstruction: function(recipeId, instruction) {
    const sql = `
      INSERT INTO instruction (
                    recipe_id,
                    sort_order, 
                    instruction
                  )
           VALUES (
                    $1, 
                    $2,
                    $3
                  )
        RETURNING id;`;

    const values = [recipeId, instruction.sortOrder, instruction.instruction];

    return pg.query(sql, values);
  }
};

module.exports = instructionsRepository;
