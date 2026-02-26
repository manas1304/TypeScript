"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chai {
    flavour;
    price;
    constructor(flavour, price) {
        this.flavour = flavour;
        // this.flavour - property of the class chai holds the flavour ( which is the parameter passed while creating the object ( Ginger in this case))
        this.price = price;
    }
}
const masalaChai = new Chai("Ginger", 20);
/** Access Modifiers */
// It is always recommended to use access modifiers when declaring classes in JS!!!!
class Chai2 {
    flavour = 'masala'; // Accessible everywhere ( within the class + outside it as well )
    secretIngredients = "cardamom"; // Accessible only inside the class 
    // Syntactically - #secretIngredients is another way to decalre a private variable
    reveal() {
        // Method to access private variables outside the class ( Controlled Access )
        return this.secretIngredients;
    }
    shopName = 'Chai Corner';
}
const c = new Chai2();
// c. won't give the direct access to secretIngredients method ( first access reveal then access secreteIngredients )
console.log(c.reveal()); // This prints cardamon on the console!!
class Shop {
    shopName = 'Chai Corner';
}
class Branch extends Shop {
    getName() {
        return this.shopName; // This is OK and can be done 
    }
}
// readOnly property
class Cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
// Getters and Setters -- We use them when direct access is not possible( when variable is declared private )
// by default we declare it with and _ ( ex- _cups )
class ModernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error('Too Sweet for a modern chai');
        this._sugar = value;
    }
}
const c1 = new ModernChai();
console.log(c1.sugar);
// Setter
c1.sugar = 5;
console.log(c1.sugar); // 5 is the answer
/** Static Members */
// Share among objects
class Ekchai {
    flavour;
    static shopName = "Chaicode cafe";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(Ekchai.shopName);
//# sourceMappingURL=oop.js.map