CREATE TABLE "auth" (
	"auth_id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"refresh_token" varchar(500) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
