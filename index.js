const header = document.querySelector(".header")
const modal = document.querySelector('.modal')
const bento = document.querySelector(".header__bento")

bento.addEventListener('click', () => {
    if(modal.classList.contains("open")) {
        modal.classList.remove("open")
        bento.classList.remove("cross")

    } else {
        modal.classList.add("open")
        bento.classList.add("cross")
    }
})

document.addEventListener('click', e => {
    if(e.target === modal) {
        modal.classList.remove("open")
        bento.classList.remove("cross")
    }
})

document.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        modal.classList.remove("open")
        bento.classList.remove("cross")
    }
})