// ---------------------- JOGO ----------------------

let randomNumber;
let attemptsLeft;
let gameOver;

const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const attemptList = document.getElementById('attempt-list');
const restartBtn = document.getElementById('restart-btn');

function initGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  gameOver = false;

  feedback.textContent = 'Vamos começar! Digite seu primeiro palpite.';
  feedback.style.color = '#333';
  attemptsDisplay.textContent = `Tentativas restantes: ${attemptsLeft}`;
  attemptList.innerHTML = '';
  guessInput.value = '';
  guessInput.disabled = false;
  guessBtn.disabled = false;
  restartBtn.style.display = 'none';
}

function checkGuess() {
  if (gameOver) return;

  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'Por favor, digite um número entre 1 e 100.';
    feedback.style.color = '#e74c3c';
    return;
  }

  const listItem = document.createElement('li');

  if (userGuess === randomNumber) {
    feedback.textContent = '🎉 Parabéns! Você acertou o número!';
    feedback.style.color = '#27ae60';
    listItem.innerHTML = `<span>${userGuess}</span> <span>✅ Correto!</span>`;
    endGame();
  } else {
    attemptsLeft--;

    if (userGuess < randomNumber) {
      feedback.textContent = '📈 Tente um número maior!';
      feedback.style.color = '#3498db';
      listItem.innerHTML = `<span>${userGuess}</span> <span class="hint">Muito baixo</span>`;
    } else {
      feedback.textContent = '📉 Tente um número menor!';
      feedback.style.color = '#3498db';
      listItem.innerHTML = `<span>${userGuess}</span> <span class="hint">Muito alto</span>`;
    }

    attemptsDisplay.textContent = `Tentativas restantes: ${attemptsLeft}`;

    if (attemptsLeft === 0) {
      feedback.textContent = `😢 Game over! O número era ${randomNumber}.`;
      feedback.style.color = '#e74c3c';
      endGame();
    }
  }

  attemptList.appendChild(listItem);
  guessInput.value = '';
  guessInput.focus();
}

function endGame() {
  gameOver = true;
  guessInput.disabled = true;
  guessBtn.disabled = true;
  restartBtn.style.display = 'block';
}

guessBtn.addEventListener('click', checkGuess);
guessInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') checkGuess();
});
restartBtn.addEventListener('click', initGame);
window.addEventListener('load', initGame);

// ---------------------- MODAL ----------------------

function expandImage(imgElement, text) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  const modalText = document.getElementById("modalText");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
  modalText.textContent = text;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}
    