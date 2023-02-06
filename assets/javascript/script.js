// toggle hamberger icon

const  hambergerIcon = document.querySelector("#ham-icon")
const dropdown = document.querySelector(".navbar-dropdown")

hambergerIcon.addEventListener('click', toggleClass)

function toggleClass() {
    dropdown.classList.toggle('enable')
}