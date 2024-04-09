


export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Luis',
}

const passenger2: Passenger = {
    name: 'Raquel',
    children: ['Samuel', 'Javier', 'Daniel'],
}

const returnChildrenNumber = (passenger: Passenger) => {

    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren);
    
}

returnChildrenNumber( passenger2 );
returnChildrenNumber( passenger1 );