let spaceship = {
  name: "Supernova",
  type: "Batalha",
  crew: ["Cap. Silva", "Ana Julia", "Thiago"]
};

spaceship.crew.push("Ten Fernanda");

console.log(spaceship);

console.log();
let navispacial = [
  { name: "ELemantal", crewQuantity: 10 },
  { name: "Colossus", crewQuantity: 8 },
  { name: "Helmet", crewQuantity: 15}
];

navispacial.forEach(navispacial => {
  console.log(navispacial.name + " tem " + navispacial.crewQuantity + " tripulantes");
});

console.log();
let navespacial = {
  name: "Golias",
  maxCrew: 20,
  capitain: {
    name: "Hugo Trent",
    age: 37
  }
}
console.log(navespacial.capitain.name);