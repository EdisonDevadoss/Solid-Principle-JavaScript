export class ValidatePerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  ValidateName(name) {
    if (name.length > 3) {
      return true;
    } else {
      return false;
    }
  }

  ValidateAge(age) {
    if (age > 18) {
      return true;
    }
    return false;
  }
}
