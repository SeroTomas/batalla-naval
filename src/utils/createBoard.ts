const BOARD_SIZE = 10;
const COLUMN_SIZE = 10;

export const createBoard = () => {

    const emptyBoard = Array<string[]>(BOARD_SIZE);
    const emptyColumns = Array<string>(COLUMN_SIZE);

    emptyColumns.fill("", 0, COLUMN_SIZE);
    emptyBoard.fill(emptyColumns, 0, BOARD_SIZE);

    const board = emptyBoard.map((column, colIndex) => {
        const newColumn = column.map((coordinate, coorIndex) => coordinate = `${colIndex}-${coorIndex}`);
        return newColumn
    })

    return board;

}