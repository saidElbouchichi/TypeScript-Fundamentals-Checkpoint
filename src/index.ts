// Interface Vehicle : décrit la forme d'un véhicule
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Classe Car qui implémente l'interface Vehicle
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log('Car engine started');
  }

  describe(): string {
    return `${this.make} ${this.model} (${this.year})`;
  }
}

// Création d'une instance et appel de la méthode start
const myCar = new Car('Dacia', 'Logan', 2022);
console.log(`Voiture : ${myCar.describe()}`);
myCar.start();
