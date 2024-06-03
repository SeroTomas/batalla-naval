import { ColumnInterface } from "@/models";
import style from "./column.module.css";
import Box from "./Box";

const Column = ({ column }: ColumnInterface) => {
    return (
        <div className={style.column}>
            {
                column.map(coordinate => <Box coordinate={coordinate} />)
            }
        </div>
    )
}
export default Column;