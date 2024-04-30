function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // 
// Isaiah: The function will run and print "undefined eats fish food". //-> right
// Andrew: The funciton will print undefined or throw an error. // -> wrong
  //  The context is unknown but will still print the function to the terminal.


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // 
// Isaiah: We cannot pass in 'nemo.eat()'. We need to bind() otherwise it will throw an error.
// Andrew: same as Isaiah.

// We are creating an instance method using this syntax because 'eat' is a global funciton and not a class method.


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // 
// Isaiah: will say "undefined eats fish food".
// Andrew: The funciton will print undefined or throw an error.

// We are only invoking the funciton and not referencing the function with an object. Also see scenario 1 explanation.

/********************************* Scenario 4 *********************************/
// nemo.swim(); // 
// Isaiah: Will print: "Nemo swimming in the water"
// Andrew: same as Isaiah:  "Nemo swimming in the water"


/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim(); // 

// Isaiah: will throw a type error
// Andrew: will print an error

