describe("Builder Exercise", function() {
  it("Should generate constructor functions", function() {
    let Car = Builder({
      constructor: function(make) {
        this.make = make;
      },
      getMake: function() {
        return this.make;
      }
    });

    expect(typeof Car).toBe("function");

    let toyota = new Car("Toyota");
    expect(toyota instanceof Car).toBe(true);
    expect(toyota.hasOwnProperty("getMake")).toBe(false);
    expect(typeof toyota.getMake).toBe("function");
    expect(toyota.getMake()).toBe("Toyota");
  });

  it("Should not use the original object as the prototype", function() {
    const configs = {
      constructor: function(make) {
        this.make = make;
      },
      getMake: function() {
        return this.make;
      }
    };
    let Car = Builder(configs);
    let toyota = new Car();
    expect(Object.getPrototypeOf(toyota) !== configs).toBeTruthy();
  });

  it("Should support inheritance for the bonus exercise", function() {
    if (Builder.length > 1) {
      let a = Builder({
        constructor: function() {},
        color: "red"
      });

      let b = Builder(
        {
          constructor: function() {},
          size: 10
        },
        a
      );

      let obj = new b();

      expect(obj.hasOwnProperty("color")).toBe(false);
      expect(obj.hasOwnProperty("size")).toBe(false);
      expect(obj.color).toBe("red");
      expect(obj.size).toBe(10);
    } else {
      expect(true).toBe(true);
    }
  });

  it("Should not mutate the original config object", function() {
    const constructor = function(make) {
      this.make = make;
    };

    const configs = {
      constructor: constructor,
      getMake: function() {
        return this.make;
      }
    };
    let Car = Builder(configs);
    let toyota = new Car();
    expect(configs.constructor).toEqual(constructor);
  });
});
