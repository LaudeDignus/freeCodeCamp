const drumObj = {
  "heater-1": {
    id: "Q",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3",
    text: "Heater 1",
  },
  "heater-2": {
    id: "W",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3",
    text: "Heater 2",
  },
  "heater-3": {
    id: "E",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3",
    text: "Heater 3",
  },
  "heater-4": {
    id: "A",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3",
    text: "Heater 4",
  },
  clap: {
    id: "S",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3",
    text: "Clap",
  },
  "open-hh": {
    id: "D",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3",
    text: "Open-HH",
  },
  "kick-n'-hat": {
    id: "Z",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3",
    text: "Kick-n'-Hat",
  },
  kick: {
    id: "X",
    src: "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3",
    text: "Kick",
  },
  "closed-hh": {
    id: "C",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3",
    text: "Closed-HH",
  },
};

const drumPads = document.querySelectorAll(".drum-machine__pad");
const display = document.getElementById("display");

const playSong = (audio, drum) => {
  audio.currentTime = 0;
  audio.play();
  display.innerText = drumObj?.[drum.dataset.sound]?.text;
};

drumPads.forEach((pad) => {
  const soundKey = pad.dataset.sound;

  const audio = document.createElement("audio");
  audio.classList.add("clip");
  audio.id = drumObj?.[soundKey]?.id;
  audio.src = drumObj?.[soundKey]?.src;

  pad.appendChild(audio);

  pad.addEventListener("click", () => {
    playSong(audio, pad);
    pad.classList.add("drum-machine__pad--active");
    setTimeout(() => {
      pad.classList.remove("drum-machine__pad--active");
    }, 120);
    setTimeout(() => {
      display.innerText = "";
    }, 1000);
  });
});

const keyCode = {
  q: { id: "Q", code: "heater-1" },
  w: { id: "W", code: "heater-2" },
  e: { id: "E", code: "heater-3" },
  a: { id: "A", code: "heater-4" },
  s: { id: "S", code: "clap" },
  d: { id: "D", code: "open-hh" },
  z: { id: "Z", code: "kick-n'-hat" },
  x: { id: "X", code: "kick" },
  c: { id: "C", code: "closed-hh" },
};

document.addEventListener("keydown", (e) => {
  const key = keyCode[e.key];
  if (key) {
    const audio = document.getElementById(key.id);
    const pad = document.querySelector(`[data-sound="${key.code}"]`);
    playSong(audio, pad);
  }
});
