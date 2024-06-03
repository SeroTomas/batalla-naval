import { BoardInterface } from "@/models";
import { Column, ColumnMarker, RawsMarker, StyledBoard, StyledColumns } from "@/components"

const Board = ({ board }: BoardInterface) => {

    return (
        <StyledBoard>
            <ColumnMarker />
            <RawsMarker />
            <StyledColumns>
                {
                    board.map(column => <Column column={column} />)
                }
            </StyledColumns>
        </StyledBoard>
    )

}





export default Board