
import { createContext, useContext, useState } from "react";


interface InitialGameState{
    coordinate: string
    shipCoordinates: string[]
}

interface GameContext{
    game: InitialGameState
    setGame: React.Dispatch<React.SetStateAction<InitialGameState>>
}

const initialGameState: InitialGameState= {
    coordinate: "",
    shipCoordinates: []
}

const initialGameContext : GameContext = {
    game: initialGameState,
    setGame(){}
}


const GameContext = createContext<GameContext>(initialGameContext)


interface Props {
    children: React.ReactNode
}

export const GameProvider = ({ children }: Props) => {

    const [game, setGame] = useState(initialGameState);

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