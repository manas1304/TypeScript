class Chai{
    flavour: string;
    price: number

    constructor(flavour:string, price: number){
        this.flavour = flavour;
        // this.flavour - property of the class chai holds the flavour ( which is the parameter passed while creating the object ( Ginger in this case))
        this.price = price
    }
    // this keyword points the object that has been created ( here it points to masala chai )
    // jo bhi naya object banta hai this usko point krta hai
}

const masalaChai = new Chai("Ginger", 20);


/** Access Modifiers */
// It is always recommended to use access modifiers when declaring classes in JS!!!!

class Chai2{
    public flavour: string = 'masala'; // Accessible everywhere ( within the class + outside it as well )

    private secretIngredients = "cardamom" // Accessible only inside the class 
    // Syntactically - #secretIngredients is another way to decalre a private variable

    reveal(){
        // Method to access private variables outside the class ( Controlled Access )
        return this.secretIngredients;
    }

    protected shopName = 'Chai Corner';
    // We can access protected variable inside the class only and for child classes as well ( while doing inheritance )
}

const c = new Chai2();
// c. won't give the direct access to secretIngredients method ( first access reveal then access secreteIngredients )
console.log(c.reveal()); // This prints cardamon on the console!!

class Shop{
    protected shopName = 'Chai Corner';
}

class Branch extends Shop{
    getName(){
        return this.shopName; // This is OK and can be done 
    }
}

// readOnly property

class Cup{

    readonly capacity: number = 250;

    constructor(capacity: number){
        this.capacity = capacity;
    }
    // After this, we can't assign it again
}

// Getters and Setters -- We use them when direct access is not possible( when variable is declared private )
// by default we declare it with and _ ( ex- _cups )

class ModernChai{

    private _sugar: number = 2;

    get sugar(){
        return this._sugar;
    }

    set sugar(value: number){
        if(value > 5) throw new Error('Too Sweet for a modern chai');
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

class Ekchai{
    static shopName = "Chaicode cafe";

    constructor(public flavour: string){

    }
}
console.log(Ekchai.shopName);
