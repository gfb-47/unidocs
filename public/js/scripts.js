// variaveis globais o//
const elementoRelogio = document.querySelector("#relogio");
const dataAtual = new Date();

// navegacao suave para voltar ao topo
const irParaTopo = (event) => {
  if (typeof event == "undefined") {
    let limite = 100;
    let opacidade = 1200;
    let botao = document.querySelector(".ir-topo");

    document.onscroll = () => {
      let top = document.documentElement.scrollTop;
      if (top > limite) {
        botao.classList.add("visivel");
      } else {
        botao.classList.remove("transparente");
        botao.classList.remove("visivel");
      }
      if (top > opacidade) {
        botao.classList.add("transparente");
      }
    };
  } else {
    event.preventDefault();
  }

  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

// relogio
const relogio = (elemento, data) => {
  data.setSeconds(data.getSeconds() + 1);
  elemento.innerText = data.toLocaleDateString("pt-br", {
    year: "numeric",
    month: "long" || "short" || "numeric",
    day: "numeric" || "2-digit",
    hour: "numeric" || "2-digit",
    minute: "numeric" || "2-digit",
    second: "numeric" || "2-digit",
  });
};

// video player
const videoPlayer = () => {
  const player = document.querySelector("#player");
  const iframe = player.getElementsByTagName("iframe")[0];

  document.querySelectorAll("a.video-botao").forEach((elemento) =>
    elemento.addEventListener("click", function (event) {
      event.stopPropagation();
      event.preventDefault();
      event.path.forEach((e) => {
        url = `${e.href}?enablejsapi=1`;
        if (e.nodeName == "A" && iframe.src != url) {
          iframe.src = url;
        }
      });

      player.style.display = "block";
      document.body.style.overflow = "hidden";
    })
  );

  player.querySelector(".fechar").addEventListener("click", function (event) {
    event.stopPropagation();
    event.preventDefault();
    player.style.display = "none";
    document.body.style.overflow = "auto";
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"' + "stopVideo" + '","args":""}',
      "*"
    );
  });
};

relogio(elementoRelogio, dataAtual);

$(function () {
  // Bootstrap
  $('[data-toggle="tooltip"]').tooltip();

  // Iniciando funcoes
  irParaTopo();
  videoPlayer();
  setInterval(() => relogio(elementoRelogio, dataAtual), 1000);
});
