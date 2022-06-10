function jogar() {
  if (
    document.getElementById('pedra').checked == false &&
    document.getElementById('papel').checked == false &&
    document.getElementById('tesoura').checked == false
  ) {
    alert('Selecione uma opção');
  } else {
    let sorteio = Math.floor(Math.random() * 3);
    switch (sorteio) {
      case 0:
        document.getElementById("pc").src="./assets/img/pc-pedra.png";
        break;
      case 1:
        document.getElementById("pc").src="./assets/img/pc-papel.png";
        break;
      case 2:
        document.getElementById("pc").src="./assets/img/pc-tesoura.png";
        break;
    }

    if(
      (document.getElementById('pedra').checked == true && sorteio == 0)
      || (document.getElementById('papel').checked == true && sorteio == 1)
      || (document.getElementById('tesoura').checked == true && sorteio == 2)
      ){
        document.getElementById('placar').innerHTML="Empate";
    } else if (
      (document.getElementById('pedra').checked == true && sorteio == 2)
    || (document.getElementById('papel').checked == true && sorteio == 0)
    || (document.getElementById('tesoura').checked == true && sorteio == 1)
    ){
      document.getElementById('placar').innerHTML="Jogador venceu"
    } else {
      document.getElementById('placar').innerHTML="Computador venceu"
    }
  }
}

function resetar() {
  document.getElementById('pc').src='./assets/img/pc.png';
  document.getElementById('placar').innerHTML = '';
}
