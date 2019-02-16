CREATE TABLE IF NOT EXISTS recipe (
  id          SERIAL        PRIMARY KEY,
  title       VARCHAR(256)  NOT NULL,
  description VARCHAR(1024) NULL,
  public      BOOLEAN       NOT NULL          DEFAULT TRUE,
  created_at  TIMESTAMP     WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP     WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);