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
const jazzDrums = [
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

const jazzSounds = [
	"sounds/jazz.mp3",
	"sounds/jazz.mp3",
	"sounds/jazz.mp3",
	"sounds/jazz.mp3",
	"sounds/jazz.mp3",
	"sounds/jazz.mp3",
	"sounds/jazz.mp3",
	"sounds/jazz.mp3",
	"sounds/jazz.mp3",
];
jazz.addEventListener("click", () => {
	document.body.style.backgroundImage =
		"linear-gradient(black, pink), url('https://cdn.mos.cms.futurecdn.net/378274d88018606e7f61e161f9172126.jpg')";
	drumNames = document.querySelectorAll(".drum");
	drumSound = document.querySelectorAll(".sound");
	for (let i = 0; i < drumNames.length; i++) {
		drumNames[i].textContent = jazzDrums[i];
		drumSound[i].attributes[2].nodeValue = jazzSounds[i];
	}
	document.getElementsByClassName(".playing").style =
		"border-color: 'rgb(0, 106, 255)'";
});

const pop = document.querySelector("#pop");
const popDrums = [
	"kick",
	"clap",
	"snare",
	"tom",
	"kick 2",
	"clave",
	"closed hat",
	"open hat",
	"ride",
];

const popSounds = [
	"sounds/kick.wav",
	"sounds/clap.wav",
	"sounds/snare.wav",
	"sounds/tom.wav",
	"sounds/boom.wav",
	"sounds/clave.wav",
	"sounds/hihat.wav",
	"sounds/openhat.wav",
	"sounds/ride.wav",
];

pop.addEventListener("click", () => {
	document.body.style.backgroundImage =
		'linear-gradient(black, black), url("https://images.unsplash.com/photo-1602939444907-6e688c594a66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRydW18ZW58MHx8MHx8&w=1000&q=80")';
	drumNames = document.querySelectorAll(".drum");
	drumSound = document.querySelectorAll(".sound");
	for (let i = 0; i < drumNames.length; i++) {
		drumNames[i].textContent = popDrums[i];
		drumSound[i].attributes[2].nodeValue = popSounds[i];
	}
});

const hipHop = document.querySelector("#hip-hop");
const hipHopDrums = [
	"kick",
	"clap",
	"snare",
	"tom",
	"kick 2",
	"clave",
	"closed hat",
	"open hat",
	"ride",
];

const hipHopSounds = [
	"sounds/hipHop/kick.wav",
	"sounds/hipHop/snare.wav",
	"sounds/hipHop/snare2.wav",
	"sounds/hipHop/floorTom.wav",
	"sounds/hipHop/bongo.wav",
	"sounds/hipHop/clave.wav",
	"sounds/hipHop/closedHat.wav",
	"sounds/hipHop/openHat.wav",
	"sounds/hipHop/crash.wav",
];

hipHop.addEventListener("click", () => {
	document.body.style.backgroundImage =
		' url("https://static.roland.com/assets/promos/jpg/billboard_tr-808_story.jpg")';
	drumNames = document.querySelectorAll(".drum");
	drumSound = document.querySelectorAll(".sound");
	for (let i = 0; i < drumNames.length; i++) {
		drumNames[i].textContent = hipHopDrums[i];
		drumSound[i].attributes[2].nodeValue = hipHopSounds[i];
	}
});
