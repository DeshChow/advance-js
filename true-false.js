//Falsy
//false
//0
//""
//undefined
//null
//NaN
//Truthy
//'0'," ",[ ],{ }(empty object)
let name=NaN;
console.log(name);
if(name){
    console.log("Condition is True");
}
else{
    console.log("Condition is False");
}