const teste = document.getElementById("teste");

const testeJS = () => {
  alert("Funcionou!");
};

teste.addEventListener("mouseover", (ev) => {
  console.log(ev.target);
});
