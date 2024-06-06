import { Ship } from "@/models";
import { fleet } from "@/utils";

export interface InitialFleet{
    fleet:Ship[]
}

export interface FleetContext{
    fleet: InitialFleet
    setFleet: React.Dispatch<React.SetStateAction<InitialFleet>>
}

export const initialFleet : InitialFleet = {
    fleet: [...fleet]
}

export const fleetContext : FleetContext = {
    fleet: initialFleet,
    setFleet() {}
}