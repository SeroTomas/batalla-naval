import Ship from "./Ship"


const ships = [
    { slots: 5, id: 1 }, { slots: 4, id: 2 }, { slots: 3, id: 3 }, { slots: 3, id: 4 }, { slots: 2, id: 5 }
]

const ShipSelector = () => {

    return (
        <div>
            {
                ships.map(ship => <Ship slots={ship.slots} key={ship.id} />)
            }
        </div>
    )
}
export default ShipSelector