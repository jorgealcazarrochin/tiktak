const Square = ({ id, newState }) => {
  const [color, setColor] = React.useState("green");
  const [status, setStatus] = React.useState(null);

  // 0 serán los O y 1 seran las X
  const xo = ["O", "X"];

  const palet = ["red", "blue", "green"];
  const getRandomColor = () => palet[Math.floor(Math.random() * 3)];

  // React.useEffect(() => {
  //   console.log(`render ${id}`);
  //   return () => console.log(`unmoting Square ${id}`);
  // });

  return (
    <button
      onClick={(e) => {
        let col = getRandomColor();
        setColor(col);
        let nextPlayer = newState(id);
        setStatus(nextPlayer);
        e.target.style.color = "red";
      }}
    >
      <h1>{xo[status]}</h1>
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [state, setState] = React.useState(Array(9).fill(null));
  console.log(state);

  let status = `Player ${player} `;
  let winner = checkWinner(state);
  if (winner != null) status = `Player ${winner} winner`;

  // Define newState function
  const newState = (idOfSquare) => {
    let thePlayer = player;
    state[idOfSquare] = player; // player is presente player
    setState(state); // is 0 o 1 or null
    let nextPlayer = (player + 1) % 2;
    setPlayer(nextPlayer);
    return thePlayer;
  };

  function renderSquare(i) {
    return <Square id={i} player={player} newState={newState}></Square>;
  }

  return (
    <div
      className="game-board"
    >
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="grid-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="grid-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

ReactDOM.render(<Board />, document.getElementById("root"));
