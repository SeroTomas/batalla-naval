import { StyledMarker, StyledRawsMarker } from "../atoms"

const raws = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

const RawsMarker = () => {
    return (
        <StyledRawsMarker>
            {raws.map(element => (
                <StyledMarker key={element}>{element}</StyledMarker>
            ))}
        </StyledRawsMarker>
    )
}
export default RawsMarker