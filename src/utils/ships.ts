import { SHIP_ORIENTATION } from "@/models";

export interface Ship {
    id: number
    size: number
    orientation: string
    coordinates: string[] | null
}

export const ships : Ship[] = [
    {
        id: 0,
        size: 5,
        coordinates:null,
        orientation: SHIP_ORIENTATION.HORIZONTAL
    },
    {
        id: 1,
        size: 4,
        coordinates:null,
        orientation: SHIP_ORIENTATION.HORIZONTAL
    },
    {
        id: 2,
        size: 3,
        coordinates:null,
        orientation: SHIP_ORIENTATION.HORIZONTAL
    },
    {
        id: 3,
        size: 3,
        coordinates:null,
        orientation: SHIP_ORIENTATION.HORIZONTAL
    },
    {
        id: 4,
        size: 2,
        coordinates:null,
        orientation: SHIP_ORIENTATION.HORIZONTAL
    }
]



