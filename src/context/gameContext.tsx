
import { GameContextInterface } from "@/models";
import { createContext, useContext, useState } from "react";

const initialContext : GameContextInterface = {
    coordinates: "",
    shipCoordinates: []
}

export const GameContext = createContext({});


interface Props {
    children: React.ReactNode
}

export const GameProvider = ({ children }: Props) => {

    const [game, setGame] = useState(initialContext);

    return (
        <GameContext.Provider value={{ game, setGame }}>
            {children}
        </GameContext.Provider>
    )

}

export const useGameContext = () => {
    const context = useContext(GameContext);

    if (!context) throw new Error("se necesita un provider para que funcione el contexto")

    return context;
}