import { BoardContext, boardContext, initialBoard } from "@/models";
import { createContext, useContext, useState } from "react";

const UserBoard = createContext<BoardContext>(boardContext);


interface Props {
    children: React.ReactNode
}

export const UserBoardProvider = ({ children }: Props) => {

    const [board, setBoard] = useState(initialBoard);

    return (
        <UserBoard.Provider value={{ board, setBoard }}>
            {children}
        </UserBoard.Provider>
    )
}

export const useUserBoard = () => {
    const context = useContext(UserBoard);

    if (!context) throw new Error("se necesita un provider para que funcione el contexto")

    return context

}