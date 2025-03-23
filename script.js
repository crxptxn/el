function showSection(sectionId) {
	// Убираем класс "active" у всех секций и ссылок в меню
	document.querySelectorAll('.content').forEach(section => {
			section.classList.remove('active');
	});
	document.querySelectorAll('.menu a').forEach(link => {
			link.classList.remove('active');
	});

	// Показываем нужную секцию
	document.getElementById(sectionId).classList.add('active');

	// Находим ссылку, которая ведёт на текущую секцию, и добавляем ей "active"
	document.querySelector(`.menu a[href="#"][onclick="showSection('${sectionId}')"]`)?.classList.add('active');

	// Скрываем кнопку "назад"
	document.querySelector('.back-button').style.display = 'none';
}

function showSubsection(subSectionId) {
	showSection(subSectionId);
	document.querySelector('.back-button').style.display = 'block';
}

function goBack() {
	showSection('theory');
}