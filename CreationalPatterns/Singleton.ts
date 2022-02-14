/**
 * It is useful when you need prevent creating equal object and
 * need to have a global point with an acces to the object
 *
 **/

class Singleton {
  private static instance: Singleton;

  /** Constructor must be hidden for preventing creating object by "new" operator */
  private constructor() {}

  /** Prevent creating new instance of Singleton if already there is one */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public someBusinessLogic() {
    // Do something
  }
}

/**
 * Client code
 *
 **/

function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  console.log(s1 === s2); // true
}

clientCode();
