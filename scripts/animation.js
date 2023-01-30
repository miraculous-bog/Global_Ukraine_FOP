function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
		}
	});
}

let options = {
	threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
let elementsAnimation = document.querySelectorAll('.element-animation-markets');
let elementsAnimationCards = document.querySelectorAll('.element-animation-cards');

for (let elm of elements) {
	observer.observe(elm);
}

for (let elm of elementsAnimation) {
	observer.observe(elm);
}

for (let elm of elementsAnimationCards) {
	observer.observe(elm);
}
