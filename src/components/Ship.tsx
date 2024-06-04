import { useGameContext } from "@/context/gameContext"
import { StyledShip } from "../atoms"

interface Props{
    slots: number
}



const Ship = ({ slots }: Props) => {

    const {game, setGame} = useGameContext();

    const handleClick = () => {
        setGame({...game, shipSelected: slots})


    }

    return (
        <StyledShip onClick={handleClick}>
            Barquito de {slots}
        </StyledShip>
    )

}
export default Ship