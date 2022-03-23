/**
 * It is allow to create tree-hierarchy structure
 *
 */

abstract class ComponentComposite {
  protected parent: ComponentComposite;

  public setParent(parent: ComponentComposite) {
    this.parent = parent;
  }

  public getParent(): ComponentComposite {
    return this.parent;
  }

  public add(component: ComponentComposite): void {}

  public remove(component: ComponentComposite): void {}

  public isComposite(): boolean {
    return false;
  }

  public abstract operation(): string;
}

/**
 * Class Leaf is represents last objects of the structure. Leaf can't have any nested components
 */

class Leaf extends ComponentComposite {
  public operation(): string {
    return "Leaf";
  }
}

class Composite extends ComponentComposite {
  protected children: ComponentComposite[] = [];

  public add(component: ComponentComposite): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: ComponentComposite): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  public operation(): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.operation());
    }

    return `Branch(${results.join("+")})`;
  }
}

/**
 * Client code
 *
 */

function clientCode(component: ComponentComposite) {
  console.log(`RESULT: ${component.operation()}`);
}

const simple = new Leaf();
console.log("Client: I've got a simple component:");
clientCode(simple);
console.log("");

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log("Client: Now I've got a composite tree:");
clientCode(tree);
console.log("");

function clientCode2(component1: ComponentComposite, component2: ComponentComposite) {
  // ...

  if (component1.isComposite()) {
    component1.add(component2);
  }
  console.log(`RESULT: ${component1.operation()}`);

  // ...
}

console.log(
  "Client: I don't need to check the components classes even when managing the tree:"
);
clientCode2(tree, simple);
