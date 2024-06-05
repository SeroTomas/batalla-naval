import { Board, Ship } from "@/models";
import { createBoard, fleet } from "@/utils";
import { createContext, useContext, useState } from "react";

interface InitialUserState {
    fleet: Ship[]
    board: Board
}

interface UserContext {
    user: InitialUserState
    setUser: React.Dispatch<React.SetStateAction<InitialUserState>>
}

const myBoard = createBoard();

const initialUserState: InitialUserState = {
    fleet: fleet,
    board: myBoard
}

const initialUser: UserContext = {
    user: initialUserState,
    setUser() { }
}

const UserContext = createContext<UserContext>(initialUser);


interface Props {
    children: React.ReactNode
}

export const UserProvider = ({ children }: Props) => {

    const [user, setUser] = useState(initialUserState);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )

}

export const useUserContext = () => {
    const context = useContext(UserContext);

    if (!context) throw new Error("se necesita un provider para que funcione el contexto")

    return context;
}