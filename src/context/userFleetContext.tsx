import { Ship } from "@/models";
import { fleet } from "@/utils";
import { createContext, useContext, useState } from "react";

interface InitialFleetState {
    fleet: Ship[]
}

interface FleetContext {
    userFleet: InitialFleetState
    setUserFleet: React.Dispatch<React.SetStateAction<InitialFleetState>>
}

const initialFleet: InitialFleetState = {
    fleet: fleet
}

const initialUserFleet: FleetContext = {
    userFleet: initialFleet,
    setUserFleet() { }
}

const UserFleetContext = createContext<FleetContext>(initialUserFleet);


interface Props {
    children: React.ReactNode
}

export const UserFleetProvider = ({ children }: Props) => {

    const [userFleet, setUserFleet] = useState(initialFleet);


    return (
        <UserFleetContext.Provider value={{ userFleet, setUserFleet }}>
            {children}
        </UserFleetContext.Provider>
    )

}

export const useUserFleetContext = () => {
    const context = useContext(UserFleetContext);

    if (!context) throw new Error("se necesita un provider para que funcione el contexto")

    return context;
}