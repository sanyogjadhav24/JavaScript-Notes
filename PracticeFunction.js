//Question 1:

let marksStu=[87,93,64,87,99,60,98];

let nintyabove=marksStu.filter((val)=>{

    return val>90;
})

console.log(nintyabove)

//Question no.2:

let n=prompt("Enter a number:");

let arr=[];
for(let i=1;i<=n;i++){

    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((res,val)=>{
    return res+val;

})
console.log("sum=",sum);

let factorial=arr.reduce((res,val)=>{
    return res*val;

})
console.log("factorial=",factorial);