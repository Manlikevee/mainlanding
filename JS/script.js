const navMenu = document.querySelector(".nav_menu"),
	ToggleBtn = document.querySelector(".toggle_btn"),
	CloseBtn = document.querySelector(".close_btn");

// ==== SHOW MENU ==== //
ToggleBtn.addEventListener("click", () => {
	navMenu.classList.add("show");
	document.querySelector("body").classList.add("no-scroll");
});

// ==== HIDE MENU ==== //
CloseBtn.addEventListener("click", () => {
	navMenu.classList.remove("show");
	document.querySelector("body").classList.remove("no-scroll");
});

/* ===== SHOW/HIDE MENU ===== */
const menuLinks = document.querySelectorAll(".nav-link-list-item");
function clickAction() {
	/* ==== ADD'S ('active') CLASS TO THE LINK ==== */
	menuLinks.forEach((n) => n.classList.remove("active"));
	this.classList.add("active");

	/* ==== AFTER CLICK REMOVE CLASS ('show') FROM 'navMenu' ==== */
	const navMenu = document.querySelector(".nav_menu");
	navMenu.classList.remove("show");
}
menuLinks.forEach((n) => n.addEventListener("click", clickAction));

// ==== GSAP Animations ==== //

// ==== LOGO  ==== //
gsap.from(".logo", {
	opacity: 0,
	y: 10,
	delay: 1,
	duration: 0.5,
});
// ==== NAV-MENU ==== //
gsap.from("ul li", {
	opacity: 0,
	y: 10,
	delay: 1.4,
	duration: 0.5,
	stagger: 0.3,
});
// ==== TOGGLE BTN ==== //
gsap.from(".toggle_btn", {
	opacity: 0,
	y: 10,
	delay: 1.2,
	duration: 0.5,
});

// ==== FLEX ITEM ==== //
gsap.from(".flex-item-1", {
	opacity: 0,
	y: 20,
	delay: 2.8,
	duration: 1,
});

gsap.from(".customer-related-desc p", {
	opacity: 0,
	y: 20,
	delay: 2.8,
	duration: 0.8,
});

gsap.from(".rating-star i", {
	opacity: 0,
	y: 20,
	delay: 3,
	duration: 1,
});

gsap.from(".rating-count", {
	opacity: 0,
	y: 20,
	delay: 3,
	duration: 1,
});

gsap.from(".ratings", {
	opacity: 0,
	y: 20,
	delay: 3,
	duration: 1,
});

// ==== PLANT IMAGE ==== //
gsap.from(".plant-img img", {
	opacity: 0,
	y: 20,
	delay: 3,
	duration: 1,
});
