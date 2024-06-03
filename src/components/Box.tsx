import style from "./box.module.css";
import { BoxInterface } from "@/models";

const Box = ({ coordinate }: BoxInterface) => {
    return (
        <div className={style.box}>

        </div>
    )
}
export default Box;