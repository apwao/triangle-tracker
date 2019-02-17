//Obtain form element from document
let myForm = document.forms.checkerForm;
//Obtain error message elements
let errorMessage = document.getElementsByClassName("error");
//Obtain input from user
function triangleCheck(){
// Obtain the three Dimensions
let firstDimension = parseInt(document.getElementById("dimension1").value);
let secondDimension = parseInt(document.getElementById("dimension2").value);
let thirdDimension = parseInt(document.getElementById("dimension3").value);
}
//Discard dimensions that cannot form a triangle
if ((firstDimension + secondDimension) === thirdDimension || (secondDimension + thirdDimension) === firstDimension || (firstDimension + thirdDimension) === secondDimension){
	alert("Dimensions cannot form a triangle");
}
else if((firstDimension + thirdDimension) < secondDimension || (firstDimension + secondDimension) < thirdDimension || (secondDimension + thirdDimension) < firstDimension){
alert("Dimensions cannot form a triangle");
}
//Check for an equilateral triangle
else if(firstDimension === secondDimension && secondDimension === thirdDimension){
	alert("The dimensions form an equilateral Triangle");
}
//Check for a scalene triangle
else if(firstDimension !== secondDimension && secondDimension !== thirdDimension && firstDimension !== thirdDimension){
	alert("The dimensions form a scalene triangle");
}
else if(firstDimension === secondDimension &&  secondDimension != thirdDimension){
alert("The dimensions form an isoceles triangle");
}
else if(secondDimension === thirdDimension &&  thirdDimension != firstDimension){
alert("The dimensions form an isoceles triangle");
}
else {thirdDimension === firstDimension &&  firstDimension != secondDimension
alert("The dimensions form an isoceles triangle");}
}
