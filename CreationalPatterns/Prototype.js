//
// ** It is using for creating clone of objects contains prototype
//
// ** Motivation:
// Sometimes you need to make a copy of created object. For that ypu need to create a new object and then add a lot of fields from orig 
// object and it can be a hard because of count of fileds. But we can make a special method for cloning a whole object.
// 
// ** When to use:
// 1. You shouldn't depend on classes of the copied object
// 2. The copied object has a lot of filled fields
//

Object.create();

/* Realization by not JS main method */

function PrototypeStock(proto) {
  this.proto = proto;

  this.clone = function () {
    const stock = new Stock();

    stock.exchange = proto.exchange;

    return stock;
  };
}

/* Prototype */
function Stock(exchange)  {
  this.exchange = exchange;

  this.info = function () {
    console.log("Exchange: " + this.exchange);
  };
}

const newYorkStock = new Stock("New-York");
const prototypeStock = new PrototypeStock(newYorkStock);

const stock = prototypeStock.clone(newYorkStock);

console.log(stock.__proto__ === Stock.prototype)
stock.info();   