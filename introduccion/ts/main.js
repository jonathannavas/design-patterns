var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Drink = /** @class */ (function () {
    function Drink(name) {
        this.name = name;
    }
    Drink.prototype.info = function () {
        return 'The name of drink is: ' + this.name;
    };
    return Drink;
}());
var drink = new Drink('Pilsener');
console.log(drink.info());
var Beer = /** @class */ (function (_super) {
    __extends(Beer, _super);
    function Beer(name, alcohol, price) {
        var _this = _super.call(this, name) || this;
        _this.alcohol = alcohol;
        _this.price = price;
        return _this;
    }
    Beer.prototype.getPrice = function () {
        return '$' + this.price;
    };
    Beer.prototype.canDrive = function () {
        return this.alcohol < 5;
    };
    return Beer;
}(Drink));
var beer = new Beer('Corona', 4, 5.99);
console.log(beer.info());
console.log(beer.canDrive());
console.log(beer.getPrice());
var Snak = /** @class */ (function () {
    function Snak(name, price) {
        this.name = name;
        this.price = price;
    }
    Snak.prototype.getPrice = function () {
        return '$' + this.price;
    };
    Snak.prototype.getName = function () {
        return 'The snak is: ' + this.name;
    };
    return Snak;
}());
var snak = new Snak('Rufles', 2);
console.log(snak.getPrice());
console.log(snak.getName());
var products = [
    new Beer('Corona', 5.8, 1.99),
    new Snak('Doritos', 2.25),
    snak,
    beer,
];
console.log(products);
