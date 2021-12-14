var Person = function (name, age) {
  this.age = age;
  this.name = name;
  // this.sayHello = function () {
  //   console.log("Hello ! I'm " + this.name);
  // };
};

Person.prototype.sayHello = function () {
  console.log("Hello ! I'm " + this.name);
};

// var alice = new Person("Alice", 15);
// alice.sayHello();

var alice = {};
Object.setPrototypeOf(alice, Person.prototype);
Person.bind(alice)("Alice", 15);
alice.sayHello();

var Employee = function (name, age, salary) {
  Person.bind(this)(name, age);
  this.salary = salary;
};

Employee.prototype.congratulations = function () {
  this.salary *= 1.1;
  console.log(
    "Congratulations " + this.name + ", you have " + this.salary + "€"
  );
};

Object.setPrototypeOf(Employee.prototype, Person.prototype);
var bob = new Employee("Bob", 25, 2000);
bob.sayHello();
bob.congratulations();
