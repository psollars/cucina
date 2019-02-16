CREATE TABLE IF NOT EXISTS instruction (
  id          SERIAL        PRIMARY KEY,
  recipe_id   BIGINT        NOT NULL,
  sort_order  BIGINT        NOT NULL,
  instruction VARCHAR(1024) NOT NULL,
  created_at  TIMESTAMP     WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP     WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT instruction_id_recipe_id_fkey FOREIGN KEY (recipe_id)
      REFERENCES recipe (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
);
