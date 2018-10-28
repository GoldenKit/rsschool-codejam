function sumOfOther(arr) {
let newArr = [];
let buf;
let red = arr.reduce(function(x,y) { return x + y; });
for (let i = 0, n = arr.length; i < n; i++){
buf = red - arr[i];
newArr.push(buf);
}
return newArr;
}
