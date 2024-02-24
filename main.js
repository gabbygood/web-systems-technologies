const password = prompt("What is the password of the site")
const mainBodyEl = document.querySelector(".main-body")
if (password === "Gabrielle") {
    mainBodyEl.style.visibility = 'visible'
} else {
    mainBodyEl.style.visibility = 'hidden'
}