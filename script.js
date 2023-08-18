document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const cells = document.querySelectorAll('.cell');
  let currentPlayer = 'X';

  cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
  });

  function handleCellClick(event) {
    const cell = event.target;

    if (cell.textContent !== '') {
      return;
    }

    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    if (checkWin()) {
      alert(`${currentPlayer} wins!`);
      resetGame();
      return;
    }

    if (checkDraw()) {
      alert("It's a draw!");
      resetGame();
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }

  function checkWin() {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    return winningConditions.some(condition => {
      const [a, b, c] = condition;
      return (
        cells[a].textContent === currentPlayer &&
        cells[b].textContent === currentPlayer &&
        cells[c].textContent === currentPlayer
      );
    });
  }

  function checkDraw() {
    return Array.from(cells).every(cell => cell.textContent !== '');
  }

  function resetGame() {
    cells.forEach(cell => {
      cell.textContent = '';
      cell.classList.remove('X', 'O');
    });
    currentPlayer = 'X';
  }
});