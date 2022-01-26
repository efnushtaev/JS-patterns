//
// ** It is using when we need divide objects at two independent kind, client and service (it's like double adapter)
//
// ** Motivation:
// In situation when objects has to creating with two dimension params (like geometry figures with diffirent colors)
// count of object will be increase in geometric progression. Instead we can divide creating  the color and the shape
// at two independent abstraction
//
// ** When to use:
// 1. You want to divide a monolite class
// 2. You need to scale a class at two independent dimensions
// 3. You need change class realizationg during runtime
//

/* input devices (first dimension) */

class Gestures {
  constructor(output) {
    this.output = output;

    this.tap = () => {
      this.output.click();
    };
    this.swipe = () => {
      this.output.move();
    };
  }
}

class Mouse {
  constructor(output) {
    this.output = output;

    this.click = () => {
      this.output.click();
    };
    this.move = () => {
      this.output.move();
    };
  }
}

/* output devices (second dimension) */

class Screen {
  constructor() {
    this.click = () => {
      console.log("Screen select");
    };
    this.move = () => {
      console.log("Screen move");
    };
    this.drag = () => {
      console.log("Screen drag");
    };
    this.zoom = () => {
      console.log("Screen zoom in");
    };
  }
}

class Audio {
  constructor() {
    this.click = () => {
      console.log("Sound oink");
    };
    this.move = () => {
      console.log("Sound waves");
    };
    this.drag = () => {
      console.log("Sound screetch");
    };
    this.zoom = () => {
      console.log("Sound volume up");
    };
  }
}

const screen = new Screen();
const audio = new Audio();

const handScreen = new Gestures(screen);
const mouseAudio = new Mouse(audio);

handScreen.tap();
handScreen.swipe();

mouseAudio.click();
mouseAudio.move();
