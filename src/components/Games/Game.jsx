import React from "react";
import Board from "./Board";
import Cell from "./Cell"
import "./Games.scss";
import PropTypes from 'prop-types';

class Game extends React.Component {
    state = {
      height: 8,
      width: 8,
      mines: 10
    };
  
    render() {
      const { height, width, mines } = this.state;
      return (
        <div className="game">
          <Board height={height} width={width} mines={mines} />
        </div>
      );
    }
  }
  
  Cell.propTypes = {
    value: PropTypes.func
  }
export default Game;