CREATE TABLE "koalas"(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100),
	"gender" VARCHAR(10),
	"age" INTEGER,
	"ready_to_transfer" BOOLEAN,
	"notes" VARCHAR(500)
	);
	
INSERT INTO "koalas"
	("name", "gender", "age", "ready_to_transfer", "notes")
	VALUES
	('Scotty', 'M', 4, true, 'Born in Guatemala'),
	('Jean', 'F', 5, true, 'Allergic to lots of lava'),
	('Ororo', 'F', 7, false, 'Loves listening to Paula (Abdul)'),
	('K''leaf', 'NB', 15, false, 'Never refuses a treat'),
	('Charlie', 'M', 9, true, 'Favorite band is Nirvana'),
	('Betsy', 'F', 4, true, 'Has a pet iguana');

DELETE FROM "koalas"
	WHERE "id" = $1;

UPDATE "koalas"
	SET "ready_to_transfer" = $2
	WHERE "id" = $1;

SELECT * FROM "koalas"
    ORDER BY "id"

INSERT INTO "koalas"
	("name", "gender", "age", "ready_to_transfer", "notes")
	VALUES
	($1, $2, $3, $4, $5);