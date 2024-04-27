let arr = [
    {
        id: 1,
        userName: 'holvoy',
        password: "12345",
        isMarried: false
    },

    {
        id: 2,
        userName: 'behruz',
        password: "12345",
        isMarried: false
    },
    {
        id: 3,
        userName: 'miron',
        password: "12345",
        isMarried: false
    }
]

let userNAme = document.querySelector('.userName')
let userID = document.querySelector('.userID')
let btn = document.querySelector('.wrapper_btn')
let error = document.querySelector('.error')


btn.addEventListener('click', () => {
    arr.map((v) => {
        if (v.userName = userNAme.value && v.password === userID.value) {
            window.location.href = './hello.html'
        }

        else {
            error.innerHTML = 'foydalanuvchi topilmadi'
        }
        userID.value= ''
        userNAme.value = ''
    })
})


