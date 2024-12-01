// script.js
document.getElementById('menu-icon').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

const inputpassword = document.getElementById("input-password")
const showpassword = document.getElementById("show-password")

showpassword.addEventListener("input", (e) => {
    if (e.target.checked) {
        inputpassword.setAttribute("type", "text")
    } else {
        inputpassword.setAttribute("type", "password")
    };
})