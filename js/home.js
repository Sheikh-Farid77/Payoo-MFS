const addMoney = document.getElementById('btn-add-money');

addMoney.addEventListener('click', function (event) {
    event.preventDefault();
    const inputAddMoney = document.getElementById('input-add-money').value;
    const inputPin = document.getElementById('input-pin').value;
    const balance = document.getElementById('balance').innerText;

    if (inputPin === '1234') {
        const updatedBalance = parseFloat(balance) + parseFloat(inputAddMoney);
        document.getElementById('balance').innerText = updatedBalance
        // balance.innerText = updatedBalance;

    } else {
        alert('Please Enter Correct Pin')
    }


})
const cashOut = document.getElementById('btn-cash-out');

cashOut.addEventListener('click', function (event) {
    event.preventDefault();
    const inputCashOut = document.getElementById('input-cash-out').value;
    const inputPin = document.getElementById('input-out-pin').value;
    const balance = document.getElementById('balance').innerText;

    if (inputPin === '1234') {
        const updatedBalance = parseFloat(balance) - parseFloat(inputCashOut);
        document.getElementById('balance').innerText = updatedBalance
        // balance.innerText = updatedBalance;

    } else {
        alert('Please Enter Correct Pin')
    }


})



function cashOutTop(){
   document.getElementById('add-money-container').classList.add('hidden') 
   document.getElementById('cash-out-container').classList.remove('hidden') 
}
function addMoneyTop(){
    document.getElementById('add-money-container').classList.remove('hidden') 
    document.getElementById('cash-out-container').classList.add('hidden') 
}