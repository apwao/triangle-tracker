function validateinput(){
  var firstDimension = document.getElementById('firstDimension');
  var valid = true;
  if firstDimension.value.length -- 0){
    firstDimension.className = "invalid input";
    firstDimension.getElementSibling.innerHTML = "dimension can't be blank";
    valid = false}
    return valid;
  }
}
