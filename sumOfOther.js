function sumOfOther(arr) {
let newArr = [];
let buf;
for (let i=0;i<arr.length;i++){
let red=arr.reduce(function(x,y) {return x+y;});
buf=red-arr[i];
newArr.push(buf);
}
return newArr;
}
