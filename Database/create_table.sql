CREATE TABLE blogs(
	id serial PRIMARY KEY NOT NULL,
	datecreated DATE NOT NULL DEFAULT CURRENT_DATE,
	"user" VARCHAR(100),
	title TEXT,
	author VARCHAR(255),
	content TEXT
)