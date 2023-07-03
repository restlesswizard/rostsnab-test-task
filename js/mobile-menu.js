let mobileMenu = document.querySelector('.menu-mobile')
let burger = document.querySelector('.burger-menu')

let burgerClose = document.querySelector('.burger-menu__close')


console.log(burger)

mobileMenu.addEventListener('click', () => {
	burger.style.left = '340px'
	console.log('ccc')
})

burgerClose.addEventListener('click', () => {
	burger.style.left = '480px'
})