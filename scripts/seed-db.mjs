import { Database } from "bun:sqlite";
const db = new Database("./data/clients.db");

db.run("DELETE FROM clients");

const insert = db.prepare(`
  INSERT INTO clients (name, email, address, latitude, longitude)
  VALUES (?, ?, ?, ?, ?)
`);

insert.run("Client Besançon", "besancon@example.com", "Besançon", 47.237829, 6.024053);
insert.run("Client Montbéliard", "montbeliard@example.com", "Montbéliard", 47.510238, 6.798819);
insert.run("Client Belfort", "belfort@example.com", "Belfort", 47.639674, 6.863849);
insert.run("Client Dijon", "dijon@example.com", "Dijon", 47.322047, 5.041480);

console.log("4 clients insérés dans la base.");
db.close();