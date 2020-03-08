const students = [
    {id: 1, name: "Desh"},
    {id: 2, name: "Shojib"},
    {id: 3, name: "Sowmen"},
    {id: 4, name: "Ovik"}
]
/*const output = [];
for(let i=0; i<students.length; i++){
    const element = students[i].name;
    output.push(element);
}
console.log(output);*/

const names = students.map(s => s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);
const finder = students.filter(s => s.id>=3);
console.log(finder);
const isThere = students.find(s => s.id>=3)
console.log(isThere);


