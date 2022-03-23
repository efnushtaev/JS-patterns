/** 
 * It is allow to add a new functionality to classes by wrapping in an object
 * 
 */

abstract class ComponentDecorator {
  abstract operation(): string
}

class ConcreteComponent implements ComponentDecorator {
  public operation(): string {
    return "ConcreteComponent";
  }
}

class Decorator implements ComponentDecorator {
  protected component: ComponentDecorator;

  constructor(component: ComponentDecorator) {
    this.component = component;
  }

  public operation(): string {
    return this.component.operation();
  }
}

class ConcreteDecoratorA extends Decorator {

  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

/**
 * Client code
 * 
 */

function clientCode(component: ComponentDecorator) {
  console.log(`RESULT: ${component.operation()}`);
}

const simple = new ConcreteComponent();
console.log("Client: I've got a simple component:");
clientCode(simple);
console.log("");

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log("Client: Now I've got a decorated component:");
clientCode(decorator2);
