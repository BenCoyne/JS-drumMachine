import { drums } from "./drumData.js";

const keys = document.querySelectorAll(".key");
const jazz = document.querySelector("#jazz");
const rock = document.querySelector("#rock");
const hipHop = document.querySelector("#hip-hop");

function generateSounds(genre) {
	const formerSounds = document.getElementsByClassName("audio");
	Array.from(formerSounds).forEach((sound) => sound.remove());

	for (let i = 0; i < keys.length; i++) {
		const newSound = document.createElement("audio");
		const dataKey = keys[i].attributes[0].nodeValue;
		newSound.className = "audio";
		newSound.setAttribute("data-key", dataKey);
		newSound.setAttribute("src", "sounds/hipHop/bongo.wav");

		// console.log(`sounds/${genre}/${drums.genre[dataKey].wav}.wav`);

		document.body.appendChild(newSound);
		keys[i].children[1].innerHTML = drums.genre[dataKey].name;
	}
}

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

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

jazz.addEventListener("click", () => {
	document.body.style.backgroundImage =
		"linear-gradient(black, pink), url('https://cdn.mos.cms.futurecdn.net/378274d88018606e7f61e161f9172126.jpg')";

	jazz.style.color = "rgb(255, 0, 179)";
	rock.style.color = "white";
	hipHop.style.color = "white";

	generateSounds(jazz);
});

rock.addEventListener("click", () => {
	document.body.style.backgroundImage =
		'linear-gradient(black, black), url("https://images.unsplash.com/photo-1602939444907-6e688c594a66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRydW18ZW58MHx8MHx8&w=1000&q=80")';

	rock.style.color = "rgb(255, 0, 179)";
	jazz.style.color = "white";
	hipHop.style.color = "white";

	generateSounds(rock);
});

hipHop.addEventListener("click", () => {
	document.body.style.backgroundImage =
		'linear-gradient(black, grey), url("https://static.roland.com/assets/promos/jpg/billboard_tr-808_story.jpg")';
	hipHop.style.color = "rgb(255, 0, 179)";
	rock.style.color = "white";
	jazz.style.color = "white";

	generateSounds(hipHop);
});

// generateSounds(rock);
