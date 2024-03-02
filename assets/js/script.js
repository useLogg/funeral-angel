window.onscroll = () => {
	const header = document.querySelector('.header');

	if (window.pageYOffset > 200) {
		header.classList.add('_fixed');
	} else {
		header.classList.remove('_fixed');
	}
}

function menuBurger() {
	const menuButton = document.querySelector('.menu__icon');
	const menuBody = document.querySelector('.menu__body');
	const menuActions = document.querySelector('.menu__actions');

	function toggleMenu() {
		document.body.classList.toggle('_lock');
		menuButton.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		menuActions.classList.toggle('_active');
	}

	menuButton.addEventListener('click', toggleMenu);
}

menuBurger();

function scrollToSections() {
	document.querySelectorAll('.section-link').forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault();

			const href = this.getAttribute('href').substring(1);
			console.log(href);
			const section = document.getElementById(href);
			console.log(section);

			const topOffset = (window.innerWidth <= 480) ? 60 : 0;
			const sectionPosition = section.getBoundingClientRect().top;
			const offsetPosition = sectionPosition - topOffset;

			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			})
		})
	})
}

scrollToSections();

const accordionHeader = document.querySelectorAll('.reparations-accordion__header');

accordionHeader.forEach((itemHeader) => {
	itemHeader.addEventListener('click', () => {
		const accordionHeaderActive = document.querySelector('.reparations-accordion__header._active');

		if (accordionHeaderActive) {
			accordionHeaderActive.classList.remove('_active');
			accordionHeaderActive.nextElementSibling.style.maxHeight = null;
		}
		
		itemHeader.classList.add('_active');

		let itemContent = itemHeader.nextElementSibling;
		itemContent.style.maxHeight = itemContent.scrollHeight + 'px';
	});
});