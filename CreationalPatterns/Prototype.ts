/**
 * It is using for creating clone of objects contains prototype
 * It will helpful when you shouldn't depend on classes of the copied object
 * and the copied object has a lot of filled fields
 *
 */

class Prototype {
  public primitive: any;
  public component: object;
  public circularReference: ComponentWithBackReference;

  public clone(): this {
    const clone = Object.create(this);

    clone.primitive = this.primitive;

    clone.component = Object.create(this.component);

    /** Back ref classes should set prototype with spred operator */
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }
}

class ComponentWithBackReference {
  public prototype;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

/**
 * Client code
 *
 */

function clientCode() {
  const protoOrig = new Prototype();
  protoOrig.primitive = 245;
  protoOrig.component = new Date();
  protoOrig.circularReference = new ComponentWithBackReference(protoOrig);

  const p1 = protoOrig.clone();

  console.log(protoOrig.primitive === p1.primitive); // true
  console.log(protoOrig.component === p1.component); // false
  console.log(protoOrig.circularReference === p1.circularReference); // false
  console.log(
    protoOrig.circularReference.prototype === p1.circularReference.prototype
  ); // false
}

clientCode();
