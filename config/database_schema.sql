CREATE TABLE "users" (
	"id" serial NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"user" TEXT NOT NULL UNIQUE,
	"password" TEXT,
	"Watchlist" varchar(4) ARRAY,
	CONSTRAINT Users_pk PRIMARY KEY ("id")
) WITH (
OIDS=FALSE
);
