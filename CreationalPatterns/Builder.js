//
// It is using for multistep creation complex objects
//

function PropertySeller() {
  this.construct = function (builder) {
    builder.init();
    builder.step1();
    builder.step2();
    return builder.get();
  };
}

function CondoBuilder(price) {
  this.condo = null;

  this.init = function () {
    this.condo = new CondoWithParking();
  };

  this.step1 = function () {
    this.condo.addParking();
  };

  this.step2 = function () {
    this.condo.addPrice(price);
  };

  this.get = function () {
    return this.condo;
  };
}

function HouseBuilder(price) {
  this.house = null;

  this.init = function () {
    this.house = new HouseWithoutGarage();
  };

  this.step1 = function () {
    this.house.addGarage();
  };

  this.step2 = function () {
    this.house.addPrice(price);
  };

  this.get = function () {
    return this.house;
  };
}

function CondoWithParking() {
  this.price = 0;
  this.parking = null;

  this.addParking = function () {
    this.parking = false;
  };

  this.addPrice = function (price) {
    this.price = price;
  };

  this.info = function () {
    console.log(
      `This is condo ${this.parking ? `with` : `without`} parking for ${
        this.price
      }`
    );
  };
}

function HouseWithoutGarage() {
  this.price = 0;
  this.garage = null;

  this.addGarage = function () {
    this.garage = true;
  };

  this.addPrice = function (price) {
    this.price = price;
  };

  this.info = function () {
    console.log(
      `This is house ${this.garage ? `with` : `without`} garage for ${
        this.price
      } `
    );
  };
}

const property = new PropertySeller();
const condoBuilder = new CondoBuilder("100000$");
const houseBuilder = new HouseBuilder("150000$");
const condo = property.construct(condoBuilder);
const house = property.construct(houseBuilder);

condo.info();
house.info();
