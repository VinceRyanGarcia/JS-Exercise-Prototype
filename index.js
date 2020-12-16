/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) { // Write an Airplane constructor that initializes `name from an argument.`
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"

  Brit explains this at 01:45:00 : https://lambdaschool.instructure.com/courses/601/pages/module-3-class-recordings?module_item_id=529079
  */
  
 function Person(name,age) { //Write a Person Constructor that initializes `name` and `age` from arguments.
    this.name = name;
    this.age = age;
    this.stomach = []; //All instances of Person should initialize with an empty `stomach` array.
  }
 Person.prototype.eat = function(edible){ //Give instances of Person the ability to `.eat("someFood")`
   if(this.stomach.length <10){ // The `eat` method should have no effect if there are 10 items in the `stomach`.
     this.stomach.push(edible) //When eating an edible, it should be pushed into the `stomach`
   }
 }
 Person.prototype.poop = function(){ //Give instances of Person the ability to `.poop()`:
   this.stomach = []; //When an instance poops, its `stomach` should empty.
 }
Person.prototype.toString = function(){ //Give instances of Person a method `.toString()`
  return `${this.name}, ${this.age}`;
}
const personOne = new Person("Mary", 50); //It should return a string with `name` and `age`. Example: "Mary, 50"

console.log(personOne.toString());
  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model,milesPerGallon) { //Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0; //should initialize with an `tank` at 0
  this.odometer = 0; //should initialize with an `odometer` at 0
}
  Car.prototype.fill = function (gallons) { //Give cars the ability to get fueled with a `.fill(gallons)` method.
    this.tank += gallons; //Add the gallons to `tank`.
  }
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) { // Write a Baby constructor. Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`
   this.name = name; 
   this.age = age; 
   this.favoriteToy = favoriteToy; 
  }
 Baby.prototype = Object.create(Person.prototype) //Baby constructor subclassing Person
 
 Baby.prototype.play = function (){ // babies have the ability to `.play()`
  return `Playing with ${this.favoriteToy}.`; // Should return a string "Playing with x", x being the favorite toy.
 };
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. 
    2. 
    3. 
    4. 
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}