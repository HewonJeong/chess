import * as React from 'react';
import Square from './Square';
import Knight from './Knight';

interface Props {
  knightPosition: number[]
}

export default class Board extends React.Component<Props> {
  render() {
    return (
      <div>
        <Square black={true}>
          <Knight />
        </Square>
      </div>
    );
  }
}