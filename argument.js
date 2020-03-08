function add(num1,num2){
    console.log(arguments);
    return num1 + num2 + arguments[2];
}

const result = add(2,3,5);
console.log(result);

function addd(x,y){
    console.log([...arguments]);
    let arr = [...arguments];
    console.log(arr.length);
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

const res = addd(1,2,3,4,5);
console.log(res);