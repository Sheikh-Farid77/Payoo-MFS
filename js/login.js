const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if (phoneNumber === '1234' & pinNumber === '1234') {
        window.location.href = '../home.html'
    } else {
        alert('Please Insert Valid Number Or Pin...!')
    }


})