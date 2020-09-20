let button = document.querySelector("#insert")
let income = 0;
let expense = 0;
let orlogoHuvi = document.getElementById('orlogoPerc')
let zarlagaHuvi = document.getElementById('zarlagaPerc')

function budget(){
    // variables
    let Tmark = document.querySelector("#mark").options[mark.selectedIndex].value;
    let orlogoTailbar = document.querySelector('#orlogoTailbar');
    let orlogoDun = document.querySelector('#orlogoDun');
    let description = document.querySelector('#description').value;
    let amount = parseInt(document.querySelector('#amount').value);
    let zarlagaTailbar = document.querySelector('#zarlagaTailbar');
    let zarlagaDun = document.querySelector('#zarlagaDun');
    let bal = parseInt(document.querySelector('#balance').value);
    let orlogo = document.getElementById('orlogo');

    if (Tmark === '+'){
        orlogoTailbar.innerHTML += '<li>'+description +'</li>';
        orlogoDun.innerHTML += '<li>'+Tmark + amount +'</li>';
        income += amount;
        orlogo.innerText =  Tmark + income;
        balance.innerHTML = income - expense;
        button.innerHTML = "Нэмэх";
    }
    else{
        let listDesc = document.createElement('li');
        listDesc.innerHTML += '<li>' + description + '</li>';
        zarlagaTailbar.appendChild(listDesc);

        let listDun = document.createElement('li');
        listDun.innerHTML += '<li>' + Tmark + amount + '</li>';
        zarlagaDun.appendChild(listDun);
        expense += amount;

        zarlaga.innerText = Tmark + expense;
        balance.innerHTML = income - expense;
        button.innerHTML = "Hasah";
    }
    percentage(income, expense);
};

function checkEmpty(){
    var amount = document.querySelector('#amount').value.length
    if(amount != 0){
       budget();
    }
    else{
        alert('too utga oruulna uu')
    }
}

function percentage(num,num1){
    x = (num/num1)*100;
    if (x>100){x=100};
    zarlagaHuvi.innerHTML = x + '%';
    orlogoHuvi.innerHTML = 100 - x + '%';
}

button.addEventListener('click',function(){
    checkEmpty();
});