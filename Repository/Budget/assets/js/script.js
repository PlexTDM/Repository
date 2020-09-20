var button = document.querySelector("#insert")
var income=0;
var expense=0;
function budget(){
    var mark = document.querySelector("#mark");
    var Tmark = mark.options[mark.selectedIndex].value;
    var orlogoTailbar = document.querySelector('#orlogoTailbar');
    var orlogoDun = document.querySelector('#orlogoDun');
    var description = document.querySelector('#description').value;
    var amount = parseInt(document.querySelector('#amount').value);
    var zarlagaTailbar = document.querySelector('#zarlagaTailbar');
    var zarlagaDun = document.querySelector('#zarlagaDun');
    var bal = parseInt(document.querySelector('#balance').value);
    if (Tmark === '+'){
        orlogoTailbar.innerHTML += '<li>'+description +'</li>';
        orlogoDun.innerHTML += '<li>'+Tmark + amount +'</li>';
        income += amount;
        orlogo.innerText =  Tmark + income;
        balance.innerHTML = income - expense;
    }
    else{
        zarlagaTailbar.innerHTML += '<li>' + description + '</li>';
        zarlagaDun.innerHTML += '<li>' + Tmark + amount + '</li>';
        expense += amount
        zarlaga.innerText = Tmark + expense;
        balance.innerHTML = income - expense;
        button.innerHTML = "HEllp"
    }
};
button.addEventListener('click',function(){
    budget()
});