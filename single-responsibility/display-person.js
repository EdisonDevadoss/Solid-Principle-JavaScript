import { ValidatePerson } from './validate-person.js';

class DisplayPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.validate = new ValidatePerson(this.name, this.age);
  }

  Display() {
    if (
      this.validate.ValidateName(this.name) &&
      this.validate.ValidateAge(this.age)
    ) {
      console.log(`Name: ${this.name} and Age: ${this.age}`);
    } else {
      console.log('Invalid');
    }
  }
}

const displayPerson = new DisplayPerson('Edison', 26);
const displayPerson1 = new DisplayPerson('Edison', 10);

displayPerson.Display();
displayPerson1.Display();
