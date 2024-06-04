import { StyledColumnMarker, StyledMarker } from "../atoms"

const columns = ["X", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

const ColumnMarker = () => {
    return (
        <StyledColumnMarker>
            {columns.map(element => (
                <StyledMarker key={element}>{element}</StyledMarker>
            ))}
        </StyledColumnMarker>
    )
}

export default ColumnMarker