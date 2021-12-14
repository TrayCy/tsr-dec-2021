class Person {
  constructor(private name: string, private age: number) {
    this.age = age;
    this.name = name;
  }
  sayHello() {
    console.log("Hello ! I'm " + this.name);
  }
}

const alice = new Person("Alice", 15);
alice.sayHello();

class Employee extends Person {
  constructor(name: string, age: number, private salary: number) {
    super(name, age);
    this.salary = salary;
  }

  congratulations() {
    this.salary *= 1.1;
    console.log("Congratulations you have " + this.salary + "€");
  }
}

const bob = new Employee("Bob", 25, 2000);
bob.sayHello();
bob.congratulations();
