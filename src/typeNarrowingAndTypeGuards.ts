function getChai(kind: string | number){
    // Type narrowing says that find out the type of the data and then return on the basis of that
    if(typeof(kind) === 'string'){
        return `Serve ${kind} of chai`
        // here it is guaranteed that the type of data is always a string so do according to that
    }

    return `Serve ${kind} number of chai`
    // Here it is guaranteed that the type of data is always a number
}

console.log(getChai(4)); // Serve 4 number of Chai

// Checking the truthiness of the input
function serveChai(msg?: string){
    if(msg){
        return `Serve chai with this message - ${msg}`
    }
    return 'Serving default chai that is without any message'
}

console.log(serveChai("I am Manas Shukla"));


function orderChai(size: "small" | "medium" | "large" | number){
    if(size === 'small'){
        return "Small Cutting chai"
    }else if(size === 'large' || size === 'medium'){
        return `Make extra chai since size is ${size}`
    }else{
        return `Order placed! ${size} of chai incoming.......`
        // Ensure the type of size is number
    }
}

console.log(orderChai(4));
console.log(orderChai("small"));
console.log(orderChai("large"));

// Checking the instance of classes through guard rails( type guard basically)
class KulhadChai{
    serve(){
        return `Serving Kulhad Chai`
    }
}

class CuttingChai{
    serve(){
        return `Serving Cutting Chai`
    }
}

function checkTypeOfChai(chai: CuttingChai | KulhadChai){
    if(chai instanceof CuttingChai){
        return chai.serve();
    }
    return chai.serve();
}

console.log(checkTypeOfChai(new CuttingChai));


// Creating custom types using the type keyword

type ChaiOrder = {
    type: string
    sugar: number
}
// Through this only we handle the API responses in a better way than javascript
function isChaiOrder(obj: any): obj is ChaiOrder{
    // Whenever something is returned from this function that data's datatype would also be ChaiOrder as specified above
    // So, by doing this i can access that data by using .type and .sugar and do the necessary changes if required
    return (
        typeof obj === 'object' && obj != null && typeof obj.type === 'string' && typeof obj.sugar === 'number'
    )
}

console.log(isChaiOrder({type: "Masala Chai", sugar: "manas"})); // will return false since sugar should be number and not a string
console.log(isChaiOrder({type: "Masala Chai", sugar: 2})); 


// Some random shit
type MasalaChai = {type: "masala", spiceLevel: number}
type GingerChai = {type: "ginger", amount: number}
type ElaichiChai = {type: "elaichi", aroma: number}

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai){
    switch(order.type){
        case "masala":
            return 'Making masala Chai'
        case "elaichi":
            return 'Making elaichi Chai'
        case "ginger":
            return 'Making ginger Chai'

    }
}

console.log(MakeChai({type:"masala", spiceLevel: 7}));
console.log(MakeChai({type:"ginger", amount: 7}));
console.log(MakeChai({type:"elaichi", aroma: 7}));
