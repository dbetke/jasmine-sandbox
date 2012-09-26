describe("Person", function() {
  var person;

  it("should be able to create a Person", function() {
      person = new Person("Fred", 50);
      expect(person).not.toBeUndefined();
  });

  it("should be able to read the Person's name attribute", function() {
      person = new Person("Fred", 50);
      expect(person.name).toEqual("Fred");
  });

  it("should be able to read the Person's age attribute", function() {
      person = new Person("Fred", 50);
      expect(person.age).toEqual(50);
  });

  it("greeting() method should exist", function() {
      person = new Person("Fred", 50);
      expect(typeof(person.greeting)).toBe("function");
  });

  it("greeting() method should return the correct greeting", function() {
      person = new Person("Fred", 50);
      expect(person.greeting()).toBe("Hi my name is Fred and I am 50 years old.");
  });

  it("should be able to give the person a dog", function() {
      person = new Person("Fred", 50);
      person.dog = new Dog("Spot", "Hound");
      expect(person.dog.name).toBe("Spot");
  });

});
