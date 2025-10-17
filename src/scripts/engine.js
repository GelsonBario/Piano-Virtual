// --- Seletores de Elementos do DOM ---
const pianoKeysContainer = document.querySelector(".piano-keys");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");
const instrumentSelect = document.getElementById("instrument-select");
const recordBtn = document.getElementById("record-btn");
const playBtn = document.getElementById("play-btn");
const visualizerContainer = document.getElementById("visualizer-container");

// --- Mapa de Teclas e Cores do Visualizador ---
const allKeys = [
  { key: "a", type: "white", color: "#ff6b6b" },
  { key: "w", type: "black", color: "#f06595" },
  { key: "s", type: "white", color: "#cc5de8" },
  { key: "e", type: "black", color: "#9775fa" },
  { key: "d", type: "white", color: "#748ffc" },
  { key: "f", type: "white", color: "#4dabf7" },
  { key: "t", type: "black", color: "#38d9a9" },
  { key: "g", type: "white", color: "#69db7c" },
  { key: "y", type: "black", color: "#a9e34b" },
  { key: "h", type: "white", color: "#fcc419" },
  { key: "u", type: "black", color: "#ff922b" },
  { key: "j", type: "white", color: "#ff6b6b" },
  { key: "k", type: "white", color: "#f06595" },
  { key: "o", type: "black", color: "#cc5de8" },
  { key: "l", type: "white", color: "#9775fa" },
  { key: "p", type: "black", color: "#748ffc" },
  { key: ";", type: "white", color: "#4dabf7" },
];
const mappedKeys = allKeys.map(k => k.key);

// --- Variáveis de Estado ---
let selectedInstrument = "piano";
let isRecording = false;
let recordingStartTime;
let songNotes = [];

// --- Funções Principais ---

// Toca a nota, grava (se aplicável) e mostra o visualizador
const playTune = (key) => {
  const noteData = allKeys.find(k => k.key === key);
  if (!noteData) return;

  const audio = new Audio(`./src/tunes/${selectedInstrument}/${key}.wav`);
  audio.volume = volumeSlider.value;
  audio.play();

  // Ativa o efeito visual na tecla
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  if (clickedKey) {
    clickedKey.classList.add("active");
    setTimeout(() => clickedKey.classList.remove("active"), 150);
  }

  // Grava a nota se a gravação estiver ativa
  if (isRecording) {
    recordNote(key);
  }

  // Cria o efeito visual na tela
  createVisualizer(noteData.color);
};

// Cria o efeito visual de círculo
const createVisualizer = (color) => {
  const visualNote = document.createElement("div");
  visualNote.className = "visual-note";
  visualNote.style.backgroundColor = color;
  visualNote.style.left = `${Math.random() * 90}vw`; // Posição aleatória
  visualNote.style.top = `${Math.random() * 90}vh`;
  visualizerContainer.appendChild(visualNote);

  // Remove o elemento após a animação
  setTimeout(() => visualNote.remove(), 1000);
};

// Cria as teclas do piano dinamicamente
const createPianoKeys = () => {
  pianoKeysContainer.innerHTML = ''; // Limpa teclas existentes
  allKeys.forEach(({ key, type }) => {
    const keyElement = document.createElement("li");
    keyElement.className = `key ${type}`;
    keyElement.dataset.key = key;
    keyElement.innerHTML = `<span>${key}</span>`;
    pianoKeysContainer.appendChild(keyElement);
    keyElement.addEventListener("click", () => playTune(key));
  });
};

// --- Funções de Gravação ---
const recordNote = (key) => {
  const noteTime = Date.now() - recordingStartTime;
  songNotes.push({ key, time: noteTime });
};

const startRecording = () => {
  isRecording = true;
  songNotes = [];
  recordingStartTime = Date.now();
  recordBtn.textContent = "Parar ⏹️";
  recordBtn.classList.add("recording");
  playBtn.disabled = true;
};

const stopRecording = () => {
  isRecording = false;
  recordBtn.textContent = "Gravar 🔴";
  recordBtn.classList.remove("recording");
  if (songNotes.length > 0) {
    playBtn.disabled = false;
  }
};

const playSong = () => {
  if (songNotes.length === 0) return;
  
  playBtn.disabled = true;
  recordBtn.disabled = true;

  songNotes.forEach(note => {
    setTimeout(() => {
      playTune(note.key);
    }, note.time);
  });
  
  // Reabilita os botões após a música terminar
  const lastNoteTime = songNotes[songNotes.length - 1].time;
  setTimeout(() => {
      playBtn.disabled = false;
      recordBtn.disabled = false;
  }, lastNoteTime + 500); // Adiciona 500ms de margem
};

// --- Event Listeners ---

// Tocar com o teclado físico
document.addEventListener("keydown", (e) => {
  if (mappedKeys.includes(e.key) && !e.repeat) {
    playTune(e.key);
  }
});

// Mostrar/Ocultar as letras das teclas
keysCheck.addEventListener("click", () => {
  const allKeyElements = document.querySelectorAll(".piano-keys .key");
  allKeyElements.forEach(key => key.classList.toggle("hide"));
});

// Mudar o instrumento
instrumentSelect.addEventListener("change", (e) => {
  selectedInstrument = e.target.value;
});

// Botão de Gravar/Parar
recordBtn.addEventListener("click", () => {
  if (isRecording) {
    stopRecording();
  } else {
    startRecording();
  }
});

// Botão de Reproduzir
playBtn.addEventListener("click", playSong);

// --- Inicialização ---
createPianoKeys();