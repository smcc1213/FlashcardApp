let flashcards = [];
let currentIndex = 0;
let showingFront = true;

const cardEl = document.getElementById("flashcard");
const flipBtn = document.getElementById("flipBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

async function loadFlashcardsOffline() {
  try {
    const res = await fetch("flashcards.json");
    flashcards = shuffle(await res.json());
    showCard();
  } catch (err) {
    cardEl.textContent = "Failed to load flashcards.";
    console.error(err);
  }
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showCard() {
  if (flashcards.length === 0) {
    cardEl.textContent = "No flashcards.";
    return;
  }

  const card = flashcards[currentIndex];
  cardEl.textContent = showingFront ? card.question : card.answer;
}

function flipCard() {
  showingFront = !showingFront;
  showCard();
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showingFront = true;
  showCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  showingFront = true;
  showCard();
}

flipBtn.addEventListener("click", flipCard);
nextBtn.addEventListener("click", nextCard);
prevBtn.addEventListener("click", prevCard);

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  if (key === "arrowright" || key === "d") nextCard();
  else if (key === "arrowleft" || key === "a") prevCard();
  else if (key === " " || key === "enter") {
    e.preventDefault();
    flipCard();
  }
});

loadFlashcardsOffline();