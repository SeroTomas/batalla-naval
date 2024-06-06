import { createBoard } from "@/utils";
import { Board } from "./Interfaces";

export interface InitialBoard {
    board: Board
}

export interface BoardContext {
    board: InitialBoard
    setBoard: React.Dispatch<React.SetStateAction<InitialBoard>>
}

const board = createBoard();

export const initialBoard: InitialBoard = {
    board: [...board]
}

export const boardContext: BoardContext = {
    board: initialBoard,
    setBoard() { }
}
