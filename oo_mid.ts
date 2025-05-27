// Interface for flyable objects
interface Flyable {
    fly(height: number): string;
    land(): string;
}

// Interface para definir um meio de transporte
interface Vehicle {
    start(): string;
    stop(): string;
    getFuelType(): string;
}

// Mixin para adicionar capacidade de voar
type Constructor<T = {}> = new (...args: any[]) => T;

function FlyableMixin<TBase extends Constructor<AbstractVehicle>>(Base: TBase) {
    return class extends Base implements Flyable {
        getFuelType(): string {
            return "Querosene";
        }
        private _altitude: number = 0;

        fly(height: number): string {
            this._altitude = height;
            return `Voando a ${this._altitude} metros de altura`;
        }

        land(): string {
            const prevAltitude = this._altitude;
            this._altitude = 0;
            return `Pousando de ${prevAltitude} metros`;
        }
    };
}

// Classe base abstrata
abstract class AbstractVehicle implements Vehicle {
    protected running: boolean = false;
    
    constructor(
        protected readonly brand: string,
        protected _model: string
    ) {}

    // Getter
    get model(): string {
        return this._model;
    }

    // Setter
    set model(value: string) {
        if (value.length < 1) {
            throw new Error("Modelo deve ter pelo menos 1 caractere");
        }
        this._model = value;
    }

    abstract getFuelType(): string;

    start(): string {
        this.running = true;
        return `${this.brand} ${this.model} está ligado`;
    }

    stop(): string {
        this.running = false;
        return `${this.brand} ${this.model} está desligado`;
    }
}

// Classe concreta que herda de AbstractVehicle
class Car extends AbstractVehicle {
    // Private property
    private _mileage: number = 0;

    constructor(
        brand: string,
        model: string,
        private readonly engineSize: number
    ) {
        super(brand, model);
    }

    getFuelType(): string {
        return "Gasolina";
    }

    drive(distance: number): string {
        this._mileage += distance;
        return `Dirigindo por ${distance}km. Quilometragem total: ${this._mileage}km`;
    }
}

// Concrete base class for mixin usage
class ConcreteVehicle extends AbstractVehicle {
    getFuelType(): string {
        return "Fóssil";
    }
}

// Classe que usa o mixin FlyableMixin
class Airplane extends FlyableMixin(ConcreteVehicle) {
    constructor(
        brand: string,
        model: string,
        private readonly maxAltitude: number
    ) {
        super(brand, model);
    }

    getFuelType(): string {
        return "Querosene";
    }
}

export {
    Vehicle,
    Flyable,
    AbstractVehicle,
    Car,
    Airplane,
    FlyableMixin
};
