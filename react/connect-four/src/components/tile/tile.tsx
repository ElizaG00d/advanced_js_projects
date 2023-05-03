import React from "react";
import classNames from "classnames";
import styles from "./tile.module.css";
import { Props } from "./type";

export default class Tile extends React.PureComponent<Props> {
    render() {
        const { id, chipType, onClick = () => {} } = this.props;
        const chipCssClass = classNames(styles.chip, chipType === "red" ? styles.red : styles.yellow);

        return (
            <div className={styles.tile} onClick={() => onClick(id)}> {chipType && <div className={chipCssClass} />}
            </div>
        ); //in charge of drawing tiles of board
    }
}

//sets css class based on its value, triggers function set to the onclick prop
//sending tile id as param
//note: attached Props interface to React.Component