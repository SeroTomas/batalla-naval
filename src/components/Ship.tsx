import { useUserContext } from "@/context";
import { StyledShip } from "../atoms"
import { SHIP_ORIENTATION } from "@/models";

interface Props {
    id: number
}



const Ship = ({ id }: Props) => {

    const { user:{fleet}, setUser } = useUserContext();
    const {orientation, } = fleet[id];

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