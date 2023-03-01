const form = document.querySelector('#login')
const valueInput = document.querySelector('#nama');
const valuePassword = document.querySelector('#password')

form.addEventListener('click', function (e){
    e.preventDefault()
    const value = valueInput.value
    const password = valuePassword.value
    if (!value) {
        alert('Masukkan nama Anda')
    }else if (!password){
        alert('Masukkan Password anda')
    }else{
        window.location.href = "Home.html"
    }
//    
})
