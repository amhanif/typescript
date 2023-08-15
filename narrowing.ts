type PoemWithPages={name:string; pages:number};
type PoenWithRhymes={name:string; rhymes:boolean};

type Poem= PoemWithPages | PoenWithRhymes;

const poem:Poem = 
Math.random() >0.5 
    ? {name:"The Great", pages:7}
    :{name:"The Prince", rhymes:true}
if ("pages" in poem){
    poem.pages;    
}else{poem.rhymes}
console.log(poem);

