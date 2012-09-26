function Person(name, age) {
   this.name = name;
   this.age = age;
}

Person.prototype.greeting = function() {
  return "Hi my name is " + this.name + " and I am " + this.age + " years old.";
};
