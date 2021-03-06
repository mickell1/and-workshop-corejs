/*

	Task 1) Refactor the following traditional Javascript "class" into new class syntax

*/
class Animal {
  speak() {
    return 'meow';
  };

  eat () {
    return 'nom nom nom';
  };
}

test('Make cat meow', () => {
  const Cat = new Animal();

  expect(Cat.speak()).toBe('meow');
  expect(Cat.eat()).toBe('nom nom nom');
});

/*
	 Task 2) Create a class Kitten, that extends the Animal. Overwriting the previous speak method.
		The test should fail when you add the extended class, you will need to override the method for the test to pass
	 	Tip: Use extends keyword
*/

class Kitten extends Animal {
  speak() {
    return 'kitten meow';
  }
}

test('Hear the kitten meow', () => {
  const Kitty = new Kitten();

  expect(Kitty.speak()).toBe('kitten meow');
});
