type ChaiOrder = {
    type: string,
    sugar: number,
    strong: boolean
}

function makeChai(order: ChaiOrder){
    console.log(order)
}

makeChai({type: "masala", sugar: 2, strong: true});