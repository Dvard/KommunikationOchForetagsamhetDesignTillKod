function toggleTab(index) {
	document.querySelector('#tab-content-' + String(index)).style.display = 'block';
	document.querySelector('#tab' + String(index) + '-btn').classList.toggle('active-tab');
	document.querySelector('#tab-content-' + String((index === 1) ? 2 : 1)).style.display = 'none';
	document.querySelector('#tab' + String((index === 1) ? 2 : 1) + '-btn').classList.toggle('active-tab');
}