CREATE TABLE "users" (
	"id" serial NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"username" TEXT NOT NULL UNIQUE,
	"password" TEXT,
	"watchlist" TEXT[],
	CONSTRAINT Users_pk PRIMARY KEY ("id")
) WITH (
OIDS=FALSE
);
