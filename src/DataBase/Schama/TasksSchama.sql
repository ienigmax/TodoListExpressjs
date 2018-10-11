
PRAGMA foreign_keys = false;

-- ----------------------------
-- Table structure for tasks
-- ----------------------------
DROP TABLE IF EXISTS "tasks";
CREATE TABLE "tasks" (
  "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  "uuid" varchar NOT NULL,
  "title" varchar,
  "content" varchar,
  "created_at" datetime,
  "updated_at" datetime,
  "status" integer DEFAULT '0'
);

-- ----------------------------
-- Auto increment value for tasks
-- ----------------------------
UPDATE "sqlite_sequence" SET seq = 87 WHERE name = 'tasks';

-- ----------------------------
-- Indexes structure for table tasks
-- ----------------------------
CREATE UNIQUE INDEX "tasks_uuid_unique"
ON "tasks" (
  "uuid" ASC
);

PRAGMA foreign_keys = true;
