// Задача 2. Створити об’єкт «Авто».
// Авто

// Поля(властивості)
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів
// Методи (дії)
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів

class Car {
  brand: string;
  tankSize: number;
  fuel: number;
  seats: number;
  passengers: number;
  constructor(
    brand: string,
    tankSize: number,
    fuel: number,
    seats: number,
    passengers: number
  ) {
    this.brand = brand;
    this.tankSize = tankSize;
    this.fuel = fuel;
    this.seats = seats;
    this.passengers = passengers;
  }

  refuel(liters: number) {
    if (this.fuel + liters > this.tankSize) {
      console.log("Не можна запрвити - бак переповниться");
      this.fuel = this.tankSize;
    } else {
      this.fuel += liters;
    }
    console.log(`Наразі у баці: ${this.fuel} літрів`);
  }

  showPassengers() {
    console.log(`У машині ${this.passengers} пасажирів`);
  }

  addPassengers(count: number) {
    if (this.passengers + count > this.seats) {
      console.log("Немає стільки вільних місць");
      this.passengers = this.seats;
    } else {
      this.passengers += count;
    }
    this.showPassengers();
  }

  removePassengers(count: number) {
    if (this.passengers - count < 0) {
      console.log("У машині не може бути від'ємна кількість пасажирів");
      this.passengers = 0;
    } else {
      this.passengers -= count;
    }
    this.showPassengers();
  }
}

const myCar = new Car("Toyota", 50, 10, 5, 2);

console.log(myCar.refuel(20));
console.log(myCar.showPassengers());
console.log(myCar.addPassengers(3));
console.log(myCar.addPassengers(2));
console.log(myCar.removePassengers(4));
console.log(myCar.removePassengers(5));
