let secretNumber;
let attempts;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
    attempts = 0;
    document.getElementById('result').textContent = '';  // Limpiar mensaje
    document.getElementById('guess').value = '';         // Limpiar campo de entrada
    document.getElementById('reset-btn').style.display = 'none'; // Ocultar el botón de reinicio
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const resultElement = document.getElementById('result');
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        resultElement.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        resultElement.style.color = 'red';
        return;
    }

    if (guess < secretNumber) {
        resultElement.textContent = '¡Demasiado bajo! Intenta de nuevo.';
        resultElement.style.color = 'blue';
    } else if (guess > secretNumber) {
        resultElement.textContent = '¡Demasiado alto! Intenta de nuevo.';
        resultElement.style.color = 'blue';
    } else {
        resultElement.textContent = `¡Correcto! El número era ${secretNumber}. Lo lograste en ${attempts} intentos.`;
        resultElement.style.color = 'green';
        document.getElementById('reset-btn').style.display = 'block'; // Mostrar el botón de reinicio
    }
}

function resetGame() {
    startGame();
}

// Iniciar el juego cuando se cargue la página
window.onload = startGame;
