let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Ativar cor para navegação

      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove icone toggle e navbar quando clickar nos links da navbar(scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
//VERIFICAÇÃO DO TELEFONE
const phone = document.getElementById("phone");

phone.addEventListener("click", function () {
  phone.placeholder = "(xx)xxxxx-xxxx";
});

phone.addEventListener("change", verificaPhone);
function verificaPhone() {
  if (phone.value.length > 11) {
    phone.style.border = "red .3rem solid";
    alert("Número de telefone inválido, por favor digite novamente.");
    phone.value = "";
    phone.focus();
  } else phone.style.border = "#675af3 .2rem solid";
}
//VERIFICAÇÃO DO E-MAIL
const email = document.getElementsByClassName('email')[0];
email.addEventListener('change', verificaEmail);
function verificaEmail() {
  if (document.forms.myForm.elements[1].value == "" ||
    document.forms.myForm.elements[1].value.indexOf("@") == -1 ||
    document.forms.myForm.elements[1].value.indexOf(".") == -1) {
    email.style.border = "red .3rem solid";
    alert("Preencha campo E-MAIL corretamente!");
    //document.forms.myForm.elements[1].focus();
  } else email.style.border = "#675af3 .2rem solid";
}

const formulario = document.getElementById("myForm");
formulario.addEventListener("submit", function () {

  confete.style.display = "block";
  setTimeout(function () {
    // Ocultar o gif animado de confetes
    confete.style.display = "none";
    alert(
      "Obrigado! Formulário enviado com sucesso! Em breve retornarei seu contato."
    );
  }, 1000);
  const inputs = document.querySelectorAll("input");

  inputs.forEach(function (input) {
    input.value = "";
  });

  document.getElementById("txtMensagem").value = null;
});

function abrirLeiaMais() {
  const largura = 800; // Largura da janela
  const altura = 600; // Altura da janela
  const esquerda = (screen.width - largura) / 2; // Posição esquerda da janela
  const topo = (screen.height - altura) / 2;
  const janela = window.open(
    ".html",
    "Cristian",
    "width=" +
    largura +
    ", height=" +
    altura +
    ", left=" +
    esquerda +
    ", top=" +
    topo
  );
  janela.document.write("<title>Um pouco mais sobre Cristian</title>");
  janela.document.write(
    '<body bgcolor="#EEEEEE" style="color: #474549; font-family: sans-serif; text-align:center"><h1 style="color: #675af3">Breve histórico</h1><p >Nascido em Sorocaba em 15/06/1993. Sempre fui um amante e entusiasta de tecnologia. Parte dessa paixão resultou em meu interesse em migrar de área, da Arquitetura para o Desenvolvimento de Software. Em 2019, iniciei meus estudos na FAtec - Sorocaba, no curso de Análise e Desenvolvimento de Sitemas, onde busco os conhecimentos necessários para conquistar meus objetivos.</p></body>'
  );
}
