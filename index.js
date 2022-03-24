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
	"flam",
	"closed hat",
	"open hat",
	"ride1",
	"ride2",
	"rake",
	"crash",
];

const jazzSounds = [
	"sounds/jazz/kick.wav",
	"sounds/jazz/snare.wav",
	"sounds/jazz/flam.wav",
	"sounds/jazz/hat.wav",
	"sounds/jazz/openHat.wav",
	"sounds/jazz/ride1.wav",
	"sounds/jazz/ride2.wav",
	"sounds/jazz/rake.wav",
	"sounds/jazz/crash.wav",
];
jazz.addEventListener("click", () => {
	document.body.style.backgroundImage =
		"linear-gradient(black, pink), url('https://cdn.mos.cms.futurecdn.net/378274d88018606e7f61e161f9172126.jpg')";

	drumNames = document.querySelectorAll(".drum");
	drumSound = document.querySelectorAll(".sound");
	jazz.style.color = "rgb(255, 0, 179)";
	rock.style.color = "white";
	hipHop.style.color = "white";
	for (let i = 0; i < drumNames.length; i++) {
		drumNames[i].textContent = jazzDrums[i];
		drumSound[i].attributes[2].nodeValue = jazzSounds[i];
	}
	document.getElementsByClassName(".playing").style =
		"border-color: 'rgb(0, 106, 255)'";
});

const rock = document.querySelector("#rock");
const rockDrums = [
	"kick",
	"kick 2",
	"snare",
	"roll",
	"floor tom",
	"closed hat",
	"open hat",
	"crash",
	"ride",
];

const rockSounds = [
	"sounds/rock/kick.wav",
	"sounds/rock/kick2.wav",
	"sounds/rock/snare.wav",
	"sounds/rock/roll.wav",
	"sounds/rock/floorTom.wav",
	"sounds/rock/closedHat.wav",
	"sounds/rock/openHat.wav",
	"sounds/rock/crash.wav",
	"sounds/rock/ride.wav",
];

rock.addEventListener("click", () => {
	document.body.style.backgroundImage =
		'linear-gradient(black, black), url("https://images.unsplash.com/photo-1602939444907-6e688c594a66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRydW18ZW58MHx8MHx8&w=1000&q=80")';
	drumNames = document.querySelectorAll(".drum");
	drumSound = document.querySelectorAll(".sound");
	rock.style.color = "rgb(255, 0, 179)";
	jazz.style.color = "white";
	hipHop.style.color = "white";
	for (let i = 0; i < drumNames.length; i++) {
		drumNames[i].textContent = rockDrums[i];
		drumSound[i].attributes[2].nodeValue = rockSounds[i];
	}
});

const hipHop = document.querySelector("#hip-hop");
const hipHopDrums = [
	"kick",
	"snare1",
	"snare2",
	"tom",
	"bongo",
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
	console.log(hipHop.style.color);
	document.body.style.backgroundImage =
		'linear-gradient(black, grey), url("https://static.roland.com/assets/promos/jpg/billboard_tr-808_story.jpg")';
	drumNames = document.querySelectorAll(".drum");
	drumSound = document.querySelectorAll(".sound");
	hipHop.style.color = "rgb(255, 0, 179)";
	rock.style.color = "white";
	jazz.style.color = "white";
	for (let i = 0; i < drumNames.length; i++) {
		drumNames[i].textContent = hipHopDrums[i];
		drumSound[i].attributes[2].nodeValue = hipHopSounds[i];
	}
});
