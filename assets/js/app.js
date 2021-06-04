//Seleciona todos os elementos com a classe ".size" do html:
const tamanhos = document.querySelectorAll(".size");

let antigaCorTênis = "blue";
let animationEnd = true;

function mudarTamanho() {
  /*Muda os tamanhos no HTML:*/
  tamanhos.forEach((tamanho) => tamanho.classList.remove("active"));
  this.classList.add("active");
}
//Muda os tamanhos para os que foram clicados com a função:
tamanhos.forEach((tamanho) => tamanho.addEventListener("click", mudarTamanho));

//Seleciona todos os elementos com a classe ".color" do html:
const cores = document.querySelectorAll(".color");
//Seleciona todos os elementos com a classe ".shoe"
const todosTênis = document.querySelectorAll(".shoe");
//Seleciona todos os elementos com a classe ".gradient"
const gradientes = document.querySelectorAll(".gradient");
function mudarCor() {
  if (!animationEnd) {
    console.log("Cor clicada enquanto a animação era executada!");
  }
  /*Muda as cores no html:*/
  cores.forEach((cor) => cor.classList.remove("active"));
  this.classList.add("active");

  /*Muda a cor primária dos elementos que a usam:*/
  let corPrimária = this.getAttribute("primary");
  document.documentElement.style.setProperty("--primary", corPrimária);

  /*Muda a imagem do tênis para a da cor selecionada:*/
  let corTênis = this.getAttribute("color");
  let tênis = document.querySelector(`.shoe[color="${corTênis}"]`);
  todosTênis.forEach((s) => s.classList.remove("show"));
  tênis.classList.add("show");

  /*Muda o fundo gradiente:*/
  gradientes.forEach((g) => g.classList.remove("first", "second"));
  let gradiente = document.querySelector(`.gradient[color="${corTênis}"]`);
  gradiente.classList.add("first");

  /*Volta no gradiente que tava sem bugar:*/
  let prevGradiente = document.querySelector(
    `.gradient[color="${antigaCorTênis}"]`
  );
  prevGradiente.classList.add("second");
  antigaCorTênis = corTênis;

  /*Conserta a animação:*/
  animationEnd = false;
  gradiente.addEventListener("animationend", () => {
    animationEnd = true;
  });
}
//Muda as cores para as que foram clicadas com a função:
cores.forEach((cor) => cor.addEventListener("click", mudarCor));

/*Torna a página responsiva:*/
let tamanhoJanela = window.matchMedia("(max-width: 1000px)");
const fundoTênis = document.querySelector(".shoeBackground");
function mudarAlturaTela() {
  if (tamanhoJanela.matches) {
    let alturaTênis = todosTênis[0]; /*.offsetHeight;*/
    fundoTênis.style.height = `${alturaTênis * 0.9}px`;
  } else {
    fundoTênis.style.height = "475px";
  }
}
//Executa a função:
mudarAlturaTela();

window.addEventListener("resize", mudarAlturaTela);
