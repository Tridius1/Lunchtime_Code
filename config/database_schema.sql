CREATE TABLE "users" (
	"id" serial NOT NULL,
	"username" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL UNIQUE,
	"watchlist" varchar(4) ARRAY,
	CONSTRAINT Users_pk PRIMARY KEY ("id")
) WITH (
OIDS=FALSE
);
