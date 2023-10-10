let display = document.getElementById('display');
let result = 0;

function clickButton(target) {
  // console.log(target);
  let target_value = target.innerHTML;
  result=display.value;
  
  if (target_value=="AC") {
    display.value= "0"; //ACを押すと表示される数字を０に統一
  } else if (target_value == "="){
    display.value = eval(result); //計算結果を表示
  } else if (display.value==="0" && target_value!==".") {
   display.value = target_value; //最初の０に上書き
  }
  
  //演算子の連続入力の制御
  //入力した値が数字以外の場合
  //表示されている最後が数字ならそのまま入力
  //表示されている最後が数字以外なら最後の文字に上書き
   
  else {
    if(isNaN(target_value)){
      let last=display.value.slice(-1);
      if (!isNaN(last)){
        display.value += target_value;
      } else {
        display.value = display.value.slice(0,-1) + target_value;
      }
    }
  else{
    display.value += target_value; //入力したものを横に並べていく
  }}
}








