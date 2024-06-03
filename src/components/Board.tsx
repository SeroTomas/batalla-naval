import style from "./board.module.css";
import { BoardInterface } from "@/models";
import Column from "./Column";


const columns = ["X", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
const raws = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

const Board = ({ board }: BoardInterface) => {

    return (
        <section className={style.container}>
            <div className={style.columnsMarker}>
                {
                    columns.map(element => <div><p>{element}</p></div>)
                }
            </div>
            <div className={style.board}>
                <div className={style.rawsMarker}>
                    {
                        raws.map(element => <div><p>{element}</p></div>)
                    }
                </div>

                {
                    board.map(column => <Column column={column} />)
                }
            </div>
        </section>
    )

}


export default Board