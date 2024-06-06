import { FleetContext, fleetContext, initialFleet } from "@/models";
import { createContext, useContext, useState } from "react";

const UserFleet = createContext<FleetContext>(fleetContext)

interface Props {
    children: React.ReactNode
}

export const UserFleetProvider = ({ children }: Props) => {

    const [fleet, setFleet] = useState(initialFleet);

    return (
        <UserFleet.Provider value={{ fleet, setFleet }}>

        </UserFleet.Provider>
    )

}

export const useUserFleet = () => {
const context = useContext(UserFleet);

if (!context) throw new Error("se necesita un provider para que funcione el contexto")

return context
}