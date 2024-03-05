import { sql } from "@vercel/postgres";

function submit(event) {
  console.log(event);
  const result = sql`INSERT INTO users (email, password) VALUES (${email}, ${password})`;
}