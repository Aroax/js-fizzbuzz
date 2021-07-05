class FizzBuzz {

  play(n) {
    for (let i = 1; i <= n; i++) {
      console.log(
         this.say(i)
       )
    }
  }

  say(n) {
    if(this.isDivisibleByFifteen(n)) {
      return 'fizzbuzz';
    } else if (this.isDivisibleByFive(n)) {
      return 'buzz';
    } else if (this.isDivisibleByThree(n)) {
      return 'fizz';
    } else {
      return n;
    }
  }

  isDivisibleByFifteen(n) {
    return this._isDivisibleBy(n, 15);
  }

  isDivisibleByThree(n) {
    return this._isDivisibleBy(n, 3);
  }

  isDivisibleByFive(n) {
    return this._isDivisibleBy(n, 5);
  }

  _isDivisibleBy(n, divisor) {
    return (n % divisor === 0);
  }
}
