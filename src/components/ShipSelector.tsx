import { useGameContext } from "@/context/gameContext"
import Ship from "./Ship"

const ShipSelector = () => {

    const { game: { ships } } = useGameContext();

    return (
        <div>
            {
                ships.map(ship => <Ship
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