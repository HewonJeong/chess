
import * as React from 'react';
import { 
  DragSourceConnector,
  DragSourceMonitor,
  DragSource,
  ConnectDragSource
} from 'react-dnd';
import { Piece } from '../constants';

interface Props {
  connectDragSource: ConnectDragSource,
  isDragging: boolean
}

const knightSource = {
  beginDrag(props: any) {
    return {};
  }
};

function collect(connect: DragSourceConnector, monitor: DragSourceMonitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}



class Knight extends React.Component<Props> {
  render() {
    const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <span style={style.Knight(isDragging)}>♘</span>
    );
  }
}
const style = {
  Knight: (isDragging: boolean): React.CSSProperties => ({
    opacity: isDragging ? 0.5 : 1,
    fontSize: 25,
    fontWeight: 'bold',
    cursor: 'move'
  })
}

export default DragSource(Piece.Knight, knightSource, collect)(Knight);

