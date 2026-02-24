const chaiFlavours: string[] = ["masala", "ginger"];
const chaiPrice: number[] = [10,20];

const rating: Array<number> = [4.5, 5];
// The datatype inside this array can be custom designed as well along with the inbuilt datatypes.

// Array of objects
type Chai = {
    name: string,
    price: number
}

const menu: Chai[] = [
    {name: "Masala", price: 20},
    {name: "Ginger", price: 40}
]

// Read only array
const cities: readonly string[] = ["Punjab", "New Delhi"]

// Multidimensional array
const table: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// Tuples
let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];
// chaiTuple = [20, 'Masala']; // This can't be written and moreover, there can only be fixed number of values ( here 2 )

const coOrdinates: [x: number, y: number] = [1,2]; // This is a named tuple

/**Enums - Named set of constants */
// Used for restricting the choices of the user

enum CupSize{
    Small, // By default 0 assigned
    Medium, // By default 1 assigned
    Large // By default 2 assigned
    // To avoid this -- Declare values beforehand
}

const size = CupSize.Large;
console.log(size);


enum ChaiType{
    MASALA = "masala",
    GINGER= "ginger"
}

function makeChai(type: ChaiType){
    console.log(`Making: ${type} chai`);
}
makeChai(ChaiType.GINGER);
makeChai(ChaiType.MASALA);

// Generally enum should be declared with the same datatypes - Using different datatypes is correct but not a good practice

// const enum

const enum Sugar{
    LOW= 1,
    MEDIUM= 2,
    HIGH= 3
}

const s = Sugar.HIGH;
console.log(s);