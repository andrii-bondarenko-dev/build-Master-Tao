const selects = document.querySelectorAll("select");
selects.forEach((item) => NiceSelect.bind(item));

/**
 * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
 *
 * @private
 * @author Todd Motto
 * @link https://github.com/toddmotto/foreach
 * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
 * @callback requestCallback      callback   - Callback function for each iteration.
 * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
 * @returns {}
 */
var forEach = function (t, o, r) {
	if ("[object Object]" === Object.prototype.toString.call(t))
		for (var c in t)
			Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
	else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
	forEach(hamburgers, function (hamburger) {
		hamburger.addEventListener(
			"click",
			function () {
				this.classList.toggle("is-active");
			},
			false
		);
	});
}
const swiperBanner = new Swiper(".swiper-banner", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	spaceBetween: 24,

	// If we need pagination
	pagination: {
		clickable: true,
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const header = document.querySelector("header");
const banner = document.querySelector(".swiper-banner");

const bannerVariable = banner.getAttribute("style");
const headerHeight = header.offsetHeight;

console.log(header.offsetHeight);
console.log(bannerVariable);

banner.setAttribute("style", "--header-height: " + headerHeight + "px");

const fileInput = document.querySelectorAll('[type="file"]');

fileInput.forEach((item) => {
	item.addEventListener("change", function () {
		let fileName = item.closest(".input-box").querySelector(".file-name");
		fileName.innerHTML = item.files[0].name;
	});
});
