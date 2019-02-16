/Obtain input from user
var firstDimension = parseInt(prompt("Enter First Dimension"));
var secondDimension = parseInt(prompt("Enter Second Dimension"));
var thirdDimension = parseInt(prompt("Enter Third Dimension"));
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
