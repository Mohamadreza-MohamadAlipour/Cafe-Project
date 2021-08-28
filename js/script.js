const closeMenu = document.querySelector('#closeMenu')
const openMenu = document.querySelector('#openMenu')
const nav = document.querySelector('nav')

openMenu.addEventListener('click', () => {
  nav.classList.add('active')
})

closeMenu.addEventListener('click', () => {
  nav.classList.remove('active')
})
