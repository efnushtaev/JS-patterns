//
// It is using for creating clone of objects contains prototype
//

Object.create();

//
// Realization by not main method
//

function Prototype(proto) {
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

const proto = new Stock("New-York");
const prototypeStock = new Prototype(proto);

const stock = prototypeStock.clone(proto);

console.log(stock.__proto__ === Stock.prototype)
stock.info();
