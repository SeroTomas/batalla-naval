import { BoxInterface } from "@/models";
import { useGameContext } from "@/context/gameContext";
import { StyledBox } from "../atoms";

const Box = ({ coordinate, state }: BoxInterface) => {

    const {game, setGame} = useGameContext();
    
    const handlerClick = () => {
        setGame({...game, coordinate}) 
    }

    return (
        <StyledBox onClick={handlerClick}>
            <p>{coordinate}</p>
        </StyledBox>
    )


}

export default Box;