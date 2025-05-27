// Union Types (|)
type Status = "pending" | "completed" | "failed";
type NumericId = number | string;

// Intersection Types (&)
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged;

// Interface Declaration Merging
interface Animal {
    name: string;
}

interface Animal {
    age: number;
}

// The above declarations merge into:
// interface Animal { name: string; age: number; }

// Covariant Array Type
interface Fruit {
    name: string;
    sweet: boolean;
}

interface Apple extends Fruit {
    variety: string;
}

// Demonstrating covariance with arrays
class FruitBasket<T extends Fruit> {
    constructor(private items: T[] = []) {}

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return [...this.items];
    }
}

// Example implementation
class FruitStore {
    // Using union types
    status: Status = "pending";
    
    // Using intersection types
    owner: Person = { name: "João", age: 30 };
    
    // Using merged interface
    mascot: Animal = { name: "Rex", age: 5 };
    
    // Using covariant types
    private appleBasket: FruitBasket<Apple>;
    
    constructor() {
        this.appleBasket = new FruitBasket<Apple>();
    }

    addApple(variety: string): void {
        this.appleBasket.add({
            name: "Apple",
            sweet: true,
            variety
        });
    }

    getApples(): Apple[] {
        return this.appleBasket.getAll();
    }
}

export {
    Status,
    NumericId,
    Named,
    Aged,
    Person,
    Animal,
    Fruit,
    Apple,
    FruitBasket,
    FruitStore
};
