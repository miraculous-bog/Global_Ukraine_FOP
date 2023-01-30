const img = ['main-slider1.png', 'adv-main-mockup.png', 'animation-action-mockup2.png'];

const possibilityImg = document.querySelector('.possibility__img');
const possibilityImgCard = document.querySelector('.possibility__img-card');
let iterator = 0;
const len = img.length;

const intervalID = setInterval(function () {
	console.log('first', iterator);
	// possibilityImgCard.style.opacity = 0;

	possibilityImg.innerHTML = `<img class="possibility__img-card" src="img/${img[iterator]}" alt="card">`;
	// possibilityImgCard.style.opacity = 1;
	len - 1 === iterator ? iterator = 0 : iterator++;
	console.log('second', iterator);
}, 3000);