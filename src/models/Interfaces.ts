type Coordinate = string;
type Column = Coordinate[];
export type Board = Column[];


export interface BoxInterface{
    coordinate: Coordinate;
}

export interface ColumnInterface{
    column: Column;
}

export interface BoardInterface{
    board: Board;
}

export interface Ship{
    id: string
    slots: number
    coordinates?: Coordinate[]
}