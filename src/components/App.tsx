import * as React from 'react';
import Board from './Board';

class App extends React.Component {
  render() {
    return (
      <div style={style.App}>
        <Board knightPosition={[0, 0]} />
      </div>
    );
  }
}

const style = {
  App: { width: 500, height: 500}
}
export default App;
