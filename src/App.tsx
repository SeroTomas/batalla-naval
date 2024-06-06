import { ShipSelector } from "./components";
import Board from "./components/Board"
import { UserProvider, useUserContext, GameProvider } from "./context";


/**
 * pasos del juego
 * Posicionamiento de los barcos
 * juego
 * puntuacion
 * jugar de nuevo
 * 
 * quiero ingresar mis barco sal mapa
 * 
 * tengo que seleccionar el barco que quiero ubicar
 * e ingresar las coordenadas donde quiero que mi barco este
 * 
 * 
 * 
 * 
 * 
 * 
 * 
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
