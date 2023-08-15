type Name={firstName:string; lastName:string};
let fullName:Name= {firstName:"Amir", lastName:"Hanif"}
console.log(fullName.firstName, fullName.lastName)


type Amir={firstName:string, middleName:string, lastName:string};
let amir:Amir={firstName:"Amir", middleName:"Hanif", lastName:"Javed"}
console.log(amir.firstName, amir.middleName, amir.lastName);

type Book={
    author:{
        firstName:string;
        lastName:string
        }
    name:string;
};

const book:Book={
    author:{
        firstName:"Roman",
        lastName:"Jaan",
        },
    name:"The Glory"
    } 
    console.log(book.name, book.author.firstName, book.author.lastName);
    

