const chai = {

    name: "Masala Chai",
    price: 20,
    isHot: true

}

// {
//     name: String;
//     price: number;
//     isHot: boolean
// }

/**Objects in TypeScript */

let tea: {
    name: string;
    price: number;
    isHot: boolean
} // This is only a single variable and can't be shared across code

tea = {
    name: "masala chai",
    price: 25,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
} // This can be shared across code

const adrakChai: Tea = {
    name: 'Adrak Chai',
    price: 30,
    ingredients: ["tea leaves"]
}

type Brew = {brewTime: number}
const coffee = {
    brewTime: 5,
    beans: 'Arabica'
}
const chaiBrew: Brew = coffee;
console.log(chaiBrew)

// Commonly Used in TS - Data Types Splitting out

type Item = {
    name: string;
    quantitiy: number
}

type Address = {
    street: string;
    pin: number
}

type Order = {
    id: string,
    items: Item[],
    address: Address
}


type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

// This partical keyword make the all the properties in Object created as optional
const updateChai = (updates: Partial<Chai>) => {
    console.log("updating chai with updates", updates);
}

updateChai({price: 25});
updateChai({isHot: false});
updateChai({}); // This actually creates an issue since it will start taking empty objects as well and this will not throw error.

// The use like Partial is of 'Required' -- Required makes all the properties mandatory to pass ( no skipping of properties or changing of datatypes allowed)
// Pick is another type -- let's us choose 4 properties out of 6 properties ( if we only require them )