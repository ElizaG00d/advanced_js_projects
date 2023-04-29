import { ChipsPositions } from "../App/type";

export interface Props {
    columns: number;
    rows: number;
    chipsPositions: ChipsPositions;
    onTileClick: (id: string) => any;
}

//tells
//provide numb of cols and rows board will have
//send chipsPositions object info used by col component not Board
//provide TileClick function that will be used by the Tile component to signal when clicked
