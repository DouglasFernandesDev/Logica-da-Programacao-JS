class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumetarVolume() {
    this.volume += 2; //adiciona mais dois ao resultado, acrescenta.
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  static trocaPilha() {
    console.log('OK, vou trocar');
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumetarVolume();
controle1.aumetarVolume();
controle1.aumetarVolume();
console.log(controle1);
ControleRemoto.trocaPilha();