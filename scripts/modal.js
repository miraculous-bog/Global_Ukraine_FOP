let modal = document.querySelector('.mymodal');
let button = document.querySelector('.mission__item-info-btn');
let close = document.querySelector('.close');
//Функция устанавливает значение свойства display в то, которое указано в ее параметрах при вызове


//Функция обрабатывает клик по кнопке "Оставить заявку"
button.click(function () {
	setModal('block');
});

//Функция обрабатывает клик по кнопке "Закрыть"
$('.close').click(function () {
	setModal('none');
});

//Функция обрабатывает клики по модальному окну, и, если клик не произошел не по блоку content и не по его дочерним элементам, то закрываем модальное окно
modal.click(function (e) {
	var target = e.target;
	if (!($('.content').is(target)) && $('.content').has(target).length === 0) {
		setModal('none');
	}
});

//Если нажата клавиша ESC, то закрываем модальное окно
document.keydown(function (e) {
	if (e.which == 27) {
		setModal('none');
	}
});