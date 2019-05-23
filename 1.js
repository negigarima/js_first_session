/*
var priceArray = [100,14,11,90,34];

var result = function sortArray( priceArray) 
{ 
var i, j; 
for (i = 0; i < priceArray.length-1; i++){ 
for (j = 0; j <  priceArray.length-i-1; j++) { 
if ( priceArray[j] >=  priceArray[j+1]){
continue;
}
else{
return false;
}
} 
}
return true; 
} 

if (result === true){
console.log("array is sorted");
}
else{
console.log("array is not sorted");
} 
 */
var arr = [1,2,3,4,5];
for(var i=0; i<arr.length; i++) {
	
	arr[i] =arr[i] * 6;
}
arr.push("36");
arr.push("48");
arr.splice(2,1);
console.log(arr);
