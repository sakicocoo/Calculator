let display = document.getElementById('display');
let result = 0;
let operator = ["+","-","*","/"];

function clickButton(target) {
  let target_value = target.innerHTML;
  result=display.value;
  
  if (target_value=="AC") {
    display.value= "0"; //ACを押すと表示される数字を０に統一
  } else if (target_value == "="){
    display.value = eval(result); //計算結果を表示
  } else if (display.value==="0" && target_value!==".") {
   display.value = target_value; //最初の０に上書き
  }
  
  //演算子の連続入力の制御たち
  else if (target_value=="+" && display.value.slice(-1)=="+") {
    display.value = display.value.slice(0,-1) + "+";}
  else if (target_value=="+" && display.value.slice(-1)=="-") {
    display.value = display.value.slice(0,-1) + "+";}
  else if (target_value=="+" && display.value.slice(-1)=="*") {
    display.value = display.value.slice(0,-1) + "+";}
  else if (target_value=="+" && display.value.slice(-1)=="/") {
    display.value = display.value.slice(0,-1) + "+";}
    
  else if (target_value=="-" && display.value.slice(-1)=="+") {
    display.value = display.value.slice(0,-1) + "-";}
  else if (target_value=="-" && display.value.slice(-1)=="-") {
    display.value = display.value.slice(0,-1) + "-";}
  else if (target_value=="-" && display.value.slice(-1)=="*") {
    display.value = display.value.slice(0,-1) + "-";}
  else if (target_value=="-" && display.value.slice(-1)=="/") {
    display.value = display.value.slice(0,-1) + "-";}
    
  else if (target_value=="*" && display.value.slice(-1)=="+") {
    display.value = display.value.slice(0,-1) + "*";}
  else if (target_value=="*" && display.value.slice(-1)=="-") {
    display.value = display.value.slice(0,-1) + "*";}
  else if (target_value=="*" && display.value.slice(-1)=="*") {
    display.value = display.value.slice(0,-1) + "*";}
  else if (target_value=="*" && display.value.slice(-1)=="/") {
    display.value = display.value.slice(0,-1) + "*";}
    
  else if (target_value=="/" && display.value.slice(-1)=="+") {
    display.value = display.value.slice(0,-1) + "/";}
  else if (target_value=="/" && display.value.slice(-1)=="-") {
    display.value = display.value.slice(0,-1) + "/";}
  else if (target_value=="/" && display.value.slice(-1)=="*") {
    display.value = display.value.slice(0,-1) + "/";}
  else if (target_value=="/" && display.value.slice(-1)=="/") {
    display.value = display.value.slice(0,-1) + "/";}
  
  else if (target_value=="." && display.value.slice(-1)=="."){
    display.value= display.value.slice(0,-1) + ".";}
  else if (target_value=="." && display.value.slice(-1)=="+"){
    display.value= display.value.slice(0,-1) + ".";}
  else if (target_value=="." && display.value.slice(-1)=="-"){
    display.value= display.value.slice(0,-1) + ".";}
  else if (target_value=="." && display.value.slice(-1)=="*"){
    display.value= display.value.slice(0,-1) + ".";}
  else if (target_value=="." && display.value.slice(-1)=="/"){
    display.value= display.value.slice(0,-1) + ".";}
  else if (target_value == "." && result.innerHTML.includes(".")) {
    return;}
    
  else{
    display.value += target_value; //入力したものを横に並べていく
  }}








