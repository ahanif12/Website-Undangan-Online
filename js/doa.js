
const dataArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [] 

// function utama ini untuk submit
const submit = document.querySelector('#submit')
submit.addEventListener('click', function (el){
    el.preventDefault()
    const inputNama = document.querySelector('#name')
    
    const inputPesan = document.querySelector('#textPesan')
    tambahkan(inputNama, inputPesan)
})


// function ini untuk menambahkan inputan ke json.parse = dataArray
function tambahkan (inputNama, inputPesan) {
    dataArray.push(inputNama.value)
    dataArray.push(inputPesan.value)
    localStorage.setItem('items', JSON.stringify(dataArray))
    location.reload()
}

// function ini untuk tampilkan hasil array ke web page
const tampilHalaman = function (){
    const output = document.querySelector('.output')

    let items = ''
    for (let i = 0; i < dataArray.length; i++) {
        items += `<div class="kirimPesan">
                            <span class="nama"> ${dataArray[i]} </span>
                           </div>`
    }
    output.insertAdjacentHTML('beforebegin', items)
}

window.onload = function (){
    tampilHalaman()
}
