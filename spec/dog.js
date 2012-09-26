describe("Dog", function() {
  var dog;

  it("should be able to create a Dog", function() {
      dog = new Dog("Mallori", "Cocker");
      expect(dog).not.toBeUndefined();
  });

  it("large dog should go Woof", function() {
      dog = new Dog("Scooby", "Great Dane");
      expect(dog.bark()).toBe("Woof Woof!");
  });

  it("small dog should yip", function() {
      dog = new Dog("Peaches", "Chihuahua");
      expect(dog.bark()).toBe("yip yip");
  });

  // The following test will throw an error, resulting in a stack trace.  To enable
  // the test to see the error, change "xit" to "it":
  xit("should be able to ask a dog who its owner is", function() {
      person = new Person("Fred", 50);
      person.dog = new Dog("Spot", "Hound");
      expect(person.dog.owner().name).toBe("Fred");
  });


});
