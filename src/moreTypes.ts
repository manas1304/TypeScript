{/**Type Assertion, Type Unknown and Type Never in TypeScript */}

/**Foreceful Type Assertion */
let response: any = "42";

let numericLength: number = response.length
// When we write this line no suggestion are coming for the response variable since it is of type any and
// TS still treats it as any

let numericLength2: number = (response as string).length;
// But when i write this line after pressing (.) all the string methods were suggested
// TS knew that response is treated as type string here.

type Book = {
    name: string
}

let bookString = '{"name": "The Subtle Art of Not giving a fuck....."}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject.name);

/**Type Unknown */
let value:any
value = 123;
value = [1,2,3];
value = "string";
value.toUpperCase(); // No error would come here since any doesn't care about the datatype

let newValue: unknown;
newValue = 123,
newValue= [1,2,3];
newValue = "string";
//newValue.toUpperCase(); // Here TS throws error since we didn't declare which type of newValue are we using, so we need to check first
if(typeof newValue === 'string'){
    newValue.toUpperCase();
} // This is a safetycheck

try{

}catch(err){
    //console.log(err.message); 
    // THis would simply throw error in TS because TS doesn't know the type of err
    // Or there might be possibily that err doesn't contain any message field
    if(err instanceof Error){
        console.log(err.message);
        // This ensure that the err is a type of an Error and the err then would definately have a message field
    }
}


/** Type Never */
type Role = "admin" | "user" | "superadmin" ;

function redirectBasedOnRole(role: Role): void{
    if(role === 'admin'){
        console.log("Redirecting to the admin page");
        return
    }
    if(role === 'user'){
        console.log('Redirecting to the user page');
        return
    }

    role; // THis now becomes the type never as only two values could be used so this value would contain nothing and never be used
    // This means this role shouldn't be used as there is no use of it as all types of this variable are already in use ( if role is not superadmin )
}
