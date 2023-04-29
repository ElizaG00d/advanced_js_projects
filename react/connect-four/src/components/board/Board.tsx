import React from "react";
import Column from "../columns/column";
import styles from "./Board.module.css";
import { Props } from "./type";

export default class Board extends React.PureComponent<Props> {

    renderColumns() {
        const { columns, rows, chipsPositions, onTileClick } = this.props;
        const columnsComponents = [];

        for (let column = 0; column < columns; column++) {
            columnsComponents.push(
                <Column
                key={column}
                column={column}
                rows={rows}
                chipsPositions={chipsPositions}
                onTileClick={onTileClick}
                />
            );
        }
        return <>{columnsComponents}</>;
    }
    render() {
        return <div className={styles.board}>{this.renderColumns()}</div>
    }

}

//creating multiple cols, passing info to them, render result
//this.renderColumns() encaps logic