import * as React from 'react';
import Square from './Square';
import Knight from './Knight';
import { Style } from 'src/types';
import { moveKnight } from '../Game';

interface Props {
  knightPosition: number[]
}

export default class Board extends React.Component<Props> {
  renderSquare(i: number) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;
    const [knightX, knightY] = this.props.knightPosition;
    const piece = (x === knightX && y === knightY) ? <Knight /> : null;

    return (
      <div key={i}
         style={style.SquareWrapper}
         onClick={this.handleSquareClick(x, y)}>
      <Square black={black}>
        {piece}
      </Square>
    </div>
    );
  }

  handleSquareClick= (toX: number, toY: number) => () => moveKnight(toX, toY);

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

const style: Style = {
  Board: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  SquareWrapper: { width: '12.5%', height: '12.5%' }
} 