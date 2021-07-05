describe("FizzBuzz", function() {

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  })

  // var fizzBuzz;
  // it('can play a game of fizzbuzz', () => { 
  //   expect(fizzbuzz.play(100))
  // });

  describe("knows when a number is", function() {

    it('divisible by 3', function() {
      // fizzBuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe("knows when a number is not", function() {

    it('divisible by three', function() {
      expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
    });

    it('divisible by five', () => {
      expect(fizzbuzz.isDivisibleByFive(2)).toBe(false);
    });

    it('divisible by 15', () => {
      expect(fizzbuzz.isDivisibleByFifteen(13)).toBe(false);
    });

  });

  describe('when playing, says', function() {
    it('fizz when divisible by 3', function() {
      expect(fizzbuzz.say(3)).toEqual('fizz');
    });

    it('buzz when divisible by 5', function() {
      expect(fizzbuzz.say(5)).toEqual('buzz');
    });

    it('fizzbuzz when divisible by 15', function() {
      expect(fizzbuzz.say(15)).toEqual('fizzbuzz');
    });

    it('the number in all other cases', function() {
      expect(fizzbuzz.say(23)).toEqual(23);
    });
  });

});
