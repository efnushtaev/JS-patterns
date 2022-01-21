//
// This pattern is using for creating objects from different instances
//

function TransportFactory() {
  this.createTransport = function (transportKind, params) {
    let transport

    switch (transportKind) {
      case "bicycle":
        transport = new Bicycle(params);
        break;
      case "train":
        transport = new Train(params);
        break;
      case "airplain":
        transport = new Airplain(params);
        break;
    }

    return transport;
  };
}

/* Instances */

const Bicycle = function (color) {
  this.sound = function () {
    console.log("ring-ring" + " " + color);
  };
};

const Train = function (color) {
  this.sound = function () {
    console.log("choo-choo" + " " + color);
  };
};

const Airplain = function (color) {
  this.sound = function () {
    console.log("whoooosh" + " " + color);
  };
};

const factory = new TransportFactory();

const bike = factory.createTransport("bicycle", "red");
const train = factory.createTransport("train", "green");
const airplane = factory.createTransport("airplain", "blue");

bike.sound();
train.sound();
airplane.sound();
