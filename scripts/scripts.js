function myFunction(){
// Obtain the three Dimensions from user
let firstDimension = parseInt(document.getElementById("dimension1").value);
let secondDimension = parseInt(document.getElementById("dimension2").value);
let thirdDimension = parseInt(document.getElementById("dimension3").value);

triangleCheck(firstDimension, secondDimension, thirdDimension);
}
function triangleCheck(sideA, sideB, sideC){
//Discard dimensions that cannot form a triangle
if ((sideA + sideB) === sideC || (sideB + sideC) === sideA || (sideA + sideC) === sideB){
	alert("Dimensions cannot form a triangle");
}
else if((sideA + sideC) < sideB || (sideA + sideB) < sideC || (sideB + sideC) < sideA){
alert("Dimensions cannot form a triangle");
}
//Check for an equilateral triangle
else if(sideA === sideB && sideB === sideC){
	alert("The dimensions form an equilateral Triangle");
}
//Check for a scalene triangle
else if(sideA !== sideB && sideB !== sideC && sideA !== sideC){
	alert("The dimensions form a scalene triangle");
}
//Check for isoceles
else if(sideA === sideB &&  sideB != sideC){
alert("The dimensions form an isoceles triangle");
}
else if(sideB === sideC &&  sideC != sideA){
alert("The dimensions form an isoceles triangle");
}
else if(sideC === sideA &&  sideA != sideB){
alert("The dimensions form an isoceles triangle");
}
}
