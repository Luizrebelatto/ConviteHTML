function mostrarResposta() {
    document.getElementById("resposta").style.display = "block";
    document.getElementById("no").style.display = "none";
    document.getElementById("resposta-img").style.display = "block";
    var img = document.getElementById("resposta-img");
    img.src =
      "./gym.jpg";
    img.height = 300;
  }
  
  function mudarPosicao() {
    const buttonNao = document.getElementById("no");
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    buttonNao.style.left = `${randomX}px`;
    buttonNao.style.top = `${randomY}px`;
  }
  