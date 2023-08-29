const toggleButton = document.getElementsByClassName('burger-menu')[0]
const navbarLinks = document.getElementsByClassName('navbar-menu')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.nav-wrap')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-menu')

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	allNavItems.forEach(item => item.addEventListener('click', () => {
		navList.classList.remove('active')
	}))

	window.addEventListener('scroll', addShadow)
})
