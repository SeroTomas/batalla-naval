import { BOX_STATE } from "./enums";

type Coordinate = string;
type Column = Coordinate[];
export type Board = Column[];


export interface BoxInterface{
    coordinate: Coordinate;
    state: BOX_STATE;
}

export interface ColumnInterface{
    column: Column;
}

export interface BoardInterface{
    board: Board;
}

export interface Ship {
    id: number
    name:string
    hits: number
    size: number
    coordinates: Coordinate[] | null
    orientation: string
}