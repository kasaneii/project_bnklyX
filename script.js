// hamburger menu
const navToggle = document.getElementById('mobileNavToggle')
const primaryNav = document.getElementById('primaryNavigation')
const iconClose = document.getElementById('iconClose')
const iconMenu = document.getElementById('iconMenu')

navToggle.addEventListener('click', () => {
  primaryNav.classList.toggle('opened')

  if(primaryNav.classList.contains('opened')) {
    iconMenu.style.display = 'none'
    iconClose.style.display = 'block'
  } else {
    iconMenu.style.display = 'block'
    iconClose.style.display = 'none'
  }
})


document.querySelectorAll('.question').forEach((question) => question.addEventListener('click', () => {

  // Open accordion item
  if(question.parentNode.classList.contains("active")) {

    question.parentNode.classList.toggle("active")

  //Close accordion item 
  } else {
    document.querySelectorAll('.question').forEach(question => question.parentNode.classList.remove('active'))

    question.parentNode.classList.add("active")
  }

}))