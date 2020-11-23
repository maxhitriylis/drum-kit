const allKeys = document.querySelector('.keys');

window.addEventListener('keydown', e => {
	const key = e.keyCode;
	const soundElem = document.querySelector(`audio[data-key="${key}"]`);
	if (soundElem) {
		soundElem.currentTime = 0;
		soundElem.play();
	}
});