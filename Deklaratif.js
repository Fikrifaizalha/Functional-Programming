const { json } = require("express/lib/response");

const names = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExMark = names.map((name) => `${name}!`);

console.log(newNamesWithExMark);
