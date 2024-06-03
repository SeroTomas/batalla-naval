import { BoxInterface } from "@/models";
import style from "./box.module.css";



const Box = ({ coordinate }: BoxInterface) => {
    return (
        <div className={style.box}>
            <p>{coordinate}</p>
        </div>
    )
}
export default Box;