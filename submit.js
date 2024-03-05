import { sql } from "@vercel/postgres";

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = form.elements['email'].value;
        const password = form.elements['password'].value;

        submit(email, password);
    });
});

function submit(email, password) {
  console.log('submitting', email, password);
  const result = sql`INSERT INTO users (email, password) VALUES (${email}, ${password})`;
}