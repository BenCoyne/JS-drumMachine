function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!audio) {
		return;
	}
	audio.currentTime = 0;
	audio.play();
	key.classList.add("playing");
}

function removeTransition(e) {
	if (e.propertyName !== "transform") return;
	this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

const jazz = document.querySelector("#jazz");
jazzDrums = [
	"kick",
	"snare",
	"brush",
	"tom1",
	"tom2",
	"closed hat",
	"open hat",
	"ride",
	"crash",
];
jazz.addEventListener("click", () => {
	document.body.style.backgroundImage =
		"linear-gradient(black, black), url('https://cdn.mos.cms.futurecdn.net/378274d88018606e7f61e161f9172126.jpg')";
	drumNames = document.querySelectorAll(".drum");
	for (let i = 0; i < drumNames.length; i++) {
		drumNames[i].textContent = jazzDrums[i];
	}
});
