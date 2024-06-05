import { SHIP_ORIENTATION, SHIP_NAME ,Ship } from "@/models";

export const fleet: Ship[] = [
    {
        id: 0,
        name: SHIP_NAME.AIRCRAFT_CARRIER,
        hits: 0,
        size: 5,
        coordinates: null,
        orientation: SHIP_ORIENTATION.HORIZONTAL
    },
    {
        id: 1,
        name: SHIP_NAME.DESTROYER,
        hits: 0,
        size: 4,
        coordinates: null,
        orientation: SHIP_ORIENTATION.HORIZONTAL
    },
    {
        id: 2,
        name: SHIP_NAME.SUBMARINE,
        hits: 0,
        size: 3,
        coordinates: null,
        orientation: SHIP_ORIENTATION.HORIZONTAL
    },
    {
        id: 3,
        name:SHIP_NAME.SUBMARINE,
        hits: 0,
        size: 3,
        coordinates: null,
        orientation: SHIP_ORIENTATION.HORIZONTAL
    },
    {
        id: 4,
        name:SHIP_NAME.BOAT,
        hits: 0,
        size: 2,
        coordinates: null,
        orientation: SHIP_ORIENTATION.HORIZONTAL
    }
]



