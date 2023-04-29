import { ChipsPositions } from "../App/type";

export interface Props {
    column: number;
    rows: number;
    chipsPositions: ChipsPositions;
    onTileClick: (id: string) => any;
}