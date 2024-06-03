import { ColumnInterface } from "@/models";
import { StyledColumn } from "./atoms";
import Box from "./Box";

const Column = ({ column }: ColumnInterface) => {
    return (
        <StyledColumn>
            {column.map(coordinate => <Box coordinate={coordinate} />)}
        </StyledColumn>
    )
}
export default Column;