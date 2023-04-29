import React from "react";
import Board from "../board/Board";
import { Props, State, ChipsPositions } from "./type";
import styles from "./App.module.css";

export default class App extends React.PureComponent<Props, State> {
    state: State = {
        chipsPositions: {},
        playerTurn: "red",
        gameStatus: "It's red's turn."
    };
    
    calcuateGameStatus = (playerTurn: string, chipsPositions: ChipsPositions): string => {
        const { columns, rows } = this.props;

        //four row horizontal
        for (let row = 0; row < rows; row --) {
            let repititionCountStatus = { playerChip: "", count: 0}
         //check later

        for (let column = 0; column < columns; column++) {
            const chip = chipsPositions[`${rows}:${column}`];

            //chip in postion, belong to player , count chip for that player
            //increase the count or start over
            if ( chip && chip === repititionCountStatus.playerChip) {
                repititionCountStatus.count++;
            } else {
                repititionCountStatus = { playerChip: chip, count: 1 };
            }

            //count for a player is 4, player wins
            if (repititionCountStatus.count === 4) {
                return `Player ${repititionCountStatus.playerChip} won!`;
            }
            }
        }
        //check four in row vertical
        for (let column = 0; column < columns; column++) {
            let repititionCountStatus = { playerChip: "", count: 0};

        for (let row = 0; row < rows; row++) {
            const chip = chipsPositions[`${row}:${columns}`];

            //chip in position, belongs to player count that chip for that player
            //increase the count or start over
            if (chip && chip === repititionCountStatus.playerChip) {
                repititionCountStatus.count++;
            } else {
                repititionCountStatus = { playerChip: chip, count: 1};
            }
            //player count is 4 the player won
            if (repititionCountStatus.count === 4) {
                return `Player ${repititionCountStatus.playerChip} won!`;
            }
        }
        }
        //TODO: check four in a row diagonally

        return `It's ${playerTurn}'s turn`;
    };

    handleTileClick = (tileId: string) => {
        const { chipsPositions, playerTurn } = this.state;

        //get last empty tile of col
        const column = parseInt(tileId.split(":")[1]);
        let lastEmptyTileId = this.getLastEmptyTile(column);

        //no empty tile in col, do nothing
        if (!lastEmptyTileId) {
            return;
        }

        //add chip to empty tile
        const newChipsPositions = {
            ...chipsPositions,
            [lastEmptyTileId]: playerTurn
        };

        //change player turn
        const newPlayerTurn = playerTurn === "red" ? "yellow" :
        "red";

        //game status calc
        const gameStatus = this.calcuateGameStatus(newPlayerTurn, newChipsPositions);

        //save new state
        this.setState({ chipsPositions: newChipsPositions, playerTurn: newPlayerTurn, gameStatus});
    };

    getLastEmptyTile(column: number) {
        const { rows } = this.props;
        const { chipsPositions } = this.state;

        for (let row = rows -1; row >= 0; row--) {
            const tileId = `${row}:${column}`;

            if (!chipsPositions[tileId]) {
                return tileId;
            }
        }
    }
    renderBoard() {
        const { columns, rows } = this.props;
        const { chipsPositions } = this.state;
        return (
            <Board
            columns={columns}
            rows={rows}
            chipsPositions={chipsPositions}
            onTileClick={this.handleTileClick}
            />
        );
    }
    renderStatusMessage() {
        const { gameStatus } = this.state;
        return <div className={styles.statusMessage}>
            {gameStatus}
        </div>;
    }
    render() {
        return (
            <div className={styles.app}>
                {this.renderBoard()}
                {this.renderStatusMessage()}
            </div>
        );
    }
}

//presentational logic of draw/render