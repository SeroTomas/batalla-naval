import { ShipSelector } from "./components";
import Board from "./components/Board"
import { UserProvider, useUserContext, GameProvider } from "./context";


/**
 * pasos del juego
 * Posicionamiento de los barcos
 * juego
 * puntuacion
 * jugar de nuevo
 */

function App() {

  const {user} = useUserContext();






  return (
    <GameProvider>
      <UserProvider>
        <Board board={user.board} />
        <ShipSelector />
      </UserProvider>
    </GameProvider>
  )

}

export default App
