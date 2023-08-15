type ImranInPakistan={
    name:string;
    age:number;
    type:"Pakistan"};
type ImranOverseas={
    name:string; 
    age:number; 
    type:"Overseas"; 
    nickName:string};
type Imran=ImranInPakistan |ImranOverseas; 
const imran:Imran=
Math.random() >0.5 
?   {name:"Imran",
    age:21,
    type:"Pakistan"
}:
{   name:"Imran", 
    age:18, 
    type:"Overseas", 
    nickName:"Alexander"
};
if(imran.type==="Pakistan"){
    console.log(`He is Pakistan so we will call him ${imran.name}`);
    
}else {console.log(`He is not in Pakistan so we will call him ${imran.nickName}`);

}
