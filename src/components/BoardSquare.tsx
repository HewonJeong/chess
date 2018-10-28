import * as React from 'react';
import Square from './Square';
import { DropTargetMonitor, ConnectDropTarget, DropTargetSpec, DropTargetConnector, DropTarget } from 'react-dnd';
import { moveKnight, canMoveKnight } from 'src/Game';
import { Piece } from 'src/constants';

interface Props {
  x: number;
  y: number;
  connectDropTarget?: ConnectDropTarget;
  isOver?: boolean;
  canDrop?: boolean;
}

const squareTarget: DropTargetSpec<Props> = {
  canDrop(props) {
    return canMoveKnight(props.x, props.y);
  },
  
  drop(props: Props, monitor: DropTargetMonitor) {
    moveKnight(props.x, props.y);
  }
};

function collect(connect: DropTargetConnector, monitor: DropTargetMonitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class BoardSquare extends React.Component<Props> {

  renderOverlay = (color: string) => <div style={style.overlay(color)} />

  render() {
    const { x, y, connectDropTarget, isOver, canDrop } = this.props;
    const black = (x + y) % 2 === 1;

    return connectDropTarget ? connectDropTarget(
      <div style={style.BoardSquare}>
        <Square black={black}>
          {this.props.children}
        </Square>
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
        {isOver && canDrop && this.renderOverlay('green')}
      </div>
    ) : null;
  }
}

interface IStyle {
  BoardSquare: React.CSSProperties,
  overlay: (color: string) => React.CSSProperties 
}
const style: IStyle = {
  BoardSquare: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  overlay: color => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 1,
    opacity: 0.5,
    backgroundColor: color,
  })
}
export default DropTarget(Piece.Knight, squareTarget, collect)(BoardSquare);