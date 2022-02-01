
const openMenu = document.querySelector('.header-btn');
const closeMenu = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close-btn');

openMenu.addEventListener('click', () => {
	mobileMenu.classList.add('active');
	closeBtn.classList.add('active');
	document.querySelector('body').style.overflow = 'hidden'
})

closeBtn.addEventListener('click', () => {
	mobileMenu.classList.remove('active');
	document.querySelector('body').style.overflow = 'auto';
	closeBtn.classList.remove('active');
})