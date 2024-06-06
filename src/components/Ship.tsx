import { useUserContext } from "@/context";
import { StyledShip } from "../atoms"
import { SHIP_ORIENTATION } from "@/models";

interface Props {
    id: number
    orientation: string
}

const Ship = ({ id, orientation }: Props) => {

    const { user, setUser } = useUserContext();


    console.log(orientation)


    const handleClick = () => {
        const newOrientation = orientation === SHIP_ORIENTATION.HORIZONTAL
            ? SHIP_ORIENTATION.VERTICAL
            : SHIP_ORIENTATION.HORIZONTAL;

        const updatedFleet = [...user.fleet];
        updatedFleet[id] = { ...updatedFleet[id], orientation: newOrientation };

        setUser({ ...user, fleet: updatedFleet });
    };

    return (
        <StyledShip onClick={handleClick}>
            Barquito de {id}
        </StyledShip>
    )

}
export default Ship