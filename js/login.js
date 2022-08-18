//login button clicked
document.getElementById('btn-login').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    
    if(email==='kuruk@gmail.com' && pass==='kurukchan'){
        window.location.href='./bank.html'
    }
    else{
        alert('Wrong email or password!');
    }
})