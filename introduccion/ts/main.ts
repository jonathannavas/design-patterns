interface Product {
  price: number
  getPrice(): string
}

class Drink {
  private name: string
  constructor(name: string) {
    this.name = name
  }
  info(): string {
    return 'The name of drink is: ' + this.name
  }
}

const drink = new Drink('Pilsener')
console.log(drink.info())

class Beer extends Drink implements Product {
  private alcohol: number
  price: number
  constructor(name: string, alcohol: number, price: number) {
    super(name)
    this.alcohol = alcohol
    this.price = price
  }
  getPrice(): string {
    return '$' + this.price
  }
  canDrive(): boolean {
    return this.alcohol < 5
  }
}

const beer = new Beer('Corona', 4, 5.99)
console.log(beer.info())
console.log(beer.canDrive())
console.log(beer.getPrice())

class Snak implements Product {
  private name: string
  price: number
  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }
  getPrice(): string {
    return '$' + this.price
  }
  getName(): string {
    return 'The snak is: ' + this.name
  }
}

const snak = new Snak('Rufles', 2)
console.log(snak.getPrice())
console.log(snak.getName())

const products: Product[] = [
  new Beer('Corona', 5.8, 1.99),
  new Snak('Doritos', 2.25),
  snak,
  beer,
]

console.log(products)
