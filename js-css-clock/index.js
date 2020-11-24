const currentTime = new Date(Date.now());
const seconds = currentTime.getSeconds();
const minutes = currentTime.getMinutes();
const hours = currentTime.getHours();

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
	const currentTime = new Date(Date.now());
	const seconds = currentTime.getSeconds();
	const minutes = currentTime.getMinutes();
	const hours = currentTime.getHours();

	secondHand.style.transform = `rotate(${(seconds * 360 / 60) + 90}deg)`;
	minuteHand.style.transform = `rotate(${(minutes * 360 / 60) + 90}deg)`;
	hourHand.style.transform = `rotate(${((hours / 2) * 360 / 12) + 90}deg)`;
}


setInterval(() => {
	setDate();
}, 1000);