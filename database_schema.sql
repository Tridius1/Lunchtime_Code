CREATE TABLE "users" (
	"id" serial NOT NULL,
	"username" TEXT NOT NULL UNIQUE,
	"password" bit(256),
	"Watchlist" varchar(4) ARRAY,
	CONSTRAINT Users_pk PRIMARY KEY ("id")
) WITH (
OIDS=FALSE
);
