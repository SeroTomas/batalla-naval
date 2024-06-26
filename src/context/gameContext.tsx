import { createContext, useContext, useState } from "react";

interface InitialGameState {
    coordinate: string

}

interface GameContext {
    game: InitialGameState
    setGame: React.Dispatch<React.SetStateAction<InitialGameState>>
}

const initialGameState: InitialGameState = {
    coordinate: "",

}

const initialGameContext: GameContext = {
    game: initialGameState,
    setGame() { }
}

const GameContext = createContext<GameContext>(initialGameContext)

interface Props {
    children: React.ReactNode
}

export const GameProvider = ({ children }: Props) => {

    const [game, setGame] = useState(initialGameState);

    console.log(game.coordinate)

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