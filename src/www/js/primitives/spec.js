describe("Primitives Exercise", function() {
  describe("Exercise 1", function() {
    it("Should return the number 3", function() {
      expect(exercise1()).toBe(3);
    });
  });

  describe("Exercise 2", function() {
    it("Should return a string of at least 5 characters", function() {
      let result = exercise2();
      expect(result).toBeDefined();
      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(4);
    });
  });

  describe("Exercise 3", function() {
    it("Should return an array of at least 3 items", function() {
      let result = exercise3();
      expect(result).toBeDefined();
      expect(typeof result).toBe("object");
      expect(result.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe("Exercise 4", function() {
    it("Should return the string with ** on either side", function() {
      let result = exercise4("hello");
      expect(result).toBeDefined();
      expect(typeof result).toBe("string");
      expect(result).toEqual("**hello**");
    });
  });

  describe("Exercise 5", function() {
    it("Should return a function", function() {
      let result = exercise5(5);
      expect(result).toBeDefined();
      expect(typeof result).toBe("function");
    });

    it("Should add 10 onto the given value", function() {
      let result = exercise5(5);
      expect(result()).toEqual(15);

      result = exercise5(12);
      expect(result()).toEqual(22);

      result = exercise5(0);
      expect(result()).toEqual(10);

      // TEST for BONUS
      // result = exercise5();
      // expect(result()).toEqual(10);
    });
  });
});
