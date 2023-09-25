const num : number =5;
const str : string = "Nui";

type Person = {
    age: number,
    dtr: boolean
}

const people : Array<Person>=[]
people.push({
    dtr:true,
    age:30
})
for(const person of people){
    console.log(person.dtr)
}