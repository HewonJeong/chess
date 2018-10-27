import * as React from 'react';
import Square from './Square';
import Knight from './Knight';

class App extends React.Component {
  render() {
    return (
      <Square black={true}>
        <Knight />
       </Square>
    );
  }
}

export default App;
