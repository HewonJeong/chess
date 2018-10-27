import * as React from 'react';
import Board from './Board';

class App extends React.Component {
  render() {
    return (
      <Board knightPosition={[0, 0]} />
    );
  }
}

export default App;
