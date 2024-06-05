import { ShipSelector } from "./components";
import Board from "./components/Board"
import { GameProvider, useGameContext } from "./context/gameContext"
import { createBoard } from "./utils";

/**
 * pasos del juego
 * Posicionamiento de los barcos
 * juego
 * puntuacion
 * jugar de nuevo
 */



const myBoard = createBoard();

function App() {

  const gameState = useGameContext();






  return (
    <>
      <GameProvider>
        <Board board={myBoard} />
        <ShipSelector />
      </GameProvider>
    </>
  )

}

export default App
