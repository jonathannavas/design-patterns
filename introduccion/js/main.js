const sum = (a, b) => {
  return a + b
}

// function superior order

function operation(fn, a, b) {
  console.log('doing something')
  console.log(fn(a, b))
}

operation(sum, 1, 4)

const result = sum(1, 2)
console.log(result)

// anonymous function

let fA = function () {
  console.log('something')
}

fA()

const arrorFunction = () => {
  console.log('an example with arrow function')
}

arrorFunction()

// example print values with arrow function

operation((a, b) => a * b, 5, 3)
operation(
  (a, b) => {
    return a / b
  },
  5,
  3
)

//arrays

const names = ['Jonathan', 'Gabriel']

//foreach
names.forEach((name) => {
  console.log(name)
})

names.forEach((names) => console.log(names.toUpperCase()))
console.log(names)

//map

const lowerNames = names.map((name) => name.toLowerCase())
console.log(lowerNames)

//reduce

const numbers = [1, 2, 3, 4, 5]
const total = numbers.reduce((acc, number) => acc + number, 0)

console.log(total)

// POO
// class
class Drink {
  constructor(name) {
    this.name = name
  }
  info() {
    return 'Info: ' + this.name
  }
}

//functions

function Drink2(name) {
  this.name = name
  this.info = function () {
    return 'La bebida es: ' + this.name
  }
  this.greeting = (name) => {
    return `Hello ${name} your drink is: ${this.name}`
  }
}
const drink = new Drink('Coca cola')
console.log(drink.name)

console.log(drink.info())

const drink2 = new Drink2('pepsi')
console.log(drink2.info())
console.log(drink2.greeting('Jonathan'))

// Herencia

class Beer extends Drink {
  constructor(name, alcohol) {
    super(name)
    this.alcohol = alcohol
  }
  canDrive() {
    return this.alcohol < 10
  }
}

const beer = new Beer('Pilsener', 5.4)
const beer2 = new Beer('Corona', 11)
console.log(beer.info())
console.log(beer.canDrive())
console.log('-------------------')
console.log(beer2.info())
console.log(beer2.canDrive())
