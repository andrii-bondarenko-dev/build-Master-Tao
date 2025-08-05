const selects = document.querySelectorAll("select");
selects.forEach((item) => NiceSelect.bind(item));

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
	direction: "horizontal",
	loop: true,
	spaceBetween: 24,
	pagination: {
		clickable: true,
		el: ".swiper-pagination",
	},
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

const advantagesSlideLength = document.querySelectorAll(
	".advantages .swiper-slide"
).length;

const swiperAdvantages = new Swiper("#advantages", {
	spaceBetween: 12,
	loop: true,
	simulateTouch: true,
	slidesPerView: 1,
	roundLengths: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		enabled: true,
	},

	breakpoints: {
		992: {
			spaceBetween: 0,
			loop: false,
			slidesPerView: "auto",
			initialSlide: 0,
			slidesPerGroup: advantagesSlideLength,
			simulateTouch: false,
			pagination: {
				enabled: false,
				el: ".swiper-pagination",
			},
		},
	},
});
