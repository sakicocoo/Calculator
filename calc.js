let display = document.getElementById('display');
// let number = document.getElementsByClassName('number');
let result = 0;
// let preValue =display.value.slice(-1);
let num = document.getElementsByClassName('number');

function clickButton(target) {
  // console.log(target);
  let target_value = target.innerHTML;
  
  // display.value += target_value;
  result = display.value;
  
  // console.log(target_value);
  
  if (target_value=="AC") {
    display.value = "0";
  } else if (target_value == "="){
    display.value = eval(result);
  // } else if (target_value==".") {
  //   if (preValue == num) {
  //     document.getElementById("comma").disabled ===false;
  //   } else {
  //     document.getElementById("comma").disabled ===true;
  //   }
  } 
  
  else {
    display.value += target_value;
  }
  console.log(num);
}




