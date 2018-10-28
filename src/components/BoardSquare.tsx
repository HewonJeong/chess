import * as React from 'react';
import Square from './Square';

interface Props {
  x: number;
  y: number;
}
export default class BoardSquare extends React.Component<Props> {
  render() {
    const { x, y } = this.props;
    const black = (x + y) % 2 === 1;

    return (
      <Square black={black}>
        {this.props.children}
      </Square>
    );
  }
}