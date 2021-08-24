let box = document.querySelectorAll(".column-portfolio__item")
let navFilter = document.querySelector(".menu-portfolio")
let link = document.querySelectorAll(".menu-portfolio__link")
let menu = document.querySelectorAll('.menu__link')

// фильтр

navFilter.addEventListener('click', (e) => {
	if (e.target.tagName !== 'LI') {
		return false
	};
	
	let filterClass = e.target.dataset["filter"];
	
	box.forEach(elem => {
		elem.classList.remove('hide')
		if (!elem.classList.contains(filterClass) && filterClass !== 'ALL') {
			elem.classList.add("hide")

		}
	})
});
// актив ссылки
link.forEach(b => {
	b.addEventListener('click', function() {
		link.forEach(button => button.classList.remove('active'));
		this.classList.add('active')
	})
})

menu.forEach(c => {
	c.addEventListener('click', function() {
		menu.forEach(nav => nav.classList.remove('active'));
		this.classList.add('active')
	})
})

// бургер
let burger = document.querySelector('.menu__icon')
let iconMenu = document.querySelector('.menu')

if (burger) {
	burger.addEventListener('click', function(e) {
		document.body.classList.toggle('lock')
		burger.classList.toggle('active')
		iconMenu.classList.toggle('active')
	})
}

