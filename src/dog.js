function Dog(name, breed) {
   this.name = name;
   this.breed = breed;
}

Dog.prototype.bark = function() {
  if (this.breed === "Chihuahua") {
      return "yip yip";
  }
  return "Woof Woof!";
};

Dog.prototype.owner = function() {
  this.lookupowner(); // this will throw an error
};
