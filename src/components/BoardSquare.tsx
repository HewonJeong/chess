import * as React from 'react';
import Square from './Square';
import { DropTargetMonitor, ConnectDropTarget, DropTargetSpec, DropTargetConnector, DropTarget } from 'react-dnd';
import { moveKnight } from 'src/Game';
import { Piece } from 'src/constants';
import { Style } from 'src/types';

interface Props {
  x: number;
  y: number;
  connectDropTarget?: ConnectDropTarget;
  isOver?: boolean;
}

const squareTarget: DropTargetSpec<Props> = {
  drop(props: Props, monitor: DropTargetMonitor) {
    moveKnight(props.x, props.y);
  }
};

function collect(connect: DropTargetConnector, monitor: DropTargetMonitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class BoardSquare extends React.Component<Props> {
  render() {
    const { x, y, connectDropTarget, isOver } = this.props;
    const black = (x + y) % 2 === 1;

    return connectDropTarget ? connectDropTarget(
      <div style={style.BoardSquare}>
        <Square black={black}>
          {this.props.children}
        </Square>
        {isOver && <div style={style.overed} />
        }
      </div>
    ) : null;
  }
}
const style: Style = {
  BoardSquare: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  overed: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 1,
    opacity: 0.5,
    backgroundColor: 'yellow',
  }
}
export default DropTarget(Piece.Knight, squareTarget, collect)(BoardSquare);