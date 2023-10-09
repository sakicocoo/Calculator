let display = document.getElementById('display');
// let number = document.getElementsByClassName('number');
let result = 0;
// let preValue =document.display.value.slice(-1);
// let num = document.getElementsByClassName('number');
// let operator = ["+","-","*","/"];

function clickButton(target) {
  // console.log(target);
  let target_value = target.innerHTML;
  result=display.value;
  
  if (target_value=="AC") {
    display.value= "0";　//ACを押すと表示される数字を０に統一
  } else if (target_value == "="){
    display.value = eval(result); //計算結果を表示
  } else if (display.value==="0" && target_value!==".") {
    display.value = target_value;　//最初の０に上書き
  } else if (target_value.slice(-1)==="="){
    display.value="";
    display.value=target_value;
  }
  else {
    display.value += target_value;　//入力したものを横に並べていく
  }
  console.log(target_value);
}






