var hariu = document.querySelector('#hariu')
function calculator(num){
    hariu.value += num;
};
function clr(){
    hariu.value = " ";
};
function backspace(){
    hariu.value = hariu.value.substring(0,hariu.value.length - 1);
};
function tentsuu(){
    hariu.value = eval(hariu.value);
};
document.getElementById