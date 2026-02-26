/**Interfaces */
// Interface's main goal is to give shape to your object and not put any data inside it

interface Chai{
    flavour: string,
    price: number
}

const masala: Chai = {
    flavour: "Masala",
    price: 30
}

interface TeaMachine{
    start(): void,
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log('Start')
    },

    stop(){
        console.log('Stop')
    }
}

// Index Signatures 
interface ChaiRatings{
    [flavour: string]: number
}

const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.7
}


// Declaration Merging 

interface User{
    name: string
}

interface User{
    age: number
}

const u: User = {
    name: "Manas",
    age: 22
}

// Extending interfaces

interface A{a: string}
interface B{b: string}

interface C extends A,B {};



/** Generics */
// Reusable components that work with multiple types instead of a single one

function wrapInArray<T>(item: T): T[]{
    return [item]
}

console.log(wrapInArray<string>("Hello World")); // String hello world will be printed inside the array on console
console.log(wrapInArray<number>(1)); // 1 inside array will be printed on the console

// Multiple type parameter generics
function pair<A,B>(a:A, b: B): [A,B]{
    return [a,b]
}
// Here A and B are the types like number or string 
// a and b are the actual values like 10 and 'Manas'
console.log(pair<string, number>("Manas", 1));
console.log(pair<number, object>(1, {name: "Manas"}));

// Interface generics

interface APIPromise<T>{
    status: number,
    data: T
}

const res: APIPromise<{flavour: string}> = {
    status: 200,
    data: {flavour: "Hello World"}
}

console.log(res);
