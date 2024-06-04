import { useGameContext } from "@/context/gameContext"

interface Props {
  shipSelected: number
  orientation: string
}

const useShipPosition = ({shipSelected, orientation }: Props) => {

  const { game, setGame } = useGameContext();



  return
}
export default useShipPosition