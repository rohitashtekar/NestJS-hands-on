interface Reportable {
    name: string,
    year: Date,
    broken: boolean
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
}

const  brio = {
    name: 'brio',
    year: new Date(),
    broken: false,
    summary(): string {
        return `This car is named ${this.name}, manufactured by Honda`;
    }
}

const printDetails = (item: Reportable): void => {
    console.log(`Name: ${item.name}`);
    console.log(`Year: ${item.year}`);
    console.log(`Broken: ${item.broken}`);
    console.log(`Summary: ${item.summary()}`);
};

printDetails(oldCivic);
printDetails(brio);