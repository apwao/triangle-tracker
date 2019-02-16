function triangleCheck(){
// Obtain the three Dimensions
let firstDimension = parseInt(document.getElementById("dimension1").value);
let secondDimension = parseInt(document.getElementById("dimension2").value);
let thirdDimension = parseInt(document.getElementById("dimension3").value);
}
// Discard the non-triangles
if ((firstDimension + secondDimension) <= thirdDimension || (secondDimension + thirdDimension) <= firstDimension){
	alert("Dimensions cannot form a triangle");

}
else if((firstDimension + thirdDimension) <= secondDimension){
	alert("Dimensions cannot form a triangle");
}
//Check for equilateral triangle
else if(firstDimension === secondDimension && secondDimension === thirdDimension){
	alert("The dimensions form an equilateral Triangle");
}
//Check for scalene triangle
else if(firstDimension !== secondDimension && secondDimension !== thirdDimension && firstDimension !== thirdDimension){
	alert("The dimensions form a scalene triangle");
}
//Check for isoceles triangle
else{
alert("The dimensions form an isoceles triangle");
}
