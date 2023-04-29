import { type } from "os";

export interface ChipsPositions {
    [key: string]: Player;
}

export type Player = "red" | "yellow" | "";

export interface Props {
    columns: number;
    rows: number;
}

export interface State {
    chipsPositions: ChipsPositions;
    gameStatus: string;
    playerTurn: Player;
}

//dictionary with position of each value displayed
//shape of App props and state
//need to provide number of cols and rows for App to initialize
//latter tells info will be stored by component