import { BoardInterface } from "@/models";
import { Column, ColumnMarker, RawsMarker, StyledBoard, StyledColumns } from "@/components"

const Board = ({ board }: BoardInterface) => {

    console.log("board montado")

    return (
        <StyledBoard>
            <ColumnMarker />
            <RawsMarker />
            <StyledColumns>
                {
                    board.map(column => <Column column={column} key={column[0]}/>)
                }
            </StyledColumns>
        </StyledBoard>
    )

}





export default Board