import React from "react";
import Tile from "../tile/tile";
import styles from "./column.module.css";
import { Props } from "./type";

export default class Column extends React.PureComponent<Props> {
    render() {
        const { column, rows, chipsPositions, onTileClick } = this.props;
        const tiles = [];

        for (let row = 0; row < rows; row++) {
            const tileId = `${row}:${column}`;
            const chipType = chipsPositions[tileId];
            tiles.push(
                <Tile
                key={tileId}
                id={tileId}
                chipType={chipType}
                onClick={onTileClick}
                />
            );
        }
        return <div className={styles.column}>{tiles}</div>;
    }
}