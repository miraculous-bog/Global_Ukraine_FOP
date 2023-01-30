const playMarketArr = document.querySelectorAll('.playmarket');
const appStoreArr = document.querySelectorAll('.appstore');
// const position = {
// 	1: 'top',
// 	2: 'middle',
// 	3: 'bottom',
// };

// const playMarketHandler = (num) => {
// 	let positionItem = position[`${num + 1}`];
// 	fbq('send', 'Subscribe', 'gplay', 'click', positionItem);
// 	// console.log(positionItem);
// }

// const appStoreHandler = (num) => {
// 	let positionItem = position[`${num + 1}`];
// 	fbq('send', 'Subscribe', 'ios', 'click', positionItem);
// 	// console.log(positionItem);
// }

const playMarketHandler = (e) => {
	fbq('trackCustom', 'android_fop1');
	// console.log(positionItem);
	gtag('event', 'ClickAndroid_fop1', {
		'type_lending': 'fop1'
	});
}

const appStoreHandler = (e) => {

	fbq('trackCustom', 'ios_fop1');
	gtag('event', 'ClickIos_fop1', {
		'type_lending': 'fop1'
	});
}


playMarketArr.forEach((el, i) => {
	el.addEventListener('click', playMarketHandler);
});

appStoreArr.forEach((el, i) => {
	el.addEventListener('click', appStoreHandler);
});