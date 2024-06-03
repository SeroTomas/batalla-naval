import { ColumnInterface } from "@/models/ColumnInterface";
import style from "./column.module.css";
import Box from "./Box";



const Column = ({ boxes }: ColumnInterface) => {
    return (
        <div className={style.column}>
            {
                boxes.map(box => <Box coordinate={box.coordinate} />)
            }
        </div>
    )
}
export default Column;