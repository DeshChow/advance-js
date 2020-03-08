let bonus = 50; //global scope

function add(x,y){
    let res = x+y+bonus;
    console.log(bonus);
    if(res>9){
        let mood="happy";
        console.log(mood);
    }
    //console.log(mood); ->error
    if(res>10){
        var mod = "more happy"; 
    }
    console.log(mod);
    return res;
}

console.log(bonus);
//console.log(res); ->error
let result = add(10,20);
console.log(result);