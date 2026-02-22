"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
};
// {
//     name: String;
//     price: number;
//     isHot: boolean
// }
/**Objects in TypeScript */
let tea; // This is only a single variable and can't be shared across code
tea = {
    name: "masala chai",
    price: 25,
    isHot: true
};
const adrakChai = {
    name: 'Adrak Chai',
    price: 30,
    ingredients: ["tea leaves"]
};
const coffee = {
    brewTime: 5,
    beans: 'Arabica'
};
const chaiBrew = coffee;
console.log(chaiBrew);
// This partical keyword make the all the properties in Object created as optional
const updateChai = (updates) => {
    console.log("updating chai with updates", updates);
};
updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({}); // This actually creates an issue since it will start taking empty objects as well
//# sourceMappingURL=objects.js.map