import { useUserContext } from "@/context";
import Ship from "./Ship"


const ShipSelector = () => {

    const {user:{fleet}} = useUserContext();



    return (
        <div>
            {
                fleet.map(ship => <Ship
                    id={ship.id}
                    orientation={ship.orientation}
                    key={ship.id}
                />)
            }
        </div>
    )
}
export default ShipSelector