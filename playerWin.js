function checkWinner(state) {
  const win = [
    [0, 1, 2],
    [3, 5, 6],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < win.length; i++) {
    const [a, b, c] = win[i];

    if (state[a] == state[b] && state[a] == state[c] && state[a]) {
      return true;
    }
  }
  return null;
}
