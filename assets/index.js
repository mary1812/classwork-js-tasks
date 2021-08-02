"use strict";

class Human {
  constructor(name, lastName, age) {
    if (isNaN(age) || typeof age !== "number") {
      throw new TypeError("Age must be number");
    }
    if (age < 0) {
      throw new RangeError("Age must be positive number");
    }
    this.name = name;
    this.lastName = lastName;
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (isNaN(newAge) || typeof newAge !== "number") {
      throw new TypeError("Age must be number");
    }
    if (newAge < 0) {
      throw new RangeError("Age must be positive number");
    }

    this._age = newAge;
  }

  walk() {
    console.log("I am walking");
  }

  isAdult() {
    return this.age >= 18;
  }
}

const human1 = new Human("Coolkid", "Coolkidovich", 50);

const human2 = new Human("Coolkid", "Coolkidovich", 15);

const human3 = new Human("Human", "Humanovich", 18);
