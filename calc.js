let display = document.getElementById('display');
// let number = document.getElementsByClassName('number');
let result = 0;
let preValue =document.display.value.slice(-1);
let num = document.getElementsByClassName('number');

console.log(num);

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
  } else if (target_value==".") {
    if (preValue == num) {
      document.getElementById("comma").disabled ===false;
    } else {
      document.getElementById("comma").disabled ===true;
    }
  } 
  
  else {
    display.value += target_value;
  }
  console.log(num);
  // console.log(result);
}


























// let display = document.getElementById('result');
// let result = 0;

// function clickButton(target) {
//   console.log(target);
  
//   let target_value = target.innerHTML;
//   console.log(target_value);
  
//   if (target_value == "AC") {
//     display.value = "0";
    
//   } else if (target_value == "=") {
    
//     // result.value = eval("result.innerHTML");
//     // console.log(result.innerHTML);
//   } else {
//     if (result.value == "0") {
//       display.value = target_value;
//     }else {
//     // result.value += target_value;
//     // }
//       // console.log(result.value);
//   }
// }



