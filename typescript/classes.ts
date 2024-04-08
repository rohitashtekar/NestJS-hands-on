class Vehicle {
    constructor(public color: string) {
    }

    public drive(): void{
        console.log('chugga chugga\n');
    }

    protected honk(): void{
        console.log('beep beep\n');
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    drive(): void{
        console.log('vroom vroom');
    }

    startDriving(): void {
        this.drive();
        this.honk();
    }
}

class Suv {
    race(): void {
        console.log('grrr grrrr\n')
    }
}

const vehicle = new Vehicle('cyan');
console.log(vehicle.color);
vehicle.drive();

const car = new Car(4, 'blue');
car.startDriving();
console.log(car.color);

const duster = new Suv();
duster.race();