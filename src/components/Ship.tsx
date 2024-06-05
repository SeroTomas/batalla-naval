import { StyledShip } from "../atoms"

interface Props {
    size: number,
    id: number
    orientation: string
}

const Ship = ({ size, id, orientation}: Props) => {

  const handleClick = () => {

  }

    return (
        <StyledShip onClick={handleClick}>
            Barquito de {id}
        </StyledShip>
    )

}
export default Ship