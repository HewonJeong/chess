import * as React from 'react';
import Knight from './Knight';
import { Style } from 'src/types';
import { moveKnight, canMoveKnight } from '../Game';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';

interface Props {
  knightPosition: number[]
}

class Board extends React.Component<Props> {
  renderSquare(i: number) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i} style={style.boardSquareWrapper}>
        <BoardSquare x={x} y={y}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  renderPiece(x: number, y: number) {
    const [knightX, knightY] = this.props.knightPosition;
    return (x === knightX && y === knightY) ? <Knight /> : null;
  }

  handleSquareClick= (toX: number, toY: number) => () => {
    canMoveKnight(toX, toY) && moveKnight(toX, toY);
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={style.Board}>
        {squares}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);

const style: Style = {
  Board: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  boardSquareWrapper: { width: '12.5%', height: '12.5%' }
} 
