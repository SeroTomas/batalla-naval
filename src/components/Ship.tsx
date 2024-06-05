import { useGameContext } from "@/context/gameContext"
import { StyledShip } from "../atoms"


interface Props {
    size: number,
    id: number
    orientation: string
}

const Ship = ({ size, id, orientation}: Props) => {

    const {game, setGame} = useGameContext();

    const handleClick = () => {
        setGame({...game, shipSelected: id})
    }

    return (
        <StyledShip onClick={handleClick}>
            Barquito de {id}
        </StyledShip>
    )

}
export default Ship