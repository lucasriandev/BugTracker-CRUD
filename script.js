const formulario = document.querySelector("#form-bug");
const input = document.querySelector("#input-titulo");
const select = document.querySelector("#select-nivel");
const listaBugs = document.querySelector("#lista-bugs");

let bugs = JSON.parse(localStorage.getItem("listaDeBugs")) || [];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = input.value;
  if (valor === "") {
    alert("Descreva o bug!");
    return;
  }

  const novoBug = {
    id: Date.now(),
    titulo: valor,
    nivel: select.value,
  };

  bugs.push(novoBug);

  localStorage.setItem("listaDeBugs", JSON.stringify(bugs));

  renderizar();

  input.value = "";
});

function renderizar() {
  listaBugs.innerHTML = "";
  bugs.forEach((item, index) => {
    const divCard = document.createElement("div");
    divCard.classList.add("card-bug");

    divCard.innerHTML = `
    <div class="info">
    <h3>${item.titulo}</h3>
    <span class='tag'> nivel de urgência: ${item.nivel}<br> id: ${item.id}</span>
    </div>
    `;

    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = "🗑️";
    btnDelete.classList.add("btn-deletar");

    btnDelete.addEventListener("click", () => {
      bugs.splice(index, 1);
      localStorage.setItem("listaDeBugs", JSON.stringify(bugs));
      renderizar();
    });

    divCard.appendChild(btnDelete);
    listaBugs.append(divCard);
  });
}

renderizar();
