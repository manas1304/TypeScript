function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`)
}

makeChai("Masala", 2);
// Here the first parameter can be string only and the second parameter can be number only 
// If we write anything else apart from the specified datatypes then it will throw an error
// This is why we use TypeScript ( it prevents these small syntax errors ).

function getChaiPrice(): number{
    return 25;
}
// This tell that the return type of the function can only be a number otherwise an error is thrown

function logChai(): void{
    console.log("Chai is ready")
}
// This function has void return type this means no value would be returned by this function

// Optional and Default parameters
function orderChai(type?: string){
    console.log("Chai ordered")
}
// This makes the parameter optional
// Another way of doing this can be........
function orderChai2(type: string = 'Masala'){
    console.log("Order chai")
}
// This set the default value if the value is not input while calling the function
// Optional and default type of parameters are written at the end of the function

function createChai(order: {
    type: string,
    sugar: number,
    size: "small" | "large"
}): number{
    return 4;
}
console.log(createChai({type: "Masala Chai", sugar: 4, size: "large"}));