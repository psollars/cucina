CREATE TABLE IF NOT EXISTS ingredient (
  id          SERIAL       PRIMARY KEY,
  recipe_id   BIGINT       NOT NULL,
  description VARCHAR(256) NOT NULL,
  quantity    VARCHAR(64)  NOT NULL,
  unit        VARCHAR(64)  NULL,
  optional    BOOLEAN      NULL,
  created_at  TIMESTAMP    WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP    WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT ingredient_id_recipe_id_fkey FOREIGN KEY (recipe_id)
      REFERENCES recipe (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
);
