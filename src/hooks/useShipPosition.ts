import { useGameContext } from "@/context/gameContext"

interface Props{
    coordinate: string
    shipSelected: number
    orientation:string
}

const useShipPosition = ({coordinate, shipSelected, orientation}:Props) => {

  const {game, setGame} = useGameContext();
  


  return 
}
export default useShipPosition