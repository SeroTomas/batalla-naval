import { BoxInterface } from "@/models";
import style from "./box.module.css";
import { useGameContext } from "@/context/gameContext";

const Box = ({ coordinate }: BoxInterface) => {

    const {game, setGame} = useGameContext();
    
    const handlerClick = () => {
        setGame({...game, coordinate})  
    }

    return (
        <div className={style.box} onClick={handlerClick}>
            <p>{coordinate}</p>
        </div>
    )


}

export default Box;