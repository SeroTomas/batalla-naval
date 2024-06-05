import Ship from "./Ship"
import { useUserFleetContext } from "@/context"

const ShipSelector = () => {

    const {userFleet:{fleet}} = useUserFleetContext();

    return (
        <div>
            {
                fleet.map(ship => <Ship
                    size={ship.size}
                    id={ship.id}
                    orientation={ship.orientation}
                    key={ship.id}
                />)
            }
        </div>
    )
}
export default ShipSelector