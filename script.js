const formulario = document.querySelector("#form-bug");
const input = document.querySelector("#input-titulo");
const select = document.querySelectorAll("#select-nivel");
const listaBugs = document.querySelector("#lista-bugs");

let bugs = JSON.parse(localStorage.getItem("listaDeBugs")) || [];
